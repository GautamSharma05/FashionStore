import React from "react";
import Image from "next/image";
import { BiShoppingBag, BiUser } from "react-icons/bi";
import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <Link href={"/"}>
            <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
              <Image priority width="54px" height="54px" src="/logo.svg" />
              <span className="ml-3 text-xl">SharmaStore</span>
            </a>
          </Link>
          <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
            <Link href={""}>
              <a className="mr-5 hover:text-gray-900">First Link</a>
            </Link>
            <Link href={""}>
              <a className="mr-5 hover:text-gray-900">Second Link</a>
            </Link>
            <Link href={""}>
              <a className="mr-5 hover:text-gray-900">Third Link</a>
            </Link>
            <Link href={""}>
              <a className="mr-5 hover:text-gray-900">Fourth Link</a>
            </Link>
          </nav>
          <div className="flex items-center justify-center mr-8">
            <div className="flex border-2 rounded">
              <input
                type="text"
                className="px-4 py-2 w-80"
                placeholder="Search for products,brand and more..."
              />
              <button className="flex items-center justify-center px-4 border-l">
                <svg
                  className="w-6 h-6 text-gray-600"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z" />
                </svg>
              </button>
            </div>
          </div>
          <Link href={"/signup"}>
            <a className="flex flex-col mx-3">
              <BiUser className=" mx-1 text-2xl" />
              <span className="text-xs text-black font-bold ">Profile</span>
            </a>
          </Link>

          <Link href={""}>
            <a className="flex flex-col mx-3">
              <BiShoppingBag className="text-2xl" />
              <span className="text-xs text-black font-bold">Bag</span>
            </a>
          </Link>
        </div>
      </header>
    </>
  );
};

export default Navbar;
