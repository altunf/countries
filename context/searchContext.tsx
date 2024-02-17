import React, { createContext, useContext, useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { gql } from "@apollo/client";
import { Countries } from "@/types/types";

const SearchContext = createContext({});

export const SearchContextProvider = ({ children }: any) => {
  const [searchTerm, setSearchTerm]: any = useState("");
  const [searchText, setSearchText]: any = useState("");
  const [groupText, setGroupText]: any = useState("");
  const [paginate, setPaginate] = useState();

  //text filtering
  const textFilter = (props: string) => {
    const searchPattern: RegExp = /search:(.*?)(?:\s*group:\s*(.*))?\s*$/;
    const searchMatch = props?.match(searchPattern);

    if (searchMatch && searchMatch[1]) setSearchText(searchMatch[1].trim());
    if (searchMatch && searchMatch[2]) setGroupText(searchMatch[2].trim());
  };

  // checks for the strings 'search:' or 'group:' in the input text.
  const searchAndGroupCheck = (props: string) =>
    searchTerm.toLowerCase().includes(props.toLowerCase());

  // dynamic fetch  with input text.
  let filterString;
  const nameFilter = `name: { regex: "${searchText}" }`;
  const continentFilter = `continent: { eq: "${groupText.toUpperCase()}" } `;

  if (searchText) {
    filterString = groupText
      ? `{${nameFilter}, ${continentFilter} }`
      : `{ ${nameFilter} }`;
  }

  const GET_COUNTRIES = gql`
       query Query {
         countries(filter: ${filterString}) {
           name
           code
           emoji
           currency
           continent {
             name
           }
           languages {
             name
           }
         }
       }
     `;

  const { data, loading, error } = useQuery(GET_COUNTRIES);

  return (
    <SearchContext.Provider
      value={{
        searchTerm,
        setSearchTerm,
        textFilter,
        searchAndGroupCheck,
        data,
        setPaginate,
        paginate,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export const useSearchContext = () => useContext(SearchContext);
