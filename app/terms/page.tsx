import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black font-sans">
      <Navbar />
      
      <main className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-zinc-900 dark:text-white mb-8">Terms and Conditions</h1>
        
        <div className="prose dark:prose-invert max-w-none text-zinc-600 dark:text-zinc-400 space-y-4">
            <h2 className="text-xl font-semibold text-zinc-900 dark:text-white mt-6">1. Introduction</h2>
            <p>
                By accessing this website we assume you accept these terms and conditions. Do not continue to use our website if you do not agree to take all of the terms and conditions stated on this page.
            </p>
            
            <h2 className="text-xl font-semibold text-zinc-900 dark:text-white mt-6">2. License</h2>
            <p>
                Unless otherwise stated, we and/or our licensors own the intellectual property rights for all material on this store. All intellectual property rights are reserved. You may access this for your own personal use subjected to restrictions set in these terms and conditions.
            </p>

            <h2 className="text-xl font-semibold text-zinc-900 dark:text-white mt-6">3. User Comments</h2>
            <p>
                Parts of this website offer an opportunity for users to post and exchange opinions and information in certain areas of the website. We do not filter, edit, publish or review Comments prior to their presence on the website. Comments do not reflect the views and opinions of us, our agents and/or affiliates.
            </p>
            
            <h2 className="text-xl font-semibold text-zinc-900 dark:text-white mt-6">4. Product Liability</h2>
            <p>
               We do our best to ensure that product descriptions and images are accurate, but we cannot guarantee that every detail is perfectly precise. Prices and availability are subject to change without notice.
            </p>
        </div>
      </main>

      <Footer />
    </div>
  );
}
