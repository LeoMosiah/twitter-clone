import React from "react";
import PropTypes from "prop-types";
import Card from "@material-ui/core/es/Card/Card";
import { styles } from "./styles/Content";
import { withStyles } from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";
import AddAPhotoOutlined from "@material-ui/icons/AddAPhotoOutlined";
import Typography from "@material-ui/core/Typography";

const UserPlaceHolder = (isEditing, username, classe) => {
  if (isEditing === true) {
    return <input />;
  } else {
    return <Typography className={classe}>username</Typography>;
  }
};

function ProfileCardComponent({ classes, user, isEditing }) {
  return (
    <Card className={classes.profile}>
      <div className={classes.profileUpperPart}>
        <div className={classes.profileFrame}>
          <Avatar
            className={classes.profileAvatar}
            onClick={() => alert("got click")}
          >
            <AddAPhotoOutlined className={classes.profileIcon} />
          </Avatar>
        </div>
      </div>
      <div className={classes.profileBottomPart}>
        <div className={classes.profileContactInfo}>
          <UserPlaceHolder
            classe={classes.profileUsername}
            isEditing={isEditing}
            username={user.username}
          />
          <Typography className={classes.profileHandle}>
            {user.handle}
          </Typography>
        </div>
        <div className={classes.profileUserFollowersInfo}>
          <div style={{ display: "block", cursor: "pointer" }}>
            <Typography className={classes.profileFollowersDetails}>
              Tweets
            </Typography>
            <Typography className={classes.profileFollowersMetrics}>
              1
            </Typography>
          </div>
          <div style={{ display: "block", cursor: "pointer" }}>
            <Typography className={classes.profileFollowersDetails}>
              Seguindo
            </Typography>
            <Typography className={classes.profileFollowersMetrics}>
              1
            </Typography>
          </div>
          <div style={{ display: "block", cursor: "pointer" }}>
            <Typography className={classes.profileFollowersDetails}>
              Seguidores
            </Typography>
            <Typography className={classes.profileFollowersMetrics}>
              1
            </Typography>
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
