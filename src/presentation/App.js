import React, { Component, Fragment } from 'react';
import "./App.css";
import { addTweetAction, tweetsSelector } from '../domain/redux/ducks/tweetsReducer';
import { userSelector } from '../domain/redux/ducks/userReducer';
import { getTweetsAction } from '../domain/redux/sagas/tweetsSaga';
import { getUserAction } from '../domain/redux/sagas/userSagas';
import { NavBar } from './containers/NavBar';
import { Main } from './components/Main';
import connect from 'react-redux/es/connect/connect';

class AppContainer extends Component {
  async componentDidMount() {
    this.props.getTweets();
    this.props.getUser();
  }
  render(){
    return(
      <Fragment>
        <NavBar/>
        <Main/>
      </Fragment>
    )
  }
}

const mapStateToProps = state => ({
  tweets: tweetsSelector(state),
  user: userSelector(state)
});

const mapDispatchToProps = {
  getTweets: getTweetsAction,
  getUser: getUserAction,
  addTweet: addTweetAction
};

export const App = connect(
  mapStateToProps,
  mapDispatchToProps
)(AppContainer);
