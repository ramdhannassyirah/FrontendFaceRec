import Link from "next/link";
import React from "react";

export default function Nav() {
  return (
    <>
      <nav className="bg-white fixed w-full z-20 top-0 left-0 border-b border-gray-200 px-2 sm:px-4 py-4 ">
        <div className="container flex flex-wrap justify-between items-center mx-auto">
          <a href="https://flowbite.com/" className="flex items-center">
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="mr-3 h-6 sm:h-9"
              alt="Flowbite Logo"
            />
            <span className="self-center text-xl  font-semibold whitespace-nowrap ">
              Logo
            </span>
          </a>
          <div className="flex gap-6 items-center font-semibold  ">
            <Link href="/">Event</Link>
            <Link href="/">Cari Foto</Link>
            <Link href="/">Tentang Kami</Link>
            <button className="border border-gray-300 py-2 px-12 rounded">
              Login
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}
