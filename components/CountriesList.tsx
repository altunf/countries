"use client";
import React from "react";
import Image from "next/image";

import { useSearchContext } from "@/context/searchContext";
import { Countries } from "@/types/types";
import { CountryCard } from "./CountryCard";
import { Divide } from "lucide-react";

export const CountriesList = () => {
  const { result, loading, error }: any = useSearchContext();

  const list = result?.map((country: Countries, index: number) => (
    <CountryCard country={country} key={index} id={index} />
  ));

  const errorSrc: string = "/click-here-animate.svg";
  const loadingSrc: string = "/loading-animate.svg";

  const msg = (imgSrc: string) => {
    let display = false;

    imgSrc === errorSrc && (display = true);
    const show = display ? "Press Search" : "Loading...";

    return (
      <div className="flex justify-center items-center flex-col ">
        <Image
          src={imgSrc}
          height={500}
          width={500}
          alt="loading"
          className={display ? "transform -scale-x-100" : ""}
        />

        <div>{show}</div>
      </div>
    );
  };

  if (loading) return msg(loadingSrc);
  if (error) return msg(errorSrc);

  return (
    <div className=" flex flex-wrap justify-center gap-4 my-4">{list}</div>
  );
};
