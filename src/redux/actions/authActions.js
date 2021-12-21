import {
  ACTION_SIGN_IN,
  ACTION_SIGN_IN_AS_SELLER,
  ACTION_SIGN_OUT,
  ACTION_SIGN_OUT_SELLER,
  ACTION_SIGN_UP,
  ACTION_SIGN_UP_AS_SELLER,
  IS_ALREADY_A_SELLER,
} from "./Constants";
import axios from "axios";
import {
  API_SELLER_LOGIN,
  API_SELLER_REGISTER,
  API_USER_REGISTER,
  API_USER_SIGNIN,
} from "../../utils/API_ENDPOINTS";

export const action_sign_up = (payload) => {
  return {
    type: ACTION_SIGN_UP,
    payload,
  };
};

export const action_sign_in = (payload) => {
  return {
    type: ACTION_SIGN_IN,
    payload,
  };
};

export const action_sign_out = () => {
  return {
    type: ACTION_SIGN_OUT,
  };
};

export const action_sign_up_as_seller = () => {
  return {
    type: ACTION_SIGN_UP_AS_SELLER,
  };
};

export const action_sign_in_as_seller = () => {
  return {
    type: ACTION_SIGN_IN_AS_SELLER,
  };
};

export const action_sign_out_seller = () => {
  return {
    type: ACTION_SIGN_OUT_SELLER,
  };
};

export const thunk_seller_sign_up = (data) => {
  return (dispatch) => {
    console.log("thunk seller sign up")
    console.log(data)
    const config = {
      headers: {
        'Content-type': 'multipart/form-data'
      }
    }
    return axios.post(API_SELLER_REGISTER, data, config);
  };
};

export const thunk_seller_sign_in = (data) => {
  return (dispatch) => {
    console.log("thunk seller sign in");
    console.log({...data});
    return axios.post(API_SELLER_LOGIN, data);
  };
};

export const thunk_user_signup = (data) => {
  return (dispatch) => {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    }
    return axios.post(API_USER_REGISTER, data, config);
  };
};

export const thunk_user_signin = (data) => {
  return (dispatch) => {
    console.log(data);
    return axios.post(API_USER_SIGNIN, data);
  };
};

export const is_already_a_seller = () => {
  return {
    type: IS_ALREADY_A_SELLER,
  };
};
