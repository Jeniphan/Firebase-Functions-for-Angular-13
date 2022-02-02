import * as functions from "firebase-functions";

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
export const helloWorld = functions.https.onRequest((request, response) => {
  functions.logger.info("Hello logs!", { structuredData: true });
  response.send("Hello from Firebase!");
});

// const universal = require(`${process.cwd()}/dist/myapp/server`).app;
// const mainjsFile = require(__dirname + './dist/myapp/server/main.js');
// export const ssr = functions.https.onRequest(mainjsFile.app());
