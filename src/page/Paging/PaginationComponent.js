import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import Pagination from "react-bootstrap/Pagination";

function PaginationComponent({ currentPage, totalPages, onPageChange }) {
  // Tạo một mảng chứa số trang để hiển thị
  const pageNumbers = Array.from(Array(Number.parseInt(totalPages.length / 2) + 1).keys());
  return (
      <Pagination
        
      >
          <Pagination.Prev disabled={currentPage === 1} onClick={() => onPageChange(pre => ({...pre, pageIndex: currentPage - 1}))}  />
          
          {pageNumbers.map((value, index) => {
              return <Pagination.Item onClick={() => onPageChange(pre => ({...pre, pageIndex: value + 1}))} key={index} >{value + 1}</Pagination.Item> 
          })}
          <Pagination.Next disabled={currentPage === Number.parseInt(totalPages.length / 2) + 1 } onClick={() => onPageChange(pre => ({...pre, pageIndex: currentPage + 1}))} />
      </Pagination>
  );
}

export default PaginationComponent;
