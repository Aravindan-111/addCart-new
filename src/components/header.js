import React from "react";

function Header(props) {
  return (
    <header>
      <div>
        <a href="#">
          <h1 className="simple_shopping_header">Simply Shopping</h1>
        </a>
      </div>
      <div>
        <a href="#/cart">Cart</a>{" "}
        <a className="signin" href="#/signin">
          SignIn
        </a>
      </div>
    </header>
  );
}

export default Header;
