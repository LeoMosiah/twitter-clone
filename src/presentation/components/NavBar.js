import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core";
import HomeOutlined from "@material-ui/icons/HomeOutlined";
import NotificationsOutlined from "@material-ui/icons/NotificationsOutlined";
import EmailOutlined from "@material-ui/icons/EmailOutlined";
import FlashOnOutlined from "@material-ui/icons/FlashOnOutlined";
import Toolbar from "@material-ui/core/Toolbar";
import Avatar from "@material-ui/core/Avatar";
import { styles } from "./styles/NavBar";
import { ModalComponent } from "./Modal";
import logo from "../assets/logo.png";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import AccountCircle from "@material-ui/icons/AccountCircle";

function NavBar(props) {
  const {
    classes,
    handleSubmit,
    handleChange,
    body,
    isModalOpen,
    handleCloseModal,
    handleOpenModal,
    user
  } = props;
  return (
    <Fragment>
      <div className={classes.header}>
        <Toolbar className={classes.navBarContainer}>
          <Grid container className={classes.navBarContainer}>
            <Grid item className={classes.leftContainer}>
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
                <Typography className={classes.iconName}>
                  Notifications
                </Typography>
              </div>
              <div className={classes.iconContainer}>
                <EmailOutlined />
                <Typography className={classes.iconName}>Messages</Typography>
              </div>
            </Grid>
            <Grid item className={classes.middleContainer}>
              <img className={classes.logoIcon} src={logo} alt="logo" />
            </Grid>
            <Grid item className={classes.rightContainer}>
              <input
                type="search"
                placeholder="Search"
                className={classes.input}
              />
              <Avatar src={user.avatar} className={classes.avatar}>
                <AccountCircle className={classes.accountIcon} />
              </Avatar>
              <button
                className={classes.button}
                onClick={() => handleOpenModal()}
              >
                Tweetar
              </button>
            </Grid>
          </Grid>
        </Toolbar>
      </div>
      <ModalComponent
        isModalOpen={isModalOpen}
        handleCloseModal={handleCloseModal}
        handleSubmit={handleSubmit}
        body={body}
        handleChange={handleChange}
      />
    </Fragment>
  );
}

NavBar.propTypes = {
  classes: PropTypes.object.isRequired
};

NavBar.displayName = "NavBar";

export const NavBarComponent = withStyles(styles)(NavBar);
