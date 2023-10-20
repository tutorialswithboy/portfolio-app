"use client";
import { Popover, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/20/solid";
import { Bars3Icon } from "@heroicons/react/24/outline";
import {  useState } from "react";

const navLinks: any = [
  { title: "About", to: "/about" },
  { title: "Articles", to: "/posts" },
  { title: "Projects", to: "/projects" },
];
function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const openPopover = () => {
    setIsOpen(true);
  };

  const closePopover = () => {
    setIsOpen(false);
  };
  return (
    <div>
      <header className="select-none sticky top-0 w-full flex gap-4 md:gap-10 items-center z-20 px-4 md:px-10 py-6 bg-white dark:bg-gray-900 dark:contrast-more:bg-black supports-backdrop-blur:bg-white/80 dark:supports-backdrop-blur:bg-gray-900/90 dark:contrast-more:supports-backdrop-blur:bg-black/90 backdrop-blur motion-safe:transition">
        <a href={"/"}>
          <a className="shrink-0 motion-safe:transition focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary-600 dark:focus-visible:ring-offset-gray-900 dark:contrast-more:focus-visible:ring-offset-black rounded-full">
            <img
              aria-hidden="true"
              src="/img/avatar-okabe-small.webp"
              className="w-10 h-10 rounded-full border border-gray-200 dark:border-transparent shadow-sm"
              alt="Meu avatar pessoal"
            />
            <span className="sr-only">{"routes.home"}</span>
          </a>
        </a>

        <nav
          className="hidden md:block text-sm px-3 motion-safe:transition bg-white dark:bg-gray-800 rounded-full shadow-lg shadow-gray-800/5 ring-1 ring-gray-900/5 dark:ring-gray-700 dark:contrast-more:ring-gray-600"
          aria-label="Menu principal"
        >
          <ul className="flex">
            {navLinks.map((link: any) => (
              <li key={link.to}>
                <a href={link.to}>
                  <a
                    className={`relative px-3 py-2 block font-medium dark:text-gray-50 hover:text-primary-600 focus-visible:text-primary-600 dark:hover:text-primary-400 dark:focus-visible:text-primary-400 motion-safe:transition rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary-600 dark:focus-visible:ring-offset-gray-900 dark:contrast-more:focus-visible:ring-offset-black
text-primary-600 dark:text-primary-400 }`}
                  >
                    {link.title}
                    <div className="absolute -bottom-px inset-x-0 h-px bg-gradient-to-r from-primary-500/0 via-primary-500/40 to-primary-500/0" />
                  </a>
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* <div className="flex gap-4 ml-auto">
  

          <ClientOnly>
            <ThemeToggle className="mr-14 md:mr-0" />
          </ClientOnly>
        </div> */}
      </header>
      <Popover className="md:hidden">
        {({ open }) => (
          <>
            <Popover.Button
              className="fixed top-6 right-4 z-30 bg-white dark:bg-gray-800 p-2 rounded-full flex items-center shadow-lg shadow-gray-800/5 ring-1 ring-gray-900/5 hover:ring-gray-900/10 dark:ring-gray-700 dark:contrast-more:ring-gray-600 dark:hover:ring-gray-600 dark:contrast-more:hover:ring-gray-500 motion-safe:transition focus:outline-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary-600 dark:focus-visible:ring-primary-600 dark:focus-visible:ring-offset-gray-900 dark:contrast-more:focus-visible:ring-offset-black"
              onClick={openPopover}
            >
              <span className="sr-only">Toggle Menu</span>
              <Bars3Icon
                className="w-6 h-6 text-gray-500 dark:text-gray-400 motion-safe:transition"
                aria-hidden="true"
              />
            </Popover.Button>

            {isOpen && (
              <Popover.Panel className="fixed inset-x-4 z-30 top-8 p-8 rounded-3xl bg-white dark:bg-gray-800 dark:contrast-more:bg-gray-900 motion-safe:transition ring-1 ring-gray-900/5 dark:ring-gray-800 dark:contrast-more:ring-gray-600">
                <div className="flex items-center justify-between -mt-2">
                  <h2 className="font-medium text-sm text-gray-700 dark:text-gray-400 dark:contrast-more:text-gray-300 motion-safe:transition">
                    Navigation
                  </h2>
                  <button
                    type="button"
                    onClick={closePopover}
                    className="p-2 -mr-3 flex items-center justify-center"
                  >
                    <XMarkIcon
                      className="w-6 h-6 dark:text-gray-300"
                      aria-hidden="true"
                    />
                    <span className="sr-only">Close Menu</span>
                  </button>
                </div>

                <nav className="mt-4" aria-label="Main Menu">
                  <ul className="divide-y dark:divide-gray-600">
                    {navLinks.map((link) => (
                      <li key={link.to}>
                        <a
                          href={`/api`}
                          className="py-2.5 block font-normal dark:text-gray-50 motion-safe:transition"
                          onClick={() => {
                            closePopover(); // Close the popover when a link is clicked
                          }}
                        >
                          {link.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>
              </Popover.Panel>
            )}
          </>
        )}
      </Popover>
    </div>
  );
}

export default Header;

