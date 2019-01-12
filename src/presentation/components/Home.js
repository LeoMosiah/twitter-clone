import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { NavBar } from "./NavBar";
import { Content } from "./Content";

export function HomeComponent({ user, tweets }) {
  return (
    <Fragment>
      <NavBar user={user} />
      <Content tweets={tweets} user={user} />
    </Fragment>
  );
}

HomeComponent.propTypes = {
  tweets: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired
};
