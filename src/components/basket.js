import React from "react";
// import Product from "./Product";

function Basket(props) {
  const { cartItems, onAdd, onRemove } = props;
  console.log(cartItems);
  return (
    <aside className="container col-1">
      <h2>Cart</h2>
      <div>
        {cartItems.length === 0 && <div>Cart is Empty</div>}
        {cartItems.map((item) => (
          <div key={item.id} className="box">
            <div>{item.name}</div>
            <div className="box align add_sub_button">
              <button className="add_button" onClick={() => onAdd(item)}>
                +
              </button>{" "}
              <button className="sub_button" onClick={() => onRemove(item)}>
                -
              </button>
            </div>
            <div>
              {item.qty} x {item.price}
            </div>
          </div>
        ))}
      </div>
    </aside>
  );
}

export default Basket;
