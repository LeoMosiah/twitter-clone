import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { NavBar } from "./NavBar";
import { Content } from "./Content";

export function HomeComponent({
  user,
  tweets,
  handleSubmit,
  handleChange,
  body,
  isModalOpen,
  handleCloseModal,
  handleOpenModal,
  isEditing
}) {
  return (
    <Fragment>
      <NavBar
        user={user}
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        body={body}
        isModalOpen={isModalOpen}
        handleCloseModal={handleCloseModal}
        handleOpenModal={handleOpenModal}
      />
      <Content
        tweets={tweets}
        user={user}
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        body={body}
        isEditing={isEditing}
      />
    </Fragment>
  );
}

HomeComponent.propTypes = {
  tweets: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired
};
