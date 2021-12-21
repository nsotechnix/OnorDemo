import axios from 'axios'
import { API_FETCH_GIGS } from '../../utils/API_ENDPOINTS'
import { HOMEPAGE_GET_GIGS } from './Constants'

export const get_homepage_gigs = (payload) => {
    return (dispatch) => {
        return axios.get(API_FETCH_GIGS)
    }
}