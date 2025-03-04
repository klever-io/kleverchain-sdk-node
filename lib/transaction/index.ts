import * as ed from "@noble/ed25519";
import * as blake from "blakejs";

import { decodeContract } from "./contracts";

import utils from "../utils";
import * as proto from "./../../google/protobuf/any";
import * as Contracts from "./proto/contracts";

import {
  Transaction as T,
  TXContract,
  TXContract_ContractType,
  Transaction_Raw,
} from "./proto/transaction";

export { Contracts, TXContract, TXContract_ContractType, proto };

class Transaction {
  data: T;

  constructor(
    data?:
      | any[]
      | {
          Nonce?: number;
          Sender?: Uint8Array;
          Contract?: TXContract[];
          PermissionID?: number;
          Data?: Uint8Array[];
          KAppFee?: number;
          BandwidthFee?: number;
          Version?: number;
          ChainID?: Uint8Array;
        }
  ) {
    this.data = T.fromPartial({ RawData: data });
  }

  addContract = async (
    type: TXContract_ContractType,
    contract: any
  ): Promise<void> => {
    const p = anyMarshal(type, contract);
    const txContract = TXContract.fromPartial({ Type: type, Parameter: p });

    this.data.RawData?.Contract?.push(txContract);
  };

  signMessage = async (
    message: string,
    privateKey: string
  ): Promise<Uint8Array> => {
    const signature = await ed.sign(message, privateKey);
    const parsedSignature = Buffer.from(signature);
    return parsedSignature;
  };

  computeHash = (): string => {
    try {
      // marshal transaction
      const bytes = Transaction_Raw.encode(this.data.RawData!).finish();
      const rawTransaction = utils.toHex(bytes);
      // compute hash
      const hash = blake.blake2b(bytes, undefined, 32);
      return utils.toHex(hash);
    } catch (e) {
      throw e;
    }
  };

  sign = async (privateKey: string): Promise<Boolean> => {
    let hash: string;
    try {
      hash = this.computeHash();
    } catch (e) {
      console.error(e);
      return false;
    }

    const signature = await this.signMessage(hash, privateKey);
    // add signature
    this.data.Signature?.push(signature);

    return true;
  };

  hex = (): string => {
    const bytes = T.encode(this.data).finish();
    const rawTransaction = utils.toHex(bytes);

    return rawTransaction;
  };

  fromHex = (hex: string): void => {
    const bytes = utils.fromHex(hex);
    const rawTransaction = T.decode(bytes);
    this.data = T.fromPartial(rawTransaction);
  };

  toJSON = (): string => {
    const j = T.toJSON(this.data);
    return JSON.stringify(j);
  };

  decode = (): string => {
    const enc = new TextDecoder();

    const rawTX = this.data.RawData!;
    const decodedTX: any = {
      Hash: this.computeHash(),
      BlockNum: this.data.Block,
      Sender: utils.encodeAddress(rawTX.Sender!),
      Nonce: rawTX.Nonce,
      PermissionID: rawTX.PermissionID,
      Data: [],
      KAppFee: rawTX.KAppFee,
      BandwidthFee: rawTX.BandwidthFee,
      Status: this.data.Block ? "on-chain" : "pending",
      Result: this.data.Result,
      ResultCode: this.data.ResultCode,
      Version: rawTX.Version,
      ChainID: enc.decode(rawTX.ChainID!),
      Signature: [],
      //Receipts
      Contracts: [],
    };

    rawTX.Data?.forEach((d) => {
      decodedTX.Data.push(enc.decode(d));
    });
    this.data.Signature?.forEach((s) => {
      decodedTX.Signature.push(utils.toHex(s));
    });
    rawTX.Contract?.forEach((txContract) => {
      decodedTX.Contracts.push({
        Type: txContract.Type,
        Contract: decodeContract(txContract.Type, txContract.Parameter),
      });
    });

    return JSON.stringify(decodedTX);
  };

  toBroadcast = (): any => {
    return T.toJSON(this.data);
  };
}

