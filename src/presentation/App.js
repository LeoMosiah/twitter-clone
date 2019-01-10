import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import { userSelector } from '../domain/redux/ducks/userReducer';
import { tweetsSelector } from '../domain/redux/ducks/tweetsReducer';

function AppContainer({user, tweets}) {
  return (
    <div>
      Começo
    </div>
  );
}

const mapStateToProps = state => ({
  user: userSelector(state),
  tweets: tweetsSelector(state)
});

export const App = connect(
  mapStateToProps
)(AppContainer);
