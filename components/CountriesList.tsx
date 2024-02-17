"use client";
import React from "react";

import { useSearchContext } from "@/context/searchContext";
import { Countries } from "@/types/types";
import { CountryCard } from "./CountryCard";

export const CountriesList = () => {
  const { data, paginate }: any = useSearchContext();

  let result = data?.countries;

  if (data?.countries.length > 10) {
    result = paginate;
  }

  return (
    <div className=" flex flex-wrap justify-center">
      {result?.map((country: Countries, index: number) => (
        <CountryCard country={country} key={index} />
      ))}
    </div>
  );
};
