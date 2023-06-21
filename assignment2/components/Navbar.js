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
  });

  console.log(cartNum);
  return (
    <header
      className="w-full mx-auto bg-white absolute t-0 z-10"
      style={{ position: "fixed" }}
    >
      <nav className="flex mx-auto justify-between items-center py-2 text-2xl sm:px-16 shadow-lg ">
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

        <div className="relative cursor-pointer">
          <Link href="/cart">
            <FiShoppingCart className=" text-black" />
            <span
              className="absolute -top-2 -right-2 text-[13px] bg-orange-400 h-[18px] w-[18px]
               rounded-full grid place-items-center text-white"
              style={{ alignContent: "center" }}
            >
              {cartNum}
            </span>
          </Link>
        </div>
      </nav>
    </header>
  );
}
