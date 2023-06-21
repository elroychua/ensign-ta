"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { AiOutlineShoppingCart } from "react-icons/ai";

export default function Nav() {
  return (
    <header
      className="w-full mx-auto bg-white absolute t-0 z-10"
      style={{ position: "fixed" }}
    >
      <nav className="flex mx-auto justify-between px-4 py-2 sm:px-16 shadow-lg ">
        <div className="flex items-center">
          <Link href="/">
            <Image
              src="/logo.png"
              width={250}
              height={125}
              alt="Logo"
              priority
              className="cursor-pointer"
            />
          </Link>
        </div>

        <div className="flex items-center ml-auto">
          <Link href="/cart">
            <AiOutlineShoppingCart className="text-3xl text-black flex items-center" />
          </Link>
        </div>
      </nav>
    </header>
  );
}
