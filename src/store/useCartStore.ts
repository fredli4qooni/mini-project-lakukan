import { create } from 'zustand';

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
  addItem: (item: Omit<CartItem, 'quantity'>) => void;
  removeItem: (id: number) => void;
}

export const useCartStore = create<CartState>((set) => ({
  items: [],
  totalItems: 0,

  addItem: (product) => set((state) => {
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

    return { items: updatedItems, totalItems: newTotal };
  }),

  removeItem: (id) => set((state) => {
    const updatedItems = state.items.filter((item) => item.id !== id);
    const newTotal = updatedItems.reduce((sum, item) => sum + item.quantity, 0);
    return { items: updatedItems, totalItems: newTotal };
  }),
}));