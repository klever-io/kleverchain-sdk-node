import { Account, IProvider, ITransaction, TXContract_ContractType } from "..";

import * as ed from "@noble/ed25519";

import { IBroadcastResponse, IFees } from "@klever/kleverweb/dist/types/dtos";
import { bech32 } from "bech32";
import { IDecodedTransaction } from "../types/dtos";
import { IParsedNetworkParam } from "../types/proposals";
import { paramContractMap, proposalsMap } from "./proposals";
import { BASE_TX_SIZE, KLV_PRECISION } from "./globals";

const decodeAddress = async (address: string): Promise<Uint8Array> => {
  const decoded = bech32.decode(address);
  return Uint8Array.from(bech32.fromWords(decoded.words));
};

const encodeAddress = (address: Uint8Array): string => {
  const encoded = bech32.encode("klv", bech32.toWords(address));
  return encoded;
};

const toHex = (data: Uint8Array): string => {
  return Buffer.from(data).toString("hex");
};

const fromHex = (hex: string): Uint8Array => {
  return Buffer.from(hex, "hex");
};

const validateAddress = async (address: string): Promise<boolean> => {
  try {
    const decoded = bech32.decode(address);
    const decodedBytes = bech32.fromWords(decoded.words);
    if (decoded.prefix !== "klv" || decodedBytes.length !== 32) {
      return false;
    }
    return true;
  } catch (e) {
    return false;
  }
};

const getAddressFromPrivateKey = async (
  privateKey: string
): Promise<string> => {
  const publicKey = await ed.getPublicKey(privateKey);
  const address = bech32.encode("klv", bech32.toWords(publicKey));

  return address;
};

const generateKeyPair = async (): Promise<{
  privateKey: string;
  address: string;
}> => {
  const privateKey = Buffer.from(ed.utils.randomPrivateKey()).toString("hex");
  const publicKey = await ed.getPublicKey(privateKey);

  const address = bech32.encode("klv", bech32.toWords(publicKey));

  return {
    privateKey,
    address,
  };
};

const getProviders = (): IProvider => {
  return (
    globalThis.kleverProviders || {
      node: "https://node.mainnet.klever.finance",
      api: "https://api.mainnet.klever.finance",
    }
  );
};

const setProviders = (providers: IProvider) => {
  globalThis.kleverProviders = providers;
  return;
};

const broadcastTransactions = async (
  txs: ITransaction[] | string[]
): Promise<IBroadcastResponse> => {
  const res = await fetch(`${getProviders().node}/transaction/broadcast`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ txs }),
  });

  return await res.json();
};

const decodeTransaction = async (
  tx: ITransaction
): Promise<IDecodedTransaction> => {
  const req = await fetch(`${getProviders().node}/transaction/decode`, {
    method: "POST",
    body: JSON.stringify(tx),
  });

  const res = await req.json();
  if (res?.error) throw res?.error;

  return res.data;
};

const transactionsProcessed = async (
  txs: Promise<IBroadcastResponse>[],
  tries = 10
): Promise<IDecodedTransaction[]> => {
  const res = await Promise.all(txs);

  const hashes: string[] = [];
  res.forEach((tx) => {
    hashes.push(...tx.data.txsHashes);
  });

  const processedRequest: Promise<IDecodedTransaction>[] = hashes.map(
    async (hash) => {
      const array = Array.from({ length: tries }, (_, i) => i);
      let error = "";

      for (const i of array) {
        const fetchPromise = fetch(`${getProviders().api}/transaction/${hash}`);

        const result = await fetchPromise;
        const data = await result.json();

        if (data && !data.error) {
          return data.data;
        } else if (data.error) {
          error = data;
        }

        await new Promise((resolve) => setTimeout(resolve, 1000));
      }
      throw error;
    }
  );

  return await Promise.all(processedRequest);
};

const accountsReady = async (accounts: Account[]): Promise<void> => {
  const promises: Promise<void>[] = [];

  accounts.forEach((account) => {
    promises.push(account.ready);
  });

  await Promise.all(promises);
};

const validateSignature = async (
  message: string,
  signature: string,
  address: string
): Promise<boolean> => {
  const publicKey = await decodeAddress(address);

  const response = await ed.verify(signature, message, publicKey);

  return response;
};

export const reverseHexBytes = (hex: string): string => {
  let paddedHex = hex;
  if (paddedHex.length % 2 !== 0) {
    paddedHex = "0" + paddedHex;
  }

  let newHex = "";
  for (let i = 0; i < paddedHex.length; i += 2) {
    newHex = paddedHex.slice(i, i + 2) + newHex;
  }

  return newHex;
};

export const parseAccountPermissionBinaryOperations = (
  binary: string
): string => {
  const hex = Number(`0b${binary}`).toString(16);
  return reverseHexBytes(hex);
};

export const calculateFees = async (
  contractType: TXContract_ContractType,
  {
    data = "",
    network = "mainnet",
    networkParams = [] as IParsedNetworkParam[],
  }
): Promise<IFees> => {
  if (!networkParams.length) {
    networkParams = await getNetworkParams(network);
  }

  const kappFee = getKappFee(contractType, networkParams);

  const bandwidthFee = getBandwidthFee(data, networkParams);

  const fees: IFees = {
    BandwidthFee: bandwidthFee,
    KAppFee: kappFee,
    TotalFee: kappFee + bandwidthFee,
  };

  return fees;
};

export const getNetworkParams = async (
  network = "mainnet"
): Promise<IParsedNetworkParam[]> => {
  const res = await fetch(
    `https://api.${network}.klever.finance/v1.0/network/network-parameters`,
    {
      method: "GET",
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch network parameters");
  }

  const {
    data: { parameters: networkParams },
  } = await res.json();

  let parsedNetworkParams = {} as IParsedNetworkParam[];

  if (networkParams) {
    parsedNetworkParams = Object.keys(proposalsMap).map((key, index) => {
      const currentValue = networkParams[key]?.value;
      return {
        number: index,
        currentValue,
        parameterLabel: key,
      };
    });
  }

  return parsedNetworkParams;
};

export const getKappFee = (
  contractType: TXContract_ContractType,
  networkParams: IParsedNetworkParam[]
): number => {
  return Number(
    networkParams?.find(
      (item) =>
        item.parameterLabel ===
        paramContractMap[contractType as keyof typeof paramContractMap]
    )?.currentValue
  );
};

export const getBandwidthFee = (
  data: string,
  networkParams: IParsedNetworkParam[]
): number => {
  const dataLength = data.length;
  const bandwidthFeeMultiplier = Number(
    networkParams?.find((item) => item.parameterLabel === "FeePerDataByte")
      ?.currentValue
  );

  const bandwidthFee = (dataLength + BASE_TX_SIZE) * bandwidthFeeMultiplier;

  return bandwidthFee;
};

const utils = {
  getAddressFromPrivateKey,
  generateKeyPair,
  getProviders,
  setProviders,
  broadcastTransactions,
  decodeTransaction,
  transactionsProcessed,
  accountsReady,
  decodeAddress,
  encodeAddress,
  toHex,
  fromHex,
  validateSignature,
  validateAddress,
  calculateFees,
};

export default utils;
