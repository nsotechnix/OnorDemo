import { HOMEPAGE_GET_GIGS } from '../actions/Constants'

const initialState = {
    gigs: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case HOMEPAGE_GET_GIGS: 
            return {
                ...state,
                gigs: action.payload
            }
        default: 
            return state
    }
}