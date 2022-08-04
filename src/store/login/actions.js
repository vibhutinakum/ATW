import { GET_LOGIN, GET_LOGIN_SUCCESS, GET_LOGIN_FAIL } from "./actionTypes";

export const getLogin = () => {
  return {
    type: GET_LOGIN,
  };
};

export const getLoginSuccess = (data) => {
  console.log(data);
  return {
    type: GET_LOGIN_SUCCESS,
    payload: data,
  };
};

export const getLoginFail = (error) => {
  return {
    type: GET_LOGIN_FAIL,
    payload: error,
  };
};
