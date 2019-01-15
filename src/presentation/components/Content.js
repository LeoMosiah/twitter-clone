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
      <ProfileCard user={user} isEditing={isEditing} />
      <Timeline
        tweets={tweets}
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        body={body}
      />
      <FollowSugestionCard />
    </div>
  );
}

export const Content = withStyles(styles)(ContentComponent);

ContentComponent.propTypes = {
  classes: PropTypes.object.isRequired,
  tweets: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired
};
