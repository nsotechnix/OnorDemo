import { ACTION_APPEND_POST_A_GIG_DATA, ACTION_SET_STEPS_POST_A_GIG } from "./Constants"

export const action_append_post_a_gig_data = (payload) => {
    return {
        type: ACTION_APPEND_POST_A_GIG_DATA,
        payload
    }
}

export const action_steps_of_post_a_gig = (payload) => {
    return {
        type: ACTION_SET_STEPS_POST_A_GIG,
        payload
    }
}