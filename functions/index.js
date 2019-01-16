const functions = require("firebase-functions");

// Create and Deploy Your First Cloud Functions
// https://firebase.google.com/docs/functions/write-firebase-functions

module.exports = {
  helloWorld: functions.https.onRequest((request, response) => {
    response.send("Hello from Firebase!");
  }),
  express: functions.https.onRequest((request, response) => {
    response.send("Hello from eduardo!");
  })
};
