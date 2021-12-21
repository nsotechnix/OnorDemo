import React, { useEffect, useState } from 'react'
import { Row, Col } from 'react-bootstrap'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward'
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import './ManageGigsPage.scss'
import Axios from 'axios'
import jwt from 'jsonwebtoken'
import { action_dialog_open } from "../../redux/actions/dialogAction";
import {
    action_progress_start,
    action_progress_stop,
} from "../../redux/actions/progressAction";
import {
    API_FETCH_MERCHANT_ORDERS,
    API_APPROVE_ORDER,
    API_CANCEL_ORDER,
    MERCHANT_GIGS_LIST,
    API_COMPLETE_ORDER,
    API_DELIVER_ORDER
} from '../../utils/API_ENDPOINTS'
import { isUndefined, isNull } from 'lodash'
import { usePromiseTracker, trackPromise } from "react-promise-tracker"
import Loader from 'react-loader-spinner'
import clsx from 'clsx';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionActions from '@material-ui/core/AccordionActions';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Chip from '@material-ui/core/Chip';
import Button from '@material-ui/core/Button';

// const useStyles = makeStyles((theme) => ({
//     root: {
//         width: '100%',
//         maxWidth: '70%',
//         backgroundColor: theme.palette.background.paper,
//     },
//     inline: {
//         display: 'inline',
//     },
//     rootSearch: {
//         padding: '2px 4px',
//         display: 'flex',
//         alignItems: 'center',
//         width: 800,
//         border: '1px solid #fa6331'
//     },
//     iconButton: {
//         padding: 10,
//     },
//     input: {
//         marginLeft: theme.spacing(1),
//         flex: 1,
//     },
// }))

const useStyles = makeStyles((theme) => ({
    root: {
        width: '80%',
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
    },
    secondaryHeading: {
        fontSize: theme.typography.pxToRem(15),
        color: theme.palette.text.secondary,
    },
    icon: {
        verticalAlign: 'bottom',
        height: 20,
        width: 20,
    },
    details: {
        alignItems: 'center',
    },
    column: {
        flexBasis: '33.33%',
    },
    helper: {
        borderLeft: `2px solid ${theme.palette.divider}`,
        padding: theme.spacing(1, 2),
    },
    link: {
        color: theme.palette.primary.main,
        textDecoration: 'none',
        '&:hover': {
            textDecoration: 'underline',
        },
    },
}));


