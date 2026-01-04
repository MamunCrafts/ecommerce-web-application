import Image from 'next/image';
import { CartItem as CartItemType, removeFromCart, updateQuantity } from '@/lib/features/cart/cartSlice';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';

interface CartItemProps {
  item: CartItemType;
}

export default function CartItem({ item }: CartItemProps) {
  const dispatch = useAppDispatch();
  const { currentCurrency, rates, symbol } = useAppSelector((state) => state.currency);
  const price = item.price * rates[currentCurrency];

  return (
    <div className="flex gap-4 py-4">
      <div className="relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-md border border-zinc-200 dark:border-zinc-800">
        <Image
          src={item.image}
          alt={item.name}
          fill
          className="object-cover"
        />
      </div>

      <div className="flex flex-1 flex-col">
        <div>
          <div className="flex justify-between text-base font-medium text-zinc-900 dark:text-white">
            <h3 className="line-clamp-1">{item.name}</h3>
            <p className="ml-4">{symbol[currentCurrency]}{(price * item.quantity).toFixed(2)}</p>
          </div>
          <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">{item.category}</p>
        </div>
        <div className="flex flex-1 items-end justify-between text-sm">
          <div className="flex items-center gap-2 border border-zinc-200 rounded-md dark:border-zinc-800">
             <button 
                onClick={() => dispatch(updateQuantity({ id: item.id, quantity: item.quantity - 1 }))}
                className="px-2 py-1 hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-600 dark:text-zinc-400 cursor-pointer"
                aria-label="Decrease quantity"
             >
                -
             </button>
             <span className="w-4 text-center text-zinc-900 dark:text-white">{item.quantity}</span>
             <button 
                onClick={() => dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }))}
                className="px-2 py-1 hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-600 dark:text-zinc-400 cursor-pointer"
                aria-label="Increase quantity"
             >
                +
             </button>
          </div>

          <button
            type="button"
            onClick={() => dispatch(removeFromCart(item.id))}
            className="font-medium text-red-600 hover:text-red-500 cursor-pointer"
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
}
