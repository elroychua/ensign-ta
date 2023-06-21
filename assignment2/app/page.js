"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
export default async function Home() {
  const data = await getData();
  return (
    <main className="pt-32 w-full absolute" style={{ background: "#F5F5F5" }}>
      <div className="max-w-[1440px] mx-auto justify-around px-4 py-2 sm:px-8 md:px-16 md:items-center ">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-0 md:gap-4">
          {data.map((item) => {
            return (
              <Link href={`/product/${item.id}`} key={item.id}>
                <div
                  key={item?.id}
                  className="my-2 md:my-0 card-container flex bg-white shadow-md hover:shadow-slate-600 p-2 rounded-sm"
                  style={{ alignItems: "center" }}
                >
                  <div className="image-container border-2 flex justify-center h-40 w-40">
                    <Image
                      alt="design-image"
                      className="mx-auto"
                      style={{
                        objectFit: "cover",
                        objectPosition: "0 1",
                      }}
                      src={item?.image}
                      width={150}
                      height={150}
                    />
                  </div>
                  <div className="details-container self-start flex flex-col mt-4 text-slate-950">
                    <div className="h-8">
                      <h3 className="text-sm text-slate-950 font-normal line-clamp-2 leading-none">
                        {item?.title}
                      </h3>
                    </div>
                    <h4 className="text-lg font-normal text-orange-400">
                      ${item?.price}
                    </h4>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </main>
  );
}

async function getData() {
  const res = await fetch("https://fakestoreapi.com/products");
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
