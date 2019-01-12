import _ from "lodash";

const INITIAL_STATE = {};
export const SET_USER = "user/setUser";
const UPDATE_USER = "user/update";

export const userSelector = state => state.user;

export const setUserAction = user => ({
  type: SET_USER,
  user
});

export const updateUserAction = user => ({
  type: UPDATE_USER,
  user
});

const handleGetUser = (state, action) => {
  let clonedState = _.cloneDeep(state);
  clonedState = action.user;
  return clonedState;
};

const handleUpdateUser = (state, action) => {
  let clonedState = _.cloneDeep(state);
  clonedState[action.user.id] = action.user;
  return clonedState;
};

export const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_USER:
      return handleGetUser(state, action);
    case UPDATE_USER:
      return handleUpdateUser(state, action);
    default:
      return state;
  }
};
