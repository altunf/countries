//import { GET_COUNTRIES } from "@/graphql/queries";
import { useQuery } from "@apollo/client";
import React, { createContext, useContext, useEffect, useState } from "react";

import { gql } from "@apollo/client";

const SearchContext = createContext({});

export const SearchContextProvider = ({ children }: any) => {
  const [searchTerm, setSearchTerm]: any = useState("");
  const [searchText, setSearchText]: any = useState("");
  const [groupText, setGroupText]: any = useState("");

  // fetching dynamically with input text
  let filterString;

  if (searchText && !groupText) {
    filterString = `{ name: { regex: "${searchText}" } }`;
    console.log("sadece search");
  } else if (searchText && groupText) {
    const groupValue = groupText.toUpperCase();
    filterString = `{ name: { regex: "${searchText}" }, continent: { eq: "${groupValue}" } }`;
    console.log("hem search hem group");
  }

  const GET_COUNTRIES = gql`
     query Query {
       countries(filter: ${filterString}) {
         name
         code
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
  const newData = data?.countries;
  console.log(newData);
  //input text filtering

  const textFilter = (props: string) => {
    const searchPattern: RegExp = /search:(.*)/;
    const nonGroupPattern: RegExp = /search:\s*(.*?)\s*group:/;
    const groupPattern: RegExp = /group:(.*)/;

    const searchMatch = props?.match(searchPattern);
    const nonGroupMatch = props?.match(nonGroupPattern);
    const groupMatch = props?.match(groupPattern);

    if (searchMatch && searchMatch[1]) setSearchText(searchMatch[1].trim());
    if (nonGroupMatch && nonGroupMatch[1])
      setSearchText(nonGroupMatch[1].trim());
    if (groupMatch && groupMatch[1]) setGroupText(groupMatch[1].trim());
  };

  const searchAndGroupCheck = (props: string) => {
    let result;
    const convert = props.toLowerCase();

    const control = searchTerm
      .toLowerCase()
      .split(" ")
      .find((filter: string) => filter.startsWith(convert));

    control === convert ? (result = true) : (result = false);

    return result;
  };

  return (
    <SearchContext.Provider
      value={{
        searchTerm,
        setSearchTerm,
        textFilter,
        searchAndGroupCheck,
        newData,
        searchText,
        groupText,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export const useSearchContext = () => useContext(SearchContext);
