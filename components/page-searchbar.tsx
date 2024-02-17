"use client";
import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useSearchContext } from "@/context/searchContext";

export const SearchBar = () => {
  const { searchTerm, setSearchTerm, textFilter }: any = useSearchContext();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    textFilter(searchTerm);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  return (
    <main>
      <form
        onSubmit={handleSubmit}
        className="flex w-full max-w-sm items-center space-x-2"
      >
        <Input
          type="text"
          value={searchTerm}
          onChange={handleChange}
          placeholder="search:tt group:eu"
        />
        <Button type="submit">Search</Button>
      </form>
    </main>
  );
};
