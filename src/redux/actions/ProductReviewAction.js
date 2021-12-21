import { ACTION_APPEND_GIG_REVIEW, ACTION_CHECKOUT_AFTER_REVIEW } from '../actions/Constants'

export const action_append_gig_review = (payload) => {
    return {
        type: ACTION_APPEND_GIG_REVIEW,
        payload
    }
}

export const thunk_action_checkout = (payload) => {
    return {
        type: ACTION_CHECKOUT_AFTER_REVIEW,
        payload
    }
}