import {
LOGIN, LOGINNOREMEMBER, LOGOUT
} from "./types";
const INITIAL_STATE = {
  user: null,
  checkLogin:false
};

export const authReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        user: action.payload.data,
        checkLogin: true,
        }; 
    case LOGOUT:
      return {
        ...state,
        checkLogin: false,
      }; 
    default:
      return state;
  }
};
export const authReducerNoRemember = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOGINNOREMEMBER:
      return {
        ...state,
        user: action.payload.data,
        checkLogin: true,
      };
    default:
      return state;
  }
};


// export default authReducer;