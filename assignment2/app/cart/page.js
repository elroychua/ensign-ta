export default function Cart() {
  return (
    <main className="pt-28 w-full absolute bg-black ">
      <div className="max-w-[1440px] mx-auto justify-around sm:px-16 px-4 py-4 md:items-center md:flex flex-col">
        Cart Page
        <p>Your cart is currently empty.</p>
        {/* TODO:
        1. add in list of items
        2. ability to delette item
        3. save items into cookie
        4. update cookie on any functions used */}
      </div>
    </main>
  );
}
