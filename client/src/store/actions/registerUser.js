import axios from "axios";

// add user
export const REGISTER_START = "REGISTER_START";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_FAILURE = "REGISTER_FAILURE";
export const SIGN_OUT = "SIGN_OUT";


export const registerUser = (newAccount) => dispatch => {
    dispatch({ type: REGISTER_START })
    axios
    .post("https://localhost:5000/api/register", newAccount)
    .then(res => {
        console.log("register user", res.data);
        dispatch({ type: REGISTER_SUCCESS, payload: res.data })
    })
    .catch(err =>{
        console.log(err);
        dispatch({ type: REGISTER_FAILURE, payload: err })
    })
};

export const signOut = () => dispatch => {
    localStorage.removeItem("token");
    dispatch({ type: SIGN_OUT });
};
