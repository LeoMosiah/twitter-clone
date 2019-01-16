import {
  setUserAction,
  updateAvatarAction,
  updateCoverAction,
  updateUsernameAction,
  userReducer
} from '../userReducer';

describe("User Reducer", function() {
  it("should get the user and put on the store", function() {
    const initialState = {};

    const user = {
      handle: "handle",
      username: "username",
      followers: "1",
      following: "1"
    };

    const expectedState = {
      handle: "handle",
      username: "username",
      followers: "1",
      following: "1"
    };

    expect(userReducer(initialState, setUserAction(user))).toEqual(
      expectedState
    );
  });

  it("should update user username on the store", function() {
    const initialState = {
      handle: "handle",
      username: "username",
      followers: "1",
      following: "1"
    };

    const newUsername = "new username";

    const expectedState = {
      handle: "handle",
      username: "new username",
      followers: "1",
      following: "1"
    };

    expect(userReducer(initialState, updateUsernameAction(newUsername))).toEqual(
      expectedState
    );
  });

  it("should update user avatar on the store", function() {
    const initialState = {
      handle: "handle",
      username: "username",
      followers: "1",
      following: "1",
      avatar: ""
    };

    const newAvatar = "new avatar";

    const expectedState = {
      handle: "handle",
      username: "username",
      followers: "1",
      following: "1",
      avatar: "new avatar"
    };

    expect(userReducer(initialState, updateAvatarAction(newAvatar))).toEqual(
      expectedState
    );
  });

  it("should update user cover on the store", function() {
    const initialState = {
      handle: "handle",
      username: "username",
      followers: "1",
      following: "1",
      cover: ""
    };

    const newCover = "new cover";

    const expectedState = {
      handle: "handle",
      username: "username",
      followers: "1",
      following: "1",
      cover: "new cover"
    };

    expect(userReducer(initialState, updateCoverAction(newCover))).toEqual(
      expectedState
    );
  });
});
