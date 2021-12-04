import createDataContext from "./createDataContext";
import trackerApi from "../api/tracker";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { navigate } from "../navigationRef";

const authReducer = (state, action) => {
  switch (action.type) {
    case "signin":
      return { errMessage: "", token: action.payload };
    case "signout":
      return { token: null, errMessage: "" };
    case "add_err":
      return { ...state, errMessage: action.payload };
    case "clear_err":
      return { ...state, errMessage: "" };
    default:
      return state;
  }
};

const tryLocalSignIn = (dispatch) => async () => {
  const token = await AsyncStorage.getItem("token");
  if (token) {
    dispatch({ type: "sign_in", payload: token });
    navigate("TrackList");
  } else {
    navigate("Signup");
  }
};

const clearErrMessage = (dispatch) => () => {
  dispatch({ type: "clear_err", payload: "" });
};

const signup = (dispatch) => async ({ email, password }) => {
  try {
    const res = await trackerApi.post("/signup", { email, password });
    await AsyncStorage.setItem("token", res.data.token);
    dispatch({ type: "signin", payload: res.data.token });
    navigate("TrackList");
  } catch (e) {
    dispatch({
      type: "add_err",
      payload: "something went wrong with sign up",
    });
  }
};

const signin = (dispatch) => {
  return async ({ email, password }) => {
    try {
      const res = await trackerApi.post("/signin", { email, password });
      await AsyncStorage.setItem("token", res.data.token);
      dispatch({ type: "signup", payload: res.data.token });
      navigate("TrackList");
    } catch (e) {
      dispatch({
        type: "add_err",
        payload: "something went wrong with sign in",
      });
    }
  };
};

const signout = (dispatch) => async () => {
  await AsyncStorage.removeItem("token");
  dispatch({ type: "signout" });
  navigate("loginFlow");
};

export const { Provider, Context } = createDataContext(
  authReducer,
  { signin, signout, signup, clearErrMessage, tryLocalSignIn },
  { token: null, errMessage: "" }
);
