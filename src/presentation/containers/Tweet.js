import React from 'react';
import { connect } from 'react-redux';
import { TweetComponent } from '../components/Tweet';
import { userSelector } from '../../domain/redux/ducks/userReducer';
import { updateTweetAction } from '../../domain/redux/ducks/tweetsReducer';

function TweetContainer() {
  return (
    <TweetComponent/>
  )
}

const mapStateToProps = (state) => ({
  user: userSelector(state)
});

const mapDispatchToProps = {
  update: updateTweetAction
};

export const Tweet = connect(
  mapStateToProps,
  mapDispatchToProps
)(TweetContainer);