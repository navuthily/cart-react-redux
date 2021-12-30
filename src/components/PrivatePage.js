import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Navbar from "./Navbar";
import Products from "./Products/index";
import Cart from "./Cart/index";

const PrivatePage = ({ checkLogin }) => {
  const auth = JSON.parse(localStorage.getItem("persist:root"));
  const checkLocalStore = JSON.parse(auth.auth).checkLogin;
  const auth2 = JSON.parse(sessionStorage.getItem("persist:authNoReducer"));
  const checkSessionStore = JSON.parse(auth2.checkLogin);
  return (
    <div className="PrivatePage">
      {checkLocalStore === true || checkSessionStore === true ? (
        <div>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Products />} />
            <Route exact path="/cart" element={<Cart />} />
          </Routes>
        </div>
      ) : (
        <Navigate to="login" />
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    checkLogin: state.auth.checkLogin,
  };
};

export default connect(mapStateToProps, null)(PrivatePage);
