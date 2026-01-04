'use client';

import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { selectCartItems, selectCartTotal, selectIsCartOpen, toggleCart } from '@/lib/features/cart/cartSlice';
import CartItem from './CartItem';

export default function CartDrawer() {
  const dispatch = useAppDispatch();
  const isOpen = useAppSelector(selectIsCartOpen);
  const items = useAppSelector(selectCartItems);
  const total = useAppSelector(selectCartTotal);

  // Prevent scrolling when cart is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
        document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="relative z-[100]" aria-labelledby="slide-over-title" role="dialog" aria-modal="true">
      {/* Background backdrop */}
      <div 
        className="fixed inset-0 bg-zinc-500/75 transition-opacity dark:bg-black/80 backdrop-blur-sm"
        onClick={() => dispatch(toggleCart())}
      />

      <div className="fixed inset-0 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
            <div className="pointer-events-auto w-screen max-w-md">
              <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl dark:bg-black border-l border-zinc-200 dark:border-zinc-800">
                <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                  <div className="flex items-start justify-between">
                    <h2 className="text-lg font-medium text-zinc-900 dark:text-white" id="slide-over-title">
                      Shopping cart
                    </h2>
                    <div className="ml-3 flex h-7 items-center">
                      <button
                        type="button"
                        className="relative -m-2 p-2 text-zinc-400 hover:text-zinc-500 cursor-pointer"
                        onClick={() => dispatch(toggleCart())}
                      >
                        <span className="absolute -inset-0.5" />
                        <span className="sr-only">Close panel</span>
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </div>
                  </div>

                  <div className="mt-8">
                    <div className="flow-root">
                        {items.length === 0 ? (
                            <div className="flex flex-col items-center justify-center py-12 text-center text-zinc-500">
                                <p>Your cart is empty.</p>
                                <button 
                                    onClick={() => dispatch(toggleCart())}
                                    className="mt-4 text-blue-600 hover:text-blue-500 font-medium cursor-pointer"
                                >
                                    Continue Shopping
                                </button>
                            </div>
                        ) : (
                            <ul role="list" className="-my-6 divide-y divide-zinc-200 dark:divide-zinc-800">
                                {items.map((item) => (
                                <li key={item.id}>
                                    <CartItem item={item} />
                                </li>
                                ))}
                            </ul>
                        )}
                      
                    </div>
                  </div>
                </div>

                {items.length > 0 && (
                    <div className="border-t border-zinc-200 px-4 py-6 sm:px-6 dark:border-zinc-800">
                    <div className="flex justify-between text-base font-medium text-zinc-900 dark:text-white">
                        <p>Subtotal</p>
                        <p>${total.toFixed(2)}</p>
                    </div>
                    <p className="mt-0.5 text-sm text-zinc-500 dark:text-zinc-400">Shipping and taxes calculated at checkout.</p>
                    <div className="mt-6">
                        <a
                        href="/checkout"
                        className="flex items-center justify-center rounded-md border border-transparent bg-blue-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-blue-700 cursor-pointer"
                        onClick={() => dispatch(toggleCart())}
                        >
                        Checkout
                        </a>
                    </div>
                    <div className="mt-6 flex justify-center text-center text-sm text-zinc-500 dark:text-zinc-400">
                        <p>
                        or{' '}
                        <button
                            type="button"
                            className="font-medium text-blue-600 hover:text-blue-500 cursor-pointer"
                            onClick={() => dispatch(toggleCart())}
                        >
                            Continue Shopping
                            <span aria-hidden="true"> &rarr;</span>
                        </button>
                        </p>
                    </div>
                    </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
