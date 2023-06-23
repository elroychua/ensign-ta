"use client";
import { useEffect, useState } from "react";
export function calculateTotalPrice(cartItems) {
  return Object.values(
    cartItems.reduce((accumulator, item) => {
      if (!accumulator[item.id]) {
        accumulator[item.id] = {
          ...item,
          count: 1,
        };
      } else {
        accumulator[item.id].count++;
      }
      return accumulator;
    }, {})
  ).reduce((total, groupedItem) => {
    return total + groupedItem.price * groupedItem.count;
  }, 0);
}

export default function Cart() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    window.addEventListener("storage", () => {
      const value = JSON.parse(localStorage.getItem("cartItems"));
      setCartItems(value);
    });

    let value = JSON.parse(localStorage.getItem("cartItems"));
    if (value) {
      setCartItems(value);
    } else {
      setCartItems([]);
    }
  }, []);

  const increaseQuantity = (itemId) => {
    let updatedCartItems = cartItems;
    // Find the item with the matching itemId
    const itemIndex = updatedCartItems.findIndex((item) => item.id === itemId);
    if (itemIndex !== -1) {
      // Increase the quantity of the item
      cartItems.push(updatedCartItems[itemIndex]);
      // Update local storage with the updated cart items
      setCartItems(updatedCartItems);
      localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
      window.dispatchEvent(new Event("storage"));
    }
  };

  const decreaseQuantity = (itemId) => {
    let updatedCartItems = cartItems;
    const itemIndex = updatedCartItems.findIndex((item) => item.id === itemId);
    if (itemIndex !== -1) {
      // Increase the quantity of the item
      cartItems.splice(itemIndex, 1);
      // Update local storage with the updated cart items
      localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
      window.dispatchEvent(new Event("storage"));
    }
  };

  const clearCart = () => {
    localStorage.removeItem("cartItems");
    window.dispatchEvent(new Event("storage"));
  };
  return (
    <div className="max-w-[1440px] mx-auto min-h-min justify-around px-4 py-2 sm:px-8 xl:px-16 md:items-center ">
      <div className="flex flex-row mb-4 md:ml-10">
        <p className="text-gray-500 self-center">Cart</p>
      </div>
      {!cartItems || cartItems?.length === 0 ? (
        <p className="text-center">Your cart is empty.</p>
      ) : (
        <div>
          <div className="overflow-x-auto">
            <table className="table-auto w-full text-slate-950">
              <tbody>
                {Object.values(
                  cartItems.reduce((accumulator, item) => {
                    if (!accumulator[item.id]) {
                      accumulator[item.id] = {
                        ...item,
                        count: 1,
                      };
                    } else {
                      accumulator[item.id].count++;
                    }
                    return accumulator;
                  }, {})
                ).map((groupedItem) => (
                  <tr key={groupedItem.id}>
                    <td className="border border-slate-300">
                      <div className="flex items-center">
                        <img
                          src={groupedItem.image}
                          alt={groupedItem.title}
                          className="h-12 w-12"
                        />
                        <div className="ml-2">
                          <p className="font-semibold">{groupedItem.title}</p>
                          <p>${groupedItem.price}</p>
                        </div>
                      </div>
                    </td>
                    <td className="border border-slate-300">
                      <div className="flex flex-row items-center justify-center">
                        <button
                          className="bg-gray-200 hover:bg-gray-400 text-white font-bold py-2 px-4 rounded ml-2 md:ml-0 mr-2"
                          onClick={() => {
                            decreaseQuantity(groupedItem.id);
                          }}
                        >
                          -
                        </button>
                        <div className="w-3">{groupedItem.count}</div>
                        <button
                          className="bg-gray-200 hover:bg-gray-400 text-white font-bold py-2 px-4 rounded ml-2"
                          onClick={() => {
                            increaseQuantity(groupedItem.id);
                          }}
                        >
                          +
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-center sm:text-right">
            Total items: {cartItems.length}
          </p>
          <p className="text-center sm:text-right">
            Total price: ${calculateTotalPrice(cartItems).toFixed(2)}
          </p>
          <div className="flex flex-col sm:flex-row sm:justify-end">
            <button
              className="text-center sm:text-right bg-blue-500 hover:bg-blue-600 text-white mt-2 sm:mt-0"
              onClick={() => window.alert("Proceeding to checkout.")}
            >
              Proceed to Checkout
            </button>
            <button
              className="text-center sm:text-right bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded mt-2 sm:mt-0 sm:ml-2"
              onClick={clearCart}
            >
              Empty Cart
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
