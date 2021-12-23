import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./styles.css";

import { connect } from "react-redux";

const Navbar = ({ cart }) => {
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    let count = 0;
    cart.forEach((item) => {
      count += item.qty;
    });
    setCartCount(count);
  }, [cart, cartCount]);
  return (
    <div className="nav">
      <Link to="/">
        <h2 >Redux Shopping Cart</h2>
      </Link>
      <Link to="/cart">
        <div >
          <h3 >Cart</h3>
          <img
            src="https://image.flaticon.com/icons/svg/102/102276.svg"
            alt="shopping cart"
          />
          <div >{cartCount}</div>
        </div>
      </Link>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.shop.cart,
  };
};

export default connect(mapStateToProps)(Navbar);
