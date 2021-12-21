import {ACTION_DIALOG_CLOSE, ACTION_DIALOG_OPEN} from "./Constants";

export const action_dialog_open = (payload) => {
    return {
        type: ACTION_DIALOG_OPEN,
        payload
    }
}

export const action_dialog_close = () => {
    return {
        type: ACTION_DIALOG_CLOSE
    }
}