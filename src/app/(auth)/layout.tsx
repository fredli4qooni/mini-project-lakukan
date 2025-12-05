import Image from "next/image";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-[calc(100vh-140px)] pt-10 pb-20">
      <div className="hidden lg:flex w-1/2 items-center justify-center bg-[#CBE4E8] relative overflow-hidden mr-20 rounded-r">
        <div className="relative w-full h-full min-h-[600px]">
             <Image
                src="/images/banner/signup-banner.png" 
                alt="Shopping Illustration"
                fill
                className="object-cover object-center"
                priority
             />
        </div>
      </div>

      <div className="w-full lg:w-1/3 flex items-center justify-center lg:justify-start px-6 lg:px-0">
        <div className="w-full max-w-sm">
           {children}
        </div>
      </div>
    </div>
  );
}