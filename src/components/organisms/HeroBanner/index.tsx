"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

const slides = [
  {
    id: 1,
    brandLogo: "/images/icons/lakukan.png",
    brandName: "iPhone 14 Series",
    headline: "Up to 10% off Voucher",
    subHeadline: "Summer Sale 2025",
    ctaLink: "/shop/iphone",
    heroImage: "/images/banner/iphone.png",
  },
  {
    id: 2,
    brandLogo: "/images/icons/lakukan.png",
    brandName: "Sony Headphones",
    headline: "Listen to the Future Sound",
    subHeadline: "Noise Cancelling",
    ctaLink: "/shop/audio",
    heroImage: "/images/banner/hero-headphone.png",
  },
  {
    id: 3,
    brandLogo: "/images/icons/lakukan.png",
    brandName: "Gaming Console",
    headline: "Level Up Your Experience",
    subHeadline: "New Arrival",
    ctaLink: "/shop/gaming",
    heroImage: "/images/banner/iphone.png",
  },
  {
    id: 4,
    brandLogo: "/images/icons/lakukan.png",
    brandName: "Smart Camera",
    headline: "Capture Every Moment",
    subHeadline: "4K Resolution",
    ctaLink: "/shop/camera",
    heroImage: "/images/banner/hero-headphone.png",
  },
  {
    id: 5,
    brandLogo: "/images/icons/lakukan.png",
    brandName: "Smart Watch",
    headline: "Health on Your Wrist",
    subHeadline: "Water Resistant",
    ctaLink: "/shop/wearables",
    heroImage: "/images/banner/iphone.png",
  },
];

export const HeroBanner = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const slide = slides[current];

  return (
    <div className="flex-1 bg-black text-white mt-10 md:ml-10 py-10 px-10 md:px-14 relative overflow-hidden h-[344px] transition-all duration-500">
      
      <div className="flex items-center justify-between h-full relative z-10">
        
        <div className="flex flex-col gap-5 max-w-sm animate-fade-in">
          
          <div className="flex items-center gap-4">
            <div className="w-10 h-12 relative flex items-center justify-center">
              <Image 
                src={slide.brandLogo}
                alt="Brand Logo"
                width={40}
                height={49}
                className="object-contain"
              />
            </div>
            <span className="text-sm font-light tracking-wide">{slide.brandName}</span>
          </div>

          <h1 className="text-5xl font-semibold leading-tight tracking-wide">
            {slide.headline}
          </h1>

          <Link 
            href={slide.ctaLink} 
            className="group flex items-center gap-2 w-fit mt-2 border-b border-white pb-1 hover:text-gray-300 hover:border-gray-300 transition-all"
          >
            <span className="font-medium">Shop Now</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="relative w-1/2 h-full flex items-center justify-center">
             <div className="absolute w-[300px] h-[300px] bg-white/20 rounded-full blur-[100px]"></div>
             
             <Image
                key={slide.id}
                src={slide.heroImage}
                alt={slide.headline}
                width={500}
                height={400}
                className="object-contain z-10 relative drop-shadow-2xl animate-fade-in-up"
                priority
             />
        </div>
      </div>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`w-3 h-3 rounded-full transition-all duration-300 border-2 border-white/50 ${
              current === index 
                ? "bg-red-500 border-red-500 w-4 scale-110"
                : "bg-white/20 hover:bg-white/40"
            }`}
          />
        ))}
      </div>
    </div>
  );
};