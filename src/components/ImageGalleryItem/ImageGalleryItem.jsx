import React from 'react';
import s from './ImageGalleryItem.module.css';

export default function ImageGalleryItem() {
  return (
    <li className={s.imageGalleryItem}>
      <img className={s.imageGalleryItemImage} src="" alt="" />
    </li>
  );
}
