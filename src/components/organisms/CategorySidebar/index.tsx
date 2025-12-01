import Link from "next/link";
import { ChevronRight } from "lucide-react";

const categories = [
  { name: "Woman’s Fashion", hasSubmenu: true },
  { name: "Men’s Fashion", hasSubmenu: true },
  { name: "Electronics", hasSubmenu: false },
  { name: "Home & Lifestyle", hasSubmenu: false },
  { name: "Medicine", hasSubmenu: false },
  { name: "Sports & Outdoor", hasSubmenu: false },
  { name: "Baby’s & Toys", hasSubmenu: false },
  { name: "Groceries & Pets", hasSubmenu: false },
  { name: "Health & Beauty", hasSubmenu: false },
];

export const CategorySidebar = () => {
  return (
    <aside className="w-full md:w-[250px] border-r border-gray-200 pt-10 pb-4 hidden md:flex flex-col gap-4 bg-white pr-6">
      {categories.map((category) => (
        <Link
          key={category.name}
          href={`/category/${category.name.toLowerCase().replace(/ /g, "-")}`}
          className="flex justify-between items-center text-black hover:text-primary transition-colors cursor-pointer"
        >
          <span>{category.name}</span>
          {category.hasSubmenu && <ChevronRight className="w-4 h-4" />}
        </Link>
      ))}
    </aside>
  );
};