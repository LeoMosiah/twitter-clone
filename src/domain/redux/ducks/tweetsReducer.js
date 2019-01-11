import _ from "lodash";

const INITIAL_STATE = {};
const RECEIVE_TWEETS = 'tweet/receive';
const ADD_TWEET = 'tweet/add';
const REMOVE_TWEET = 'tweet/remove';
const UPDATE_TWEET = 'tweet/update';

export const tweetsSelector = (state) => state.tweets ;

export const receiveTweetsAction = (tweets) => ({
  type: RECEIVE_TWEETS,
  tweets
});

export const addTweetAction = (tweet) => ({
  type: ADD_TWEET,
  tweet
});

export const removeTweetAction = (id) => ({
  type: REMOVE_TWEET,
  id
});

export const updateTweetAction = (tweet) => ({
  type: UPDATE_TWEET,
  tweet
});

const handleReceiveTweets = (state, action) => {
 let clonedState = _.cloneDeep(state);
  clonedState = action.tweets;
  return clonedState
};

const handleAddTweet = (state, action) => {
  let clonedState = _.cloneDeep(state);
  clonedState[action.tweet.id] = action.tweet;
  return clonedState;
};

const handleUpdateTweet = (state, action) => {
  let clonedState = _.cloneDeep(state);
  clonedState[action.tweet.id] = action.tweet;
  return clonedState;
};

const handleRemoveTweet = (state, action) => {
  const clonedState = _.cloneDeep(state);
  delete clonedState[action.id];
  return clonedState;
};

export const tweetsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case (RECEIVE_TWEETS):
      return handleReceiveTweets(state, action);
    case (ADD_TWEET):
      return handleAddTweet(state, action);
    case (UPDATE_TWEET):
      return handleUpdateTweet(state, action);
    case (REMOVE_TWEET):
      return handleRemoveTweet(state, action);
    default:
      return state
  }
};