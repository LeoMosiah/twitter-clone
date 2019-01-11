import React, { Component } from "react";
import { connect } from "react-redux";
import {
  receiveTweetsAction,
  tweetsSelector
} from "../../domain/redux/ducks/tweetsReducer";
import { HomeComponent } from "../components/Home";
import {
  getUserAction,
  userSelector
} from "../../domain/redux/ducks/userReducer";

const tweets = {
  "id 1": {
    id: "id 1",
    title: "title 1",
    body: "body 1"
  },
  "id 2": {
    id: "id 2",
    title: "title 2",
    body: "body 2"
  },
  "id 3": {
    id: "id 3",
    title: "title 3",
    body: "body 3"
  }
};

const user = {
  id: {
    id: "id",
    handle: "handle",
    username: "username",
    bio: "bio",
    location: "location",
    website: "website",
    birthday: "birthday"
  }
};

class HomeContainer extends Component {
  componentDidMount() {
    this.props.getTweets(tweets);
    this.props.getUser(user);
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
  getUser: getUserAction
};

export const Home = connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeContainer);
