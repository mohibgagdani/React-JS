import React from "react";

const ProductCard = ({ item, addToCart }) => {
  return (
    <div className="card">
      <img src={item.image} alt={item.name} />
      <h3>{item.name}</h3>
      <p className="desc">{item.description}</p>
      <p className="price">${item.price.toFixed(2)}</p>
      <button onClick={() => addToCart(item)}>Add to Cart</button>
    </div>
  );
};

export default ProductCard;
