import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Product } from '@/lib/data';

export interface CartItem extends Product {
  quantity: number;
}

interface CartState {
  items: CartItem[];
  isOpen: boolean;
}

const initialState: CartState = {
  items: [],
  isOpen: false,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Product>) => {
      const existingItem = state.items.find((item) => item.id === action.payload.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
      state.isOpen = true; // Open cart when adding item
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    updateQuantity: (
      state,
      action: PayloadAction<{ id: number; quantity: number }>
    ) => {
      const item = state.items.find((item) => item.id === action.payload.id);
      if (item) {
        if (action.payload.quantity <= 0) {
          state.items = state.items.filter((i) => i.id !== action.payload.id);
        } else {
          item.quantity = action.payload.quantity;
        }
      }
    },
    toggleCart: (state) => {
      state.isOpen = !state.isOpen;
    },
    setCartOpen: (state, action: PayloadAction<boolean>) => {
      state.isOpen = action.payload;
    },
  },
  selectors: {
    selectCartItems: (state) => state.items,
    selectIsCartOpen: (state) => state.isOpen,
    selectCartTotal: (state) =>
      state.items.reduce((total, item) => total + item.price * item.quantity, 0),
    selectCartCount: (state) =>
      state.items.reduce((count, item) => count + item.quantity, 0),
  },
});

export const { addToCart, removeFromCart, updateQuantity, toggleCart, setCartOpen } =
  cartSlice.actions;

export const { selectCartItems, selectIsCartOpen, selectCartTotal, selectCartCount } =
  cartSlice.selectors;

export default cartSlice.reducer;
