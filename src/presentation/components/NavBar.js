import React from "react";
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
import Button from "@material-ui/core/Button";

function NavBarComponent({ classes }) {
  return (
    <AppBar position="static" color="inherit">
      <Toolbar className={classes.navBarContainer}>
        <div className={classes.navBarLeftSide}>
          <HomeOutlined />
          <FlashOnOutlined />
          <NotificationsOutlined />
          <EmailOutlined />
        </div>
        <div className={classes.navBarRightSide}>
          <AccountCircle className={classes.accountIcon} />
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
          >
            Twettar
          </Button>
        </div>
      </Toolbar>
    </AppBar>
  );
}

export const NavBar = withStyles(styles)(NavBarComponent);
