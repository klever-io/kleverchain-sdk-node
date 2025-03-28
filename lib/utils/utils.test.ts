import { describe, expect, it } from "vitest";
import utils, { calculateFees } from ".";
import { TXContract_ContractType } from "../transaction";
import { ABITypeMap } from "../types/abi";


describe("Utils :", () => {
  it("should be able to generate a privateKey/address pair", async () => {
    const keyPair = await utils.generateKeyPair();

    expect(keyPair.privateKey).toBeTruthy();
    expect(keyPair.address).toBeTruthy();
  });

  it("should be able to set different providers", async () => {
    const providers = {
      node: "nodeProvider",
      api: "apiProvider",
    };

    utils.setProviders(providers);

    expect(utils.getProviders()).toEqual(providers);
  });

  it("should be able to calculate fees", async () => {
    const fees = await calculateFees(
      TXContract_ContractType.TransferContractType,
      {
        data: "Some data",
      }
    );

    expect(fees?.BandwidthFee).toBeTruthy();
    expect(fees?.KAppFee).toBeTruthy();
    expect(fees?.TotalFee).toBeTruthy();
  });
});

describe("getJSType", () => {
  it('should return "number" for ABI types mapped to number', () => {
    const numberTypes = ABITypeMap.number;
    numberTypes.forEach((type) => {
      expect(utils.getJSType(type)).toEqual("number");
    });
  });

  it('should return "string" for ABI types mapped to string', () => {
    const stringTypes = ABITypeMap.string;
    stringTypes.forEach((type) => {
      expect(utils.getJSType(type)).toEqual("string");
    });
  });

  it('should return "array" for ABI types mapped to array', () => {
    const arrayTypes = ABITypeMap.array;
    arrayTypes.forEach((type) => {
      expect(utils.getJSType(type)).toEqual("array");
    });
  });

  it('should return "checkbox" for ABI type "bool"', () => {
    expect(utils.getJSType("bool")).toEqual("checkbox");
  });

  it("should return the original ABI type if it does not match any key in ABITypeMap", () => {
    const unknownType = "customType";
    expect(utils.getJSType(unknownType)).toEqual(unknownType);
  });
});