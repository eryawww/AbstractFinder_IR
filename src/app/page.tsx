import { SearchComponent } from "@/components/ui/search";
import Image from "next/image";

export default function Home() {
  return (
    <div className="absolute bg-gunmetal insert-0 p-12 w-full min-h-screen">
      <div className="bg-white border rounded-lg">
        <SearchComponent/>
      </div>
    </div>
  );
}
