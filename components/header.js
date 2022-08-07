import { useState, useEffect } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";

const navigation = [
  { name: "About", href: "/about", current: false },
  { name: "Projects", href: "/projects", current: false },
  { name: "Work", href: "/work", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function NavBar() {
  const [pages, setpages] = useState(navigation);

  useEffect(() => {
    setpages((prevPages) => {
      return prevPages.map((page) => {
        return { ...page, current: page.href === location.pathname };
      });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Disclosure as="nav" className="bg-white shadow-lg">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex-shrink-0 flex items-center">
                  <img
                    className="block lg:hidden h-8 w-150 rounded-lg w-auto cursor-pointer"
                    src="/shafrazi.png"
                    alt="logo"
                  />

                  <img
                    className="hidden h-10 w-150 rounded-lg lg:block cursor-pointer"
                    src="/shafrazi.png"
                    alt="logo"
                  />
                </div>
                <div className="hidden sm:block sm:ml-6 py-1">
                  <div className="flex space-x-10">
                    {pages.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current
                            ? "bg-gray-300 text-gray-700 font-bold"
                            : "text-black hover:bg-gray-700 hover:text-white font-bold",
                          "px-3 py-2 rounded-md font-medium text-lg"
                        )}
                        aria-current={item.current ? "page" : undefined}
                        onClick={() => {
                          setpages((prevPages) => {
                            return prevPages.map((page) => {
                              if (item.name === page.name) {
                                page.current = true;
                              } else {
                                page.current = false;
                              }
                              return page;
                            });
                          });
                        }}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {pages.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-gray-300 text-gray-700 font-bold"
                      : "text-gray-700 hover:bg-gray-700 hover:text-white font-bold",
                    "block px-3 py-2 rounded-md text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                  onClick={() => {
                    setpages((prevPages) => {
                      return prevPages.map((page) => {
                        if (item.name === page.name) {
                          page.current = true;
                        } else {
                          page.current = false;
                        }
                        return page;
                      });
                    });
                  }}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
