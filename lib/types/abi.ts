export const ABITypeMap = {
  number: [
    "BigUint",
    "BigInt",
    "u8",
    "u16",
    "u32",
    "u64",
    "i8",
    "i16",
    "i32",
    "i64",
    "usize",
    "isize",
  ].map((type) => type.toLowerCase()),
  string: [
    "TokenIdentifier",
    "String",
    "Address",
    "Bytes",
    "Hash",
    "PublicKey",
    "Signature",
    "ManagedBuffer",
    "BoxedBytes",
    "&[u8]",
    "Vec<u8>",
    "&str",
    "bytes",
    "ManagedVec",
  ].map((type) => type.toLowerCase()),
  array: ["Tuple", "Array", "List"].map((type) => type.toLowerCase()),
  checkbox: ["bool"],
  variadic: ["multi", "variadic"].map((type) => type.toLowerCase()),
};

export type ABITypeJSON = {
  types: {
    [key: string]: {
      type: string;
      fields: { name: string; type: string }[];
    };
  };
};