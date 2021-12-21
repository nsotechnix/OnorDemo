import Axios from "axios"

export default (token) => {
    if (token) {
        Axios.defaults.headers.common['x-access-token'] = token
    } else {
        delete Axios.defaults.headers.common['x-access-token']
    }
}