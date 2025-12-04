import { notFound } from "next/navigation";
import Link from "next/link";
import api from "@/lib/axios";
import { ProductGallery } from "./_components/ProductGallery";
import { ProductInfo } from "./_components/ProductInfo";
import { RelatedItems } from "./_components/RelatedItems";

interface ProductDetail {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: { rate: number; count: number };
  images: string[]; 
  colors: string[];
  sizes: string[];
  stock: number;
}

async function getProduct(id: string) {
  try {
    const { data } = await api.get(`/products/${id}`);
    
    return {
      ...data,
      images: [data.image, data.image, data.image, data.image],
      colors: ["#A0BCE0", "#E07575"],
      sizes: ["XS", "S", "M", "L", "XL"],
      stock: 50,
    } as ProductDetail;
  } catch (error) {
    return null;
  }
}

export default async function ProductDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const product = await getProduct(id);

  if (!product) return notFound();

  return (
    <div className="container mx-auto px-4 mt-10 mb-20">
      
      <div className="flex gap-2 text-sm text-gray-500 mb-10">
        <Link href="/" className="hover:text-black">Home</Link>
        <span>/</span>
        <Link href={`/category/${product.category}`} className="hover:text-black capitalize">
           {product.category}
        </Link>
        <span>/</span>
        <span className="text-black font-medium truncate max-w-[200px]">{product.title}</span>
      </div>

      <div className="flex flex-col md:flex-row gap-8 lg:gap-16">
        
        <ProductGallery images={product.images} />

        <ProductInfo 
          id={product.id}
          title={product.title}
          price={product.price}
          description={product.description}
          rating={product.rating.rate}
          ratingCount={product.rating.count}
          colors={product.colors}
          sizes={product.sizes}
          stock={product.stock}
          image={product.image}
        />

      </div>

      <RelatedItems category={product.category} />

    </div>
  );
}