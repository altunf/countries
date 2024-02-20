"use client";
import React from "react";

import { useSearchContext } from "@/context/searchContext";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const SearchBar = () => {
  const { searchTerm, setSearchTerm, textFilter, searchText, groupText }: any =
    useSearchContext();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = (e: React.MouseEvent) => {
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

        <Button onClick={handleSubmit}>Search</Button>
      </form>
    </main>
  );
};
