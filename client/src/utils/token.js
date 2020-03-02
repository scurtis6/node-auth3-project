import { AUTHENTICATE, LOGIN_FAIL, SIGN_OUT } from "../store/actions/auth";

export const setToken = store => next => action => {
  switch (action.type) {
    case AUTHENTICATE:
      localStorage.setItem("userToken", action.token);
      next(action);
      return;
    case LOGIN_FAIL:
      localStorage.removeItem("userToken");
      next(action);
      return;
    case SIGN_OUT:
      localStorage.removeItem("userToken");
      localStorage.removeItem("state");
      next(action);
      return;
    default:
      next(action);
      return;
  }
};