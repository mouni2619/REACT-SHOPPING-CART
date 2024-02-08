import React, { useState } from 'react';
import './App.css';
import Navbar from "./Navbar"
import Header from "./Header"
import ProductCard from "./ProductCard"
import Footer from "./Footer"
function App() {
  // State variables for managing cart and its count
  const [cart, setCart] = useState([]);// State for cart items
  const [cartCount, setCartCount] = useState(0); // State for cart item count
  // Dummy product data
  const data = [
    // Product objects
    {
      id: 1,
      name: "Fancy Product",
      rating: null,
      price: ["$40.00 - $80.00"],
      sale: null,
      buttonvalue: "View Options"
    },
    {
      id: 2,
      name: "Special Item",
      rating: "⭐⭐⭐⭐⭐",
      price: ["$20.00", " $18.00"],
      sale: 'sale',
      buttonvalue: "Add to Cart"
    },
    {
      id: 3,
      name: "Sale Item",
      rating: null,
      price: ["$50.00", " $25.00"],
      sale: 'sale',
      buttonvalue: "Add to Cart"
    },
    {
      id: 4,
      name: "Popular Item",
      rating: "⭐⭐⭐⭐⭐",
      price: ["$40.00"],
      sale: null,
      buttonvalue: "Add to Cart"
    },
    {
      id: 5,
      name: "Sale Item",
      rating: null,
      price: ["$50.00", " $25.00"],
      sale: 'sale',
      buttonvalue: "Add to Cart"
    },
    {
      id: 6,
      name: "Fancy Product",
      rating: null,
      price: ["$120.00 - $280.00"],
      sale: null,
      buttonvalue: "View Options"
    },
    {
      id: 7,
      name: "Special Item",
      rating: "⭐⭐⭐⭐⭐",
      price: ["$20.00", " $18.00"],
      sale: 'sale',
      buttonvalue: "Add to Cart"
    },
    {
      id: 8,
      name: "Popular Item",
      rating: "⭐⭐⭐⭐⭐",
      price: ["$40.00"],
      sale: null,
      buttonvalue: "Add to Cart"
    },
  ];
  // Function to handle adding or removing items from cart
  const handleCart = (productId) => {
    // Find the product based on productId
    const item = data.find(product => product.id === productId);
    // Check if the item is already in the cart
    const isItemInCart = cart.some(item => item.id === productId);
    // If the item is already in cart, remove it
    if (isItemInCart) {
      const updatedCart = cart.filter(item => item.id !== productId); // Remove the item from cart
      setCart(updatedCart);// Update the cart state
      setCartCount(prevCount => prevCount - 1);// Decrement the cart count
    } else {
      // If the item is not in cart, add it
      setCart([...cart, item]);// Add the item to cart
      setCartCount(prevCount => prevCount + 1);// Increment the cart count
    }
  };
  return (
    <div>
      {/* Navbar component with cart count and setCart function */}
      <Navbar cartCount={cartCount} setCart={setCart} />
      {/* Header component */}
      <Header />
      {/* Section for displaying product cards */}
      <section className="py-5">
        <div className="container px-4 px-lg-5 mt-5">
          {/* Row of product cards */}
          <div className="row gx-4 gx-lg-4 row-cols-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-4 row-cols-xxl-4 justify-content-center">
            {/* Mapping through the product data and rendering ProductCard component */}
            {data.map(product => (
              <ProductCard key={product.id} product={product} handleCart={handleCart} cart={cart} />
            ))}
          </div>
        </div>
      </section>
      {/* Footer component */}
      <Footer />
    </div>
  )
}
export default App;
