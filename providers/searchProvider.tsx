"use client";
import { SearchContextProvider } from "@/context/searchContext";
import { Suspense } from "react";

export default function SearchProvider({ children }: any) {
  return (
    <Suspense>
      <SearchContextProvider>{children}</SearchContextProvider>{" "}
    </Suspense>
  );
}
