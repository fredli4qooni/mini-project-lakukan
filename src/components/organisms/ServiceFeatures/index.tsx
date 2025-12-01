import { Truck, Headphones, ShieldCheck } from "lucide-react";

export const ServiceFeatures = () => {
  const features = [
    {
      icon: Truck,
      title: "FREE AND FAST DELIVERY",
      description: "Free delivery for all orders over $140",
    },
    {
      icon: Headphones,
      title: "24/7 CUSTOMER SERVICE",
      description: "Friendly 24/7 customer support",
    },
    {
      icon: ShieldCheck,
      title: "MONEY BACK GUARANTEE",
      description: "We reurn money within 30 days",
    },
  ];

  return (
    <section className="mb-24 container mx-auto px-4">
      <div className="flex flex-col md:flex-row justify-center gap-10 md:gap-20 text-center">
        {features.map((feature, index) => (
          <div key={index} className="flex flex-col items-center gap-4">
            <div className="w-20 h-20 bg-gray-300 rounded-full flex items-center justify-center mb-2">
               <div className="w-14 h-14 bg-black text-white rounded-full flex items-center justify-center">
                 <feature.icon className="w-6 h-6" />
               </div>
            </div>
            
            <div className="flex flex-col gap-1">
              <h3 className="font-bold text-lg uppercase">{feature.title}</h3>
              <p className="text-sm text-gray-500">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};