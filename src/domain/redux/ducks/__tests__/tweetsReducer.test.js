import {
  addTweetAction,
  receiveTweetsAction,
  tweetsReducer
} from "../tweetsReducer";

describe("Tweets Reducer", function() {
  it("should get tweets from database and add to the store", function() {
    const initialState = {};

    const tweetsOnDb = {
      "id 1": {
        id: "id 1",
        title: "title 1",
        body: "body 1"
      },
      "id 2": {
        id: "id 2",
        title: "title 2",
        body: "body 2"
      },
      "id 3": {
        id: "id 3",
        title: "title 3",
        body: "body 3"
      }
    };

    const expectedState = {
      "id 1": {
        id: "id 1",
        title: "title 1",
        body: "body 1"
      },
      "id 2": {
        id: "id 2",
        title: "title 2",
        body: "body 2"
      },
      "id 3": {
        id: "id 3",
        title: "title 3",
        body: "body 3"
      }
    };

    expect(
      tweetsReducer(initialState, receiveTweetsAction(tweetsOnDb))
    ).toEqual(expectedState);
  });

  it("should add a tweet to the store", function() {
    const initialState = {
      "id 1": {
        id: "id 1",
        title: "title 1",
        body: "body 1"
      },
      "id 2": {
        id: "id 2",
        title: "title 2",
        body: "body 2"
      }
    };

    const tweet = {
      id: "id 3",
      title: "title 3",
      body: "body 3"
    };

    const expectedState = {
      "id 1": {
        id: "id 1",
        title: "title 1",
        body: "body 1"
      },
      "id 2": {
        id: "id 2",
        title: "title 2",
        body: "body 2"
      },
      "id 3": {
        id: "id 3",
        title: "title 3",
        body: "body 3"
      }
    };

    expect(tweetsReducer(initialState, addTweetAction(tweet))).toEqual(
      expectedState
    );
  });
});
