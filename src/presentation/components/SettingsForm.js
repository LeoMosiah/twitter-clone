import React from "react";
import PropTypes from "prop-types";
import TextField from "@material-ui/core/TextField";

export const SettingFormComponent = ({
  username,
  bio,
  location,
  website,
  birthday,
  handleChange,
  handleSubmit
}) => (
  <form>
    <TextField
      label="Username"
      value={username}
      onChange={event => handleChange(event.target.value)}
      margin="normal"
      variant="outlined"
    />
    <TextField
      label="Bio"
      value={bio}
      onChange={event => handleChange(event.target.value)}
      margin="normal"
      variant="outlined"
    />
    <TextField
      label="Location"
      value={location}
      onChange={event => handleChange(event.target.value)}
      margin="normal"
      variant="outlined"
    />
    <TextField
      label="Website"
      value={website}
      onChange={event => handleChange(event.target.value)}
      margin="normal"
      variant="outlined"
    />
    <TextField
      label="Birthday"
      value={birthday}
      onChange={event => handleChange(event.target.value)}
      margin="normal"
      variant="outlined"
    />
  </form>
);

SettingFormComponent.propTypes = {
  bio: PropTypes.string.isRequired,
  birthday: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  location: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  website: PropTypes.string.isRequired
};
