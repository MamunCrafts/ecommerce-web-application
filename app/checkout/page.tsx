'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { clearCart, selectCartItems, selectCartTotal } from '@/lib/features/cart/cartSlice';
import { placeOrder } from '@/lib/features/cart/orderSlice';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function CheckoutPage() {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const items = useAppSelector(selectCartItems);
  const total = useAppSelector(selectCartTotal);
  const { currentCurrency, rates, symbol } = useAppSelector((state) => state.currency);
  const displayTotal = total * rates[currentCurrency];

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    city: '',
    zip: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (items.length === 0) return;

    const orderId = Math.random().toString(36).substring(7).toUpperCase();
    
    dispatch(placeOrder({
      id: orderId,
      items,
      total, // Keep internal total in USD or base currency
      date: new Date().toISOString(),
      customer: {
        name: formData.name,
        email: formData.email,
        address: `${formData.address}, ${formData.city} ${formData.zip}`,
      },
    }));

    dispatch(clearCart());
    router.push(`/order-success/${orderId}`);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  if (items.length === 0 && typeof window !== 'undefined') { // basic check
      return (
        <div className="min-h-screen bg-zinc-50 dark:bg-black">
            <Navbar />
            <div className="flex flex-col items-center justify-center py-20">
                <h1 className="text-2xl font-bold">Your cart is empty</h1>
                <a href="/" className="mt-4 text-blue-600 hover:underline">Go back shopping</a>
            </div>
            <Footer />
        </div>
      )
  }

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black font-sans">
      <Navbar />
      
      <main className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-zinc-900 dark:text-white mb-8">Checkout</h1>
        
        <div className="lg:grid lg:grid-cols-12 lg:gap-x-12 lg:items-start">
          <div className="lg:col-span-7">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="bg-white dark:bg-zinc-900 p-6 rounded-lg shadow-sm border border-zinc-200 dark:border-zinc-800">
                <h2 className="text-lg font-medium text-zinc-900 dark:text-white mb-4">Contact Information</h2>
                <div className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300">Full Name</label>
                    <input type="text" name="name" required className="mt-1 block w-full rounded-md border-zinc-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2 border dark:bg-zinc-800 dark:border-zinc-700" onChange={handleChange} />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300">Email Address</label>
                    <input type="email" name="email" required className="mt-1 block w-full rounded-md border-zinc-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2 border dark:bg-zinc-800 dark:border-zinc-700" onChange={handleChange} />
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-zinc-900 p-6 rounded-lg shadow-sm border border-zinc-200 dark:border-zinc-800">
                <h2 className="text-lg font-medium text-zinc-900 dark:text-white mb-4">Shipping Address</h2>
                <div className="space-y-4">
                  <div>
                    <label htmlFor="address" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300">Address</label>
                    <input type="text" name="address" required className="mt-1 block w-full rounded-md border-zinc-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2 border dark:bg-zinc-800 dark:border-zinc-700" onChange={handleChange} />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                     <div>
                        <label htmlFor="city" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300">City</label>
                        <input type="text" name="city" required className="mt-1 block w-full rounded-md border-zinc-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2 border dark:bg-zinc-800 dark:border-zinc-700" onChange={handleChange} />
                     </div>
                     <div>
                        <label htmlFor="zip" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300">ZIP Code</label>
                        <input type="text" name="zip" required className="mt-1 block w-full rounded-md border-zinc-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2 border dark:bg-zinc-800 dark:border-zinc-700" onChange={handleChange} />
                     </div>
                  </div>
                </div>
              </div>

              <button type="submit" className="w-full bg-blue-600 text-white py-3 px-4 rounded-md font-medium hover:bg-blue-700 shadow-sm transition-colors cursor-pointer">
                Place Order {symbol[currentCurrency]}{displayTotal.toFixed(2)}
              </button>
            </form>
          </div>

          <div className="mt-16 lg:mt-0 lg:col-span-5">
             <div className="bg-white dark:bg-zinc-900 p-6 rounded-lg shadow-sm border border-zinc-200 dark:border-zinc-800 sticky top-24">
                <h2 className="text-lg font-medium text-zinc-900 dark:text-white mb-4">Order Summary</h2>
                <ul className="divide-y divide-zinc-200 dark:divide-zinc-700">
                    {items.map((item) => (
                        <li key={item.id} className="py-4 flex items-center justify-between">
                            <div className="flex items-center">
                                <span className="text-sm font-medium text-zinc-900 dark:text-white">{item.quantity}x</span>
                                <span className="ml-2 text-sm text-zinc-600 dark:text-zinc-400">{item.name}</span>
                            </div>
                            <span className="text-sm font-medium text-zinc-900 dark:text-white">{symbol[currentCurrency]}{(item.price * item.quantity * rates[currentCurrency]).toFixed(2)}</span>
                        </li>
                    ))}
                </ul>
                <div className="border-t border-zinc-200 dark:border-zinc-700 pt-4 mt-4 flex justify-between items-center">
                    <span className="text-base font-medium text-zinc-900 dark:text-white">Total</span>
                    <span className="text-xl font-bold text-zinc-900 dark:text-white">{symbol[currentCurrency]}{displayTotal.toFixed(2)}</span>
                </div>
             </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
