import React, { FC } from "react";

import cl from "./Pagination.module.css";

interface PaginationProps {
  onPageChange: (page: number) => void;
  currentPage: number;
}

const Pagination: FC<PaginationProps> = ({ onPageChange, currentPage }) => {
  const nextPage = () => {
    onPageChange(currentPage + 10);
  };

  const previousPage = () => {
    onPageChange(currentPage > 0 ? currentPage - 10 : 0);
  };

  return (
    <div className={cl.pagination}>
      <button onClick={previousPage} className={cl.arrow}>
        &#x2BC7;
      </button>
      <div className={cl.pagination_inner}>Pagination</div>
      <button onClick={nextPage} className={cl.arrow}>
        &#x2BC8;
      </button>
    </div>
  );
};

export default Pagination;
