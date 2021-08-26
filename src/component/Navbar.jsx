import React, {useState} from "react";
import Logo from "..//assets/images/logo.jpg";
import { Navmenuboxsvg, Navmenulinessvg } from "../assets/Icon";
import { Navbutton } from "../assets/button";
import India from "..//assets/images/India.png";
import { Transition } from "@headlessui/react";
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="w-screen">
      <div className="bg-gradient-to-r from-black via-black to-purple-800 text-white">
        <div className="max-w-8xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex flex-shrink-0 ">
                <img className="h-10 w-10 mx-2" src={Logo} alt="image" />
                <h1 className="md:text my-2 mx-auto">
                  - I
                </h1>
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  <a
                    href="#"
                    className="bg-gradient-to-r from-black to-purple-900 hover:from-purple-800 hover:to-purple-800 text-white px-3 py-2 rounded-md text-sm font-medium mx-2"
                  >
                    Home
                  </a>
                <Link to="/products/clothing">
                  <a
                    href="#"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Clothing
                  </a>
                </Link>
                {/* <Link to="/products/Beauty">
                  <a
                    href="#"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Beauty Products
                  </a>
                </Link> */}
                </div>
              </div>
            </div>
            <div className="-mr-2 flex md:hidden">
              <Navbutton onClick={() => setIsOpen(!isOpen)}>
                <span className="sr-only">Open main menu</span>
                {!isOpen ? <Navmenuboxsvg /> : <Navmenulinessvg />}
              </Navbutton>
            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="md:hidden" id="mobile-menu">
              <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <a
                  href="#"
                  className="bg-gradient-to-r from-black to-purple-900 hover:from-purple-800 hover:to-purple-800 text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Home
                </a>
                <a
                  href="#"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Clothing
                </a>

                <a
                  href="#"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Beauty Products
                </a>
              </div>
            </div>
          )}
        </Transition>
      </div>

      <div className="bg-white shadow">
        <div className="flex max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 ">
          <h1 className="text-3xl font-bold text-gray-900 hover:text-purple-700">आकर्षण-</h1>
          <div className="flex-shrink-0">
            <img className="h-9 w-9 mx-1" src={India} alt="image" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mx-3 ">Home</h1>
        </div>
      </div>
    </div>
  );
}
