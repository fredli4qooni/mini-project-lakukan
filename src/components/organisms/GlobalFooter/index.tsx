import Link from "next/link";
import { Send, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export const GlobalFooter = () => {
  return (
    <footer className="bg-black text-white pt-20 pb-10">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-16">
        
        <div className="flex flex-col gap-4">
          <h3 className="text-2xl font-bold">Exclusive</h3>
          <h4 className="text-lg font-medium">Subscribe</h4>
          <p className="text-sm text-gray-300">Get 10% off your first order</p>
          
          <div className="relative w-full max-w-[220px] border border-white rounded px-4 py-2.5 flex items-center">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="bg-transparent border-none outline-none text-sm placeholder-gray-500 w-full text-white"
            />
            <Send className="w-5 h-5 absolute right-4 cursor-pointer hover:text-gray-300" />
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <h4 className="text-lg font-medium">Support</h4>
          <ul className="flex flex-col gap-3 text-sm text-gray-300">
            <li className="max-w-[180px]">111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.</li>
            <li>exclusive@gmail.com</li>
            <li>+88015-88888-9999</li>
          </ul>
        </div>

        {/* KOLOM 3: ACCOUNT */}
        <div className="flex flex-col gap-4">
          <h4 className="text-lg font-medium">Account</h4>
          <ul className="flex flex-col gap-3 text-sm text-gray-300">
            <li><Link href="/account" className="hover:text-white transition-colors">My Account</Link></li>
            <li><Link href="/login" className="hover:text-white transition-colors">Login / Register</Link></li>
            <li><Link href="/cart" className="hover:text-white transition-colors">Cart</Link></li>
            <li><Link href="/wishlist" className="hover:text-white transition-colors">Wishlist</Link></li>
            <li><Link href="/shop" className="hover:text-white transition-colors">Shop</Link></li>
          </ul>
        </div>

        <div className="flex flex-col gap-4">
          <h4 className="text-lg font-medium">Quick Link</h4>
          <ul className="flex flex-col gap-3 text-sm text-gray-300">
            <li><Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
            <li><Link href="/terms" className="hover:text-white transition-colors">Terms Of Use</Link></li>
            <li><Link href="/faq" className="hover:text-white transition-colors">FAQ</Link></li>
            <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
          </ul>
        </div>

        <div className="flex flex-col gap-4">
          <h4 className="text-lg font-medium">Download App</h4>
          <p className="text-xs text-gray-400">Save $3 with App New User Only</p>
          
          <div className="flex gap-2">
            <div className="w-20 h-20 bg-white/10 border border-white/30 flex items-center justify-center text-[8px] text-center">
              QR Code
            </div>
            
            <div className="flex flex-col gap-2">
               <div className="w-28 h-9 bg-white/10 border border-white/30 flex items-center justify-center text-[8px]">Google Play</div>
               <div className="w-28 h-9 bg-white/10 border border-white/30 flex items-center justify-center text-[8px]">App Store</div>
            </div>
          </div>

          <div className="flex gap-6 mt-2">
             <Facebook className="w-5 h-5 cursor-pointer hover:text-gray-400" />
             <Twitter className="w-5 h-5 cursor-pointer hover:text-gray-400" />
             <Instagram className="w-5 h-5 cursor-pointer hover:text-gray-400" />
             <Linkedin className="w-5 h-5 cursor-pointer hover:text-gray-400" />
          </div>
        </div>

      </div>

      <div className="border-t border-gray-800 pt-6 text-center text-gray-500 text-sm flex items-center justify-center gap-1">
         <span>&copy; Copyright Fredli 2025. All right reserved</span>
      </div>
    </footer>
  );
};