import React from "react";
import { withStyles } from "@material-ui/core";
import Card from "@material-ui/core/es/Card/Card";
import { styles } from "./styles/Content";
import AccountCircle from "@material-ui/icons/AccountCircle";
import TextField from "@material-ui/core/TextField";
import { TweetComponent } from "./Tweet";

function ContentComponent({ classes, tweets, user }) {
  return (
    <div className={classes.container}>
      <div className={classes.column}>
        <Card className={classes.profile}>{console.log(user)}</Card>
        <Card className={classes.forYou} />
      </div>
      <div className={classes.columnMiddle}>
        <Card className={classes.tweets}>
          <div className={classes.timeline}>
            <AccountCircle />
            <TextField
              className={classes.tweetForm}
              margin="normal"
              variant="outlined"
              placeholder="O que está acontecendo?"
            />
          </div>
          {Object.values(tweets).map(tweet => (
            <TweetComponent key={tweet.id} title={tweet.title} />
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
