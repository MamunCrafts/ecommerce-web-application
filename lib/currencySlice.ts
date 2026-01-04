import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type Currency = 'USD' | 'SGD' | 'BDT';

interface CurrencyState {
  currentCurrency: Currency;
  rates: Record<Currency, number>;
  symbol: Record<Currency, string>;
}

const initialState: CurrencyState = {
  currentCurrency: 'USD',
  rates: {
    USD: 1,
    SGD: 1.34,
    BDT: 109.50,
  },
  symbol: {
    USD: '$',
    SGD: 'S$',
    BDT: '৳',
  },
};

export const currencySlice = createSlice({
  name: 'currency',
  initialState,
  reducers: {
    setCurrency: (state, action: PayloadAction<Currency>) => {
      state.currentCurrency = action.payload;
    },
  },
});

export const { setCurrency } = currencySlice.actions;

export default currencySlice.reducer;
