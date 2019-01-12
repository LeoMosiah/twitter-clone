import { call, put } from "redux-saga/effects";
import { getTweets } from "../../../data/api/api";
import { receiveTweetsAction } from "../ducks/tweetsReducer";

export const GET_TWEETS = "saga/getTweets";

export const getTweetsAction = () => ({
  type: GET_TWEETS
});

export function* getTweetsSaga() {
  try {
    const tweets = yield call(getTweets);
    yield put(receiveTweetsAction(tweets));
  } catch (error) {
    console.log(error);
  }
}
