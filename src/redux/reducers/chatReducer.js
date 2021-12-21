import {
  ACTION_CLOSE_CHAT_DIALOG,
  ACTION_OPEN_CHAT_DIALOG,
} from "../actions/Constants";

export default (state = {}, action) => {
  switch (action.type) {
    case ACTION_OPEN_CHAT_DIALOG:
      return {
        ...state,
        chatOpen: true,
        payload: action.payload,
      };

    case ACTION_CLOSE_CHAT_DIALOG:
      return {
        ...state,
        chatOpen: false,
      };

    default:
      return state;
  }
};
