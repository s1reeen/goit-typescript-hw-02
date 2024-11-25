import { useEffect, useState } from "react";

import { fetchPhotosTopic } from "../searchimage.js";
import SearchBar from "../SearchBar/SearchBar.jsx";
import ImageGallery from "../ImageGallery/ImageGallery.jsx";
import ImageModal from "../ImageModal/ImageModal.jsx";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn.jsx";

import css from "./App.module.css";
import Loader from "../Loader/Loader.jsx";
import ErrorMessage from "../ErrorMessage/ErrorMessage.jsx";
import { Image, onModal } from "../types.js";

const App = () => {
  const [query, setQuery] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [photos, setPhotos] = useState<Image[]>([]);
  const [totalPages, setTotalPages] = useState<number | null>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [photoData, setPhotoData] = useState<onModal | null>(null);
  const [errorMessage, setErrorMessage] = useState<string>("");

  useEffect(() => {
    if (!query) return;

    const fetchPhotos = async (): Promise<void> => {
      try {
        setError(false);
        setLoading(true);
        const data = await fetchPhotosTopic(query, currentPage);
        setTotalPages(data.total_pages);
        setPhotos((prevImages: Image[]) => [...prevImages, ...data.results]);
        setTimeout(() => {
          window.scrollBy({
            top: window.innerHeight,
            behavior: "smooth",
          });
        }, 200);
      } catch (error: any) {
        setPhotos([]);
        setError(true);
        setErrorMessage(error.message);
        setTotalPages(null);
      } finally {
        setLoading(false);
      }
    };
    fetchPhotos();
  }, [query, currentPage]);

  const handleSearch = (query: string): void => {
    setPhotos([]);
    setCurrentPage(1);
    setQuery(query);
  };

  const handleLoadMore = (): void => {
    setCurrentPage(currentPage + 1);
  };

  const fetchIsOpen = (data: onModal): void => {
    setIsOpen(true);
    setPhotoData(data);
    document.body.style.overflow = "hidden";
  };

  const modalIsClosed = (): void => {
    setIsOpen(false);
    setPhotoData(null);
    document.body.style.overflow = "";
  };

  return (
    <div className={css.appDiv}>
      <SearchBar onSearch={handleSearch} />
      {error && <ErrorMessage msg={errorMessage} />}
      {photos != null && <ImageGallery item={photos} isOpen={fetchIsOpen} />}
      {loading && <Loader />}
      {isOpen && photoData != null && (
        <ImageModal
          modalData={photoData}
          isOpen={isOpen}
          isClosed={modalIsClosed}
        />
      )}
      {currentPage < (totalPages || 0) && (
        <LoadMoreBtn onClick={handleLoadMore} />
      )}
    </div>
  );
};

export default App;
