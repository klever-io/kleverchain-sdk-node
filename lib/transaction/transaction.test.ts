import { describe, expect, it } from "vitest";
import Transaction, { Contracts, TXContract_ContractType } from ".";
import utils from "../utils";

describe("Transaction", () => {
  it("should be able to create a new Transaction", async () => {
    const tx = new Transaction();

    expect(tx).toBeInstanceOf(Transaction);
  });

  it("should be able to create a new transaction with transfer contract", async () => {
    const enc = new TextEncoder();
    const senderDecoded = await utils.decodeAddress(
      "klv1vq9f7xtazuk9y3n46ukthgf2l30ev2s0qxvs6dfp4f2e76sfu3xshpmjsr"
    );
    const tx = new Transaction({
      Sender: senderDecoded,
      Nonce: 158,
      BandwidthFee: 1000000,
      KAppFee: 500000,
      Version: 1,
      ChainID: enc.encode("100420"),
    });

    const transfer = Contracts.TransferContract.fromPartial({
      ToAddress: await utils.decodeAddress(
        "klv1fpwjz234gy8aaae3gx0e8q9f52vymzzn3z5q0s5h60pvktzx0n0qwvtux5"
      ),
      AssetID: enc.encode("KLV"),
      Amount: 100 * 10 ** 6,
    });

    tx.data.RawData?.Data?.push(enc.encode("KLEVER TEST"));

    tx.addContract(TXContract_ContractType.TransferContractType, transfer);
    tx.addContract(
      TXContract_ContractType.ProposalContractType,
      Contracts.ProposalContract.fromPartial({
        Parameters: {
          10: enc.encode("10"),
        },
        Description: enc.encode("WORKING ON IT next proposal"),
        EpochsDuration: 10,
      })
    );
    tx.addContract(
      TXContract_ContractType.SetITOPricesContractType,
      Contracts.SetITOPricesContract.fromPartial({
        AssetID: enc.encode("DVK-1234"),
        PackInfo: {
          KLV: {
            Packs: [
              {
                Amount: 10,
                Price: 10000,
              },
              {
                Amount: 100,
                Price: 100000,
              },
            ],
          },
          "KUSD-1234": {
            Packs: [
              {
                Amount: 10,
                Price: 2000,
              },
              {
                Amount: 100,
                Price: 20000,
              },
            ],
          },
        },
      })
    );

    await tx.sign(
      "0011223344556677889900112233445566778899001122334455667788991122"
    );

    expect(tx.data.RawData?.Sender).toEqual(senderDecoded);
    expect(tx.data.RawData?.Nonce).toEqual(158);
    expect(tx.data.RawData?.Contract?.length).toEqual(3);
  });

  it("should be able to create a transaction from a decoded hex", async () => {
    const expectedTx = {
      RawData: {
        Nonce: 161,
        Sender: "YAqfGX0XLFJGddcsu6Eq/F+WKg8BmQ01IapVn2oJ5E0=",
        Contract: [
          {
            Parameter: {
              typeUrl: "type.googleapis.com/proto.TransferContract",
              value:
                "CiBIXSEqNUEP3vcxQZ+TgKmimE2IU4ioB8KX08LLLEZ83hIDS0xWGIDC1y8=",
            },
          },
        ],
        Data: ["S0xFVkVSIFRFU1Q="],
        KAppFee: 500000,
        BandwidthFee: 1000000,
        Version: 1,
        ChainID: "MTAwNDIw",
      },
      Signature: [
        "HifozgqUS9GbbROm1hnWvf9RJj9dh2F+ZXkWxUdtbfkzlXXq0KB5IwT9Q06R2iDmg3D/Qfjb2Dz0YHxnzqe1DA==",
      ],
    };

    const tx = new Transaction();

    tx.fromHex(
      "0aa30108a1011220600a9f197d172c524675d72cbba12afc5f962a0f01990d3521aa559f6a09e44d325c125a0a2a747970652e676f6f676c65617069732e636f6d2f70726f746f2e5472616e73666572436f6e7472616374122c0a20485d212a35410fdef731419f9380a9a2984d885388a807c297d3c2cb2c467cde12034b4c561880c2d72f520b4b4c45564552205445535468a0c21e70c0843d780182010631303034323012401e27e8ce0a944bd19b6d13a6d619d6bdff51263f5d87617e657916c5476d6df9339575ead0a0792304fd434e91da20e68370ff41f8dbd83cf4607c67cea7b50c"
    );

    expect(tx.toJSON()).toEqual(JSON.stringify(expectedTx));
  });
});
