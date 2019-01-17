import { call, put } from "redux-saga/effects";
import { getTweets } from "../../../data/api/api";
import { receiveTweetsAction } from "../ducks/tweetsReducer";
import { parseTweets } from '../../useCases/tweets';

export const GET_TWEETS = "saga/getTweets";

export const getTweetsAction = () => ({
  type: GET_TWEETS
});

export function* getTweetsSaga() {
  try {
    const tweetsObject = yield call(getTweets);
    const tweetsEntities = parseTweets(tweetsObject);
    yield put(receiveTweetsAction(tweetsEntities));
  } catch (error) {
    console.log(error);
  }
}
