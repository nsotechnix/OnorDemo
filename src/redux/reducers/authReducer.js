import {
  ACTION_SIGN_IN,
  ACTION_SIGN_IN_AS_SELLER,
  ACTION_SIGN_OUT,
  ACTION_SIGN_OUT_SELLER,
  ACTION_SIGN_UP,
  ACTION_SIGN_UP_AS_SELLER,
  IS_ALREADY_A_SELLER,
} from "../actions/Constants";

const initialState = {
  isAuthorized: false,
  isAlsoSeller: false,
  isAlreadySeller: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ACTION_SIGN_UP:
      return {
        ...state,
        isAuthorized: true,
        isAlreadySeller: false,
        isAlsoSeller: false,
      };

    case ACTION_SIGN_IN:
      return {
        ...state,
        isAuthorized: true,
        isAlreadySeller: false,
        isAlsoSeller: false,
      };

    case ACTION_SIGN_OUT:
      console.log('state before action sign out')
      console.log({...state})
      return {
        isAuthorized: false,
        isAlsoSeller: false
      };

    case ACTION_SIGN_UP_AS_SELLER:
      return {
        ...state,
        isAlreadySeller: true,
        isAlsoSeller: true,
      };

    case ACTION_SIGN_OUT_SELLER:
      localStorage.removeItem('sellerJwtToken')
      return {
        ...state,
        isAlsoSeller: false,
      };

    case IS_ALREADY_A_SELLER:
      return {
        ...state,
        isAlreadySeller: true,
      };

    case ACTION_SIGN_IN_AS_SELLER:
      return {
        ...state,
        isAlsoSeller: true,
      };

    default:
      return state;
  }
};
