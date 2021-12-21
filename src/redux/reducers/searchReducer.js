
import { ACTION_CLEAR_GIG_SEARCH, ACTION_START_GIG_SEARCH } from "../actions/Constants"

export default (state = {}, action) => {
    switch (action.type) {
        case ACTION_START_GIG_SEARCH:
            return {
                filtered_gigs: action.payload
            }
        case ACTION_CLEAR_GIG_SEARCH:
            return {

            }
        default:
            return state
    }
}

