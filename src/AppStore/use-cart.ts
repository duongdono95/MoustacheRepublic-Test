import { SelectedProductInterface } from "../components/PageContent/PageContent";
import { create } from "zustand";
import {
  createJSONStorage,
  persist,
} from "zustand/middleware";
export type CartItem = {
  product: SelectedProductInterface;
};
type CartState = {
  items: CartItem[];
  setItems: (items: CartItem[]) => void;
  addItem: (product: SelectedProductInterface) => void;
  removeItem: (productId: number) => void;
  clearCart: () => void;
};

export const useCart = create<CartState>()(
  persist(
    (set) => ({
      items: [],
      setItems: (items) => set({ items }),
      addItem: (product) =>
        set((state) => {
          return { items: [...state.items, { product }] };
        }),
      removeItem: (id) =>
        set((state) => ({
          items: state.items.filter(
            (item) => item.product.id !== id
          ),
        })),
      clearCart: () => set({ items: [] }),
    }),
    {
      name: "cart-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
