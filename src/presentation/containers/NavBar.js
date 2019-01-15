import React, { Component } from "react";
import { getNewTweet } from "../../domain/useCases/tweet";
import { NavBarComponent } from "../components/NavBar";
import {
  addTweetAction,
  tweetsSelector
} from "../../domain/redux/ducks/tweetsReducer";
import { userSelector } from "../../domain/redux/ducks/userReducer";
import { connect } from "react-redux";

class NavBarContainer extends Component {
  state = {
    body: "",
    isModalOpen: false
  };
  handleChange = body => {
    this.setState({ body });
  };
  handleSubmit = body => {
    const user = this.props.user;
    const newTweet = getNewTweet(user.username, body);
    this.props.addTweet(newTweet);
    this.setState({
      isModalOpen: false,
      body: ""
    });
  };
  handleOpenModal = () => {
    this.setState({ isModalOpen: true });
  };
  handleCloseModal = () => {
    this.setState({ isModalOpen: false });
  };
  render() {
    const { body, isModalOpen } = this.state;
    return (
      <NavBarComponent
        body={body}
        isModalOpen={isModalOpen}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        handleOpenModal={this.handleOpenModal}
        handleCloseModal={this.handleCloseModal}
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

export const NavBar = connect(
  mapStateToProps,
  mapDispatchToProps
)(NavBarContainer);
