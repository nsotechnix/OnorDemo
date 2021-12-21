import React from 'react'
import { connect } from 'react-redux'
import './ViewProfilePage.scss'
import { action_dialog_open } from "../../redux/actions/dialogAction";
import {
    action_progress_start,
    action_progress_stop,
} from "../../redux/actions/progressAction";

const ViewProfilePage = (props) => {
    if (!props.auth.isAuthorized) {
        props.actionDialogOpen({
            title: "Please login or signup to continue",
            positive: "Ok",
            type: "Alert",
        })
        props.history.push("/signin");
    }
    return (
        <React.Fragment>
            <div class="grid-container">
                <div class="description">ksjdhjkfhsdfhk</div>
                <div class="main">
                    <div class="tabs">dfgdfg</div>
                    <div class="gigs">dfgdfg</div>
                </div>
                <div class="profile">
                    <div class="image">dfgdfg</div>
                    <div class="profile-details">dfgdfg</div>
                </div>
            </div>
        </React.Fragment>
    )
}
const mapStateToProps = (state) => {
    return {
        dialog: state.dialog,
        auth: state.auth,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        actionDialogOpen: (payload) => dispatch(action_dialog_open(payload)),
        actionStartProgress: (payload) => dispatch(action_progress_start(payload)),
        progressStop: () => dispatch(action_progress_stop()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ViewProfilePage);