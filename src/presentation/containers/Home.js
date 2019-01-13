import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { tweetsSelector } from "../../domain/redux/ducks/tweetsReducer";
import { HomeComponent } from "../components/Home";
import { userSelector } from "../../domain/redux/ducks/userReducer";
import { getTweetsAction } from "../../domain/redux/sagas/tweetsSaga";
import { getUserAction } from "../../domain/redux/sagas/userSagas";

class HomeContainer extends Component {
  async componentDidMount() {
    this.props.getTweets();
    this.props.getUser();
  }
  render() {
    const { user, tweets } = this.props;
    return <HomeComponent user={user} tweets={tweets} />;
  }
}

const mapStateToProps = state => ({
  tweets: tweetsSelector(state),
  user: userSelector(state)
});

const mapDispatchToProps = {
  getTweets: getTweetsAction,
  getUser: getUserAction
};

export const Home = connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeContainer);

HomeContainer.propTypes = {
  getTweets: PropTypes.func.isRequired,
  getUser: PropTypes.func.isRequired,
  tweets: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired
};
