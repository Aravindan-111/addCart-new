import React from "react";

function Product(props) {
  const { product, onAdd } = props;
  console.log(product.name);
  return (
    <div>
      <img className="img" src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <div>{product.price}</div>
      <div>
        <button onClick={() => onAdd(product)}>Add to Cart</button>
      </div>
    </div>
  );
}

export default Product;
