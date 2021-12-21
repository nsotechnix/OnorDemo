import {ACTION_PROGRESS_START, ACTION_PROGRESS_STOP} from "./Constants";

export const action_progress_start = (payload) => {
    return {
        type: ACTION_PROGRESS_START,
        payload
    }
}

export const action_progress_stop = (payload) => {
    return {
        type: ACTION_PROGRESS_STOP,
        payload
    }
}