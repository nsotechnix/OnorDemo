import React, { Fragment } from "react";
import { connect } from 'react-redux'
import { action_dialog_open } from "../redux/actions/dialogAction";
import {
    action_progress_start,
    action_progress_stop,
} from "../redux/actions/progressAction";

const Dashboard = (props) => {
    if (!props.auth.isAuthorized) {
        props.actionDialogOpen({
            title: "Please login or signup to continue",
            positive: "Ok",
            type: "Alert",
        })
        props.history.push("/signin");
    }
    return (
        <Fragment>
            <h1>Hello from dashboard</h1>
        </Fragment>
    )
}
const mapStateToProps = (state) => {
    return {
        auth: state.auth,
        dialog: state.dialog,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        actionDialogOpen: (payload) => dispatch(action_dialog_open(payload)),
        actionStartProgress: (payload) => dispatch(action_progress_start(payload)),
        progressStop: () => dispatch(action_progress_stop()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);