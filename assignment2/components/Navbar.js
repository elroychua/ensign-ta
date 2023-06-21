"use client";
import React from "react";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { FiShoppingCart } from "react-icons/fi";

export default function Nav() {
  const [cartNum, setCartNum] = useState(null);
  useEffect(() => {
    window.addEventListener("storage", () => {
      let value = JSON.parse(localStorage.getItem("cartItems"));
      let valueLength = value?.length + 1 || 0;
      setCartNum(valueLength);
    });
    if (!cartNum) {
      let value = JSON.parse(localStorage.getItem("cartItems"));
      let valueLength = value?.length || 0;
      setCartNum(valueLength);
    }
  }, [cartNum]);

  return (
    <header
      className="w-full mx-auto bg-white absolute t-0 z-10"
      style={{ position: "fixed" }}
    >
      <nav className="flex mx-auto justify-between items-center py-2 sm:px-16 shadow-lg ">
        <div className="cursor-pointer">
          <Link href="/">
            <Image
              src="/logo.png"
              width={250}
              height={125}
              alt="Logo"
              priority
            />
          </Link>
        </div>

        <div className="relative cursor-pointer text-slate-950">
          <Link href="/cart">
            <FiShoppingCart className="text-3xl" />
            <span
              className="absolute -top-3 -right-3 text-sm bg-orange-400 h-6 w-6
               rounded-full grid place-items-center text-white"
              style={{ alignContent: "center" }}
            >
              {cartNum}
            </span>
            <p>Cart</p>
          </Link>
        </div>
      </nav>
    </header>
  );
}
