import { ACTION_CLOSE_CHAT_DIALOG, ACTION_OPEN_CHAT_DIALOG } from "./Constants";

export const action_open_chat_dialog = (payload) => {
  return {
    type: ACTION_OPEN_CHAT_DIALOG,
    payload,
  };
};

export const action_close_chat_dialog = () => {
  return {
    type: ACTION_CLOSE_CHAT_DIALOG,
  };
};
