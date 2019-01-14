import React from "react";
import PropTypes from "prop-types";
import { Tweet } from "./Tweet";
import { styles } from "./styles/Content";
import { withStyles } from "@material-ui/core";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Card from "@material-ui/core/Card";

function TimelineComponent({
  classes,
  tweets,
  handleSubmit,
  body,
  handleChange
}) {
  return (
    <Card className={classes.timeline}>
      <div className={classes.timelineHeader}>
        <AccountCircle className={classes.avatarIcon} />
        <input
          type="text"
          placeholder="O que está acontecendo?"
          className={classes.tweetForm}
          onChange={event => handleChange(event.target.value)}
        />
        <button className={classes.button} onClick={() => handleSubmit(body)}>
          Tweetar
        </button>
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
  );
}

export const Timeline = withStyles(styles)(TimelineComponent);

TimelineComponent.propTypes = {
  classes: PropTypes.object.isRequired,
  tweets: PropTypes.any
};
