"use client";
import React from "react";

import { useSearchContext } from "@/context/searchContext";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const SearchBar = () => {
  const { searchTerm, setSearchTerm, textFilter, result }: any =
    useSearchContext();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    textFilter(searchTerm);
  };

  return (
    <main>
      <form className="flex w-full max-w-sm items-center space-x-2">
        <Input
          type="text"
          value={searchTerm}
          onChange={handleChange}
          placeholder="search:tt group:eu"
        />

        <Button onClick={handleClick}>Search</Button>
      </form>
    </main>
  );
};
