import React from "react";
import Image from "next/image";
import { MdAccountCircle } from "react-icons/md";
import Link from "next/link";
const Navbar = () => {
  return (
    <>
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <Image priority width="54px" height="54px" src="/logo.svg" />
            <span className="ml-3 text-xl">SharmaStore</span>
          </a>
          <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
            <a className="mr-5 hover:text-gray-900">First Link</a>
            <a className="mr-5 hover:text-gray-900">Second Link</a>
            <a className="mr-5 hover:text-gray-900">Third Link</a>
            <a className="mr-5 hover:text-gray-900">Fourth Link</a>
          </nav>
          <Link href={"/signup"}>
            <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
              Login/SignUp
              <MdAccountCircle className=" ml-2 text-xl" />
            </button>
          </Link>
        </div>
      </header>
    </>
  );
};

export default Navbar;
