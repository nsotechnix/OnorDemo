import { ACTION_APPEND_MERCHANT_REGISTER } from "../actions/Constants"

let initialState = {
    steps: 1
}

export default (state = initialState, action) => {
    switch (action.type) {
        case ACTION_APPEND_MERCHANT_REGISTER:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state
    }
}