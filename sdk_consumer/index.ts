import { DefaultApi, Configuration } from "sdk_ts/dist";

function sleep(ms: any) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const apiInstance = new DefaultApi(
  new Configuration({
    // basePath: "http://localhost:3000/api/v1",
  })
);

console.log("start client");

async function demo() {
  for (let i = 0; i < 5; i++) {
    apiInstance
      .jobsGet()
      .then((response: any) => {
        console.log(
          "API called successfully: " + JSON.stringify(response.data)
        );
      })
      .catch((error: any) => console.error(error));

    await sleep(i * 3000);
  }
  console.log("Done");
}

demo();
