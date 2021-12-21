import {ACTION_DIALOG_CLOSE, ACTION_DIALOG_OPEN} from "../actions/Constants";

export default (state = {}, action) => {
    switch (action.type) {
        case ACTION_DIALOG_OPEN:
            return {
                isOpen: true,
                ...action.payload
            }

        case ACTION_DIALOG_CLOSE:
            return {
                isOpen: false,
                ...action.payload
            }

        default:
            return state
    }
}