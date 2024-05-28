import React from 'react';

const Pagination = ({ totalItems, itemsPerPage, currentPage, onPageChange }) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handleClick = (pageNumber) => {
    onPageChange(pageNumber);
  };

  return (
    <div className="pagination">
      {[...Array(totalPages).keys()].map(pageNumber => (
        <button
          key={pageNumber}
          onClick={() => handleClick(pageNumber + 1)}
          disabled={currentPage === pageNumber + 1}
        >
          {pageNumber + 1}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
