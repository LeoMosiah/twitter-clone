import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import { styles} from './styles/Modal';

function ModalContainer ({classes, handleCloseModal, isModalOpen}){
    return (
        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={isModalOpen}
          onClose={handleCloseModal}
        >
          <div className={classes.paper}>
            <Typography variant="h6" id="modal-title">
              Text in a modal
            </Typography>
            <Typography variant="subtitle1" id="simple-modal-description">
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            </Typography>
          </div>
        </Modal>
    );
}

ModalContainer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export const ModalComponent = withStyles(styles)(ModalContainer);
