import { GET_COUNTRIES } from "@/graphql/queries";
import { useQuery } from "@apollo/client";
import React, { createContext, useContext, useEffect, useState } from "react";

const SearchContext = createContext({});

export const SearchContextProvider = ({ children }: any) => {
  const [searchTerm, setSearchTerm]: any = useState("");

  const { data, loading, error } = useQuery(GET_COUNTRIES);

  const textFilter = () => {
    const splittingText = searchTerm.split(" ");

    const search: string = splittingText.find((filter: string) =>
      filter.startsWith("search:")
    );
    const group: string = splittingText.find((filter: string) =>
      filter.startsWith("group:")
    );

    const searchPattern = /search:(.*?)group:/;
    const groupPattern = /group:(.*)/;

    const searchValue = search ? searchTerm.match(searchPattern) : "sda";
    const groupValue = group ? searchTerm.match(groupPattern) : "sda";

    console.log(searchValue[1]);
    console.log(groupValue[1]);
  };

  // console.log(data?.countries);

  return (
    <SearchContext.Provider value={{ searchTerm, setSearchTerm, textFilter }}>
      {children}
    </SearchContext.Provider>
  );
};

export const useSearchContext = () => useContext(SearchContext);
