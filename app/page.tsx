import { CountryCard } from "@/components/country-card";
import { PageHeader } from "@/components/page-header";
import { SearchBar } from "@/components/page-searchbar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <PageHeader />
      <SearchBar />
      <CountryCard />
    </main>
  );
}
