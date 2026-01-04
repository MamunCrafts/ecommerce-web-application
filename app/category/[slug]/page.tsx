import { getProductsByCategory } from "@/lib/data";
import ProductCard from "@/components/ProductCard";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { notFound } from "next/navigation";

// Define the params as a Promise
type Params = Promise<{ slug: string }>;

export default async function CategoryPage({ params }: { params: Params }) {
  // Await the params
  const { slug } = await params;
  
  // Clean up the slug (handle URL encoding)
  const categoryName = decodeURIComponent(slug);
  
  const productsByCategory = getProductsByCategory();
  const products = productsByCategory[categoryName];

  if (!products) {
    notFound(); 
  }

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black font-sans selection:bg-blue-100 selection:text-blue-900">
      <Navbar />
      
      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="py-16 text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-white sm:text-5xl md:text-6xl">
            {categoryName}
            </h1>
            <p className="mx-auto mt-4 max-w-xl text-lg text-zinc-600 dark:text-zinc-400">
            Browse our collection of {categoryName.toLowerCase()}.
            </p>
        </div>

        <div className="pb-24">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {products.map((product) => (
                <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

// Generate static params for all known categories
export async function generateStaticParams() {
    const productsByCategory = getProductsByCategory();
    const categories = Object.keys(productsByCategory);
   
    return categories.map((category) => ({
      slug: category,
    }));
  }
