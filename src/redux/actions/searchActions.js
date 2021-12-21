import { ACTION_CLEAR_GIG_SEARCH, ACTION_START_GIG_SEARCH } from "./Constants"

export const action_start_gig_search = (payload) => {
    return {
        type: ACTION_START_GIG_SEARCH,
        payload
    }
}

export const action_clear_gig_search = () => {
    return {
        type: ACTION_CLEAR_GIG_SEARCH
    }
}