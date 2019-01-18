import React from "react";
import PropTypes from "prop-types";
import Card from "@material-ui/core/es/Card/Card";
import { withStyles } from "@material-ui/core";
import { styles } from "./styles/Tweet";
import Avatar from "@material-ui/core/es/Avatar/Avatar";
import Typography from "@material-ui/core/es/Typography/Typography";
import { formateTimestamp } from "../../domain/useCases/dateControler";
import FavoriteBorderOutlined from "@material-ui/icons/FavoriteBorderOutlined";
import ModeCommentOutlined from "@material-ui/icons/ModeCommentOutlined";

function TweetComponent({ author, body, timestamp, classes, avatar, handle }) {
  return (
    <Card className={classes.cardContainer}>
      <div className={classes.leftColumn}>
        <Avatar src={avatar} className={classes.avatar}>
          {author[0]}
        </Avatar>
      </div>
      <div className={classes.rightColumn}>
        <div className={classes.tweetInfo}>
          <Typography className={classes.author}>{author}</Typography>
          <Typography className={classes.handle}>{handle}</Typography>
          <Typography className={classes.timestamp}>
            {formateTimestamp(timestamp)}
          </Typography>
        </div>
        <div>
          <Typography className={classes.body}>{body}</Typography>
        </div>
        <div className={classes.icons}>
          <ModeCommentOutlined
            className={classes.commentIcon}
            cursor="pointer"
          />
          <FavoriteBorderOutlined
            className={classes.favoriteIcon}
            cursor="pointer"
          />
        </div>
      </div>
    </Card>
  );
}

TweetComponent.displayName = "Tweet";

TweetComponent.propTypes = {
  author: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  classes: PropTypes.object.isRequired,
  timestamp: PropTypes.number.isRequired
};

export const Tweet = withStyles(styles)(TweetComponent);
