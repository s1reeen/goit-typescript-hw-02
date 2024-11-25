import { MouseEvent } from "react";
import css from "./LoadMoreBtn.module.css";

interface LoadMoreBtnProps {
  onClick: (evt: MouseEvent<HTMLButtonElement>) => void;
}

function LoadMoreBtn({ onClick }: LoadMoreBtnProps) {
  const fetchMore = (evt: MouseEvent<HTMLButtonElement>): void => {
    onClick(evt);
  };
  return (
    <button type="button" onClick={fetchMore} className={css.btn}>
      Load More
    </button>
  );
}

export default LoadMoreBtn;
