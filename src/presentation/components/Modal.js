import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Modal from "@material-ui/core/Modal";
import { styles } from "./styles/Modal";
import Card from "@material-ui/core/es/Card/Card";

function ModalContainer({
  classes,
  handleCloseModal,
  isModalOpen,
  handleSubmit,
  body,
  handleChange
}) {
  return (
    <Modal
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
      open={isModalOpen}
      onClose={() => handleCloseModal()}
    >
      <Card className={classes.container}>
        <div className={classes.header}>
          <Typography align="center" variant="h6" className={classes.title}>
            Publicar um novo Tweet
          </Typography>
          <span
            className={classes.closeButton}
            onClick={() => handleCloseModal()}
          >
            &times;
          </span>
        </div>
        <div className={classes.content}>
          <div className={classes.formContainer}>
            <textarea
              classes={classes.form}
              placeholder="O que está acontencendo?"
              className={classes.form}
              onChange={event => handleChange(event.target.value)}
            />
          </div>
          <div className={classes.footer}>
            <button
              className={classes.button}
              onClick={() => handleSubmit(body)}
            >
              Tweetar
            </button>
          </div>
        </div>
      </Card>
    </Modal>
  );
}

ModalContainer.propTypes = {
  classes: PropTypes.object.isRequired
};

ModalContainer.displayName = "Modal";

export const ModalComponent = withStyles(styles)(ModalContainer);
