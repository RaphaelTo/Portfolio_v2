import React from 'react';
import { Modal as ModalMaterial } from '@material-ui/core';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';

type ModalProps = {
  openState: boolean;
  closeMethod: any;
  children?: any;
  cssClass?: any;
};

const useStyle = makeStyles({
  modal: {
    display: 'flex',
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const Modal: React.FC<ModalProps> = ({ openState, closeMethod, children, cssClass }) => {
  const classes = useStyle();

  return (
    <ModalMaterial
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      className={clsx(classes.modal, cssClass)}
      open={openState}
      onClose={closeMethod}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={openState}>{children}</Fade>
    </ModalMaterial>
  );
};

export default Modal;
