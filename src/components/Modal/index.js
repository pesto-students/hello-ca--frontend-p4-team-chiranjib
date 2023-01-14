/**
 *
 * Usage
 *
 * <Modal
 *      open={isOpen}
 *      handleClose={() => {}}  //  func to toggle
 *      showCloseBtn=(true)     //  wether to show close btn - it is absolute.
 * >
 *  <Contenr can header and buttons forms etc. >
 * </Modal
 */

import React from "react";
import { Dialog, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import "./style.scss";

const Modal = ({
  open = false,
  handleClose = () => {},
  showCloseBtn = false,
  children,
}) => {
  return (
    <Dialog open={open} onClose={handleClose} className="modal-container">
      {showCloseBtn && (
        <IconButton className="close-icons" onClick={handleClose}>
          <CloseIcon />
        </IconButton>
      )}
      {children}
    </Dialog>
  );
};

export default Modal;
