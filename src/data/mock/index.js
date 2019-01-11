const axios = require("axios");
const MockAdapter = require("axios-mock-adapter");

const mock = new MockAdapter(axios);

mock.onGet("/:user/tweets").reply(200, {
  id: {
    body: "body 1"
  },
  id: {
    body: "body 2"
  }
});
