import React, { Fragment, useEffect } from 'react'
import dummyImage from '../../svg/man.svg'
import { useLocation } from 'react-router-dom'
import { API_FETCH_SINGLE_REQUEST } from '../../utils/API_ENDPOINTS'
import { connect } from 'react-redux'
import { makeStyles } from '@material-ui/core'
import Carousel from 'react-bootstrap/Carousel'
import { Container, Row, Col, Tabs, Tab, Button } from 'react-bootstrap'
import RefreshLogo from '@material-ui/icons/Cached'
import TimeLogo from '@material-ui/icons/AccessTime'
import ChatLogo from '../../svg/chat.svg'
import Axios from 'axios'
import { isUndefined } from 'lodash'
import { withFirebase } from '../../firebase'
import { action_append_gig_review } from '../../redux/actions/ProductReviewAction'
import { action_dialog_open } from "../../redux/actions/dialogAction";
import {
    action_progress_start,
    action_progress_stop,
} from "../../redux/actions/progressAction";
import { usePromiseTracker, trackPromise } from "react-promise-tracker"
import CheckLogo from '@material-ui/icons/Check'

const ViewTask = (props) => {
    // console.log({ ...props })

    const location = useLocation()
    if (location.pathname.match('/mobile/')) {
    } else {
    }

    let requestId = props.match.params.requestId
    if (requestId === null) {
        props.history.push('/')
    }
    const [requestDetails, setRequestDetails] = React.useState({ product_request: null })

    const handleGetRequestList = async () => {
        props.actionStartProgress()
        try {
            const requestDetails = await trackPromise(Axios.get(API_FETCH_SINGLE_REQUEST + '' + requestId))
            if (!isUndefined(requestDetails) && !isUndefined(requestDetails.data)) {
                setRequestDetails(requestDetails.data.product_request)
            }
        } catch (e) {
            console.log(e)
        }
        props.progressStop()
    }

    useEffect(() => {
        handleGetRequestList()
    }, [])

    if (!isUndefined(requestDetails["merchant"])) {
        // console.log(requestDetails["merchant"]["avatar"])
    }
    const [] = React.useState('xs');
    const [] = React.useState(true);
    return (
        <Fragment>
            {
                (!isUndefined(requestDetails["user"])) ?
                    <Container>
                        <Row>
                            <Col className="mycol mt-5" lg={7}>
                                <Row>
                                    <Col className="mycol">
                                        <p className={'gig_title'}>
                                            {requestDetails.title}
                                        </p>
                                    </Col>
                                </Row>
                                <Row className="mt-lg-3">
                                    <Col className="mycol d-flex justify-content-around">
                                        <img className="mycol img-responsive" style={{
                                            width: "30px", height: "40px"
                                        }} alt="avatar" src={dummyImage} />
                                        <p className="mycol seller_user_name">{requestDetails["user"]["firstName"] + " " + requestDetails["user"]["lastName"]}</p>
                                    </Col>
                                    <br />
                                </Row>
                                <Row className={'mt-3'}>
                                    <Col className="mycol d-flex justify-content-center">
                                        <img className="mycol img-responsive" style={{ height: '20em', width: '100%' }} src={requestDetails.docUrl} alt="task image" />
                                    </Col>
                                </Row>
                            </Col>
                            <Col className="mycol" lg={5}>
                                <Row className="mt-lg-5">
                                    <Col style={{
                                        border: "1px solid black",
                                        borderRadius: "8px"
                                    }} className="mycol mx-3">
                                        <Tabs className="my-3 mycol" defaultActiveKey="1" id="uncontrolled-tab-example">
                                            <Tab className="my-3" eventKey={1} title={'Task Details'}>
                                                <Row className="mycol mt-lg-5">
                                                    <Col>
                                                        <h5>{requestDetails.title}</h5>
                                                    </Col>
                                                    <Col>
                                                        <h5>${requestDetails.budget}</h5>
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col className="mycol mt-lg-4">
                                                        <h6>
                                                            {
                                                                requestDetails.description
                                                            }
                                                        </h6>
                                                    </Col>
                                                </Row>
                                                <Row className="mt-lg-4">
                                                    <Col className="mycol d-flex justify-content-around" sm={6}>
                                                        <TimeLogo style={{
                                                            color: "orangered"
                                                        }} />
                                                        <p>{requestDetails.deliveryDate} days deadline</p>
                                                    </Col>
                                                </Row>
                                                <Row className="mt-lg-4"></Row>
                                                <Row className="mt-lg-5">
                                                    <Col className="d-flex justify-content-center">
                                                        <Button className="w-75 onor_btn" variant="" onClick={e => alert('Coming soon')}>Message buyer</Button>
                                                    </Col>
                                                </Row>
                                            </Tab>
                                        </Tabs>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Container> : null}
        </Fragment>
    )
}

const mapStateToProps = (state) => {
    return {
        auth: state.auth,
        productReducer: state.productReducer,
        dialog: state.dialog,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        actionDialogOpen: (payload) => dispatch(action_dialog_open(payload)),
        actionStartProgress: (payload) => dispatch(action_progress_start(payload)),
        progressStop: () => dispatch(action_progress_stop()),
        appendrequestDetails: (payload) => dispatch(action_append_gig_review(payload))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ViewTask)