const ManageGigsPage = (props) => {
    const token = localStorage.getItem('jwtToken')
    const { promiseInProgress } = usePromiseTracker()
    if (!props.auth.isAuthorized) {
        props.actionDialogOpen({
            title: `Please Login`,
            message: `Sorry, to buy Gig you have to login`,
            positive: "Ok",
            type: "Alert",
        });
        props.history.push("/signin")
    }
    const [approveBtn, setApproveBtn] = useState({
        text: 'Approve',
        disabled: false
    })
    const [cancelBtn, setCancelBtn] = useState({
        text: 'Cancel',
        disabled: false
    })
    const [deliverBtn, setdeliverBtn] = useState({
        text: 'Deliver',
        disabled: false
    })
    if (!props.auth.isAuthorized) {
        props.actionDialogOpen({
            title: "Please login or signup to continue",
            positive: "Ok",
            type: "Alert",
        })
        props.history.push("/signin");
    }
    const [ReceivedOrders, setReceivedOrders] = useState([])
    useEffect(() => {
        handleFetchmyGigs()
        handleFetchReceivedOrders()
    }, [])
    const merchantId = jwt.decode(localStorage.getItem('sellerJwtToken')).merchantId
    const handleFetchReceivedOrders = async () => {
        try {
            const res = await trackPromise(Axios.get(API_FETCH_MERCHANT_ORDERS + merchantId))
            res.data.orderHistory_merchant.reverse()
            setReceivedOrders(res.data.orderHistory_merchant)
        } catch (e) {
            console.log('An error occured')
        }
    }
    const [myGigs, setmyGigs] = useState([])
    const [IndividualRequest, setIndividualRequest] = React.useState(!1)
    const classes = useStyles()

    const approveOrder = async (e, orderId) => {
        if (window.confirm('Are you sure want to accept this order?')) {
            if (orderId !== '' || !isUndefined(orderId)) {
                try {
                    const isCancelled = await trackPromise(Axios.post(API_APPROVE_ORDER + orderId))
                    setApproveBtn({
                        text: 'Approving...',
                        disabled: true
                    })
                    handleFetchReceivedOrders()
                    props.actionDialogOpen({
                        title: "Order Approved",
                        positive: "Ok",
                        type: "Alert",
                    })
                } catch (e) {
                    console.log('Error accepting order: ' + e)
                }
                setApproveBtn({
                    text: 'Approve',
                    disabled: false
                })
            } else {
                alert('Something went wrong, please try again later')
            }
        }
    }

    const cancelOrder = async (e, orderId) => {
        if (window.confirm('Are you sure want to cancel this order?')) {
            if (orderId !== '' || !isUndefined(orderId)) {
                try {
                    const isCancelled = await trackPromise(Axios.post(API_CANCEL_ORDER + orderId))
                    setCancelBtn({
                        text: 'Cancelling',
                        disabled: true
                    })
                    handleFetchReceivedOrders()
                    props.actionDialogOpen({
                        title: "Order Cancelled",
                        positive: "Ok",
                        type: "Alert",
                    })
                } catch (e) {
                    console.log('Error cancelling order: ' + e)
                }
                setCancelBtn({
                    text: 'Cancel',
                    disabled: false
                })
            } else {
                alert('Something went wrong, please try again later')
            }
        }
    }

    const deliverOrder = async (e, orderId) => {
        if (window.confirm('Are you sure want to deliver this order?')) {
            if (orderId !== '' || !isUndefined(orderId)) {
                try {
                    setdeliverBtn({
                        text: 'Processing...',
                        disabled: true
                    })
                    const isDelivered = await trackPromise(Axios.post(API_DELIVER_ORDER + orderId))
                    handleFetchReceivedOrders()
                    props.actionDialogOpen({
                        title: "Order Delivered, Buyer need to accept the delivery to complete the order.",
                        positive: "Ok",
                        type: "Alert",
                    })
                } catch (e) {
                    console.log('Error Delivering order: ' + e)
                }
                setdeliverBtn({
                    text: 'Deliver',
                    disabled: false
                })
            } else {
                alert('Something went wrong, please try again later')
            }
        }
    }

    const handleFetchmyGigs = async () => {
        try {
            const res = await trackPromise(Axios.get(MERCHANT_GIGS_LIST + merchantId))
            res.data.product_list_of_merchant.reverse()
            setmyGigs(res.data.product_list_of_merchant)
        } catch (e) {
            console.log('An error occured')
        }
    }
    const [hideGig, setHideGig] = useState(false)

    let productSet = new Set();
    let productList = [];
    console.log(ReceivedOrders)
    ReceivedOrders.map((doc) => {
        let productId = doc.product.productId
        if (!productSet.has(productId)) {
            productSet.add(productId);
            productList.push({
                productId
            });
        }
    });
    return (
        <React.Fragment>
            <h4 className={'onor_span_color d-flex justify-content-center my-4'}>Manage Received Orders</h4>
            <Row>
                <Col sm={12} className={'d-flex justify-content-center'}>
                    <Paper component="form" className={classes.rootSearch}>
                        <InputBase
                            className={classes.input}
                            placeholder="Search Orders"
                            inputProps={{ 'aria-label': 'search orders' }}
                        />
                        <IconButton type="submit" className={classes.iconButton} aria-label="search">
                            <SearchIcon />
                        </IconButton>
                    </Paper>
                </Col>
                {
                    promiseInProgress && <div
                        style={{
                            width: "100%",
                            height: "100",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center"
                        }}
                    >
                        <Loader type="ThreeDots" color="#fa6331" height="100" width="100" />
                    </div>
                }
                {
                    myGigs.map((obj, index) => {
                        return (
                            productSet.has(obj.productId) && <React.Fragment>
                                <Col sm={12} className={'d-flex justify-content-center'}>
                                    <div className={classes.root}>
                                        <Accordion defaultExpanded={false}>
                                            <AccordionSummary
                                                expandIcon={<ExpandMoreIcon />}
                                                aria-controls="panel1c-content"
                                                id="panel1c-header"
                                            >
                                                <div className={classes.column}>
                                                    <img className={'h-50 w-50'} alt="img" src={obj.productIconLink} />
                                                </div>
                                                <div className={classes.column}>
                                                    <h4 className={classes.heading, 'mt-2'}>{obj.productName}</h4>
                                                    <Typography className={classes.secondaryHeading}>{' — ' + obj.productDescription.slice(0, 50) + '…'}</Typography>
                                                </div>
                                            </AccordionSummary>
                                            {
                                                ReceivedOrders.map((objOrders, orderIdx) => {

                                                    return (
                                                        objOrders.product.productId === obj.productId && <React.Fragment>
                                                            <AccordionDetails className={classes.details}>
                                                                <div className={classes.column} />
                                                                <div className={classes.column}>
                                                                    <span className={'float-left mt-2'}>Order Status: {objOrders.status.replace(/[0-9]/g, '')}</span>
                                                                </div>
                                                                <div className={clsx(classes.column, classes.helper)}>
                                                                    <Typography variant="caption">
                                                                        {
                                                                            `${objOrders.user.firstName} ${objOrders.user.lastName}`
                                                                        }
                                                                        <br />
                                                                        {
                                                                            `Ordered date: ${new Date(obj.createDate)}`
                                                                        }
                                                                        <br />
                                                                    </Typography>
                                                                </div>
                                                            </AccordionDetails>
                                                            <AccordionActions>
                                                                {
                                                                    (objOrders.status !== 'cancelled' && objOrders.status !== 'accepted' && objOrders.status !== 'completed' && objOrders.status !== 'delivered' && !objOrders.status.includes('Revision')) ?
                                                                        <button onClick={(e) => {
                                                                            approveOrder(e, objOrders.orderId)
                                                                        }} className={'onor_btn'} disabled={approveBtn.disabled}>{approveBtn.text}</button>
                                                                        : null
                                                                }
                                                                {
                                                                    (objOrders.status !== 'completed' && objOrders.status !== 'cancelled') ?
                                                                        <button onClick={(e) => {
                                                                            cancelOrder(e, objOrders.orderId)
                                                                        }} className={'onor_danger_btn'} disabled={cancelBtn.disabled}>{cancelBtn.text}</button>
                                                                        : null
                                                                }
                                                                {
                                                                    (objOrders.status === 'accepted' || objOrders.status.includes('Revision')) ?
                                                                        <button onClick={(e) => {
                                                                            deliverOrder(e, objOrders.orderId)
                                                                            // completeOrder(e, objOrders.orderId)
                                                                        }} className={'onor_success_btn'} disabled={deliverBtn.disabled}>{deliverBtn.text}</button>
                                                                        : null
                                                                }
                                                            </AccordionActions>
                                                            <Divider />
                                                        </React.Fragment>
                                                    )
                                                })
                                            }
                                        </Accordion>
                                    </div>
                                </Col>
                            </React.Fragment>)
                    }
                    )}
            </Row>
            <Row className={'mt-2'}>
                <Col sm={12} className="d-flex justify-content-center">
                    <IconButton aria-label="delete" className={classes.margin} size="large">
                        <ArrowDownwardIcon fontSize="inherit" />
                    </IconButton>
                </Col>
            </Row>
        </React.Fragment>
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
export default connect(mapStateToProps, mapDispatchToProps)(ManageGigsPage)