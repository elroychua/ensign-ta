import { calculateTotalPrice } from "./app/cart/page";

describe("Cart Functions:", () => {
  //TODO:
  // test("increases quantity correctly")
  // test("decrease quantity correctly")
  test("calculates total price correctly", () => {
    const cartItems = [
      {
        id: 1,
        title: "Item 1",
        price: 10,
        image: "item1.jpg",
      },
      {
        id: 2,
        title: "Item 2",
        price: 20,
        image: "item2.jpg",
      },
    ];
    const totalPrice = calculateTotalPrice(cartItems);
    expect(totalPrice).toBe(30);
  });
});
