import { LOGIN_IN_PROGRESS, LOGIN_SUCCESS, LOGIN_FAILED, LOGOUT_USER } from "../constants";
const initState = {
  loading: false,
  authInfo: JSON.parse(localStorage.getItem("authInfo")) || {},
  error: false,
  isLoggedIn: localStorage.getItem("isLoggedIn") || false,
};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case LOGIN_IN_PROGRESS:
      return {
        ...state,
        loading: true,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        authInfo: action.payload,
        isLoggedIn: true,
      };
    case LOGIN_FAILED:
      let main = {
        ...state,
        error: true,
      };
      setTimeout(() => {
        main = {
          ...state,
          error: true,
        };
        return main;
      }, 3000);
      return main;
    case LOGOUT_USER:
      const initState = {
        loading: false,
        authInfo: {},
        error: false,
        isLoggedIn: false,
      };
      return initState;
    default:
      return state;
  }
};
export default authReducer;
