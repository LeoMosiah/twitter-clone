import { setUserAction, updateUsernameAction, userReducer } from "../userReducer";

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

  it("should update user informations on the store", function() {
    const initialState = {
      handle: "handle",
      username: "username",
      followers: "1",
      following: "1"
    };

    const newUsername = "new username"
  

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
});
