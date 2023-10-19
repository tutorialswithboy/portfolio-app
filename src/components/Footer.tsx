import Link from "next/link";

export default function Footer() {
  const navLinks: any = [
    { title: "About", to: "/about" },
    { title: "Articles", to: "/posts" },
    { title: "Projects", to: "/projects" },
  ];

  return (
    <footer className="select-none flex flex-col md:flex-row gap-6 items-center justify-between text-sm w-full px-4 md:px-10 border-t border-gray-200 dark:border-gray-700 dark:contrast-more:border-gray-600 pt-8 pb-10 motion-safe:transition">
      <nav>
        <ul className="flex gap-3 md:-ml-2">
          {navLinks.map((link: any) => (
            <li key={link.to}>
              <a href={link.to}>
                <a
                  aria-current="page"
                  className="px-2 py-1 focus:outline-none rounded dark:text-gray-300 dark:contrast-more:text-gray-200 motion-safe:transition hover:text-primary-600 focus-visible:text-primary-600 dark:hover:text-primary-400 dark:focus-visible:text-primary-400 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary-600 dark:focus-visible:ring-offset-gray-900 dark:contrast-more:focus-visible:ring-offset-black"
                >
                  {link.title}
                </a>
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="text-center md:text-right text-gray-500 dark:text-gray-400 dark:contrast-more:text-gray-300 motion-safe:transition">
        <p>© 2023  Arunava Basu.</p>
        <p className="text-xs mt-1">
          Created with NextJS and Tailwind CSS. Icons by HeroIcons.
        </p>
      </div>
    </footer>
  );
}
