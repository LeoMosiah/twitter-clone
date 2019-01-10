import { getUserAction, updateUserAction, userReducer } from '../userReducer';

describe('User Reducer', function () {

  it('should get the user and put on the store', function () {

    const initialState = {};

    const user = {
      'id': 'id',
      'handle': 'handle',
      'username': 'username',
      'bio': 'bio',
      'location': 'location',
      'website': 'website',
      'birthday': 'birthday'
    };

    const expectedState = {
      'id':{
        'id': 'id',
        'handle': 'handle',
        'username': 'username',
        'bio': 'bio',
        'location': 'location',
        'website': 'website',
        'birthday': 'birthday'
      }
    };

    expect(userReducer(initialState,getUserAction(user))).toEqual(expectedState)

  });

  it('should update user informations on the store', function () {

    const initialState = {
      'id':{
        'id': 'id',
        'handle': 'handle',
        'username': 'username',
        'bio': 'bio',
        'location': 'location',
        'website': 'website',
        'birthday': 'birthday'
      }
    };

    const updatedUser = {
      'id': 'id',
      'handle': 'new handle',
      'username': 'new username',
      'bio': 'new bio',
      'location': 'new location',
      'website': 'new website',
      'birthday': 'new birthday'
    };

    const expectedState = {
      'id':{
        'id': 'id',
        'handle': 'new handle',
        'username': 'new username',
        'bio': 'new bio',
        'location': 'new location',
        'website': 'new website',
        'birthday': 'new birthday'
      }
    };

    expect(userReducer(initialState, updateUserAction(updatedUser))).toEqual(expectedState)

  });

});