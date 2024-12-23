import { SearchContainer } from "@/components/search/SearchContainer";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-100 p-4 sm:p-8 lg:p-12">
      <div className="mx-auto max-w-5xl bg-white rounded-xl shadow-lg">
        <SearchContainer />
      </div>
    </main>
  );
}