import {
LOGIN,LOGINNOREMEMBER,LOGOUT
} from "./types";
export const login = (data) => {
  return {
    type: LOGIN,
    payload: {
     data:data,
    },
  };
};
export const loginNoRemember = (data) => {
  return {
    type: LOGINNOREMEMBER,
    payload: {
      data: data,
    },
  };
};
export const logOut = () => {
  return {
    type: LOGOUT,
  };
};