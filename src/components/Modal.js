import React from "react";
import { Lightbox } from "react-modal-image";

const Modal = ({ isOpen, onClose, image }) =>
  isOpen && (
    <Lightbox
      medium={image.normalUrl}
      large={image.normalUrl}
      onClose={onClose}
      alt={image.description}
    />
  );

export default Modal;
