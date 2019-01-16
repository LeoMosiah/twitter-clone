const functions = require("firebase-functions");
const app = require('./src/app');

module.exports = {
  helloWorld: functions.https.onRequest((request, response) => {
    response.send("Hello from Firebase!");
  }),
  app: functions.https.onRequest(app)
};
