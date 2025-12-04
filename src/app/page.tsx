import { CategorySidebar } from "@/components/organisms/CategorySidebar";
import { HeroBanner } from "@/components/organisms/HeroBanner";
import { FlashSaleSection } from "@/components/organisms/FlashSaleSection";
import { CategorySection } from "@/components/organisms/CategorySection";
import { BestSellingSection } from "@/components/organisms/BestSellingSection";
import { MusicBanner } from "@/components/organisms/MusicBanner";
import { ExploreProductsSection } from "@/components/organisms/ExploreProductsSection";
import { NewArrivalSection } from "@/components/organisms/NewArrivalSection";
import { ServiceFeatures } from "@/components/organisms/ServiceFeatures";

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
      <BestSellingSection />
      <MusicBanner />
      <ExploreProductsSection />
      <NewArrivalSection />
      <ServiceFeatures />

    </main>
  );
}