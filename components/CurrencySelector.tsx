'use client';

import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { setCurrency, Currency } from '@/lib/currencySlice';

export default function CurrencySelector() {
  const dispatch = useAppDispatch();
  const { currentCurrency } = useAppSelector((state) => state.currency);

  const currencies: Currency[] = ['USD', 'SGD', 'BDT'];

  return (
    <div className="relative inline-block text-left">
      <select
        value={currentCurrency}
        onChange={(e) => dispatch(setCurrency(e.target.value as Currency))}
        className="block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6 dark:bg-zinc-800 dark:text-white dark:ring-zinc-700 cursor-pointer"
        aria-label="Select Currency"
      >
        {currencies.map((currency) => (
          <option key={currency} value={currency}>
            {currency}
          </option>
        ))}
      </select>
    </div>
  );
}
