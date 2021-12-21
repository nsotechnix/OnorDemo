import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import App from "./App";
import Store from "./redux/Store";
import Firebase, { FirebaseContext } from "./firebase";
import {
  action_sign_in,
  action_sign_out,
  action_sign_out_seller,
  action_sign_up_as_seller,
} from "./redux/actions/authActions";
import "material-icons/iconfont/material-icons.css";

console.log("Index page is called");

const store = Store();

const token = localStorage.getItem("jwtToken");
const sellerToken = localStorage.getItem("sellerJwtToken");
if (token) {
  // console.log("user token is found");
  store.dispatch(action_sign_in(token));
} else {
  // console.log("user token not found");
  localStorage.removeItem("jwtToken");
  store.dispatch(action_sign_out());
}

if (sellerToken) {
  store.dispatch(action_sign_up_as_seller());
} else {
  localStorage.removeItem("sellerJwtToken");
  store.dispatch(action_sign_out_seller());
}

render(
  <Provider store={store}>
    <FirebaseContext.Provider value={new Firebase()}>
      <App />
    </FirebaseContext.Provider>
  </Provider>,
  document.getElementById("root")
);
