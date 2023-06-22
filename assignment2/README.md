# Assignment 2 (`Create a shopping cart`)

## Shopping Cart Requirements

- A ​main page​ that show multiple products
- When product page is clicked, it will go to a separate product ​detail page​
- Product ​detail page​ will have add to cart
- When "​Add to cart button​" is clicked, it will update the cart icon to have number of the product in the cart
- A ​cart page​ will list the products which are added to the cart
- Cart page will calculate the total amount needed to be paid
- Cart will allow the change of quantity and removal of products
- Use ReactJs for this assignment
- Use https://fakestoreapi.com for retrieval of products

Bonus

- Write meaningful test cases only on cart page using jest and react-testing-library.
- Persist data of shopping cart even when browser is closed and reopen.
- Beautify the UI using tailwindcss framework
- Surprise Us :)

## Clarifications asked:

1. There are 3 pages in total:

- / (main page showing multiple products)
- / [slug] (separate product detail page)
- / cart (cart page) </br>
  <strong> Answer: Yes </strong>

2. Use other libraries? i.e. Axios </br>
   <strong> Answer: Yes, free to use any libraries to achieve objective.</strong>

## Technical decisions:

### A. Pages:

1. Product page (`app/page.js`), `getData()` async function was used to fetch data from the API and store it in `products` state. Then `map()` to iterate through the `products` state and display the data in the UI.

- `Tailwind grid` was used to display the products in a grid. So that the products are displayed in a responsive manner.

2. Product Detail page (`app/product/[slug]/page.js`), nextJS's `[slug]` feature was used to create dynamic routes. Async function `getProduct()` was also used to generate the product based on the slug. Page is an async function because it uses `getProduct()` to fetch data from the API and store it in `data` state.
3. Cart page (`app/cart/page.js`), it uses useEffect to get the cart items from localStorage,
   it then uses `object.values()` to get the values of the cartItems object, cartItems.reduce() and .map() to iterate through the cartItems, group them and display the data in the UI.
   Functions used within Cart page are:
   1. calculateTotalPrice(): calculates the total price of the items in the cart
   2. increaseQuantity(): increases the quantity of the item in the cart
   3. decreaseQuantity(): decreases the quantity of the item in the cart
   4. clearCart(): clears the cart

### B. Reusable Components:

1. Navbar component (`app/components/navbar.js`), it uses `useEffect()` to get the cart items from localStorage and updates the cart icon with the number of items in the cart accordingly.
2. Footer component (`app/components/footer.js`), it is a simple footer component.
3. Layout component (`app/layout.js`), it is a simple layout component that wraps the children components (i.e. different pages).

### C. Styling:

1. TailwindCSS was used for styling.
2. `global.css` was used to import the tailwindcss styles and to add custom styles.
3. Mainly, Tailwind classNames were used to style the components.
4. Grid was used to display the products page in a responsive manner.
5. Flex and divs were mainly used in this project.

### D. Other Packages:

1. `react-icons` was used for the icons used.
2. `jest` and `react-testing-library` was used for testing.
3. `react-simple-star-rating` was used for the star rating within `app/product/[slug]/page.js`

## Instructions on how to run:

```bash
# Clone the repository
git clone
# Open assignment2 folder
cd assignment2
# Install dependencies
npm i
# Run the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
