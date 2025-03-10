PROTOC_GEN_TS_PATH="node_modules/.bin/protoc-gen-ts_proto"

OUT_DIR="."

# remove all strings that match  '[json_name = "something"]' in the proto file
sed -i '' 's/\[json_name = "[^"]*"\]//g' lib/transaction/proto/*.proto

protoc \
    --proto_path=. \
    --plugin="protoc-gen-ts=${PROTOC_GEN_TS_PATH}" \
    --js_out="import_style=commonjs,binary:${OUT_DIR}" \
    --ts_opt="esModuleInterop=true,useOptionals=all,outputJsonMethods=true,outputSchema=true,initializeFieldsAsUndefined=true,useNumericEnumForJson=true:${OUT_DIR}" \
    --ts_out="${OUT_DIR}" \
    lib/transaction/proto/*.proto