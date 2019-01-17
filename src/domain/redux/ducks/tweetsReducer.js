import _ from "lodash";

const INITIAL_STATE = {};
export const RECEIVE_TWEETS = "tweet/receive";
export const ADD_TWEET = "tweet/add";

export const tweetsSelector = state => state.tweets;

export const receiveTweetsAction = tweets => ({
  type: RECEIVE_TWEETS,
  tweets
});

export const addTweetAction = tweet => ({
  type: ADD_TWEET,
  tweet
});

const handleReceiveTweets = (state, action) => {
  let clonedState = _.cloneDeep(state);
  clonedState = action.tweets;
  return clonedState;
};

const handleAddTweet = (state, action) => {
  let clonedState = _.cloneDeep(state);
  clonedState[action.tweet.id] = action.tweet;
  return clonedState;
};

export const tweetsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case RECEIVE_TWEETS:
      return handleReceiveTweets(state, action);
    case ADD_TWEET:
      return handleAddTweet(state, action);
    default:
      return state;
  }
};
