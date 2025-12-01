import Image from "next/image";
import { Button } from "@/components/atoms/Button";
import { CircleTimer } from "@/components/molecules/CircleTimer";

export const MusicBanner = () => {
  return (
    <section className="mb-20 container mx-auto px-4">
      <div className="bg-black w-full min-h-[500px] flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-10 relative overflow-hidden">
        
        <div className="flex flex-col gap-8 z-10 max-w-lg">
          <span className="text-[var(--color-neon)] font-semibold text-base">
            Categories
          </span>
          
          <h2 className="text-4xl md:text-5xl font-semibold text-white leading-tight tracking-wide">
            Enhance Your <br /> Music Experience
          </h2>

          <div className="mt-2">
            <CircleTimer />
          </div>

          <div className="mt-4">
            <Button 
              className="bg-[var(--color-neon)] text-white hover:bg-[#00e05a] border-none px-10 py-4 font-medium"
            >
              Buy Now!
            </Button>
          </div>
        </div>

        <div className="relative w-full md:w-1/2 flex justify-center items-center mt-10 md:mt-0 z-10">
            
            <div className="absolute w-[350px] h-[350px] bg-white/100 blur-[100px] rounded-full pointer-events-none opacity-50"></div>
            
            <Image
              src="/images/banner/ads-jbl.png" 
              alt="JBL Speaker"
              width={600}
              height={420}
              className="object-contain relative z-10 drop-shadow-2xl animate-fade-in-up"
            />
        </div>

      </div>
    </section>
  );
};