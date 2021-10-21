import Header from "./components/header";
import Main from "./components/main";
import Basket from "./components/basket";
import { useState } from "react";

function App() {
  const [cartItems, setCartItems] = useState([]);
  console.log(cartItems);
  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((z) =>
          z.id === product.id ? { ...exist, qty: exist.qty + 1 } : z
        )
      );
    } else {
      console.log(product);
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };
  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };
  return (
    <div className="App">
      <Header />
      <div className="box">
        <Main onAdd={onAdd} />
        <Basket onAdd={onAdd} onRemove={onRemove} cartItems={cartItems} />
      </div>
    </div>
  );
}

export default App;
