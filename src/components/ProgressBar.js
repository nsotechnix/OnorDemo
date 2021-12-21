import React, { Fragment } from "react";
import "./ProgressBar.scss"
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import { connect } from "react-redux";
import Backdrop from '@material-ui/core/Backdrop'
import CircularProgress from '@material-ui/core/CircularProgress'
import { makeStyles } from '@material-ui/core/styles'
import LinearProgress from '@material-ui/core/LinearProgress'
import { fade } from '@material-ui/core/styles/colorManipulator'

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
})

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        '& > * + *': {
            marginTop: theme.spacing(2),
        },
    },
    backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: '#fa6331',
        marginTop: '4px',
        backgroundColor: fade('#fff', 0.5)
    },
}))

const ProgressBar = (props) => {

    const { title } = props

    return (
        <Fragment>
            {/* <Dialog
                open={props.progress.isOpen}
                TransitionComponent={Transition}
                keepMounted
                aria-labelledby="alert-dialog-slide-title"
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle id="alert-dialog-slide-title">{title}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-slide-description">
                        <div className={useStyles().root}>
                        </div>
                    </DialogContentText>
                </DialogContent>
            </Dialog> */}
            <LinearProgress style={{ position: 'sticky' }} open={props.progress.isOpen} />
            <Backdrop className={useStyles().backdrop} open={props.progress.isOpen}></Backdrop>
        </Fragment>
    )

}

const mapStateToProps = (state) => {
    return {
        progress: state.progress
    }
}

export default connect(mapStateToProps)(ProgressBar)

