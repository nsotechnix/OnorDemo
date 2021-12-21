import { ACTION_RATING_SHOW, ACTION_RATING_HIDE } from "./Constants";

export const action_rating_dialog_start = (payload) => {
    return {
        type: ACTION_RATING_SHOW,
        payload
    }
}

export const action_rating_dialog_stop = (payload) => {
    return {
        type: ACTION_RATING_HIDE,
        payload
    }
}