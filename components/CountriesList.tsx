"use client";
import React from "react";

import { useSearchContext } from "@/context/searchContext";
import { Countries } from "@/types/types";
import { CountryCard } from "./CountryCard";

export const CountriesList = () => {
  const { result }: any = useSearchContext();

  const list = result?.map((country: Countries, index: number) => (
    <CountryCard country={country} key={index} id={index} />
  ));
  console.log(result);

  return (
    <div className=" flex flex-wrap justify-center gap-4 my-4">
      {result ? list : "Press Search Button"}
    </div>
  );
};
