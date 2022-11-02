import React from 'react';
import s from './Modal.module.css';

export default function Modal({ imgUrl, toggleModal }) {
  return (
    <div onClick={toggleModal} className={s.overlay}>
      <div className={s.modal}>
        <img src={imgUrl} alt="img" />
      </div>
    </div>
  );
}
