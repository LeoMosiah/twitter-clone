import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core";
import HomeOutlined from "@material-ui/icons/HomeOutlined";
import SearchIcon from "@material-ui/icons/Search";
import NotificationsOutlined from "@material-ui/icons/NotificationsOutlined";
import EmailOutlined from "@material-ui/icons/EmailOutlined";
import FlashOnOutlined from "@material-ui/icons/FlashOnOutlined";
import Toolbar from "@material-ui/core/Toolbar";
import Avatar from "@material-ui/core/Avatar";
import AccountCircle from "@material-ui/icons/AccountCircle";
import { styles } from "./styles/NavBar";
import Typography from "@material-ui/core/es/Typography/Typography";
import { ModalComponent } from "./Modal";
import InputBase from "@material-ui/core/InputBase";
import logo from "../assets/logo.png";

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
    <header className={classes.header}>
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
        <div >
          <img className={classes.logoIcon} src={logo} alt="logo" />
        </div>

        <div className={classes.search}>
          <div className={classes.searchIcon}>
            <SearchIcon />
          </div>
          <InputBase
            placeholder="Search…"
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput
            }}
          />
        </div>
        <Avatar src={user.avatar} className={classes.accountIcon}>
          <AccountCircle />
        </Avatar>
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
    </header>
  );
}

NavBar.propTypes = {
  classes: PropTypes.object.isRequired
};

NavBar.displayName = "NavBar";

export const NavBarComponent = withStyles(styles)(NavBar);
