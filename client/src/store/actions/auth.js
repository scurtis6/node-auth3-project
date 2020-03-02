import axios from "axios";
// import axiosWithAuth from "../../../../../front-end/src/utils/axiosWithAuth";

export const AUTHENTICATE = "AUTHENTICATE",
  SIGN_OUT = "SIGN_OUT", START_LOGIN = "START_LOGIN", LOGIN_FAILURE = "LOGIN_FAILURE"

export const authenticate = (credentials) => dispatch => {
  dispatch({ type: START_LOGIN });
  axios
  .post("https://localhost:5000/api/login", credentials)
  .then(res => {
    console.log("authenticate respsonse", res.data)
    localStorage.setItem("token", res.data.token);
  dispatch({ type: AUTHENTICATE, payload: res.data });
  })
  .catch(err => {
    console.log(err)
    dispatch({ type: LOGIN_FAILURE, payload: err})
  })
  
};

export const signOut = () => dispatch => {
  localStorage.removeItem("token");
  dispatch({ type: SIGN_OUT });
};