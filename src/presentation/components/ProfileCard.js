import React, { Fragment } from "react";
import PropTypes from "prop-types";
import Card from "@material-ui/core/es/Card/Card";
import { styles } from "./styles/ProfileCard";
import { withStyles } from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";
import AddAPhotoOutlined from "@material-ui/icons/AddAPhotoOutlined";
import Typography from "@material-ui/core/Typography";

const UserPlaceHolder = ({ isEditing, username, classe, handleChange, handleSubmit, handleEditing }) => {
  if (isEditing) {
    return (
      <Fragment>
        <input value={username} placeholder={username} onChange={ event => handleChange(event.target.value) } />
        <button onClick={() => handleSubmit()}>Ok</button>
      </Fragment>
    );
  } else {
    return (
        <Typography className={classe} onClick={() => handleEditing()}>username</Typography>
    );
  }
};

function ProfileCard({ classes, user, isEditing, handleChange, handleSubmit, handleEditing }) {
  return (
    <Card className={classes.container}>
      <div className={classes.cover}>
        <div className={classes.avatarContainer}>
          <Avatar className={classes.avatar} onClick={() => alert("got click")}>
            <AddAPhotoOutlined className={classes.icon} />
          </Avatar>
        </div>
      </div>
      <div className={classes.userInfo}>
        <div className={classes.contactInfo}>
          <UserPlaceHolder
            isEditing={isEditing}
            username={user.username}
            classe={classes.username}
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
            <Typography className={classes.followersMetrics}>1</Typography>
          </div>
          <div style={{ display: "block", cursor: "pointer" }}>
            <Typography className={classes.followersDetails}>
              Seguidores
            </Typography>
            <Typography className={classes.followersMetrics}>1</Typography>
          </div>
        </div>
      </div>
    </Card>
  );
}

ProfileCard.propTypes = {
  classes: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired
};

ProfileCard.displayName = "ProfileCard";

export const ProfileCardComponent = withStyles(styles)(ProfileCard);
