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
  const { data, paginate, setPaginate }: any = useSearchContext();
  const [numberOfPages, setNumberOfPages] = useState<number>(0);
  const [selectedIndex, setSelectedIndex] = useState<number>(0);

  useEffect(() => {
    const dataLength: number = data?.countries.length || 0;
    dataLength > 10 && handlePaginationClick(1);

    const pages: number = Math.ceil(dataLength / 10);
    setNumberOfPages(pages);
  }, [data]);

  const handlePaginationClick = (item: number) => {
    setSelectedIndex(item);
    const perPage: any = data?.countries.slice((item - 1) * 10, item * 10);

    setPaginate(perPage);
  };

  return (
    <main>
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            {selectedIndex > 1 && (
              <PaginationPrevious
                href="#"
                onClick={() => {
                  handlePaginationClick(selectedIndex - 1);
                }}
              />
            )}
          </PaginationItem>
          {[...Array(numberOfPages)].map((_, index: number) => (
            <PaginationItem
              key={index}
              onClick={() => {
                handlePaginationClick(index + 1);
              }}
            >
              <PaginationLink href="#" isActive={index + 1 === selectedIndex}>
                {index + 1}
              </PaginationLink>
            </PaginationItem>
          ))}

          <PaginationItem>
            {numberOfPages > selectedIndex && (
              <PaginationNext
                href="#"
                onClick={() => {
                  handlePaginationClick(selectedIndex + 1);
                }}
              />
            )}
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </main>
  );
};
