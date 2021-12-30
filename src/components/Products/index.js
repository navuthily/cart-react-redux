import React from "react";
import { connect } from "react-redux";
import {
  addToCart,
} from "../../redux/Shopping/shopping-actions";
import "./style.css";

const Products = ({ products,addToCart }) => {
  
  
  return (
    <div className="products">
      {products.map((product) => (
        <div key={product.id} className="item">
          <img src={product.image} className="img-product" />
          <h3>{product.title}</h3>
          <div>{product.description}</div>
          <div>Price: {product.price}</div>
          <span>
            <button onClick={()=>addToCart(product.id)}>Add item</button>
          </span>
        </div>
      ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    products: state.shop.products,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => dispatch(addToCart(id)),
  };
};
export default connect(mapStateToProps,mapDispatchToProps)(Products);
