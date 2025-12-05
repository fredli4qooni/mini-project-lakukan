import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import api from '@/lib/axios';

interface CartItem {
  id: number;
  title: string;
  price: number;
  image: string;
  quantity: number;
}

interface CartState {
  items: CartItem[];
  totalItems: number;
  totalPrice: number;
  
  addItem: (item: Omit<CartItem, 'quantity'>) => void;
  removeItem: (id: number) => void;
  updateQuantity: (id: number, type: "inc" | "dec") => void;
  clearCart: () => void;
}

const formatPayload = (items: CartItem[]) => {
  return {
    userId: 1,
    date: new Date().toISOString().split('T')[0],
    products: items.map(item => ({
      productId: item.id,
      quantity: item.quantity
    }))
  };
};

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      totalItems: 0,
      totalPrice: 0,

      addItem: async (product) => {
        const state = get();
        const existingItem = state.items.find((item) => item.id === product.id);
        
        let updatedItems;
        if (existingItem) {
          updatedItems = state.items.map((item) =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          );
        } else {
          updatedItems = [...state.items, { ...product, quantity: 1 }];
        }

        const newTotal = updatedItems.reduce((sum, item) => sum + item.quantity, 0);
        const newPrice = updatedItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

        set({ items: updatedItems, totalItems: newTotal, totalPrice: newPrice });

        try {
          await api.post('/carts', formatPayload(updatedItems));
          console.log("API Sync: Item Added");
        } catch (error) {
          console.error("API Sync Failed:", error);
        }
      },

      removeItem: async (id) => {
        const state = get();
        const updatedItems = state.items.filter((item) => item.id !== id);
        const newTotal = updatedItems.reduce((sum, item) => sum + item.quantity, 0);
        const newPrice = updatedItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

        set({ items: updatedItems, totalItems: newTotal, totalPrice: newPrice });

        try {
          await api.put('/carts/1', formatPayload(updatedItems));
          console.log("API Sync: Item Removed");
        } catch (error) {
          console.error("API Sync Failed:", error);
        }
      },

      updateQuantity: async (id, type) => {
        const state = get();
        const updatedItems = state.items.map((item) => {
          if (item.id === id) {
            const newQty = type === "inc" ? item.quantity + 1 : item.quantity - 1;
            return { ...item, quantity: Math.max(1, newQty) }; // Min 1
          }
          return item;
        });

        const newTotal = updatedItems.reduce((sum, item) => sum + item.quantity, 0);
        const newPrice = updatedItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

        set({ items: updatedItems, totalItems: newTotal, totalPrice: newPrice });

        try {
          await api.put('/carts/1', formatPayload(updatedItems));
          console.log("API Sync: Qty Updated");
        } catch (error) {
          console.error("API Sync Failed:", error);
        }
      },

      clearCart: () => {
        set({ items: [], totalItems: 0, totalPrice: 0 });
      }
    }),
    {
      name: 'cart-storage',
      storage: createJSONStorage(() => localStorage),
    }
  )
);