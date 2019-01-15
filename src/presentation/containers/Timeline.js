import React, { Component } from "react";
import { getNewTweet } from "../../domain/useCases/tweet";
import { TimelineComponent } from "../components/Timeline";
import {
  addTweetAction,
  tweetsSelector
} from "../../domain/redux/ducks/tweetsReducer";
import { connect } from "react-redux";
import { userSelector } from "../../domain/redux/ducks/userReducer";

class TimelineContainer extends Component {
  state = {
    body: ""
  };
  handleChange = body => {
    this.setState({ body });
  };
  handleSubmit = body => {
    const user = this.props.user;
    const newTweet = getNewTweet(user.username, body);
    this.props.addTweet(newTweet);
    this.setState(() => ({
      body: ""
    }));
  };
  render() {
    const { body } = this.state;
    const { tweets } = this.props;
    return (
      <TimelineComponent
        tweets={tweets}
        body={body}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
      />
    );
  }
}

const mapStateToProps = state => ({
  tweets: tweetsSelector(state),
  user: userSelector(state)
});

const mapDispatchToProps = {
  addTweet: addTweetAction
};

export const Timeline = connect(
  mapStateToProps,
  mapDispatchToProps
)(TimelineContainer);
