"use client";
import { SearchContextProvider } from "@/context/searchContext";

export default function SearchProvider({ children }: any) {
  return <SearchContextProvider>{children}</SearchContextProvider>;
}
