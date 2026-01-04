import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black font-sans">
      <Navbar />
      
      <main className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-zinc-900 dark:text-white mb-8">Contact Us</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
                <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-6">
                    Have any questions or feedback? We'd love to hear from you. Fill out the form or reach out to us via email or phone.
                </p>
                <div className="space-y-4">
                    <div>
                        <h3 className="text-sm font-medium text-zinc-900 dark:text-white">Email</h3>
                        <p className="text-zinc-600 dark:text-zinc-400">support@store.com</p>
                    </div>
                    <div>
                        <h3 className="text-sm font-medium text-zinc-900 dark:text-white">Phone</h3>
                        <p className="text-zinc-600 dark:text-zinc-400">+1 (555) 123-4567</p>
                    </div>
                    <div>
                        <h3 className="text-sm font-medium text-zinc-900 dark:text-white">Address</h3>
                        <p className="text-zinc-600 dark:text-zinc-400">123 Commerce St, Market City, ST 12345</p>
                    </div>
                </div>
            </div>
            
            <form className="space-y-6 bg-white dark:bg-zinc-900 p-6 rounded-lg shadow-sm border border-zinc-200 dark:border-zinc-800">
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300">Name</label>
                    <input type="text" id="name" className="mt-1 block w-full rounded-md border-zinc-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2 border dark:bg-zinc-800 dark:border-zinc-700" placeholder="Your name" />
                </div>
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300">Email</label>
                    <input type="email" id="email" className="mt-1 block w-full rounded-md border-zinc-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2 border dark:bg-zinc-800 dark:border-zinc-700" placeholder="you@example.com" />
                </div>
                <div>
                    <label htmlFor="message" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300">Message</label>
                    <textarea id="message" rows={4} className="mt-1 block w-full rounded-md border-zinc-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2 border dark:bg-zinc-800 dark:border-zinc-700" placeholder="How can we help?"></textarea>
                </div>
                <button type="submit" className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors cursor-pointer">
                    Send Message
                </button>
            </form>
        </div>
      </main>

      <Footer />
    </div>
  );
}
