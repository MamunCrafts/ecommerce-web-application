import { Product } from '@/lib/data';
import ProductCard from './ProductCard';

interface CategorySectionProps {
  title: string;
  products: Product[];
}

export default function CategorySection({ title, products }: CategorySectionProps) {
  return (
    <section className="py-12">
      <div className="mb-8 flex items-end justify-between">
        <h2 className="text-3xl font-bold text-zinc-900 dark:text-white tracking-tight">{title}</h2>
        <a href="#" className="text-sm font-medium text-blue-600 hover:text-blue-500 dark:text-blue-400">
          View all {title} &rarr;
        </a>
      </div>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
