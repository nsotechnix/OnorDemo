import React from 'react'
import _, { isEmpty, isUndefined } from 'lodash'
import { connect } from 'react-redux'
import { makeStyles } from "@material-ui/core/styles"
import Dialog from "@material-ui/core/Dialog"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import IconButton from "@material-ui/core/IconButton"
import CloseIcon from "@material-ui/icons/Close"
import Slide from "@material-ui/core/Slide"
import Typography from "@material-ui/core/Typography"
import Button from "@material-ui/core/Button"
import { Row, Col } from 'react-bootstrap'
import TextField from "@material-ui/core/TextField"


const useStyles = makeStyles((theme) => ({
    appBar: {
        position: "relative",
        background: "#fa6331",
    },
    title: {
        marginLeft: theme.spacing(2),
        flex: 1,
    },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
})

const ImageDialog = (props) => {

    const handleCloseImageDialog = () => {
        props.setOpenImageDialog(false)
        props.setAttachment(undefined)
    }

    const classes = useStyles()
    return (
        <Dialog
            fullScreen
            open={props.openImageDialog}
            onClose={handleCloseImageDialog}
            TransitionComponent={Transition}
        >
            <AppBar className={classes.appBar}>
                <Toolbar>
                    <IconButton
                        edge="start"
                        color="inherit"
                        onClick={handleCloseImageDialog}
                        aria-label="close"
                    >
                        <CloseIcon />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        Selected Image
            </Typography>
                    <Button
                        autoFocus
                        color="inherit"
                        onClick={() => {
                            if (!isEmpty(props.chatBody) || !isUndefined(props.attachment)) {
                                if (props.auth.isAuthorized) {
                                    const { gig_id, customer_id, owner_id } = props.currChatData;
                                    if (props.auth.isAlsoSeller) {
                                        props.handleSendChatMessage(customer_id, gig_id, props.chatBody);
                                    } else {
                                        props.handleSendChatMessage(owner_id, gig_id, props.chatBody);
                                    }
                                    handleCloseImageDialog();
                                }
                            }
                        }}
                    >
                        Send
            </Button>
                </Toolbar>
            </AppBar>
            <>
                <Row>
                    <Col
                        sm={12}
                        className={
                            "d-flex justify-content-center align-items-center mt-5 pt-5"
                        }
                    >
                        <img
                            className={"img-responsive"}
                            style={{ height: "110px", width: "200px" }}
                            src={props.viewAttachment}
                            alt={""}
                        />
                    </Col>
                    <Col
                        sm={12}
                        className={
                            "d-flex justify-content-center align-items-center mt-5 pt-5"
                        }
                    >
                        <TextField
                            style={{ height: "110px", width: "200px" }}
                            id=""
                            variant="outlined"
                            value={props.chatBody}
                            autoComplete={"off"}
                            color={"secondary"}
                            onChange={(e) => props.setChatBody(e.target.value)}
                            onKeyPress={(e) => {
                                if (e.key === "Enter") {
                                    if (!isEmpty(props.chatBody) || !isUndefined(props.attachment)) {
                                        if (props.auth.isAuthorized) {
                                            const {
                                                gig_id,
                                                customer_id,
                                                owner_id,
                                            } = props.currChatData;
                                            if (props.auth.isAlsoSeller) {
                                                props.handleSendChatMessage(
                                                    customer_id,
                                                    gig_id,
                                                    props.chatBody
                                                );
                                            } else {
                                                props.handleSendChatMessage(owner_id, gig_id, props.chatBody);
                                            }
                                        }
                                    }
                                    handleCloseImageDialog();
                                }
                            }}
                            ref={props.chatTextField}
                            label="Type Something"
                            fullWidth
                        />
                    </Col>
                </Row>
            </>
        </Dialog >
    )
}

const mapStateToProps = (state) => {
    return {
        auth: state.auth,
    }
}

export default connect(mapStateToProps)(ImageDialog)