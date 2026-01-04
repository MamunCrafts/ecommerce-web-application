import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black font-sans">
      <Navbar />
      
      <main className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-zinc-900 dark:text-white mb-8">Privacy Policy</h1>
        
        <div className="prose dark:prose-invert max-w-none text-zinc-600 dark:text-zinc-400 space-y-4">
            <p>
                Your privacy is important to us. It is our policy to respect your privacy regarding any information we may collect from you across our website.
            </p>
            <h2 className="text-xl font-semibold text-zinc-900 dark:text-white mt-6">Information We Collect</h2>
            <p>
                We only ask for personal information when we truly need it to provide a service to you. We collect it by fair and lawful means, with your knowledge and consent. We also let you know why we’re collecting it and how it will be used.
            </p>
            <p>
                We only retain collected information for as long as necessary to provide you with your requested service. What data we store, we’ll protect within commercially acceptable means to prevent loss and theft, as well as unauthorized access, disclosure, copying, use or modification.
            </p>
            <h2 className="text-xl font-semibold text-zinc-900 dark:text-white mt-6">Sharing of Information</h2>
            <p>
                We don’t share any personally identifying information publicly or with third-parties, except when required to by law.
            </p>
            <p>
                Our website may link to external sites that are not operated by us. Please be aware that we have no control over the content and practices of these sites, and cannot accept responsibility or liability for their respective privacy policies.
            </p>
        </div>
      </main>

      <Footer />
    </div>
  );
}
