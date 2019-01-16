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
    const NewUser = new User(
      user.username,
      user.handle,
      user.followers,
      user.following,
      user.avatar,
      user.cover
    );
    yield put(setUserAction(NewUser));
  } catch (error) {
    console.log(error);
  }
}
