import React from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const prevPage = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const nextPage = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <div className="pagination">
      <button onClick={prevPage}>Previous</button>
      <span>{`Page ${currentPage} of ${totalPages}`}</span>
      <button onClick={nextPage}>Next</button>
    </div>
  );
};

export default Pagination;


