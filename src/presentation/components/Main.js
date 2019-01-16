import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core";
import { styles } from "./styles/Main";
import { FollowSugestionCard } from "./FollowSugestionCard";
import { Timeline } from "../containers/Timeline";
import { ProfileCard } from "../containers/ProfileCard";
import Grid from '@material-ui/core/Grid';

function MainComponent({ classes }) {
  return (
    <Grid
      className={classes.container}
      container
      spacing={16}
      alignItems="flex-start"
      direction="row"
      justify="space-evenly"
    >
      <ProfileCard />
      <Timeline />
      <FollowSugestionCard />
    </Grid>
  );
}

MainComponent.displayName = "Main";

MainComponent.propTypes = {
  classes: PropTypes.object.isRequired
};

export const Main = withStyles(styles)(MainComponent);
