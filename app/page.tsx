import { CountriesList } from "@/components/CountriesList";
import { SearchBar } from "@/components/SearchBar";
import { PageHeader } from "@/components/Header";
import { CountriesPagination } from "@/components/CountriesPagination";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <PageHeader />
      <SearchBar />
      <CountriesList />
      <CountriesPagination />
    </main>
  );
}
