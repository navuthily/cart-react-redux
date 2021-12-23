import React from "react";
import { connect } from "react-redux";
import {
  adjustItemQty,
  removeFromCart,
} from "../../redux/Shopping/shopping-actions";
import "./styles.css";

const Cart = ({ adjustQty, cart, removeFromCart }) => {
  return (
    <div className="cart">
      Cart:
      <table>
        <tr>
          <th>Products</th>
          <th>Quantity</th>
          <th></th>
        </tr>
        {cart.map((item, index) => (
          <tr key={index}>
            <td>{item.title}</td>
            <td>
              <input
                type="number"
                min="1"
                value={item.qty}
                onChange={(e) => {
                  adjustQty(item.id, e.target.value);
                  console.log(item.id, e.target.value);
                }}
              />
            </td>
            <td>
              <button onClick={() => removeFromCart(item.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.shop.cart,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    adjustQty: (id, value) => dispatch(adjustItemQty(id, value)),
    removeFromCart: (id) => dispatch(removeFromCart(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
