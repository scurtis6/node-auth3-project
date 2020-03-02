import { AUTHENTICATE, START_LOGIN, LOGIN_FAILURE, SIGN_OUT } from "../actions/auth";
// import { bindActionCreators } from "redux";

const initialState = {
    id: 1,
    username: null,
    password: null,   
};

export const auth = (state = initialState, action) => {
  switch (action.type) {
    case START_LOGIN:
      return {
        ...state,
        isLoading: true
      }
    case AUTHENTICATE:
      return {
        ...state,
        username: action.payload.username,
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        error: action.payload,
      }
    case SIGN_OUT:
      return {
        ...state,
        token: localStorage.removeItem("token")
      };
    default:
      return state;
  }
};