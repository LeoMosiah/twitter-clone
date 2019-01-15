import _ from "lodash";

const INITIAL_STATE = {};
export const SET_USER = "user/setUser";
const UPDATE_USER = "user/updateUsername";

export const userSelector = state => state.user;

export const setUserAction = user => ({
  type: SET_USER,
  user
});

export const updateUsernameAction = username => ({
  type: UPDATE_USER,
  username
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

export const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_USER:
      return handleGetUser(state, action);
    case UPDATE_USER:
      return handleUpdateUsername(state, action);
    default:
      return state;
  }
};
