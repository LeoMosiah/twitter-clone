import React from "react";
import PropTypes from "prop-types";
import Card from "@material-ui/core/es/Card/Card";
import { styles } from "./styles/FollowSugestionCard";
import { withStyles } from "@material-ui/core";
import Typography from "@material-ui/core/es/Typography/Typography";
import Avatar from "@material-ui/core/Avatar";

function FollowSugestionComponent({ classes }) {
  return (
    <Card className={classes.container}>
      <div className={classes.header}>
        <Typography variant="h3" className={classes.title}>
          Quem seguir
        </Typography>
        <span className={classes.link}>Atualizar</span>
        <span className={classes.link}>Ver todos</span>
      </div>
      <div className={classes.toFollow}>
        <div className={classes.avatarContainer}>
          <Avatar alt="Avatar" className={classes.avatar} />
        </div>
        <div className={classes.infoContainer}>
          <span className={classes.username}>Username</span>
          <span className={classes.handle}>@username</span>
          <button className={classes.button}>Seguir</button>
        </div>
      </div>
      <div className={classes.toFollow}>
        <div className={classes.avatarContainer}>
          <Avatar alt="Avatar" className={classes.avatar} />
        </div>
        <div className={classes.infoContainer}>
          <span className={classes.username}>Username</span>
          <span className={classes.handle}>@username</span>
          <button className={classes.button}>Seguir</button>
        </div>
      </div>
      <div className={classes.toFollow}>
        <div className={classes.avatarContainer}>
          <Avatar alt="Avatar" className={classes.avatar} />
        </div>
        <div className={classes.infoContainer}>
          <span className={classes.username}>Username</span>
          <span className={classes.handle}>@username</span>
          <button className={classes.button}>Seguir</button>
        </div>
      </div>
    </Card>
  );
}

FollowSugestionComponent.propTypes = {
  classes: PropTypes.object.isRequired,
};

FollowSugestionComponent.displayName = "FollowSugestion";

export const FollowSugestionCard = withStyles(styles)(FollowSugestionComponent);
