import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useDispatch } from "react-redux";


import showModal from '../../redux/modal/modalActions';

import styles from "./Modal.module.css"

const modalRoot = document.querySelector('#modal-root');

export default function Modal({ children, onClose }) {

  useEffect(() => {
    document.body.style.overflow = "hidden";
  });


  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
  });

  useEffect(() => {
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  });


  const dispatch = useDispatch();

  const handleKeyDown = event => {
    if (event.code === 'Escape') {
      dispatch(showModal())
    }
  };

  const handleBackdropClick = event => {
    if (event.currentTarget === event.target) {
      dispatch(showModal())
    }
  };

  return createPortal(
    <div className={styles.overlay} onClick={handleBackdropClick}>
      <div className={styles.modal}>{children}</div>
    </div>,
    modalRoot,
  );
}


