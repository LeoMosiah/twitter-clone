import React, { Component } from "react";
import PropTypes from "prop-types";
import { ProfileCardComponent } from "../components/ProfileCard";
import {
  updateUsernameAction,
  userSelector
} from "../../domain/redux/ducks/userReducer";
import { connect } from "react-redux";

class ProfileCardContainer extends Component {
  state = {
    isEditing: false,
    username: this.props.user.username
  };
  handleChange = username => {
    this.setState({ username });
  };
  handleSubmit = () => {
    const newUsername = this.state.username;
    this.props.changeUsername(newUsername);
    this.setState({
      isEditing: false
    });
  };
  handleEditing = () => {
    this.setState({
      isEditing: true
    });
  };
  render() {
    const { user } = this.props;
    const { isEditing, username } = this.state;
    console.log(this.props.user.username);
    return (
      <ProfileCardComponent
        user={user}
        isEditing={isEditing}
        username={username}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        handleEditing={this.handleEditing}
      />
    );
  }
}

const mapStateToProps = state => ({
  user: userSelector(state)
});

const mapDispatchToProps = {
  changeUsername: updateUsernameAction
};

ProfileCardContainer.propTypes = {
  isEditing: PropTypes.bool.isRequired,
  user: PropTypes.shape({
    username: PropTypes.string.isRequired,
    handle: PropTypes.string.isRequired,
    followers: PropTypes.number.isRequired,
    following: PropTypes.number.isRequired
  }),
  changeUsername: PropTypes.func.isRequired
};

export const ProfileCard = connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileCardContainer);
