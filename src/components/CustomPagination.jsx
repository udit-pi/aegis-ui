import React from 'react';
import { Pagination } from 'react-bootstrap';

const CustomPagination = ({ totalPages, currentPage, onPageChange, size="sm" }) => {
  const maxVisiblePages = 3; // Maximum visible pages at a time
  
  // Create the pagination numbers based on the total pages and current page
  const getVisiblePages = () => {
    const pages = [];
    const startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
    const endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);
    
    if (startPage > 1) {
      pages.push(1); // First page
      if (startPage > 2) {
        pages.push('ellipsis-left'); // Ellipsis before the start page
      }
    }
    
    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }
    
    if (endPage < totalPages) {
      if (endPage < totalPages - 1) {
        pages.push('ellipsis-right'); // Ellipsis after the end page
      }
      pages.push(totalPages); // Last page
    }
    
    return pages;
  };

  const visiblePages = getVisiblePages();

  return (
    <Pagination size='sm' className='m-0'>
      {/* <Pagination.First onClick={() => onPageChange(1)} disabled={currentPage === 1} /> */}
      <Pagination.Prev onClick={() => onPageChange(currentPage - 1)} disabled={currentPage === 1} />

      {visiblePages.map((page, index) =>
        page === 'ellipsis-left' || page === 'ellipsis-right' ? (
          <Pagination.Ellipsis key={index} />
        ) : (
          <Pagination.Item
            key={index}
            active={page === currentPage}
            onClick={() => onPageChange(page)}
          >
            {page}
          </Pagination.Item>
        )
      )}

      <Pagination.Next onClick={() => onPageChange(currentPage + 1)} disabled={currentPage === totalPages} />
      {/* <Pagination.Last onClick={() => onPageChange(totalPages)} disabled={currentPage === totalPages} /> */}
    </Pagination>
  );
};

export default CustomPagination;
