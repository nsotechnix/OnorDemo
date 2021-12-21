import {
    ACTION_APPEND_CREATE_SELLER_PROFILE,
    ACTION_SET_STEPS_CREATE_SELLER_PROFILE
} from './Constants'

export const action_append_seller_profile_data = (payload) => {
    return {
        type: ACTION_APPEND_CREATE_SELLER_PROFILE,
        payload
    }
}

export const action_steps_of_create_seller_profile = (payload) => {
    return {
        type: ACTION_SET_STEPS_CREATE_SELLER_PROFILE,
        payload
    }
}