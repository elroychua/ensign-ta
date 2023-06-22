import { RiCopyrightFill } from "react-icons/ri";
import Link from "next/link";
export default function Footer() {
  return (
    <div className="flex flex-col mt-10 pb-2 place-content-center">
      <div className="flex flex-col md:flex-row justify-around">
        <div className="flex flex-col md:w-2/3">
          <h2 className="text-lg font-bold pb-2 text-white">Shopbag</h2>
          <p className="text-xs font-light text-gray-400 ">
            Shopbag is a platform that allows users to buy products online. It
            provides a convenient way to browse, compare prices, and purchase
            items from anywhere using a computer or mobile device onto their
            respective carts and saves what is in their carts in session.
          </p>
        </div>
        <div className="flex flex-col">
          <h2 className="text-lg mt-4 md:mt-0 font-bold pb-2 text-white">
            Quick Links
          </h2>
          <ul className="flex flex-col text-xs ml-1 text-gray-400">
            <li className="pb-2">
              <Link href="/" className=" hover:text-white">
                Products
              </Link>
            </li>
            <li className="pb-2">
              <Link href="/cart" className=" hover:text-white">
                My Cart
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div
        className="flex flex-row mt-10 pb-2 place-content-center"
        style={{ backgroundColor: "background: #f5f5f5" }}
      >
        <p className="text-center  text-white text-xs mr-1">
          Created by Elroy Chua Ming Xuan
        </p>
        <RiCopyrightFill className="text-white" />
        <p className="text-center  text-white text-xs ml-1">2023</p>
      </div>
      <div className="pb-10">
        <p className="text-center  text-gray-200 text-xs font-light">
          {`Made with React, NextJS & TailWindCSS.`}
        </p>
      </div>
    </div>
  );
}
