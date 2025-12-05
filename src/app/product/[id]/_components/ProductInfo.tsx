"use client";

import { useState } from "react";
import { Heart, Minus, Plus, Truck, RotateCcw } from "lucide-react";
import { useCartStore } from "@/store/useCartStore";
import { formatPrice } from "@/lib/utils";
import { Button } from "@/components/atoms/Button";
import { Star } from "lucide-react";

interface ProductInfoProps {
  id: number;
  title: string;
  price: number;
  description: string;
  rating: number;
  ratingCount: number;
  colors: string[];
  sizes: string[];
  stock: number;
  image: string;
}

export const ProductInfo = ({
  id,
  title,
  price,
  description,
  rating,
  ratingCount,
  colors,
  sizes,
  stock,
  image,
}: ProductInfoProps) => {
  const [selectedColor, setSelectedColor] = useState(colors[0]);
  const [selectedSize, setSelectedSize] = useState(sizes[2]);
  const [quantity, setQuantity] = useState(1);

  const { addItem } = useCartStore();

  const handleQuantity = (type: "inc" | "dec") => {
    if (type === "inc" && quantity < stock) setQuantity((q) => q + 1);
    if (type === "dec" && quantity > 1) setQuantity((q) => q - 1);
  };

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addItem({ id, title, price, image });
    }
    alert(`Added ${quantity} item(s) to cart!`);
  };

  return (
    <div className="flex flex-col gap-6 w-full md:w-2/5">
      {/* 1. Header Info */}
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-semibold tracking-wide">{title}</h1>
        
        <div className="flex items-center gap-4 text-sm">
          <div className="flex items-center gap-1">
            <div className="flex text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className={`w-4 h-4 ${i < Math.round(rating) ? "fill-yellow-400" : "fill-gray-300 text-gray-300"}`} />
              ))}
            </div>
            <span className="text-gray-500">({ratingCount} Reviews)</span>
          </div>
          
          <span className="text-gray-300">|</span>
          
          <span className="text-green-500 font-medium">In Stock</span>
        </div>

        <span className="text-2xl font-medium mt-2">{formatPrice(price)}</span>
        
        <p className="text-sm text-gray-600 leading-relaxed mt-2 border-b border-gray-300 pb-6">
          {description}
        </p>
      </div>

      <div className="flex flex-col gap-6">
        
        <div className="flex items-center gap-6">
          <span className="text-xl font-medium">Colours:</span>
          <div className="flex gap-2">
            {colors.map((color, index) => (
              <button
                key={index}
                onClick={() => setSelectedColor(color)}
                className={`w-5 h-5 rounded-full cursor-pointer transition-all ${selectedColor === color ? "ring-2 ring-black ring-offset-2" : ""}`}
                style={{ backgroundColor: color }}
              />
            ))}
          </div>
        </div>

        <div className="flex items-center gap-6">
          <span className="text-xl font-medium">Size:</span>
          <div className="flex gap-2">
            {sizes.map((size) => (
              <button
                key={size}
                onClick={() => setSelectedSize(size)}
                className={`
                  w-8 h-8 rounded border text-sm font-medium transition-colors flex items-center justify-center
                  ${selectedSize === size ? "bg-danger text-white border-danger" : "border-gray-300 hover:border-black"}
                `}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-4 flex-wrap">
          
          <div className="flex items-center border border-gray-300 rounded overflow-hidden h-11 w-36">
            <button 
              onClick={() => handleQuantity("dec")}
              className="px-3 py-2 hover:bg-danger hover:text-white transition-colors h-full flex items-center border-r border-gray-300 w-10 justify-center"
            >
              <Minus className="w-4 h-4" />
            </button>
            <span className="flex-1 text-center font-medium text-xl w-16">{quantity}</span>
            <button 
              onClick={() => handleQuantity("inc")}
              className="px-3 py-2 hover:bg-danger hover:text-white transition-colors h-full flex items-center border-l border-gray-300 w-10 justify-center"
            >
              <Plus className="w-4 h-4" />
            </button>
          </div>

          <Button 
            variant="danger" 
            className="h-11 px-8 rounded flex-1 md:flex-none whitespace-nowrap"
            onClick={handleAddToCart}
          >
            Buy Now
          </Button>

          <button className="h-11 w-11 border border-gray-300 rounded flex items-center justify-center hover:bg-gray-100 transition-colors">
            <Heart className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div className="mt-4 border border-gray-300 rounded divide-y divide-gray-300">
        
        <div className="flex items-center gap-4 p-4">
          <Truck className="w-8 h-8 text-black" strokeWidth={1.5} />
          <div className="flex flex-col gap-1">
            <span className="font-medium text-sm">Free Delivery</span>
            <span className="text-xs text-black underline cursor-pointer">
              Enter your postal code for Delivery Availability
            </span>
          </div>
        </div>

        <div className="flex items-center gap-4 p-4">
          <RotateCcw className="w-8 h-8 text-black" strokeWidth={1.5} />
          <div className="flex flex-col gap-1">
            <span className="font-medium text-sm">Return Delivery</span>
            <span className="text-xs text-black">
              Free 30 Days Delivery Returns. <span className="underline cursor-pointer">Details</span>
            </span>
          </div>
        </div>

      </div>
    </div>
  );
};