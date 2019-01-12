import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import {
  receiveTweetsAction,
  tweetsSelector
} from "../../domain/redux/ducks/tweetsReducer";
import { HomeComponent } from "../components/Home";
import {
  setUserAction,
  userSelector
} from "../../domain/redux/ducks/userReducer";
import { getTweets, getUser } from "../../data/api/api";

class HomeContainer extends Component {
  async componentDidMount() {
    const user = await getUser();
    const tweets = await getTweets();
    this.props.getTweets(tweets);
    this.props.setUser(user);
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
  getTweets: receiveTweetsAction,
  setUser: setUserAction
};

export const Home = connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeContainer);

HomeContainer.propTypes = {
  getTweets: PropTypes.func.isRequired,
  setUser: PropTypes.func.isRequired,
  tweets: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired
};
