import { ACTION_APPEND_GIG_REVIEW, ACTION_CHECKOUT_AFTER_REVIEW } from '../actions/Constants'

let initialState = {
    // packageId: 0,
    // gigId: 0
}

export default (state = initialState, action) => {
    if (action.type === ACTION_APPEND_GIG_REVIEW) {
        console.log({...action.payload})
        return {
            ...state,
            ...action.payload
        }
    } else if (action.type === ACTION_CHECKOUT_AFTER_REVIEW) {
        console.log({...action.payload})
        return {
            ...state,
            ...action.payload
        }
    } else {
        return initialState
    }
}