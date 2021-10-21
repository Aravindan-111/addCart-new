import React from "react";
import Product from "./Product";
import Data from "../data";

function Main(props) {
  const data = Data;
  const { onAdd } = props;
  return (
    <main className="container col-2">
      <h2>Products</h2>
      <div className="content box">
        {data.map((product) => (
          <Product key={product.id} product={product} onAdd={onAdd}></Product>
        ))}
      </div>
    </main>
  );
}

export default Main;
