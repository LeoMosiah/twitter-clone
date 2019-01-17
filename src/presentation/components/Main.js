import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core";
import { styles } from "./styles/Main";
import { FollowSugestionCard } from "./FollowSugestionCard";
import { Timeline } from "../containers/Timeline";
import { ProfileCard } from "../containers/ProfileCard";
import Grid from "@material-ui/core/Grid";
import { columnMargin } from "./styles/spacing";

function MainComponent({ classes }) {
  return (
    <Grid
      className={classes.container}
      container
      direction="row"
      spacing={columnMargin}
      justify="center"
    >
      <Grid item>
        <ProfileCard />
      </Grid>
      <Grid item>
        <Timeline />
      </Grid>
      <Grid item>
        <FollowSugestionCard />
      </Grid>
    </Grid>
  );
}

MainComponent.displayName = "Main";

MainComponent.propTypes = {
  classes: PropTypes.object.isRequired
};

export const Main = withStyles(styles)(MainComponent);
