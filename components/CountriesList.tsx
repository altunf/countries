"use client";
import React from "react";
import Image from "next/image";

import { useSearchContext } from "@/context/searchContext";
import { Countries } from "@/types/types";
import { CountryCard } from "./CountryCard";

import { useToast } from "./ui/use-toast";

export const CountriesList = () => {
  const { result, loading, error }: any = useSearchContext();
  const { toast }: any = useToast();

  const list = result?.map((country: Countries, index: number) => (
    <CountryCard country={country} key={index} id={index} />
  ));

  const errorSrc: string = "/click-here-animate.svg";
  const loadingSrc: string = "/loading-animate.svg";

  const msg = (imgSrc: string) => {
    return (
      <div className="flex justify-center items-center   ">
        <Image src={imgSrc} height={500} width={500} alt="loading" />
      </div>
    );
  };

  if (loading) return msg(loadingSrc);
  if (error) return msg(errorSrc);

  return (
    <div className=" flex flex-wrap justify-center gap-4 my-4">{list}</div>
  );
};
