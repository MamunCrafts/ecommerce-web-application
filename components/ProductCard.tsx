'use client'; 
// Mark as client component

import Image from 'next/image';
import { Product } from '@/lib/data';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { addToCart } from '@/lib/features/cart/cartSlice';

export default function ProductCard({ product }: { product: Product }) {
  const dispatch = useAppDispatch();
  const { currentCurrency, rates, symbol } = useAppSelector((state) => state.currency);
  const price = product.price * rates[currentCurrency];

  return (
    <div className="group relative flex flex-col overflow-hidden rounded-xl bg-white transition-all hover:shadow-xl dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">
      <div className="aspect-[4/3] w-full overflow-hidden bg-zinc-200 dark:bg-zinc-800 relative">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-black/0 transition-colors group-hover:bg-black/10" />
        
        {/* Sale Badges */}
        <div className="absolute top-2 left-2 flex flex-col gap-1">
          {product.tags?.includes('hot') && (
            <span className="inline-flex items-center rounded-md bg-red-600 px-2 py-1 text-xs font-bold text-white shadow-sm">
              HOT
            </span>
          )}
          {product.tags?.includes('flash') && (
            <span className="inline-flex items-center rounded-md bg-orange-500 px-2 py-1 text-xs font-bold text-white shadow-sm">
              FLASH
            </span>
          )}
        </div>

        <button 
          onClick={() => dispatch(addToCart(product))}
          className="absolute bottom-4 right-4 translate-y-12 rounded-full bg-black px-4 py-2 text-sm font-medium text-white shadow-lg transition-all hover:bg-zinc-800 group-hover:translate-y-0 dark:bg-white dark:text-black dark:hover:bg-zinc-200 opacity-0 group-hover:opacity-100 cursor-pointer"
        >
          Add to Cart
        </button>
      </div>
      <div className="flex flex-1 flex-col p-4">
        <div className="flex justify-between items-start">
            <div>
                 <p className="text-xs text-zinc-500 dark:text-zinc-400 mb-1">{product.category}</p>
                 <h3 className="line-clamp-2 text-lg font-medium text-zinc-900 dark:text-zinc-100">
                  {product.name}
                </h3>
            </div>
            <p className="text-lg font-semibold text-zinc-900 dark:text-white">
            {symbol[currentCurrency]}{price.toFixed(2)}
            </p>
        </div>
        
        <p className="mt-2 line-clamp-2 text-sm text-zinc-500 dark:text-zinc-400">
          {product.description}
        </p>
      </div>
    </div>
  );
}
