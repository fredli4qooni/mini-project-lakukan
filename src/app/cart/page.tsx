"use client";

import Link from "next/link";
import Image from "next/image";
import { Trash2, Minus, Plus, ArrowLeft } from "lucide-react";
import { useCartStore } from "@/store/useCartStore";
import { Button } from "@/components/atoms/Button";
import { formatPrice } from "@/lib/utils";

export default function CartPage() {
  const { items, totalPrice, updateQuantity, removeItem } = useCartStore();

  if (items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-20 flex flex-col items-center justify-center gap-6 animate-fade-in">
        <h2 className="text-3xl font-bold">Your Cart is Empty</h2>
        <p className="text-gray-500">Looks like you haven&apos;t added anything to your cart yet.</p>
        <Link href="/">
          <Button variant="danger" className="px-8 py-3">
            Start Shopping
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-10 mb-20 animate-fade-in">
      <div className="flex gap-2 text-sm text-gray-500 mb-10">
        <Link href="/" className="hover:text-black">Home</Link>
        <span>/</span>
        <span className="text-black font-medium">Cart</span>
      </div>

      <div className="flex flex-col lg:flex-row gap-10">
        
        <div className="flex-1 overflow-x-auto">
          <table className="w-full min-w-[600px] border-collapse text-left">
            <thead>
              <tr className="shadow-sm border-b border-gray-200 text-sm">
                <th className="py-4 pl-0 font-medium">Product</th>
                <th className="py-4 font-medium">Price</th>
                <th className="py-4 font-medium">Quantity</th>
                <th className="py-4 font-medium">Subtotal</th>
                <th className="py-4 font-medium text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item) => (
                <tr key={item.id} className="border-b border-gray-100 group hover:bg-gray-50/50 transition-colors">
                  <td className="py-6 flex items-center gap-4">
                    <div className="relative w-16 h-16 bg-white border border-gray-200 rounded p-2 mix-blend-multiply">
                       <Image 
                          src={item.image} 
                          alt={item.title} 
                          fill 
                          className="object-contain"
                       />
                    </div>
                    <span className="font-medium text-sm max-w-[200px] line-clamp-1 group-hover:text-danger cursor-pointer">
                        {item.title}
                    </span>
                  </td>
                  
                  <td className="py-6 text-sm">
                    {formatPrice(item.price)}
                  </td>

                  <td className="py-6">
                    <div className="flex items-center border border-gray-300 rounded w-fit">
                      <button 
                        onClick={() => updateQuantity(item.id, 'dec')}
                        className="p-2 hover:bg-gray-100 transition-colors disabled:opacity-50"
                        disabled={item.quantity <= 1}
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="w-8 text-center text-sm font-medium">{item.quantity}</span>
                      <button 
                        onClick={() => updateQuantity(item.id, 'inc')}
                        className="p-2 hover:bg-gray-100 transition-colors"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>
                  </td>

                  <td className="py-6 font-medium text-sm">
                    {formatPrice(item.price * item.quantity)}
                  </td>

                  <td className="py-6 text-center">
                    <button 
                      onClick={() => removeItem(item.id)}
                      className="text-gray-400 hover:text-danger transition-colors p-2"
                      title="Remove Item"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          
          <div className="mt-6 flex justify-between">
             <Link href="/">
                <Button variant="outline" className="flex items-center gap-2 border-gray-400 text-black hover:bg-black hover:text-white hover:border-black">
                   <ArrowLeft className="w-4 h-4" /> Return To Shop
                </Button>
             </Link>
          </div>
        </div>

        <div className="w-full lg:w-[350px]">
          <div className="border border-black rounded p-6 flex flex-col gap-6">
             <h3 className="font-medium text-xl">Cart Total</h3>
             
             <div className="flex flex-col gap-4 text-sm border-b border-gray-300 pb-4">
                <div className="flex justify-between">
                   <span>Subtotal:</span>
                   <span>{formatPrice(totalPrice)}</span>
                </div>
                <div className="flex justify-between">
                   <span>Shipping:</span>
                   <span className="text-green-600">Free</span>
                </div>
             </div>

             <div className="flex justify-between font-medium text-lg">
                <span>Total:</span>
                <span>{formatPrice(totalPrice)}</span>
             </div>

             <div className="flex justify-center">
                <Button variant="danger" className="w-full py-3 rounded">
                   Proceed to Checkout
                </Button>
             </div>
          </div>
        </div>

      </div>
    </div>
  );
}