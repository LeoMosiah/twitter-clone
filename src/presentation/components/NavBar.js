import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core";
import HomeOutlined from "@material-ui/icons/HomeOutlined";
import NotificationsOutlined from "@material-ui/icons/NotificationsOutlined";
import EmailOutlined from "@material-ui/icons/EmailOutlined";
import FlashOnOutlined from "@material-ui/icons/FlashOnOutlined";
import Toolbar from "@material-ui/core/Toolbar";
import Avatar from "@material-ui/core/Avatar";
import AccountCircle from "@material-ui/icons/AccountCircle";
import { styles } from "./styles/NavBar";
import Typography from "@material-ui/core/es/Typography/Typography";
import { ModalComponent } from "./Modal";
import logo from "../assets/logo.png";
import Grid from "@material-ui/core/Grid";

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
      <header className={classes.header}>
        <Toolbar className={classes.navBarContainer}>
          <Grid
            container
            spacing={24}
            direction="row"
            alignItems="center"
            justify="space-evenly"
          >
            <Grid item>
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
            <Grid item>
              <div className={classes.logoContainer}>
                <img className={classes.logoIcon} src={logo} alt="logo" />
              </div>
            </Grid>
            <Grid item>
              <Avatar src={user.avatar} className={classes.accountIcon}>
                <AccountCircle />
              </Avatar>
            </Grid>
            <Grid item>
              <button
                className={classes.button}
                onClick={() => handleOpenModal()}
              >
                Tweetar
              </button>
            </Grid>
          </Grid>
        </Toolbar>
      </header>
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
