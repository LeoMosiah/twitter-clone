import React, { Fragment } from "react";
import PropTypes from "prop-types";
import Card from "@material-ui/core/es/Card/Card";
import { styles } from "./styles/ProfileCard";
import { withStyles } from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";
import AddAPhotoOutlined from "@material-ui/icons/AddAPhotoOutlined";
import Typography from "@material-ui/core/Typography";
import Grid from '@material-ui/core/Grid';

function ProfileCard({
  classes,
  user,
  username,
  isEditing,
  handleChange,
  handleSubmit,
  handleEditing,
  handleChangeAvatar,
  handleChangeCover,
}) {
  return (
    <Grid item>
    <Card className={classes.container}>
      <div className={classes.avatarContainer}>
        <input
          className={classes.imageUploader}
          type="file"
          id="avatarInput"
          onChange={event => handleChangeAvatar(event)}
        />
        <label for="avatarInput">
          <Avatar className={classes.avatar} src={user.avatar}>
            <AddAPhotoOutlined className={classes.icon} />
          </Avatar>
        </label>
      </div>
      <div>
        <input
          className={classes.imageUploader}
          type="file"
          id="coverInput"
          onChange={event => handleChangeCover(event)}
        />
        <label for="coverInput">
          <div className={classes.cover} style={{backgroundImage: `url(${user.cover})`}}/>
        </label>
      </div>
      <div className={classes.userInfo}>
        <div className={classes.contactInfo}>
          <UserPlaceHolder
            isEditing={isEditing}
            username={username}
            classes={classes}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            handleEditing={handleEditing}
          />
          <Typography className={classes.handle}>{user.handle}</Typography>
        </div>
        <div className={classes.userFollowersInfo}>
          <div style={{ display: "block", cursor: "pointer" }}>
            <Typography className={classes.followersDetails}>Tweets</Typography>
            <Typography className={classes.followersMetrics}>1</Typography>
          </div>
          <div style={{ display: "block", cursor: "pointer" }}>
            <Typography className={classes.followersDetails}>
              Seguindo
            </Typography>
            <Typography className={classes.followersMetrics}>
              {user.following}
            </Typography>
          </div>
          <div style={{ display: "block", cursor: "pointer" }}>
            <Typography className={classes.followersDetails}>
              Seguidores
            </Typography>
            <Typography className={classes.followersMetrics}>
              {user.followers}
            </Typography>
          </div>
        </div>
      </div>
    </Card>
    </Grid>
  );
}

ProfileCard.propTypes = {
  classes: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
  isEditing: PropTypes.bool.isRequired,
  username: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  handleEditing: PropTypes.func.isRequired
};

ProfileCard.displayName = "ProfileCard";

export const ProfileCardComponent = withStyles(styles)(ProfileCard);

const UserPlaceHolder = ({
  isEditing,
  username,
  classes,
  handleChange,
  handleSubmit,
  handleEditing
}) => {
  if (isEditing) {
    return (
      <Fragment>
        <input
          type="text"
          value={username}
          onChange={event => handleChange(event.target.value)}
        />
        <button onClick={() => handleSubmit(username)}>Ok</button>
      </Fragment>
    );
  } else {
    return (
      <Typography className={classes.username} onClick={() => handleEditing()}>
        {username}
      </Typography>
    );
  }
};

UserPlaceHolder.propTypes = {
  classes: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleEditing: PropTypes.func,
  handleSubmit: PropTypes.func,
  isEditing: PropTypes.bool.isRequired,
  username: PropTypes.string.isRequired
};
