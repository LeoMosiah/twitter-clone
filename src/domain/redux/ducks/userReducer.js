import _ from "lodash";

const INITIAL_STATE = {};
export const SET_USER = "user/setUser";
const UPDATE_USERNAME = "user/updateUsername";
const UPDATE_AVATAR = "user/updateAvatar"
const UPDATE_COVER = "user/updateCover"

export const userSelector = state => state.user;

export const setUserAction = user => ({
  type: SET_USER,
  user
});

export const updateUsernameAction = username => ({
  type: UPDATE_USERNAME,
  username
});

export const updateAvatarAction = avatar => ({
  type: UPDATE_AVATAR,
  avatar
});

export const updateCoverAction = cover => ({
  type: UPDATE_COVER,
  cover
});

const handleGetUser = (state, action) => {
  let clonedState = _.cloneDeep(state);
  clonedState = action.user;
  return clonedState;
};

const handleUpdateUsername = (state, action) => {
  let clonedState = _.cloneDeep(state);
  clonedState.username = action.username;
  return clonedState;
};

const handleUpdateAvatar = (state, action) => {
  let clonedState = _.cloneDeep(state);
  clonedState.avatar = action.avatar;
  return clonedState;
};

const handleUpdateCover = (state, action) => {
  let clonedState = _.cloneDeep(state);
  clonedState.cover = action.cover;
  return clonedState;
};

export const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_USER:
      return handleGetUser(state, action);
    case UPDATE_USERNAME:
      return handleUpdateUsername(state, action);
    case UPDATE_AVATAR:
      return handleUpdateAvatar(state, action);
    case UPDATE_COVER:
      return handleUpdateCover(state, action);
    default:
      return state;
  }
};
