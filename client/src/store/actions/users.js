import axios from "axios"
import axiosWithAuth from "../../utils/axiosWithAuth";

// FETCHING USERS
export const FETCHING_USERS_START = "FETCHING_USERS_START", FETCHING_USERS_SUCCESS = "FETCHING_USERS_SUCCESS", FETCHING_USERS_FAILURE = "FETCHING_USERS_FAILURE";

// SINGLE USER
export const SINGLE_USER_START = "SINGLE_USER_START", SINGLE_USER_SUCCESS = "SINGLE_USER_SUCCESS", SINGLE_USER_FAILURE = "SINGLE_USER_FAILURE";

// EDIT USER
export const EDIT_USER_START = "EDIT_USER_START", EDIT_USER_SUCCESS = "EDIT_USER_SUCCESS", EDIT_USER_FAILURE = "EDIT_USER_FAILURE";

// DELETE USER
export const DELETE_USER_START = "DELETE_USER_START", DELETE_USER_SUCCESS = "DELETE_USER_SUCCESS", DELETE_USER_FAILURE = "DELETE_USER_FAILURE"

export const fetchUsers = () => dispatch => {
    dispatch({ type: FETCHING_USERS_START })
    axiosWithAuth()
    .get("/users")
    .then(res => {
        console.log(res) // most likely the payload will be res.data
        dispatch({ type: FETCHING_USERS_SUCCESS, payload: res.data })
    })
    .catch(err => {
        console.log("fetching users error", err) // most likely the payload will be err.response
        dispatch({ type: FETCHING_USERS_FAILURE, payload: err})
    })
};

export const fetchUserId = (id) => dispatch => {
    dispatch({ type: SINGLE_USER_START })
    axiosWithAuth()
    .get(`/users/${id}`)
    .then(res => {
        console.log(res)
        dispatch({ type: SINGLE_USER_SUCCESS, payload: res.data })
    })
    .catch(err => {
        console.log("get user by id", err)
        dispatch({ type: SINGLE_USER_FAILURE })
    })
};

export const editUser = (id) => dispatch => {
    dispatch({ type: EDIT_USER_START })
    axiosWithAuth()
    .put(`/users/${id}`)
    .then(res => {
        console.log(res)
        dispatch({ type: EDIT_USER_SUCCESS, payload: res.data })
    })
    .catch(err => dispatch({ type: EDIT_USER_FAILURE, payload: err}))
}

export const removeUser = (id) => dispatch => {
    dispatch({ type: DELETE_USER_START })
    axiosWithAuth()
    .delete(`/users/${id}`)
    .then(res => {
        console.log(res)
        dispatch({ type: DELETE_USER_SUCCESS, payload: id })
    })
    .catch(err => dispatch({ type: DELETE_USER_FAILURE, payload: err}))
}