import React, { Component } from "react";
import PropTypes from "prop-types";
import { ProfileCardComponent } from "../components/ProfileCard";
import {
  updateAvatarAction, updateCoverAction,
  updateUsernameAction,
  userSelector
} from '../../domain/redux/ducks/userReducer';
import { connect } from "react-redux";
import { User } from "../../domain/entities/user";

class ProfileCardContainer extends Component {
  state = {
    isEditing: false,
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
  handleChangeAvatar = event => {
    event.preventDefault();
    let reader = new FileReader();
    let file = event.target.files[0];

    reader.onloadend = () => {
      this.props.changeAvatar(reader.result)
    };

    reader.readAsDataURL(file);
  };
  handleChangeCover = event => {
    event.preventDefault();
    let reader = new FileReader();
    let file = event.target.files[0];

    reader.onloadend = () => {
      this.props.changeCover(reader.result)
    };

    reader.readAsDataURL(file);
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
        handleChangeAvatar={this.handleChangeAvatar}
        handleChangeCover={this.handleChangeCover}
      />
    );
  }
}

const mapStateToProps = state => ({
  user: userSelector(state)
});

const mapDispatchToProps = {
  changeUsername: updateUsernameAction,
  changeAvatar: updateAvatarAction,
  changeCover: updateCoverAction
};

ProfileCardContainer.propTypes = {
  user: User.propTypes.isRequired,
  changeUsername: PropTypes.func.isRequired
};

export const ProfileCard = connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileCardContainer);
