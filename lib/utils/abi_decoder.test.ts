import {
  decode,
  decodeList,
  decodeStruct,
  decodeValue,
} from "./abi_decoder";

import { describe, it, expect } from "vitest";

describe("decodeStruct: should decode simple structure", () => {
  const mockAbi = JSON.stringify({
    types: {
      Teste: {
        type: "struct",
        fields: [
          { name: "title", type: "bytes" },
          { name: "ok", type: "bool" },
          { name: "u32_val", type: "u32" },
          { name: "u64_val", type: "u64" },
          { name: "biguint_val", type: "BigUint" },
          { name: "address_val", type: "Address" },
          { name: "token_val", type: "TokenIdentifier" },
        ],
      },
    },
  });

  const mockHexValue =
    "000000055465737465010000000a0000000000000014000000011e485d212a35410fdef731419f9380a9a2984d885388a807c297d3c2cb2c467cde000000034b4c56";
  const mockType = "Teste";

  it("should decode the hex value", () => {
    const result = decodeStruct(mockHexValue, mockType, mockAbi);

    expect(result.title).toBe("Teste");
    expect(result.ok).toBe(true);
    expect(result.u32_val).toBe(10);
    expect(result.u64_val).toBe(BigInt(20));
    expect(result.biguint_val).toBe(BigInt(30));
    expect(result.address_val).toBe(
      "klv1fpwjz234gy8aaae3gx0e8q9f52vymzzn3z5q0s5h60pvktzx0n0qwvtux5"
    );
    expect(result.token_val).toBe("KLV");
  });
});
