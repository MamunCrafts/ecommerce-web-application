import { getProductsByCategory, getHotProducts, getFlashProducts } from "@/lib/data";
import CategorySection from "@/components/CategorySection";
import ProductCarousel from "@/components/ProductCarousel";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Home() {
  const productsByCategory = getProductsByCategory();
  const categories = Object.keys(productsByCategory);
  const hotProducts = getHotProducts();
  const flashProducts = getFlashProducts();

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black font-sans selection:bg-blue-100 selection:text-blue-900">
      <Navbar />
      
      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="py-16 text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-white sm:text-5xl md:text-6xl">
            Curated Collection
            </h1>
            <p className="mx-auto mt-4 max-w-xl text-lg text-zinc-600 dark:text-zinc-400">
            Explore our hand-picked selection of premium products across electronics, fashion, and home accessories.
            </p>
        </div>

        <div className="space-y-4 mb-16">
            <ProductCarousel title="🔥 Hot Sales" products={hotProducts} />
            <ProductCarousel title="⚡ Flash Sales" products={flashProducts} autoplayDetails={{ delay: 3000 }} />
        </div>

        <div className="space-y-12 pb-24">
          {categories.map((category) => (
            <CategorySection 
              key={category} 
              title={category} 
              products={productsByCategory[category]} 
            />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
