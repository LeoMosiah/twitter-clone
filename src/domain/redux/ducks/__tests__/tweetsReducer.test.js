import {
  addTweetAction,
  receiveTweetsAction,
  removeTweetAction,
  tweetsReducer,
  updateTweetACtion
} from '../tweetsReducer';

describe('Tweets Reducer', function () {
  it('should get tweets from database and add to the store', function () {

    const initialState = {};

    const tweetsOnDb = {
      'id 1':{
        'id': 'id 1',
        'title': 'title 1',
        'body': 'body 1',
      },
      'id 2':{
        'id': 'id 2',
        'title': 'title 2',
        'body': 'body 2',
      },
      'id 3':{
        'id': 'id 3',
        'title': 'title 3',
        'body': 'body 3',
      }
    };

    const expectedState = {
      'id 1':{
        'id': 'id 1',
        'title': 'title 1',
        'body': 'body 1',
      },
      'id 2':{
        'id': 'id 2',
        'title': 'title 2',
        'body': 'body 2',
      },
      'id 3':{
        'id': 'id 3',
        'title': 'title 3',
        'body': 'body 3',
      }
    };

    expect(tweetsReducer(initialState, receiveTweetsAction(tweetsOnDb))).toEqual(expectedState)

  });

  it('should add a tweet to the store', function () {

    const initialState = {
      'id 1':{
        'id': 'id 1',
        'title': 'title 1',
        'body': 'body 1',
      },
      'id 2':{
        'id': 'id 2',
        'title': 'title 2',
        'body': 'body 2',
      }
    };

    const tweet = {
      'id': 'id 3',
      'title': 'title 3',
      'body': 'body 3',
    };

    const expectedState = {
      'id 1':{
        'id': 'id 1',
        'title': 'title 1',
        'body': 'body 1',
      },
      'id 2':{
        'id': 'id 2',
        'title': 'title 2',
        'body': 'body 2',
      },
      'id 3':{
        'id': 'id 3',
        'title': 'title 3',
        'body': 'body 3',
      }
    };

    expect(tweetsReducer(initialState, addTweetAction(tweet))).toEqual(expectedState)

  });

  it('should remove a post from the store', function () {

    const initialState = {
      'id 1':{
        'id': 'id 1',
        'title': 'title 1',
        'body': 'body 1',
      },
      'id 2':{
        'id': 'id 2',
        'title': 'title 2',
        'body': 'body 2',
      },
      'id 3':{
        'id': 'id 3',
        'title': 'title 3',
        'body': 'body 3',
      }
    };

    const id = 'id 3';

    const expectedState = {
      'id 1':{
        'id': 'id 1',
        'title': 'title 1',
        'body': 'body 1',
      },
      'id 2':{
        'id': 'id 2',
        'title': 'title 2',
        'body': 'body 2',
      }
    };

    expect(tweetsReducer(initialState, removeTweetAction(id))).toEqual(expectedState)

  });

  it('should update a tweet from the store', function () {

    const initialState = {
      'id 1':{
        'id': 'id 1',
        'title': 'title 1',
        'body': 'body 1',
      },
      'id 2':{
        'id': 'id 2',
        'title': 'title 2',
        'body': 'body 2',
      },
      'id 3':{
        'id': 'id 3',
        'title': 'title 3',
        'body': 'body 3',
      }
    };

    const tweetUpdated = {
      'id': 'id 3',
      'title': 'new title 3',
      'body': 'new body 3',
    };

    const expectedState = {
      'id 1':{
        'id': 'id 1',
        'title': 'title 1',
        'body': 'body 1',
      },
      'id 2':{
        'id': 'id 2',
        'title': 'title 2',
        'body': 'body 2',
      },
      'id 3':{
        'id': 'id 3',
        'title': 'new title 3',
        'body': 'new body 3',
      }
    };

    expect(tweetsReducer(initialState,updateTweetACtion(tweetUpdated))).toEqual(expectedState)

  });

});