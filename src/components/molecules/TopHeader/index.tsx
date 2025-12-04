import Link from "next/link";
import { ChevronDown } from "lucide-react";

export const TopHeader = () => {
  return (
    <div className="bg-black text-white text-sm py-3">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="w-[100px] hidden md:block"></div>

        <div className="flex items-center gap-2 text-center flex-1 justify-center">
          <span>Summer Sale For All Swim Suits And Free Express Delivery – OFF 50%!</span>
          <Link href="/shop" className="font-bold underline hover:text-gray-300">
            ShopNow
          </Link>
        </div>

        <div className="flex items-center gap-1 cursor-pointer w-[100px] justify-end">
          <span>English</span>
          <ChevronDown className="w-4 h-4" />
        </div>
      </div>
    </div>
  );
};