import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core";
import { styles } from "./styles/Content";
import { ProfileCard } from "./ProfileCard";
import { Timeline } from "./Timeline";
import { FollowSugestionCard } from "./FollowSugestionCard";

function ContentComponent({
  classes,
  tweets,
  user,
  handleSubmit,
  handleChange,
  body,
  isEditing
}) {
  return (
    <div className={classes.container}>
      <div className={classes.column}>
        <ProfileCard user={user} isEditing={isEditing} />
      </div>
      <div className={classes.columnMiddle}>
        <Timeline
          tweets={tweets}
          handleSubmit={handleSubmit}
          handleChange={handleChange}
          body={body}
        />
      </div>
      <div className={classes.column}>
        <FollowSugestionCard />
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
