'use client'; 
// Mark as client component to use hooks

import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { selectCartCount, toggleCart } from '@/lib/features/cart/cartSlice';
import ThemeToggle from './ThemeToggle';
import Link from 'next/link';
import CurrencySelector from './CurrencySelector'; // Import CurrencySelector

export default function Navbar() {
  const dispatch = useAppDispatch();
  const cartCount = useAppSelector(selectCartCount);

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-zinc-200 bg-white/80 backdrop-blur-md dark:border-zinc-800 dark:bg-black/80">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-8">
          <Link href="/" className="text-xl font-bold tracking-tighter text-zinc-900 dark:text-white">
            STORE.
          </Link>
          <div className="hidden md:flex gap-6">
            {['Electronics', 'Fashion', 'Home & Living'].map((item) => (
              <Link 
                key={item}
                href={`/category/${item}`}
                className="text-sm font-medium text-zinc-600 transition-colors hover:text-black dark:text-zinc-400 dark:hover:text-white"
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-4">
          <CurrencySelector />
          <ThemeToggle />
          <button className="rounded-full p-2 text-zinc-600 hover:bg-zinc-100 dark:text-zinc-400 dark:hover:bg-zinc-800 cursor-pointer">
            <span className="sr-only">Search</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
          </button>
          <button 
            className="relative rounded-full p-2 text-zinc-600 hover:bg-zinc-100 dark:text-zinc-400 dark:hover:bg-zinc-800 cursor-pointer"
            onClick={() => dispatch(toggleCart())}
          >
            <span className="sr-only">Cart</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg>
            {cartCount > 0 && (
                <span className="absolute right-1 top-1 flex h-4 w-4 items-center justify-center rounded-full bg-blue-600 text-[10px] font-bold text-white">
                    {cartCount}
                </span>
            )}
          </button>
        </div>
      </div>
    </nav>
  );
}
