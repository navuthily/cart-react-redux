import React, { useState, useEffect } from "react";
import { Link ,useNavigate} from "react-router-dom";
import "./styles.css";
import {
LogoutOutlined
} from "@ant-design/icons";
import {useDispatch,useSelector } from "react-redux";
import {
  logOut
} from "../../redux/Auth/actions";
const Navbar = () => {
  const navigate = useNavigate();
  const [cartCount, setCartCount] = useState(0);
  const cart = useSelector((state) => state?.shop?.cart);
  const dispatch = useDispatch();
  useEffect(() => {
    let count = 0;
    cart.forEach((item) => {
      count += item.qty;
    });
    setCartCount(count);
  }, [cart, cartCount]);
  function flogOut() {
    dispatch(logOut());
    navigate('login')
  }
  return (
    <div className="nav">
      <Link to="/">
        <h2>Redux Shopping Cart</h2>
      </Link>
      <div className="right-nav">
        <Link to="/cart">
          <div>
            <h3>Cart</h3>
            <img
              src="https://image.flaticon.com/icons/svg/102/102276.svg"
              alt="shopping cart"
            />
            <div>{cartCount}</div>
          </div>
        </Link>
        <button onClick={flogOut}>
          <LogoutOutlined />
        </button>
      </div>
    </div>
  );
};



export default Navbar;
