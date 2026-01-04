import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Define the params as a Promise
type Params = Promise<{ orderId: string }>;

export default async function OrderSuccessPage({ params }: { params: Params }) {
  const { orderId } = await params;

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black font-sans">
      <Navbar />
      
      <main className="mx-auto max-w-7xl px-4 py-32 sm:px-6 lg:px-8 flex flex-col items-center text-center">
         <div className="rounded-full bg-green-100 p-3 mb-6">
            <svg
              className="h-10 w-10 text-green-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
         </div>
         <h1 className="text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-white sm:text-5xl mb-4">
            Order Placed Successfully!
         </h1>
         <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-md mx-auto mb-8">
            Thank you for your purchase. Your order ID is <span className="font-mono font-bold text-black dark:text-white">#{orderId}</span>. We will send you an email confirmation shortly.
         </p>
         
         <Link 
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-transparent bg-blue-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-blue-700 transition-colors"
         >
            Continue Shopping
         </Link>
      </main>

      <Footer />
    </div>
  );
}
