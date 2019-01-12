import React from "react";
import Card from "@material-ui/core/es/Card/Card";
import { withStyles } from "@material-ui/core";
import { styles } from "./styles/Tweet";
import Avatar from "@material-ui/core/es/Avatar/Avatar";
import Typography from "@material-ui/core/es/Typography/Typography";
import { formateTimestamp } from "../../data/useCases/dateControler";
import FavoriteBorderOutlined from "@material-ui/icons/FavoriteBorderOutlined";
import ModeCommentOutlined from "@material-ui/icons/ModeCommentOutlined";

function TweetComponent({ author, body, timestamp, classes }) {
  return (
    <Card className={classes.tweetCard}>
      <Avatar className={classes.tweetCardAvatar}>{author[0]}</Avatar>
      <div className={classes.tweetCardInfo}>
        <div className={classes.tweetCardHeader}>
          <Typography>{author}</Typography>
          <Typography>{`@${author.toLowerCase()}`}</Typography>
          <Typography>{formateTimestamp(timestamp)}</Typography>
        </div>
        <div className={classes.tweetCardBoby}>
          <Typography>{body}</Typography>
        </div>
        <div className={classes.tweetCardFooter}>
          <ModeCommentOutlined cursor="pointer" />
          <FavoriteBorderOutlined cursor="pointer" />
        </div>
      </div>
    </Card>
  );
}

export const Tweet = withStyles(styles)(TweetComponent);
