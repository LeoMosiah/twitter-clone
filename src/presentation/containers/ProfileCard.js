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
  handleSubmit = username => {
    this.props.changeUsername(username);
    this.setState({
      isEditing: false
    })
  };
  handleEditing = () => {
    this.setState({
      isEditing: true
    })
  };
  render() {
    const { user } = this.props;
    const { isEditing, username } = this.state;
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

export const ProfileCard = connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileCardContainer);

ProfileCardContainer.propTypes = {
  isEditing: PropTypes.bool.isRequired,
  user: PropTypes.object.isRequired,
  changeUsername: PropTypes.func.isRequired
};