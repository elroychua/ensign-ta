import Image from "next/image";
import Link from "next/link";
import { RiArrowRightSLine } from "react-icons/ri";
import { AiOutlineShoppingCart } from "react-icons/ai";
export default async function Page({ params }) {
  const data = await getProduct(params.slug);
  console.log(data);
  return (
    <main className="pt-32 w-full min-h-screen absolute bg-white">
      <div className="flex flex-row ml-10">
        <Link href="/">
          <p className="text-blue-400 self-center">Product</p>
        </Link>
        <div className="flex flex-row text-gray-500">
          <RiArrowRightSLine className="self-center" />
          <p>{data?.title}</p>
        </div>
      </div>
      <div className="flex flex-col items-center md:items-start md:flex-row py-5 px-10">
        <div
          className="image-container justify-center h-96 w-96"
          style={{ display: "contents" }}
        >
          <Image
            alt={data?.title}
            className="mx-auto"
            style={{
              objectFit: "contain",
            }}
            width={500}
            height={500}
            src={data?.image}
          />
        </div>
        <div className="text-black ml-2">
          <p className="text-2xl font-bold">{data?.title}</p>
          <p className="mb-2">Category: {data?.category}</p>
          <div className="flex flex-row items-center">
            Rating:
            <p className="text-2xl font-semibold text-gray-500  ml-1">
              {data?.rating?.rate}
            </p>
          </div>

          <p className="text-xl font-bold mb-2">${data?.price}</p>
          <p className="text-sm font-normal text-gray-500 mb-2">
            Description: {data?.description}
          </p>
          <div className="flex flex-row">
            <button className="flex flex-row text-blue-500 border-2 border-blue-500 rounded-md px-4 py-2">
              <p> Add to cart</p>
              <AiOutlineShoppingCart className="text-2xl ml-2" />
            </button>
            <p className="text-base font-normal text-gray-500 ml-2 self-center">
              {`[${data?.rating?.count} pcs left]`}
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
async function getProduct(id) {
  const res = await fetch(`https://fakestoreapi.com/products/${id}`);
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }
  return res.json();
}
