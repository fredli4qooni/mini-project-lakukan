import { Search } from "lucide-react";

export const SearchInput = () => {
  return (
    <div className="relative hidden md:block">
      <input
        type="text"
        placeholder="What are you looking for?"
        className="bg-gray-100 text-sm py-2 pl-4 pr-10 rounded w-[243px] focus:outline-none focus:ring-1 focus:ring-gray-300"
      />
      <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
    </div>
  );
};