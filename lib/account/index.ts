import {
  IBroadcastResponse,
  IContractRequest,
  ITransaction,
  ITxOptionsRequest,
} from "@klever/kleverweb/dist/types/dtos";
import {
  IAccountInfo,
  IAccountResponse,
  INodeAccountResponse,
} from "../types/dtos";
import utils from "../utils";

import * as ed from "@noble/ed25519";

import KleverWeb from "@klever/kleverweb";
import fs from "fs";

class Account {
  private privateKey!: string;
  private address!: string;
  private balance!: number;
  private nonce!: number;
  ready: Promise<void>;

  constructor(privateKey?: string) {
    if (privateKey) {
      this.privateKey = privateKey;
      this.ready = this.init(privateKey);
    } else {
      this.ready = this.init();
    }
  }

  private async init(privateKey?: string) {
    try {
      if (privateKey) {
        this.address = await utils.getAddressFromPrivateKey(this.privateKey);
      } else {
        const keyPair = await utils.generateKeyPair();
        this.privateKey = keyPair.privateKey;
        this.address = keyPair.address;
      }
      await this.sync();
    } catch (e) {
      this.address = "";
      this.balance = 0;
      this.nonce = 0;

      console.error(e);
      throw e;
    }
  }

  getBalance(): number {
    return this.balance;
  }

  getNonce(): number {
    return this.nonce;
  }
  getAddress(): string {
    return this.address;
  }

  async sync() {
    const addressReq = await fetch(
      `${utils.getProviders().node}/address/${this.address}`,
      {
        method: "GET",
      }
    );

    const addressRes: INodeAccountResponse = await addressReq.json();

    this.balance = addressRes.data.account.Balance ?? 0;
    this.nonce = addressRes.data.account.Nonce ?? 0;
  }

  async getInfo(): Promise<IAccountInfo> {
    try {
      const addressReq = await fetch(
        `${utils.getProviders().node}/address/${this.address}`,
        {
          method: "GET",
        }
      );

      const addressRes: IAccountResponse = await addressReq.json();
      return addressRes.data.account;
    } catch (e) {
      throw e;
    }
  }

  buildTransaction = async (
    contracts: IContractRequest[],
    txData?: string[],
    options?: ITxOptionsRequest
  ): Promise<ITransaction> => {
    const optionsWithDefaults = {
      ...options,
      sender: options?.sender || this.address,
      nonce: options?.nonce || this.nonce,
      provider: options?.provider || utils.getProviders(),
    };

    return await new KleverWeb().buildTransaction(
      contracts,
      txData,
      optionsWithDefaults
    );
  };

  signMessage = async (message: string): Promise<string> => {
    const signature = await ed.sign(message, this.privateKey);

    const parsedSignature = Buffer.from(signature).toString("base64");

    return parsedSignature;
  };

  signTransaction = async (tx: ITransaction): Promise<ITransaction> => {
    let hash;

    try {
      const req = await fetch(
        `${utils.getProviders().node}/transaction/decode`,
        {
          method: "POST",
          body: JSON.stringify(tx),
        }
      );

      const res = await req.json();
      hash = res.data.tx.hash;
    } catch (e) {
      console.error(e);
    }
    const signature = await this.signMessage(hash);

    const signedTx = {
      ...tx,
      Signature: [signature],
    };

    return signedTx;
  };

  quickSend = async (
    contracts: IContractRequest[],
    txData?: string[],
    options?: ITxOptionsRequest
  ): Promise<IBroadcastResponse> => {
    const tx = await this.buildTransaction(contracts, txData, options);

    const signedTx = await this.signTransaction(tx);

    const res = await utils.broadcastTransactions([signedTx]);

    if (res?.error) throw res?.error;

    if (!options?.nonce) {
      this.nonce = this.nonce + 1;
    }

    return res;
  };

  downloadAsPem = async (path?: string) => {
    path = path || `./${this.address.slice(-5)}.pem`;

    const publicKey = await ed.getPublicKey(this.privateKey);

    const pemString = Buffer.from(
      Buffer.from(this.privateKey).toString() +
        Buffer.from(publicKey).toString("hex")
    ).toString("base64");

    const pemFormattedString =
      pemString.slice(0, 64) +
      "\n" +
      pemString.slice(64, 128) +
      "\n" +
      pemString.slice(128);

    const pem = `-----BEGIN PRIVATE KEY for ${this.address}-----
${pemFormattedString}
-----END PRIVATE KEY for ${this.address}-----`;

    fs.writeFile(`${path}`, pem, (err) => {
      if (err) throw err;
    });
  };

  validateSignature = (
    message: string,
    signature: string
  ): Promise<boolean> => {
    return utils.validateSignature(message, signature, this.address);
  };

  broadcastTransactions = utils.broadcastTransactions;
}

export default Account;
