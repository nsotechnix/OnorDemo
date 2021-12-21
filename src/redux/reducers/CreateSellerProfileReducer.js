import {
    ACTION_APPEND_CREATE_SELLER_PROFILE,
    ACTION_SET_STEPS_CREATE_SELLER_PROFILE
} from '../actions/Constants'

let initialState = {
    step: 1
}

export default (state = initialState, action) => {
    if (action.type === ACTION_APPEND_CREATE_SELLER_PROFILE) {
        return {
            ...state,
            ...action.payload
        }
    } else if (action.type === ACTION_SET_STEPS_CREATE_SELLER_PROFILE) {
        return {
            ...state,
            ...action.payload
        }
    } else {
        return state
    }
}