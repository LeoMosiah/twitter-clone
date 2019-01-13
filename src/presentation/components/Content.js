import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core";
import Card from "@material-ui/core/es/Card/Card";
import { styles } from "./styles/Content";
import AccountCircle from "@material-ui/icons/AccountCircle";
import { Tweet } from "./Tweet";
import Avatar from "@material-ui/core/es/Avatar/Avatar";
import AddAPhotoOutlined from "@material-ui/icons/AddAPhotoOutlined";
import Typography from "@material-ui/core/es/Typography/Typography";
import { Link } from "react-router-dom";

function ContentComponent({ classes, tweets, user }) {
  return (
    <div className={classes.container}>
      <div className={classes.column}>
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
              <Link
                to={`/${user.username}`}
                className={classes.profileUsername}
              >
                {user.username}
              </Link>
              <Link to={`/${user.username}`} className={classes.profileHandle}>
                {user.handle}
              </Link>
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
        <Card className={classes.forYou} />
      </div>
      <div className={classes.columnMiddle}>
        <Card className={classes.timeline}>
          <div className={classes.timelineHeader}>
            <AccountCircle />
            <input
              type="text"
              placeholder="O que está acontecendo?"
              className={classes.tweetForm}
            />
          </div>
          {Object.values(tweets).map(tweet => (
            <Tweet
              key={tweet.id}
              body={tweet.body}
              author={tweet.author}
              timestamp={tweet.timestamp}
            />
          ))}
        </Card>
      </div>
      <div className={classes.column}>
        <Card className={classes.followSugestions} />
        <Card className={classes.about} />
      </div>
    </div>
  );
}

export const Content = withStyles(styles)(ContentComponent);

ContentComponent.propTypes = {
  classes: PropTypes.object.isRequired,
  tweets: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired
};
