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
    isEditing: false,
    avatarFile: "",
    avatarUrl: ""
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
  handleChangeImage = event => {
    event.preventDefault();
    let reader = new FileReader();
    let avatarFile = event.target.files[0];

    reader.onloadend = () => {
      this.setState({
        avatarFile,
        avatarUrl: reader.result
      });
    };

    reader.readAsDataURL(avatarFile);
  };
  render() {
    const { user } = this.props;
    const { isEditing, avatarFile, avatarUrl } = this.state;
    return (
      <ProfileCardComponent
        user={user}
        isEditing={isEditing}
        username={user.username}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        handleEditing={this.handleEditing}
        handleChangeImage={this.handleChangeImage}
        avatarUrl={avatarUrl}
        avatarFile={avatarFile}
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
