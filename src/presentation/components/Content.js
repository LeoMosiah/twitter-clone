import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core";
import Card from "@material-ui/core/es/Card/Card";
import { styles } from "./styles/Content";
import AccountCircle from "@material-ui/icons/AccountCircle";
import { Tweet } from "./Tweet";
import Avatar from "@material-ui/core/es/Avatar/Avatar";
import AddAPhotoOutlined from "@material-ui/icons/AddAPhotoOutlined";

function ContentComponent({ classes, tweets, user }) {
  return (
    <div className={classes.container}>
      <div className={classes.column}>
        <Card className={classes.profile}>
          <Avatar className={classes.profileAvatar}>
            <AddAPhotoOutlined className={classes.profileIcon} />
          </Avatar>
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
