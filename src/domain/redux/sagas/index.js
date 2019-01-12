import { all, takeLatest } from "redux-saga/effects";
import { RECEIVE_TWEETS } from "../ducks/tweetsReducer";
import { SET_USER } from "../ducks/userReducer";
import { setUserSaga } from "./userSagas";

export function* rootSaga() {
  yield [takeLatest(SET_USER, setUserSaga)];
}
