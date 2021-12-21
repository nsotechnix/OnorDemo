import { ACTION_RATING_SHOW, ACTION_RATING_HIDE } from "../actions/Constants";

export default (state = { isOpen: false }, action) => {
    switch (action.type) {
        case ACTION_RATING_SHOW:
            return {
                isOpen: true,
                payload: action.payload
            }
        case ACTION_RATING_HIDE: {
            return {
                isOpen: false
            }
        }

        default:
            return state
    }
}