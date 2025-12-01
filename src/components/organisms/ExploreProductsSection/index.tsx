import { ArrowLeft, ArrowRight } from "lucide-react";
import { SectionLabel } from "@/components/atoms/SectionLabel";
import { Button } from "@/components/atoms/Button";
import { ProductCard } from "@/components/molecules/ProductCard";

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

async function getExploreProducts() {
  try {
    const res = await fetch("https://fakestoreapi.com/products?limit=20", {
      cache: "force-cache",
      next: { revalidate: 3600 },
    });
    
    if (!res.ok) throw new Error("Failed to fetch");
    
    const allProducts: Product[] = await res.json();
    const products = allProducts.slice(6, 14);

    return products.map((product, index) => {
      const isNew = index % 2 !== 0; 
      
      const hasColors = index % 3 === 0;
      const colors = hasColors ? ["#FB1314", "#DB4444"] : undefined;

      return {
        ...product,
        isNew,
        colors,
      };
    });

  } catch (error) {
    console.error(error);
    return [];
  }
}

export const ExploreProductsSection = async () => {
  const products = await getExploreProducts();

  return (
    <section className="mb-20">
      <div className="container mx-auto px-4">
        
        <div className="flex items-end justify-between mb-10">
          <div className="flex flex-col gap-4">
            <SectionLabel text="Our Products" />
            <h2 className="text-4xl font-semibold tracking-wide text-black">
              Explore Our Products
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

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 gap-y-12 place-items-center">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              title={product.title}
              image={product.image}
              price={product.price}
              rating={product.rating.rate}
              ratingCount={product.rating.count}
              isNew={product.isNew}
              colors={product.colors}
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