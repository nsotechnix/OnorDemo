import React, { Fragment } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import { Col, Container, Row, Form, Card } from 'react-bootstrap';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import LocationOnIcon from '@material-ui/icons/LocationOn';

const useStyles = makeStyles((theme) => ({
    appBar: {
        position: 'relative',
    },
    title: {
        marginLeft: theme.spacing(2),
        flex: 1,
    },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

let IndividualRequestPage = (props) => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(props.isOpen);

    const handleClose = () => {
        props.setOpen(false)
        setOpen(false)
    };

    console.log({ ...props })

    return (
        <Fragment>
            <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
                <AppBar className={classes.appBar}>
                    <Toolbar>
                        <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
                            <CloseIcon />
                        </IconButton>
                        <Typography variant="h6" className={classes.title}>
                            {props.data.title}
                        </Typography>
                    </Toolbar>
                </AppBar>
                <Container className="mt-lg-5">
                    <Row>
                        <Col>
                            <Row>
                                <Col sm={6}>
                                    <Card className="p-2 h-100">
                                        <h5><b>Assignment Title: </b> {props.data.title}</h5>
                                        <h5><b>Description: </b> {props.data.description}</h5>
                                        <h5><b>Category: </b> {props.data.category.name}</h5>
                                        <h5><b>Expected Delivery time: </b> {props.data.deliveryDate}</h5>
                                        <h5><b>Budget: </b> {props.data.budget}</h5>
                                        <h5><b>Added on: </b> {props.data.createDate}</h5>
                                    </Card>
                                </Col>
                                <Col sm={6}>
                                    <img src={props.data.docUrl} alt={props.data.title} className={'my-3 mb-sm-3 mainImage img-responsive w-100 h-100'} />
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </Dialog>
        </Fragment>
    )
}

IndividualRequestPage = withRouter(IndividualRequestPage)
export default connect()(IndividualRequestPage)