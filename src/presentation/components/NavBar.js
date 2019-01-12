import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core";
import HomeOutlined from "@material-ui/icons/HomeOutlined";
import NotificationsOutlined from "@material-ui/icons/NotificationsOutlined";
import EmailOutlined from "@material-ui/icons/EmailOutlined";
import FlashOnOutlined from "@material-ui/icons/FlashOnOutlined";
import Toolbar from "@material-ui/core/Toolbar";
import AppBar from "@material-ui/core/AppBar";
import SearchIcon from "@material-ui/icons/Search";
import AccountCircle from "@material-ui/icons/AccountCircle";
import { styles } from "./styles/NavBar";
import Typography from "@material-ui/core/es/Typography/Typography";

function NavBarComponent({ classes }) {
  return (
    <AppBar position="static" color="inherit">
      <Toolbar className={classes.navBarContainer}>
        <div className={classes.iconContainer}>
          <HomeOutlined />
          <Typography className={classes.iconName}>Home</Typography>
        </div>
        <div className={classes.iconContainer}>
          <FlashOnOutlined />
          <Typography className={classes.iconName}>Moments</Typography>
        </div>
        <div className={classes.iconContainer}>
          <NotificationsOutlined />
          <Typography className={classes.iconName}>Notifications</Typography>
        </div>
        <div className={classes.iconContainer}>
          <EmailOutlined />
          <Typography className={classes.iconName}>Messages</Typography>
        </div>
        <AccountCircle className={classes.accountIcon} />
        <button className={classes.button}>Twettar</button>
      </Toolbar>
    </AppBar>
  );
}

export const NavBar = withStyles(styles)(NavBarComponent);

NavBarComponent.propTypes = {
  classes: PropTypes.object.isRequired
};
