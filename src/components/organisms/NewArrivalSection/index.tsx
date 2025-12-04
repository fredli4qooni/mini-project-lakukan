import Image from "next/image";
import Link from "next/link";
import { SectionLabel } from "@/components/atoms/SectionLabel";

interface BentoCardProps {
  image: string;
  title: string;
  description: string;
  className?: string;
}

const BentoCard = ({ image, title, description, className = "" }: BentoCardProps) => {
  return (
    <div className={`relative rounded bg-black overflow-hidden group ${className}`}>
      <Image
        src={image}
        alt={title}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-105"
        sizes="(max-width: 768px) 100vw, 50vw"
      />
      
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-90" />

      <div className="absolute bottom-0 left-0 p-6 md:p-8 flex flex-col gap-2 z-10 text-white">
        <h3 className="text-2xl font-semibold tracking-wide">{title}</h3>
        <p className="text-sm text-gray-300 line-clamp-2 max-w-[250px]">{description}</p>
        
        <Link 
          href="/shop" 
          className="w-fit mt-2 font-medium underline underline-offset-4 hover:text-gray-300 transition-colors"
        >
          Shop Now
        </Link>
      </div>
    </div>
  );
};

export const NewArrivalSection = () => {
  return (
    <section className="mb-24">
      <div className="container mx-auto px-4">
        
        <div className="flex flex-col gap-4 mb-10">
          <SectionLabel text="Featured" />
          <h2 className="text-4xl font-semibold tracking-wide text-black">
            New Arrival
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-8 h-auto md:h-[600px]">
          
          <BentoCard
            image="/images/featured/ps5.png"
            title="PlayStation 5"
            description="Black and White version of the PS5 coming out on sale."
            className="md:col-span-2 md:row-span-2"
          />

          <BentoCard
            image="/images/featured/woman.png"
            title="Women’s Collections"
            description="Featured woman collections that give you another vibe."
            className="md:col-span-2"
          />

          <BentoCard
            image="/images/featured/speaker.png"
            title="Speakers"
            description="Amazon wireless speakers."
            className="md:col-span-1"
          />

          <BentoCard
            image="/images/featured/parfume.png"
            title="Perfume"
            description="GUCCI INTENSE OUD EDP."
            className="md:col-span-1"
          />

        </div>
      </div>
    </section>
  );
};