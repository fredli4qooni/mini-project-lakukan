"use client";

import { useState } from "react";
import { ArrowLeft, ArrowRight, Smartphone, Monitor, Watch, Camera, Headphones, Gamepad2 } from "lucide-react";
import { SectionLabel } from "@/components/atoms/SectionLabel";
import { CategoryCard } from "@/components/molecules/CategoryCard";

const categories = [
  { id: "phones", label: "Phones", icon: Smartphone },
  { id: "computers", label: "Computers", icon: Monitor },
  { id: "smartwatch", label: "SmartWatch", icon: Watch },
  { id: "camera", label: "Camera", icon: Camera },
  { id: "headphone", label: "HeadPhones", icon: Headphones },
  { id: "gaming", label: "Gaming", icon: Gamepad2 },
];

export const CategorySection = () => {
  const [activeId, setActiveId] = useState<string | null>(null);

  return (
    <section className="mt-20 mb-16 border-b border-gray-200 pb-16">
      <div className="container mx-auto px-4">
        
        <div className="flex items-end justify-between mb-10">
          
          <div className="flex flex-col gap-4">
            <SectionLabel text="Categories" />
            <h2 className="text-4xl font-semibold tracking-wide text-black">
              Browse By Category
            </h2>
          </div>

          <div className="flex gap-2">
            <button className="p-3 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors">
              <ArrowLeft className="w-5 h-5 text-black" />
            </button>
            <button className="p-3 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors">
              <ArrowRight className="w-5 h-5 text-black" />
            </button>
          </div>
        </div>

        <div className="flex gap-8 overflow-x-auto pb-4 scrollbar-hide">
          {categories.map((cat) => (
            <CategoryCard
              key={cat.id}
              icon={cat.icon}
              label={cat.label}
              isActive={activeId === cat.id}
              onClick={() => setActiveId(cat.id)}
            />
          ))}
        </div>

      </div>
    </section>
  );
};