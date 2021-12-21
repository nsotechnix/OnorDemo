import { ACTION_APPEND_POST_A_GIG_DATA, ACTION_SET_STEPS_POST_A_GIG } from "../actions/Constants"

let initialState = {
    steps: 1
}

export default (state = initialState, action) => {
    switch (action.type) {
        case ACTION_APPEND_POST_A_GIG_DATA:
            return {
                ...state,
                ...action.payload
            }

        case ACTION_SET_STEPS_POST_A_GIG:
            return {
                ...state,
                ...action.payload
            }

        default:
            return state
    }
}