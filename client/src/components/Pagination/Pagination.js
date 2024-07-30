import React, { useState, useEffect } from "react";
import styles from "./Pagination.module.css";
import { calculatePages } from "../../services/calculatePages";
const Pagination = ({
  currentPage,
  totalItems,
  pageSize,
  onPageChange,
  setPageSize,
  setCurrentPage,
}) => {
  const [pages, setPages] = useState([]);
  const pageCount = Math.ceil(totalItems / pageSize);

  const handlePageSizeChange = (event) => {
    setPageSize(+event.target.value);
    setCurrentPage(1);
  };
  useEffect(() => {
    setPages(calculatePages(currentPage, pageCount));
  }, [currentPage, pageCount]);

  return (
    <div className={styles.paginationContainer}>
      <div className={styles.pageSizeSelector}>
        <label htmlFor="pageSize">Items per page:</label>
        <select id="pageSize" value={pageSize} onChange={handlePageSizeChange}>
          <option value={5}>5</option>
          <option value={10}>10</option>
          <option value={20}>20</option>
          <option value={50}>50</option>
        </select>
      </div>
      <div className={styles.pagination}>
        <button
          onClick={() => onPageChange(Math.max(1, currentPage - 1))}
          disabled={currentPage === 1}
          className={styles.button}
        >
          &laquo;
        </button>
        {pages.map((page, index) => (
          <button
            key={index}
            onClick={() => onPageChange(page)}
            disabled={currentPage === page || page === "..."}
            className={
              currentPage === page
                ? styles.active
                : page === "..."
                ? styles.ellipsis
                : ""
            }
          >
            {page}
          </button>
        ))}
        <button
          onClick={() => onPageChange(Math.min(pageCount, currentPage + 1))}
          disabled={currentPage === pageCount}
          className={styles.button}
        >
          &raquo;
        </button>
      </div>
    </div>
  );
};

export default Pagination;
