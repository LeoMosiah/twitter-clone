import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core";
import HomeOutlined from "@material-ui/icons/HomeOutlined";
import NotificationsOutlined from "@material-ui/icons/NotificationsOutlined";
import EmailOutlined from "@material-ui/icons/EmailOutlined";
import FlashOnOutlined from "@material-ui/icons/FlashOnOutlined";
import Toolbar from "@material-ui/core/Toolbar";
import AppBar from "@material-ui/core/AppBar";
import AccountCircle from "@material-ui/icons/AccountCircle";
import { styles } from "./styles/NavBar";
import Typography from "@material-ui/core/es/Typography/Typography";
import { ModalComponent } from "./Modal";

function NavBar(props) {
  const {
    classes,
    handleSubmit,
    handleChange,
    body,
    isModalOpen,
    handleCloseModal,
    handleOpenModal
  } = props;
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
        <button className={classes.button} onClick={() => handleOpenModal()}>
          Tweetar
        </button>
      </Toolbar>
      <ModalComponent
        isModalOpen={isModalOpen}
        handleCloseModal={handleCloseModal}
        handleSubmit={handleSubmit}
        body={body}
        handleChange={handleChange}
      />
    </AppBar>
  );
}

NavBar.propTypes = {
  classes: PropTypes.object.isRequired
};

NavBar.displayName = "NavBar";

export const NavBarComponent = withStyles(styles)(NavBar);
