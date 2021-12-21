import React, {Fragment} from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import "./Dialog.scss"
import {action_dialog_close, action_dialog_open} from "../redux/actions/dialogAction";
import {connect} from "react-redux";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles({
    buttonStyle: {
        color: "orange"
    },
})

const MyDialog = (props) => {

    const {
        title, message, positive,
        negative, type, actionDialogClose, isOpen
    } = props.dialog
    // const {actionDialogClose} = props


    const handleClickOpen = () => {

    };

    const handleClose = () => {
        props.actionDialogClose();
    };


    const dialog_content_jsx = (
        <Fragment>
            <DialogContentText id="alert-dialog-description">
                {message}
            </DialogContentText>
        </Fragment>
    )

    return (
        <Fragment>
            <Dialog
                open={isOpen}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
                <DialogContent>
                    {dialog_content_jsx}
                </DialogContent>

                <DialogActions>
                    <Button onClick={handleClose} className={useStyles().buttonStyle}>
                        {negative}
                    </Button>
                    <Button onClick={handleClose} className={useStyles().buttonStyle}>
                        {positive}
                    </Button>
                </DialogActions>

            </Dialog>
        </Fragment>
    );
}

const mapStateToProps = (state) => {
    return {
        dialog: state.dialog
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        actionDialogOpen: () => dispatch(action_dialog_open()),
        actionDialogClose: () => dispatch(action_dialog_close())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MyDialog)

