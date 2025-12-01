import { ArrowLeft, ArrowRight } from "lucide-react";
import { SectionLabel } from "@/components/atoms/SectionLabel";
import { FlashSaleTimer } from "@/components/molecules/FlashSaleTimer";
import { ProductCard } from "@/components/molecules/ProductCard";
import { Button } from "@/components/atoms/Button";
import { calculateOriginalPrice } from "@/lib/utils";
import api from "@/lib/axios";

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

async function getFlashSaleProducts() {
  try {
    const { data: products } = await api.get<Product[]>("/products?limit=6");
    
    return products.map((product) => {
      const discountPercent = Math.floor(Math.random() * (50 - 30 + 1) + 30);
      const originalPrice = calculateOriginalPrice(product.price, discountPercent);
      
      return {
        ...product,
        discountPercent,
        originalPrice,
      };
    });
  } catch (error) {
    console.error("Error fetching flash sale:", error);
    return [];
  }
}

export const FlashSaleSection = async () => {
  const products = await getFlashSaleProducts();

  return (
    <section className="mt-20 mb-20 border-b border-gray-200 pb-16">
      <div className="container mx-auto px-4">
        
        <SectionLabel text="Today's" />

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-10">
          <div className="flex items-end gap-16">
            <h2 className="text-4xl font-semibold tracking-wide text-black">
              Flash Sales
            </h2>
            <div className="hidden md:block">
              <FlashSaleTimer />
            </div>
          </div>

          <div className="flex gap-2">
            <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors">
              <ArrowLeft className="w-5 h-5 text-black" />
            </button>
            <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors">
              <ArrowRight className="w-5 h-5 text-black" />
            </button>
          </div>
        </div>

        <div className="flex gap-8 overflow-x-auto pb-4 scrollbar-hide snap-x">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              title={product.title}
              image={product.image}
              price={product.price}
              originalPrice={product.originalPrice}
              discountPercent={product.discountPercent}
              rating={product.rating.rate}
              ratingCount={product.rating.count}
            />
          ))}
        </div>

        <div className="mt-14 flex justify-center">
          <Button variant="danger" size="lg" className="px-12 py-4 text-base rounded font-medium">
            View All Products
          </Button>
        </div>

      </div>
    </section>
  );
};