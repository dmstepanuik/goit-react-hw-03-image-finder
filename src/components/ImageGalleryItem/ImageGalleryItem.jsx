import React from 'react';
import s from './ImageGalleryItem.module.css';

export default function ImageGalleryItem({ id, webformatURL, largeImageURL }) {
  return (
    <li className={s.imageGalleryItem}>
  <img className={s.imageGalleryItemImage} src={webformatURL} alt='img' />
    </li>
  );
}
