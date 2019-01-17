import React from "react";
import { styles } from "./styles/NewTweet";
import { withStyles } from "@material-ui/core";
import PropTypes from "prop-types";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Avatar from "@material-ui/core/Avatar";

function NewTweetComponent({
  classes,
  tweets,
  handleSubmit,
  body,
  handleChange,
  user
}) {
  return (
    <div className={classes.header}>
      <div className={classes.leftColumn}>
        <Avatar src={user.avatar} className={classes.avatar}>
          <AccountCircle className={classes.icon} />
        </Avatar>
      </div>
      <div className={classes.rightColumn}>
        <input
          type="text"
          placeholder="O que está acontecendo?"
          className={classes.form}
          onChange={event => handleChange(event.target.value)}
        />
        <button className={classes.button} onClick={() => handleSubmit(body)}>
          Tweetar
        </button>
      </div>
    </div>
  );
}

NewTweetComponent.displayName = "NewTweet";

NewTweetComponent.propTypes = {
  body: PropTypes.string.isRequired,
  classes: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  tweets: PropTypes.object.isRequired,
  user: PropTypes.string.isRequired
};

export const NewTweet = withStyles(styles)(NewTweetComponent);
