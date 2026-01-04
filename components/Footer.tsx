export default function Footer() {
  return (
    <footer className="border-t border-zinc-200 bg-white py-12 dark:border-zinc-800 dark:bg-black">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-4 sm:flex-row sm:px-6 lg:px-8">
        <p className="text-sm text-zinc-500 dark:text-zinc-400">
          © {new Date().getFullYear()} STORE. All rights reserved.
        </p>
        <div className="flex gap-6">
          {['Privacy Policy', 'Terms of Service', 'Contact'].map((item) => (
            <a
              key={item}
              href="#"
              className="text-sm text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
