"use client";

import { LucideIcon } from "lucide-react";

interface CategoryCardProps {
  icon: LucideIcon;
  label: string;
  isActive?: boolean;
  onClick?: () => void;
}

export const CategoryCard = ({ icon: Icon, label, isActive, onClick }: CategoryCardProps) => {
  return (
    <div
      onClick={onClick}
      className={`
        w-[170px] h-[145px] flex flex-col items-center justify-center gap-4 rounded border border-gray-200 cursor-pointer transition-all duration-300
        ${
          isActive
            ? "bg-danger text-white border-danger shadow-lg"
            : "bg-white text-black hover:bg-danger hover:text-white hover:border-danger hover:shadow-md"
        }
      `}
    >
      <Icon className={`w-14 h-14 transition-transform ${isActive ? "scale-110" : ""}`} strokeWidth={1.5} />
      
      <span className="font-medium text-base capitalize">{label}</span>
    </div>
  );
};