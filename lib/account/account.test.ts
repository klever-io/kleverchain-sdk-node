import { describe, expect, it } from "vitest";
import Account from ".";
import utils from "../utils";
import { TransactionType } from "@klever/kleverweb/dist/types/enums";

describe("Account", () => {
  it("should be able to create a new account", async () => {
    const account = new Account();

    expect(account).toBeInstanceOf(Account);
  });

  it("should be able to create a new account that has an address", async () => {
    const account = new Account();
    await account.ready;

    expect(account.getAddress()).toBeTruthy();
  });

  it("should be able to build a transaction", async () => {
    utils.setProviders({
      api: "https://api.testnet.klever.finance",
      node: "https://node.testnet.klever.finance",
    });

    const privateKey = process.env.PRIVATE_KEY;

    const transferPayload = {
      amount: 1 * 10 ** 6,
      receiver:
        "klv1nnu8d0mcqnxunqyy5tc7kj7vqtp4auy4a24gv35fn58n2qytl9xsx7wsjl",
      kda: "KLV",
    };

    const tx = {
      type: TransactionType.Transfer,
      payload: transferPayload,
    };

    const account = new Account(privateKey);
    await utils.accountsReady([account]);

    const res1 = await account.buildTransaction([tx]);

    expect(res1?.RawData).toBeTruthy();
  });
});
