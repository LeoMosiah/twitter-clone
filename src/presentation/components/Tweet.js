import React, { Component } from "react";
import PropTypes from "prop-types";
import Card from "@material-ui/core/es/Card/Card";
import { withStyles } from "@material-ui/core";
import { styles } from "./styles/Tweet";
import Avatar from "@material-ui/core/es/Avatar/Avatar";
import Typography from "@material-ui/core/es/Typography/Typography";
import { formateTimestamp } from "../../domain/useCases/dateControler";
import FavoriteBorder from "@material-ui/icons/FavoriteBorder";
import Favorite from "@material-ui/icons/Favorite";
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
          <FavoriteIcon />
        </div>
      </div>
    </Card>
  );
}

class FavoriteIcon extends Component {
  state = {
    hasLiked: false
  };
  handleClick = () => {
    this.setState({
      hasLiked: !this.state.hasLiked
    });
  };
  render() {
    const { hasLiked } = this.state;
    return !hasLiked ? (
      <FavoriteBorder
        cursor="pointer"
        onClick={() => this.handleClick()}
        style={{ color: "#e0245e" }}
      />
    ) : (
      <Favorite
        cursor="pointer"
        onClick={() => this.handleClick()}
        style={{ color: "#e0245e" }}
      />
    );
  }
}

TweetComponent.displayName = "Tweet";

TweetComponent.propTypes = {
  author: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  classes: PropTypes.object.isRequired,
  timestamp: PropTypes.number.isRequired
};

export const Tweet = withStyles(styles)(TweetComponent);
