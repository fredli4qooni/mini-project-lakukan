"use client";

import Image from "next/image";
import { useState } from "react";

interface ProductGalleryProps {
  images: string[];
}

export const ProductGallery = ({ images }: ProductGalleryProps) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <div className="flex flex-col-reverse md:flex-row gap-4 w-full md:w-3/5">
      <div className="flex md:flex-col gap-4 justify-between md:justify-start overflow-x-auto md:overflow-visible scrollbar-hide">
        {images.map((img, index) => (
          <div
            key={index}
            onClick={() => setSelectedIndex(index)}
            className={`
              w-[100px] h-[100px] md:w-[170px] md:h-[138px] bg-gray-100 rounded cursor-pointer flex items-center justify-center flex-shrink-0 border-2 transition-all
              ${selectedIndex === index ? "border-black" : "border-transparent hover:border-gray-300"}
            `}
          >
            <div className="relative w-3/4 h-3/4 mix-blend-multiply">
              <Image
                src={img}
                alt={`Thumbnail ${index}`}
                fill
                className="object-contain"
              />
            </div>
          </div>
        ))}
      </div>

      <div className="flex-1 bg-gray-100 rounded h-[400px] md:h-[600px] flex items-center justify-center p-4 relative">
        <div className="relative w-full h-full mix-blend-multiply">
          <Image
            src={images[selectedIndex]}
            alt="Product Main"
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>
    </div>
  );
};