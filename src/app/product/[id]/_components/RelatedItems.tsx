import { SectionLabel } from "@/components/atoms/SectionLabel";
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

async function getRelatedProducts(category: string) {
  try {
    const safeCategory = encodeURIComponent(category);
    const { data } = await api.get<Product[]>(`/products/category/${safeCategory}?limit=4`);
    
    return data.map((product) => ({
      ...product,
      discountPercent: 0, 
      originalPrice: 0,
    }));
  } catch (error) {
    console.error("Failed to fetch related items", error);
    return [];
  }
}

export const RelatedItems = async ({ category }: { category: string }) => {
  const products = await getRelatedProducts(category);

  if (products.length === 0) return null;

  return (
    <div className="mt-24 mb-10">
      <div className="flex items-center justify-between mb-10">
        <div className="flex flex-col gap-4">
          <SectionLabel text="Related Item" />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 place-items-center">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            title={product.title}
            image={product.image}
            price={product.price}
            rating={product.rating.rate}
            ratingCount={product.rating.count}
          />
        ))}
      </div>
    </div>
  );
};