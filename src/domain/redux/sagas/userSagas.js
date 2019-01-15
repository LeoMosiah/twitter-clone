import { getUser } from "../../../data/api/api";
import { setUserAction } from "../ducks/userReducer";
import { call, put } from "redux-saga/effects";
import { User } from "../../entities/user";

export const GET_USER = "saga/getUser";

export const getUserAction = () => ({
  type: GET_USER
});

export function* getUserSaga() {
  try {
    const user = yield call(getUser);
    console.log(user);
    const NewUser = new User(
      user.username,
      user.handle,
      user.followers,
      user.following
    );
    console.log(NewUser);
    yield put(setUserAction(NewUser));
  } catch (error) {
    console.log(error);
  }
}
