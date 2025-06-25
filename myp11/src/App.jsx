import React, { useState } from "react";
import { cardData } from "./data";
import ProductCard from "./components/ProductCard";
import Cart from "./components/Cart";
import Header from "./components/Header";
import "./App.css";

function App() {
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  return (
    <div className="App">
      <Header />
      <div className="main-content">
        <div className="product-grid">
          {cardData.map((item, index) => (
            <ProductCard key={index} item={item} addToCart={handleAddToCart} />
          ))}
        </div>
        <Cart cartItems={cartItems} />
      </div>
    </div>
  );
}

export default App;
