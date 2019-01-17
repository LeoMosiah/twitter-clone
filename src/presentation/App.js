import React, { Component, Fragment } from "react";
import "./App.css";
import { getTweetsAction } from "../domain/redux/sagas/tweetsSaga";
import { getUserAction } from "../domain/redux/sagas/userSagas";
import { NavBar } from "./containers/NavBar";
import { Main } from "./components/Main";
import connect from "react-redux/es/connect/connect";

class AppContainer extends Component {
  async componentDidMount() {
    this.props.getTweets();
    this.props.getUser();
  }
  render() {
    return (
      <Fragment>
        <NavBar />
        <Main />
      </Fragment>
    );
  }
}

const mapDispatchToProps = {
  getTweets: getTweetsAction,
  getUser: getUserAction
};

export const App = connect(
  null,
  mapDispatchToProps
)(AppContainer);
