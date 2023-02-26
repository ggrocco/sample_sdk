#!/bin/sh
docker run --rm \
  -v ${PWD}:/local openapitools/openapi-generator-cli generate \
  -i /local/server/docs/swagger.json \
  -g typescript-axios \
  -o /local/sdk_ts \
  --additional-properties=npmName=sdk_ts