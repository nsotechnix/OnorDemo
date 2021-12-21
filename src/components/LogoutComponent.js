import React, { useEffect } from 'react'
import { action_sign_out } from '../redux/actions/authActions'
import { connect } from 'react-redux'
import { action_dialog_open, action_dialog_close } from '../redux/actions/dialogAction'

const LogoutComponent = (props) => {
    useEffect(() => {
        localStorage.removeItem("jwtToken")
        localStorage.removeItem("sellerJwtToken")
        localStorage.removeItem("seller_profile_data");
        localStorage.removeItem("seller_profile_data_2");
        localStorage.removeItem("gig_assignment_data");
        props.actionSignOut()
        props.history.push('/')
    }, [])
    return (
        <>
            <p>Logging you out...</p>
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        auth: state.auth,
        dialog: state.dialog
    }
}

const mapDispatchToProps = (dispatch) => {

    return {
        dialogOpen: (payload) => dispatch(action_dialog_open(payload)),
        dialogClose: (payload) => dispatch(action_dialog_close(payload)),
        actionSignOut: () => dispatch(action_sign_out())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(LogoutComponent)