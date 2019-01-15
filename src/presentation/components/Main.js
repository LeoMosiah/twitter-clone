import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core";
import { styles } from "./styles/Main";
import { FollowSugestionCard } from "./FollowSugestionCard";
import { Timeline } from "../containers/Timeline";
import { ProfileCard } from "../containers/ProfileCard";

function MainComponent({ classes }) {
  return (
    <main className={classes.container}>
      <ProfileCard />
      <Timeline />
      <FollowSugestionCard />
    </main>
  );
}

export const Main = withStyles(styles)(MainComponent);

MainComponent.propTypes = {
  classes: PropTypes.object.isRequired,
  tweets: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired
};
