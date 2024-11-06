import { useState } from "react";
import styles from "./pagination.module.css";

const Pagination = ({ totalItems, itemsPerPage, onPageChange }) => {
  const [activePage, setActivePage] = useState(1);
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handlePageClick = (pageNumber) => {
    setActivePage(pageNumber);
    onPageChange(pageNumber);
  };

  const handlePrevClick = () => {
    if (activePage > 1) {
      handlePageClick(activePage - 1);
    }
  };

  const handleNextClick = () => {
    if (activePage < totalPages) {
      handlePageClick(activePage + 1);
    }
  };

  return (
    <div className={styles.pagination}>
      <button
        disabled={activePage === 1}
        onClick={handlePrevClick}
        className={styles.pagination__button}
      >
        Prev
      </button>

      <ul className={styles.pagination__list}>
        {Array.from({ length: totalPages }, (_, index) => (
          <li
            key={index + 1}
            className={`${styles.pagination__page} ${
              activePage === index + 1 ? styles.active : ""
            }`}
            onClick={() => handlePageClick(index + 1)}
          >
            {index + 1}
          </li>
        ))}
      </ul>

      <button
        disabled={activePage === totalPages}
        onClick={handleNextClick}
        className={styles.pagination__button}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
