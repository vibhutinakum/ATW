import { GET_LOGIN, GET_LOGIN_SUCCESS, GET_LOGIN_FAIL } from "./actionTypes";

const initialState = {
  token: "",
  userData: null,
  loadingLogins: false,
  error: {
    message: "",
  },
};

const LoginReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_LOGIN:
      state = {
        ...state,
        loadingLogins: true,
        token: "",
        userData: null,
      };
      break;
    case GET_LOGIN_SUCCESS:
      state = {
        ...state,
        loadingLogins: false,
        token: action.payload.email,
        userData: action.payload,
      };
      break;
    case GET_LOGIN_FAIL:
      state = {
        ...state,
        token: "",
        userData: null,
        error: {
          message: action.payload,
        },
        loadingLogins: false,
      };
      break;

    default:
      state = { ...state };
      break;
  }
  return state;
};

export default LoginReducer;
