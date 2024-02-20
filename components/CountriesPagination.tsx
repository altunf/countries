"use client";
import React, { useEffect, useState } from "react";
import { useSearchContext } from "@/context/searchContext";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

export const CountriesPagination = () => {
  const {
    data,
    setPaginate,
    selectedIndex,
    setSelectedIndex,
    numberOfPages,
    setNumberOfPages,
  }: any = useSearchContext();

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const totalPages = Math.ceil(data?.countries.length / itemsPerPage);

  const str = "...";

  const getPageNumbers = () => {
    const pageNumbers = [];
    const maxPagesToShow = 5;

    if (totalPages <= maxPagesToShow) {
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      const leftEllipsis = currentPage > 3;
      const rightEllipsis = currentPage < totalPages - 2;

      if (!leftEllipsis) {
        for (let i = 1; i <= 3; i++) {
          pageNumbers.push(i);
        }
        pageNumbers.push(str);
        pageNumbers.push(totalPages - 1);
        pageNumbers.push(totalPages);
      } else if (!rightEllipsis) {
        pageNumbers.push(1);
        pageNumbers.push(2);
        pageNumbers.push(str);
        for (let i = totalPages - 2; i <= totalPages; i++) {
          pageNumbers.push(i);
        }
      } else {
        pageNumbers.push(1);
        pageNumbers.push(str);
        for (let i = currentPage - 1; i <= currentPage + 1; i++) {
          pageNumbers.push(i);
        }
        pageNumbers.push(str);
        pageNumbers.push(totalPages);
      }
    }

    return pageNumbers;
  };

  const handlePaginationClick = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    setSelectedIndex(pageNumber);
    const startIndex = (pageNumber - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const pageSize = data?.countries.slice(startIndex, endIndex);
    setPaginate(pageSize);
  };

  useEffect(() => {
    const dataLength: number = data?.countries.length || 0;
    dataLength > 10 && handlePaginationClick(1);

    setNumberOfPages(totalPages);
  }, [data]);

  return (
    <main>
      {numberOfPages > 1 && (
        <Pagination>
          <PaginationContent>
            <PaginationItem
              className={
                currentPage > 1
                  ? ""
                  : "text-muted-foreground pointer-events-none"
              }
            >
              <PaginationPrevious
                href="#"
                onClick={() => handlePaginationClick(currentPage - 1)}
              />
            </PaginationItem>
            {getPageNumbers().map((pageNumber, index) => (
              <PaginationItem key={index}>
                {pageNumber === "..." ? (
                  <PaginationEllipsis />
                ) : (
                  <PaginationLink
                    href="#"
                    onClick={() => handlePaginationClick(pageNumber as number)}
                    isActive={pageNumber == selectedIndex}
                  >
                    {pageNumber}
                  </PaginationLink>
                )}
              </PaginationItem>
            ))}
            <PaginationItem
              className={
                currentPage < totalPages
                  ? ""
                  : "text-muted-foreground pointer-events-none"
              }
            >
              <PaginationNext
                href="#"
                onClick={() => handlePaginationClick(currentPage + 1)}
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      )}
    </main>
  );
};
