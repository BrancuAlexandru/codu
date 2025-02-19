import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";

import { MenuIcon, XIcon } from "@heroicons/react/outline";

import { navigation, discordInviteUrl } from "../../config/site_settings";

const Nav: NextPage = () => {
  return (
    <Popover as="header" className="relative z-10">
      <div className="pt-6">
        <nav
          className="relative max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 pb-4"
          aria-label="Global"
        >
          <div className="flex items-center flex-1 justify-between">
            <div className="flex items-center justify-between w-full md:w-auto">
              <Link href="/">
                <a>
                  <span className="sr-only">Codú</span>
                  <Image
                    src="/images/codu.png"
                    alt="Codú logo"
                    height={30}
                    width={94.5}
                  />
                </a>
              </Link>
              <div className="-mr-2 flex items-center md:hidden">
                <Popover.Button className=" rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-gray-800 focus:outline-none focus:ring-2 focus-ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  <MenuIcon className="h-6 w-6" aria-hidden="true" />
                </Popover.Button>
              </div>
            </div>
            <div className="hidden space-x-8 md:flex md:ml-10">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-base font-medium text-white hover:text-gray-300"
                >
                  {item.name}{" "}
                </a>
              ))}
            </div>
          </div>
        </nav>
      </div>

      <Transition
        as={Fragment}
        enter="duration-150 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="absolute top-0 inset-x-0 p-2 transition transform origin-top md:hidden"
        >
          <div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
            <div className="px-5 pt-4 flex items-center justify-between">
              <Link href="/">
                <a className="hover:bg-slate-50 border-r">
                  <Image
                    src="/images/codu-black.png"
                    alt="Codú logo"
                    height={24}
                    width={75.6}
                  />
                </a>
              </Link>
              <div className="-mr-2">
                <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-pink-600">
                  <span className="sr-only">Close menu</span>
                  <XIcon className="h-6 w-6" aria-hidden="true" />
                </Popover.Button>
              </div>
            </div>
            <div className="pt-5 pb-6">
              <div className="px-2 space-y-1">
                {navigation.map((item) => (
                  <Link key={item.name} href={item.href}>
                    <a className="block px-3 py-2 rounded-md text-base font-medium text-black hover:bg-gray-50">
                      {item.name}
                    </a>
                  </Link>
                ))}
              </div>
              <div className="mt-6 px-5"></div>
              <a
                href={discordInviteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center mx-4 py-3 px-4 rounded-md shadow bg-gradient-to-r from-orange-400 to-pink-600 text-white font-medium hover:from-orange-500 hover:to-pink-700"
              >
                Join the community
              </a>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
};

export default Nav;
