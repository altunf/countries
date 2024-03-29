import { CountriesList } from "@/components/CountriesList";
import { SearchBar } from "@/components/SearchBar";
import { CountriesPagination } from "@/components/CountriesPagination";
import { Nav } from "@/components/Nav";

export default function Home() {
  return (
    <main className="mx-5 my-3 ">
      <Nav />
      <div className="flex flex-col items-center justify-between py-6">
        <SearchBar />
        <CountriesList />
        <CountriesPagination />
      </div>
    </main>
  );
}
