import { getUser } from "../../../data/api/api";
import { setUserAction } from "../ducks/userReducer";
import { call, put } from "redux-saga/effects";

export function* setUserSaga() {
  try {
    const user = yield call(getUser);
    yield put(setUserAction(user));
  } catch (error) {
    console.log(error);
  }
}
