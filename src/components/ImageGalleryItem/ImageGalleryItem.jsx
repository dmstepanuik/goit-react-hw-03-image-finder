import React from 'react';
import s from './ImageGalleryItem.module.css';

export default function ImageGalleryItem({ id, webformatURL, largeImageURL, onClickCard }) {
  return (
    <li className={s.imageGalleryItem}>
      <img
        onClick={onClickCard}
        lassName={s.imageGalleryItemImage}
        src={webformatURL}
        alt="img"
      />
    </li>
  );
}
