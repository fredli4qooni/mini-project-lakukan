import { SectionLabel } from "@/components/atoms/SectionLabel";
import { Button } from "@/components/atoms/Button";
import { ProductCard } from "@/components/molecules/ProductCard";
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

async function getBestSellingProducts() {
  try {
    const { data: products } = await api.get<Product[]>("/products/category/men's clothing?limit=4");
    
    return products.map((product) => {
      const discountPercent = 15; 
      const originalPrice = calculateOriginalPrice(product.price, discountPercent);
      
      return {
        ...product,
        discountPercent,
        originalPrice,
      };
    });
  } catch (error) {
    console.error("Error fetching best selling:", error);
    return [];
  }
}

export const BestSellingSection = async () => {
  const products = await getBestSellingProducts();

  return (
    <section className="mb-20">
      <div className="container mx-auto px-4">
        
        <div className="flex items-end justify-between mb-10">
          <div className="flex flex-col gap-4">
            <SectionLabel text="This Month" />
            <h2 className="text-4xl font-semibold tracking-wide text-black">
              Best Selling Products
            </h2>
          </div>
          
          <Button variant="danger" size="md" className="px-8">
            View All
          </Button>
        </div>

        <div className="flex flex-wrap justify-between gap-8">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
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

      </div>
    </section>
  );
};