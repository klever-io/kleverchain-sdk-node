# remove all strings that match  '[json_name = "something"]' in the proto file
sed -i '' 's/\[json_name = "[^"]*"\]//g' lib/transaction/proto/*.proto

npx buf generate

#replace instances of typeUrl for type_url in the any.ts file
sed -i '' 's/typeUrl/type_url/g' lib/transaction/proto/google/protobuf/any.ts