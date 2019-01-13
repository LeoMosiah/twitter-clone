import { all, takeLatest } from "redux-saga/effects";
import { GET_USER, getUserSaga } from "./userSagas";
import { GET_TWEETS, getTweetsSaga } from "./tweetsSaga";

export function* rootSaga() {
  yield all([
    takeLatest(GET_USER, getUserSaga),
    takeLatest(GET_TWEETS, getTweetsSaga)
  ]);
}
