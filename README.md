# Sample SDK

This sample SDK is based on a [OpenAPI generator](https://openapi-generator.tech/), this generator reads an Open API file to create the SDK. The Swagger is generated using the [Swagger Generator](https://github.com/swaggo/swag) for a Golang server (using [Echo](https://echo.labstack.com/))

This sample SDK is the simple path to an SDK but is possible to improve this sample to handle any issues, like authentication, API throttling, and others.

**NOTE**: The generator is uses [Mustache](https://mustache.github.io/) to create SDK. This can be made in any language using the same concept whit required improvements.

## Folders

- `sdk_consumer`: use the `sdk_ts` to talk whit the server
- `sdk_ts`: the Typescript SDK (NPM to operate)
- `server`: the golang server (Makefile to operate)

### Requirements

Docker news versions that support docker compose.

### Runs

The client will call the server and print the output on terminal 5 times, every 3 seconds.

#### To start

```shell
docker compose up
```

#### To finish

```shell
docker compose down
```
