import React, { Component } from 'react';
import { SettingFormComponent } from '../components/SettingsForm';
import connect from 'react-redux/es/connect/connect';
import { updateUserAction, userSelector } from '../../domain/redux/ducks/userReducer';

class SettingsFormContainer extends Component{

  state = {
      username : this.props.user.username,
      bio : this.props.user.bio,
      location : this.props.user.location,
      website : this.props.user.website,
      birthday : this.props.user.birthday,
  };

  handleChange = (value) => {
    this.setState({ [value]:value} )
  };

  handleSubmit = (user) => {
    this.props.updateUser(user)
  };

  render(){

    const { username, bio, location, website, birthday } = this.state;

    return (
      <SettingFormComponent
        username={username}
        bio={bio}
        location={location}
        website={website}
        birthday={birthday}
      />
    )

  }

}

const mapStateToProps = (state) => ({
  user : userSelector(state)
});

const mapDispatchToProps = {
  updateUser : updateUserAction
};

export const Settings = connect(
  mapStateToProps,
  mapDispatchToProps,
)(SettingsFormContainer);