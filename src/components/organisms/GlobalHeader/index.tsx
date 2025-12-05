"use client";

import Link from "next/link";
import { Heart, ShoppingCart, User, LogOut } from "lucide-react";
import { TopHeader } from "@/components/molecules/TopHeader";
import { NavBar } from "@/components/molecules/NavBar";
import { SearchInput } from "@/components/molecules/SearchInput";
import { useCartStore } from "@/store/useCartStore";
import { useAuthStore } from "@/store/useAuthStore";

export const GlobalHeader = () => {
  const { totalItems } = useCartStore();

  const { isAuthenticated, username, logout } = useAuthStore();

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

              <Link href="/cart" className="relative hover:text-primary transition-colors group">
                <ShoppingCart className="w-6 h-6" />

                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 bg-danger text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </Link>

              {isAuthenticated ? (
                <div className="relative group cursor-pointer ml-2">
                  <div className="bg-danger text-white p-1 rounded-full transition-transform hover:scale-105">
                    <User className="w-5 h-5" />
                  </div>

                  <div className="absolute right-0 top-full mt-2 w-48 bg-black/95 text-white rounded shadow-xl backdrop-blur-sm opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 flex flex-col p-2 border border-gray-800">
                    <div className="px-3 py-2 text-sm border-b border-gray-700 mb-1 text-gray-300">
                      Hi, <span className="font-semibold text-white">{username}</span>
                    </div>


                    <button
                      onClick={() => {
                        logout();
                      }}
                      className="flex items-center gap-2 px-3 py-2 hover:bg-white/10 rounded text-sm text-left text-red-400 hover:text-red-300 transition-colors w-full"
                    >
                      <LogOut className="w-4 h-4" />
                      Logout
                    </button>
                  </div>
                </div>
              ) : (
                <Link href="/login" className="ml-2 hover:text-primary transition-colors">
                  <User className="w-6 h-6" />
                </Link>
              )}
            </div>
          </div>

        </div>
      </div>
    </header>
  );
};