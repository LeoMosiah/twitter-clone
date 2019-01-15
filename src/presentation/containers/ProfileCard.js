import React, { Component } from "react";
import PropTypes from "prop-types";
import { ProfileCardComponent } from "../components/ProfileCard";
import {
  updateUsernameAction,
  userSelector
} from "../../domain/redux/ducks/userReducer";
import { connect } from "react-redux";
import { User } from "../../domain/entities/user";

class ProfileCardContainer extends Component {
  state = {
    isEditing: false
  };
  handleChange = username => {
    this.props.changeUsername(username);
  };
  handleSubmit = username => {
    this.props.changeUsername(username);
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
    const { isEditing } = this.state;
    return (
      <ProfileCardComponent
        user={user}
        isEditing={isEditing}
        username={user.username}
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
  user: User.propTypes.isRequired,
  changeUsername: PropTypes.func.isRequired
};

export const ProfileCard = connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileCardContainer);
