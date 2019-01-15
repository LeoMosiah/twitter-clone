import React, { Fragment } from "react";
import PropTypes from "prop-types";
import Card from "@material-ui/core/es/Card/Card";
import { styles } from "./styles/ProfileCard";
import { withStyles } from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";
import AddAPhotoOutlined from "@material-ui/icons/AddAPhotoOutlined";
import Typography from "@material-ui/core/Typography";

const UserPlaceHolder = (isEditing, username, classe) => {
  if (isEditing === true) {
    return <input />;
  } else {
    return (
      <Fragment>
        <Typography className={classe}>username</Typography>
        <button onClick={() => console.log("mudei o username")}>Ok</button>
      </Fragment>
    );
  }
};

function ProfileCardComponent({ classes, user, isEditing }) {
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
            classe={classes.username}
            isEditing={isEditing}
            username={user.username}
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

ProfileCardComponent.propTypes = {
  classes: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired
};

ProfileCardComponent.displayName = "ProfileCard";

export const ProfileCard = withStyles(styles)(ProfileCardComponent);
