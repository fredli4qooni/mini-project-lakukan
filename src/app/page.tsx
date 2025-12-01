import { CategorySidebar } from "@/components/organisms/CategorySidebar";
import { HeroBanner } from "@/components/organisms/HeroBanner";
import { FlashSaleSection } from "@/components/organisms/FlashSaleSection";
import { CategorySection } from "@/components/organisms/CategorySection";

export default function Home() {
  return (
    <main>
      <div className="container mx-auto px-4 mb-20">
        <div className="flex flex-col md:flex-row">
          <CategorySidebar />
          <HeroBanner />
        </div>
      </div>
      <FlashSaleSection />
      <CategorySection />
    </main>
  );
}