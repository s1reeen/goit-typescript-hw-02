import { Image, onModal } from "../types";
import css from "./ImageCard.module.css";

// type ImageCardProps = Image & onModal;
interface ImageCardProps {
  data: Image;
  onModal: (onClick: onModal) => void;
}

function ImageCard({
  data: {
    alt_description,
    urls: { regular, small },
  },
  onModal,
}: ImageCardProps) {
  const dataModal = (): void => {
    onModal({ alt_description, regular });
  };
  return (
    <img
      onClick={dataModal}
      src={small}
      alt={alt_description}
      className={css.img}
    />
  );
}

export default ImageCard;
