import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CartItem } from './cartSlice';

export interface Order {
  id: string;
  items: CartItem[];
  total: number;
  date: string;
  customer: {
    name: string;
    email: string;
    address: string;
  };
}

interface OrderState {
  orders: Order[];
}

const initialState: OrderState = {
  orders: [],
};

const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    placeOrder: (state, action: PayloadAction<Order>) => {
      state.orders.push(action.payload);
    },
  },
  selectors: {
    selectOrders: (state) => state.orders,
    selectLastOrder: (state) => state.orders[state.orders.length - 1],
  },
});

export const { placeOrder } = orderSlice.actions;
export const { selectOrders, selectLastOrder } = orderSlice.selectors;
export default orderSlice.reducer;
