import dummyData from "../../dummyData/users.json";
import { LOGIN_IN_PROGRESS, LOGIN_SUCCESS, LOGIN_FAILED, LOGOUT_USER } from "../constants";

export const authUser = (data) => (dispatch) => {
  dispatch({
    type: LOGIN_IN_PROGRESS,
  });
  if (
    dummyData.filter(
      (user) => user.email === data.email && user.pass === data.pass
    ).length
  ) {
    let userData = dummyData.filter(
      (user) => user.email === data.email && user.pass === data.pass
    )[0];
    console.log("Valid unamepass");
    localStorage.setItem("authInfo", JSON.stringify(userData));
    localStorage.setItem("isLoggedIn", true);
    dispatch({
      type: LOGIN_SUCCESS,
      payload: userData,
    });
  } else {
    localStorage.removeItem("authInfo");
    localStorage.removeItem("isLoggedIn");
    console.log("invalid unamepass");
    dispatch({
      type: LOGIN_FAILED,
    });
  }
};

export const logoutUser = () => (dispatch) => {
  localStorage.removeItem("authInfo");
  localStorage.removeItem("isLoggedIn");
  dispatch({
    type: LOGOUT_USER,
  });
};
