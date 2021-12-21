import { ACTION_PROGRESS_START, ACTION_PROGRESS_STOP } from "../actions/Constants";

export default (state = { isOpen: false }, action) => {
    switch (action.type) {
        case ACTION_PROGRESS_START:
            console.log(action.payload)
            return {
                isOpen: true,
                // ...action.payload
            }
        case ACTION_PROGRESS_STOP: {
            return {
                isOpen: false
            }
        }

        default:
            return state
    }
}