const anyMarshal = (
  type: TXContract_ContractType,
  contract: any
): proto.Any => {
  var typeUrl = "type.googleapis.com/proto.";
  var data: Uint8Array;

  switch (type) {
    case TXContract_ContractType.TransferContractType:
      data = Contracts.TransferContract.encode(contract).finish();
      typeUrl += "TransferContract";
      break;
    case TXContract_ContractType.CreateAssetContractType:
      data = Contracts.CreateAssetContract.encode(contract).finish();
      typeUrl += "CreateAssetContract";
      break;
    case TXContract_ContractType.CreateValidatorContractType:
      data = Contracts.CreateValidatorContract.encode(contract).finish();
      typeUrl += "CreateValidatorContract";
      break;
    case TXContract_ContractType.ValidatorConfigContractType:
      data = Contracts.ValidatorConfigContract.encode(contract).finish();
      typeUrl += "ValidatorConfigContract";
      break;
    case TXContract_ContractType.FreezeContractType:
      data = Contracts.FreezeContract.encode(contract).finish();
      typeUrl += "FreezeContract";
      break;
    case TXContract_ContractType.UnfreezeContractType:
      data = Contracts.UnfreezeContract.encode(contract).finish();
      typeUrl += "UnfreezeContract";
      break;
    case TXContract_ContractType.DelegateContractType:
      data = Contracts.DelegateContract.encode(contract).finish();
      typeUrl += "DelegateContract";
      break;
    case TXContract_ContractType.UndelegateContractType:
      data = Contracts.UndelegateContract.encode(contract).finish();
      typeUrl += "UndelegateContract";
      break;
    case TXContract_ContractType.WithdrawContractType:
      data = Contracts.WithdrawContract.encode(contract).finish();
      typeUrl += "WithdrawContract";
      break;
    case TXContract_ContractType.ClaimContractType:
      data = Contracts.ClaimContract.encode(contract).finish();
      typeUrl += "ClaimContract";
      break;
    case TXContract_ContractType.UnjailContractType:
      data = Contracts.UnjailContract.encode(contract).finish();
      typeUrl += "UnjailContract";
      break;
    case TXContract_ContractType.AssetTriggerContractType:
      data = Contracts.AssetTriggerContract.encode(contract).finish();
      typeUrl += "AssetTriggerContract";
      break;
    case TXContract_ContractType.SetAccountNameContractType:
      data = Contracts.SetAccountNameContract.encode(contract).finish();
      typeUrl += "SetAccountNameContract";
      break;
    case TXContract_ContractType.ProposalContractType:
      data = Contracts.ProposalContract.encode(contract).finish();
      typeUrl += "ProposalContract";
      break;
    case TXContract_ContractType.VoteContractType:
      data = Contracts.VoteContract.encode(contract).finish();
      typeUrl += "VoteContract";
      break;
    case TXContract_ContractType.ConfigITOContractType:
      data = Contracts.ConfigITOContract.encode(contract).finish();
      typeUrl += "ConfigITOContract";
      break;
    case TXContract_ContractType.SetITOPricesContractType:
      data = Contracts.SetITOPricesContract.encode(contract).finish();
      typeUrl += "SetITOPricesContract";
      break;
    case TXContract_ContractType.BuyContractType:
      data = Contracts.BuyContract.encode(contract).finish();
      typeUrl += "BuyContract";
      break;
    case TXContract_ContractType.SellContractType:
      data = Contracts.SellContract.encode(contract).finish();
      typeUrl += "SellContract";
      break;
    case TXContract_ContractType.CancelMarketOrderContractType:
      data = Contracts.CancelMarketOrderContract.encode(contract).finish();
      typeUrl += "CancelMarketOrderContract";
      break;
    case TXContract_ContractType.CreateMarketplaceContractType:
      data = Contracts.CreateMarketplaceContract.encode(contract).finish();
      typeUrl += "CreateMarketplaceContract";
      break;
    case TXContract_ContractType.ConfigMarketplaceContractType:
      data = Contracts.ConfigMarketplaceContract.encode(contract).finish();
      typeUrl += "ConfigMarketplaceContract";
      break;
    case TXContract_ContractType.UpdateAccountPermissionContractType:
      data =
        Contracts.UpdateAccountPermissionContract.encode(contract).finish();
      typeUrl += "UpdateAccountPermissionContract";
      break;
    case TXContract_ContractType.DepositContractType:
      data = Contracts.DepositContract.encode(contract).finish();
      typeUrl += "DepositContract";
      break;
    case TXContract_ContractType.ITOTriggerContractType:
      data = Contracts.ITOTriggerContract.encode(contract).finish();
      typeUrl += "ITOTriggerContract";
      break;
    case TXContract_ContractType.SmartContractType:
      data = Contracts.SmartContract.encode(contract).finish();
      typeUrl += "SmartContract";
      break;
    default:
      throw "invalid transaction type";
  }

  return proto.Any.fromPartial({
    typeUrl: typeUrl,
    value: data,
  });
};

export default Transaction;
