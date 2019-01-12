import React from "react";
import { withStyles } from "@material-ui/core";
import Card from "@material-ui/core/es/Card/Card";
import { styles } from "./styles/Content";
import AccountCircle from "@material-ui/icons/AccountCircle";
import { Tweet } from "./Tweet";

function ContentComponent({ classes, tweets, user }) {
  return (
    <div className={classes.container}>
      <div className={classes.column}>
        <Card className={classes.profile} />
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
