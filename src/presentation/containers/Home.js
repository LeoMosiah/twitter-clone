import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import {
  addTweetAction,
  tweetsSelector
} from "../../domain/redux/ducks/tweetsReducer";
import { HomeComponent } from "../components/Home";
import { userSelector } from "../../domain/redux/ducks/userReducer";
import { getTweetsAction } from "../../domain/redux/sagas/tweetsSaga";
import { getUserAction } from "../../domain/redux/sagas/userSagas";
import { getNewTweet } from "../../domain/useCases/tweet";

class HomeContainer extends Component {
  state = {
    body: "",
    isModalOpen: false,
    isEditing: false
  };
  async componentDidMount() {
    this.props.getTweets();
    this.props.getUser();
  }
  handleChange = body => {
    this.setState({ body });
  };
  handleSubmit = body => {
    const user = this.props.user;
    const newTweet = getNewTweet(user.username, body);
    this.props.addTweet(newTweet);
    this.setState({
      isModalOpen: false
    });
  };
  handleOpenModal = () => {
    this.setState({ isModalOpen: true });
  };
  handleCloseModal = () => {
    this.setState({ isModalOpen: false });
  };
  render() {
    const { user, tweets } = this.props;
    const { body, isModalOpen, isEditing } = this.state;
    return (
      <HomeComponent
        user={user}
        tweets={tweets}
        handleSubmit={this.handleSubmit}
        body={body}
        handleChange={this.handleChange}
        handleOpenModal={this.handleOpenModal}
        handleCloseModal={this.handleCloseModal}
        isModalOpen={isModalOpen}
        isEditing={isEditing}
      />
    );
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
