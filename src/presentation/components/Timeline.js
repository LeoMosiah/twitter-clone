import React from "react";
import PropTypes from "prop-types";
import { styles } from "./styles/Timeline";
import { withStyles } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import { Tweet } from "./Tweet";
import { NewTweet } from "./NewTweet";

function Timeline({ classes, tweets, handleSubmit, body, handleChange, user }) {
  return (
    <Card className={classes.container}>
      <NewTweet
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        user={user}
        body={body}
      />
      {Object.values(tweets).map(tweet => (
        <Tweet
          key={tweet.id}
          body={tweet.body}
          author={tweet.author}
          timestamp={tweet.timestamp}
          avatar={tweet.avatar}
          handle={tweet.handle}
        />
      ))}
    </Card>
  );
}

Timeline.displayName = "Timeline";

Timeline.propTypes = {
  classes: PropTypes.object.isRequired,
  tweets: PropTypes.any
};

export const TimelineComponent = withStyles(styles)(Timeline);
