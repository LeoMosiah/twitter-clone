import React, { Fragment } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { styles } from "./styles/HomeStyles";
import { withStyles } from "@material-ui/core";
import HomeOutlined from "@material-ui/icons/HomeOutlined";
import NotificationsOutlined from "@material-ui/icons/NotificationsOutlined";
import EmailOutlined from "@material-ui/icons/EmailOutlined";
import FlashOnOutlined from "@material-ui/icons/FlashOnOutlined";

function HomeComponent({ classes }) {
  return (
    <Fragment>
      <AppBar position="static" color="inherit">
        <Toolbar className={classes.toolBarContainer}>
          <div className={classes.toolBarLeftSide}>
            <HomeOutlined />
            <FlashOnOutlined />
            <NotificationsOutlined />
            <EmailOutlined />
          </div>
        </Toolbar>
      </AppBar>
    </Fragment>
  );
}

export const Home = withStyles(styles)(HomeComponent);
