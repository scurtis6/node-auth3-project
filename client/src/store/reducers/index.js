import { combineReducers } from "redux";
import { auth } from "./auth";
import { registerUser } from "./registerUser";
import { users } from "./users";

// Using combine reducers to break up reducers into different files
export default combineReducers({
  auth,
  registerUser,
  users
});
