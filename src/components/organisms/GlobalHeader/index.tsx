import Link from "next/link";
import { Heart, ShoppingCart } from "lucide-react";
import { TopHeader } from "@/components/molecules/TopHeader";
import { NavBar } from "@/components/molecules/NavBar";
import { SearchInput } from "@/components/molecules/SearchInput";

export const GlobalHeader = () => {
  return (
    <header className="flex flex-col border-b border-gray-200">
      <TopHeader />

      <div className="bg-white py-4 mt-5 mb-4">
        <div className="container mx-auto px-4 flex justify-between items-center">

          <Link href="/" className="text-2xl font-bold tracking-wider text-black">
            Exclusive
          </Link>

          <NavBar />

          <div className="flex items-center gap-6">
            <SearchInput />

            <div className="flex items-center gap-4">
              <button className="relative hover:text-primary transition-colors">
                <Heart className="w-6 h-6" />
              </button>

              <button className="relative hover:text-primary transition-colors">
                <ShoppingCart className="w-6 h-6" />
              </button>
            </div>
          </div>

        </div>
      </div>
    </header>
  );
};