import { ADD_TO_CART,REMOVE_FROM_CART,ADJUST_ITEM_QTY,LOAD_CURRENT_ITEM} from "./shopping-types";
export const addToCart = (itemID) => {
  console.log('add to carrt')
  return {
    type:ADD_TO_CART,
    payload: {
      id: itemID,
    },
  };
};

export const removeFromCart = (itemID) => {
  return {
    type:REMOVE_FROM_CART,
    payload: {
      id: itemID,
    },
  };
};

export const adjustItemQty = (itemID, qty) => {
  return {
    type:ADJUST_ITEM_QTY,
    payload: {
      id: itemID,
      qty,
    },
  };
};

export const loadCurrentItem = (item) => {
  return {
    type:LOAD_CURRENT_ITEM,
    payload: item,
  };
};
