import { describe, expect, it } from "vitest";
import utils, { calculateFees } from ".";
import { TXContract_ContractType } from "../transaction";

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
