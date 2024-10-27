// src/stores/useCartStore.ts
import { create } from 'zustand';

interface CartItem {
  id: number;
  title: string;
  image: string;
  price: number;
  quantity: number;
  stars: number;
  category: string;
}

interface CartStore {
  cartItems: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: number) => void;
  clearCart: () => void;
}

export const useCartStore = create<CartStore>((set) => ({
  cartItems: [],

  addToCart: (item: CartItem) =>
    set((state) => {
      const existingItemIndex = state.cartItems.findIndex(
        (cartItem) => cartItem.id === item.id
      );

      if (existingItemIndex >= 0) {
        const updatedCartItems = [...state.cartItems];
        updatedCartItems[existingItemIndex].quantity += item.quantity;
        return { cartItems: updatedCartItems };
      } else {
        return { cartItems: [...state.cartItems, { ...item, quantity: 1 }] };
      }
    }),

  removeFromCart: (id: number) =>
    set((state) => {
      const updatedCart = state.cartItems.filter((item) => item.id !== id);
      return { cartItems: updatedCart };
    }),

  clearCart: () => set({ cartItems: [] }),
}));
