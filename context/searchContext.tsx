import React, { createContext, useContext, useEffect, useState } from "react";

import { useQueryState } from "nuqs";

import { useQuery } from "@apollo/client";
import { gql } from "@apollo/client";
import { useToast } from "@/components/ui/use-toast";

const SearchContext = createContext({});

export const SearchContextProvider = ({ children }: any) => {
  const [searchTerm, setSearchTerm]: any = useState("search:a group:eu");

  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const [numberOfPages, setNumberOfPages] = useState<number>(0);
  const [paginate, setPaginate] = useState();

  const [selectedItem, setSelectedItem]: any = useState();
  const [colorChange, setColorChange] = useState(true);

  const [searchText, setSearchText]: any = useQueryState("search");
  const [groupText, setGroupText]: any = useQueryState("group");

  const { toast } = useToast();

  //text filtering
  const textFilter = (props: string) => {
    const searchPattern: RegExp = /search:(.*?)(?:\s*group:\s*(.*))?\s*$/;
    const searchMatch = props?.match(searchPattern);

    searchMatch && searchMatch[1]
      ? setSearchText(searchMatch[1].trim())
      : setSearchText(null);

    searchMatch && searchMatch[2]
      ? setGroupText(searchMatch[2].trim())
      : setGroupText(null);
  };

  // checks for the strings 'search:' or 'group:' in the input text.
  const searchAndGroupCheck = (props: string) =>
    searchTerm.toLowerCase().includes(props.toLowerCase());

  // dynamic fetch  with input text.
  let filterString;
  const nameFilter = `name: { regex: "${searchText}" }`;
  const continentFilter = `continent: { eq: "${groupText?.toUpperCase()}" } `;

  if (searchText) {
    filterString = groupText
      ? `{${nameFilter}, ${continentFilter} }`
      : `{ ${nameFilter} }`;
  }

  const GET_COUNTRIES = gql`
       query Query  {
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

  let result = data?.countries;
  if (data?.countries.length > 10) {
    result = paginate;
  }

  useEffect(() => {
    if (result?.length <= 0) {
      toast({
        title: "Uh oh! Something went wrong.",
        description:
          "No results were found matching your search criteria. Capitalize the first letter or use another search term.",
      });
    }
  }, [result]);

  return (
    <SearchContext.Provider
      value={{
        searchTerm,
        setSearchTerm,
        textFilter,
        searchAndGroupCheck,
        setPaginate,
        paginate,
        selectedItem,
        setSelectedItem,
        colorChange,
        setColorChange,
        result,
        data,
        loading,
        error,
        searchText,
        groupText,
        selectedIndex,
        setSelectedIndex,
        numberOfPages,
        setNumberOfPages,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export const useSearchContext = () => useContext(SearchContext);
