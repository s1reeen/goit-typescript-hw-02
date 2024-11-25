import css from "./ImageGallery.module.css";

import ImageCard from "../ImageCard/ImageCard";
import { Image, onModal } from "../types";

interface ImageGalleryProps {
  item: Image[];
  isOpen: (data: onModal) => void;
}

function ImageGallery({ item, isOpen }: ImageGalleryProps) {
  return (
    <ul className={css.list}>
      {item.map((photo) => (
        <li key={photo.id} className={css.item}>
          <ImageCard data={photo} onModal={isOpen} />
        </li>
      ))}
    </ul>
  );
}

export default ImageGallery;
