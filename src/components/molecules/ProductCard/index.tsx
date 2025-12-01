"use client";

import Image from "next/image";
import { Heart, Eye, Star } from "lucide-react";
import { formatPrice } from "@/lib/utils";
import { useCartStore } from "@/store/useCartStore";

interface ProductCardProps {
  id: number;
  image: string;
  title: string;
  price: number;
  originalPrice?: number;
  discountPercent?: number;
  rating: number;
  ratingCount: number;
  isNew?: boolean;
  colors?: string[];
}

export const ProductCard = ({
  id,
  image,
  title,
  price,
  originalPrice,
  discountPercent,
  rating,
  ratingCount,
  isNew,
  colors,
}: ProductCardProps) => {
  const { addItem } = useCartStore();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    addItem({ 
      id, 
      title, 
      price, 
      image 
    });
    console.log(`${title} added to cart!`);
  };

  return (
    <div className="group relative w-[270px] flex-shrink-0 cursor-pointer">
      
      <div className="relative w-full h-[250px] bg-gray-100 rounded flex items-center justify-center overflow-hidden mb-4">
        
        {isNew ? (
          <div className="absolute top-3 left-3 bg-[#00FF66] text-white text-xs px-3 py-1 rounded-sm z-10 font-medium">
            NEW
          </div>
        ) : discountPercent ? (
          <div className="absolute top-3 left-3 bg-danger text-white text-xs px-3 py-1 rounded-sm z-10">
            -{discountPercent}%
          </div>
        ) : null}

        <div className="absolute top-3 right-3 flex flex-col gap-2 z-10">
          <button className="bg-white p-1.5 rounded-full hover:bg-danger hover:text-white transition-colors shadow-sm">
            <Heart className="w-5 h-5" />
          </button>
          <button className="bg-white p-1.5 rounded-full hover:bg-danger hover:text-white transition-colors shadow-sm">
            <Eye className="w-5 h-5" />
          </button>
        </div>

        <div className="relative w-[180px] h-[180px] mix-blend-multiply">
             <Image 
                src={image} 
                alt={title} 
                fill 
                className="object-contain"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
             />
        </div>

        <button 
          onClick={handleAddToCart}
          className="absolute bottom-0 left-0 w-full bg-black text-white py-2 text-center font-medium translate-y-full group-hover:translate-y-0 transition-transform duration-300 cursor-pointer hover:bg-gray-800"
        >
          Add To Cart
        </button>
      </div>

      <div className="flex flex-col gap-2">
        <h3 className="font-medium text-base truncate">{title}</h3>
        
        <div className="flex gap-3 text-base">
          <span className="text-danger font-medium">{formatPrice(price)}</span>
          {originalPrice && (
            <span className="text-gray-400 line-through decoration-1">
              {formatPrice(originalPrice)}
            </span>
          )}
        </div>

        <div className="flex items-center gap-2">
          <div className="flex text-yellow-400">
            {[...Array(5)].map((_, i) => (
               <Star 
                 key={i} 
                 className={`w-4 h-4 ${i < Math.round(rating) ? "fill-yellow-400" : "fill-gray-300 text-gray-300"}`} 
               />
            ))}
          </div>
          <span className="text-gray-400 text-sm font-semibold">({ratingCount})</span>
        </div>

        {colors && colors.length > 0 && (
          <div className="flex gap-2 mt-1">
            {colors.map((color, index) => (
              <div 
                key={index} 
                className={`w-4 h-4 rounded-full border border-gray-300 cursor-pointer ${index === 0 ? "ring-2 ring-black ring-offset-1" : ""}`}
                style={{ backgroundColor: color }}
              />
            ))}
          </div>
        )}

      </div>
    </div>
  );
};