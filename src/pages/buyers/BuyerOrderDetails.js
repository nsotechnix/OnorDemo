import React, { Fragment, useEffect, useState } from 'react'
import { Col, Container, Row, Form, Card, Button } from 'react-bootstrap'
import { connect } from 'react-redux'
import { Link, useLocation } from 'react-router-dom'
import IllustrationJPG from '../../images/illustration.jpg'
import { API_FETCH_SINGLE_GIG } from '../../utils/API_ENDPOINTS'
import Axios from 'axios'
import { thunk_action_checkout } from '../../redux/actions/ProductReviewAction'
import { isNull, isUndefined } from 'lodash'
import {
    action_progress_start,
    action_progress_stop,
} from "../../redux/actions/progressAction"

const BuyerOrderDetails = (props) => {

    const location = useLocation()
    let isMobile = ''
    if (location.pathname.match('/mobile/')) {
        isMobile = 'mobile/'
    } else {
        isMobile = ''
    }

    let packageId = props.ProductReviewReducer.packageId
    let productId = props.ProductReviewReducer.gigId
    if (isUndefined(productId) || isNull(productId)) {
        productId = props.match.params.productId
        packageId = props.match.params.packageId
    }
    const [productDetails, setProductDetails] = React.useState({ product: null })
    const [packageDetails, setPackageDetails] = React.useState(undefined)
    const [quantity, setquantity] = useState(!isUndefined(props.ProductReviewReducer.quantity) ? props.ProductReviewReducer.quantity : 1)
    const [extras, setExtras] = useState(!isUndefined(props.ProductReviewReducer.extras) ? props.ProductReviewReducer.extras : 0)

    useEffect(() => {
        props.actionStartProgress()
        handleGetProductList()
    }, [])

    const handleActionCheckout = (subTotal, deliveryTime) => {
        props.setActionCheckout({
            subTotal, deliveryTime, packageId, productId, quantity, extras
        })
        props.history.push("/" + isMobile + "buyer/order/checkout/")
    }
    const handleGetProductList = async () => {
        try {
            const prodResult = await Axios.get(API_FETCH_SINGLE_GIG + '' + productId)
            if (!isUndefined(prodResult) && !isUndefined(prodResult.data)) {
                setProductDetails(prodResult.data.gig)
                console.log('PRODUCT FETCHED')
                if (!isUndefined(prodResult.data.gig.onorPackages)) {
                    prodResult.data.gig.onorPackages.map((object, index) => {
                        if (object.packageId == packageId) {
                            setPackageDetails({
                                ...object
                            })
                        }
                    })
                }
            }
        } catch (e) {
            console.log(e)
        }
        props.actionStopProgress()
    }
    return (
        <Fragment>
            <Container>
                {!isUndefined(packageDetails) ?
                    <Row>
                        <Col className="mycol" lg={8}>
                            {/* <Row>
                                <Col className="mycol mt-3">
                                    <h4 className={'onor_span_color'}>Customize your package</h4>
                                </Col>
                            </Row> */}
                            <Row className="align-items-start mt-lg-4">
                                <Col className="mycol d-flex" md={8}>
                                    <img className="mycol"
                                        alt="image"
                                        style={{ height: '5em', width: '5em' }}
                                        src={productDetails.productIconLink} />
                                    <div className="row align-content-between mycol mx-2">
                                        <h5 className="mycol">{productDetails.productName}</h5>
                                        {/* <h6 className="mycol" style={{
                                            color: "darkorange"
                                        }}>View whats included</h6> */}
                                    </div>
                                </Col>
                                <Col className="mycol" md={4}>
                                    <div className="mycol d-flex">
                                        <p className="mycol">Qty.</p>
                                        <select className="mx-4" onChange={
                                            (e) => setquantity(e.target.value)
                                        }>
                                            <option value={1}>1</option>
                                            <option value={2}>2</option>
                                            <option value={3}>3</option>
                                            <option value={4}>4</option>
                                            <option value={5}>5</option>
                                        </select>
                                        <p>${quantity * packageDetails.price}</p>
                                    </div>
                                </Col>
                            </Row>
                            <Row className="mt-lg-4" style={{
                                borderBottom: "1px solid black"
                            }}>
                            </Row>
                            <Row className="mt-lg-4">
                                <Col className="mycol">
                                    <h4>Add extra</h4>
                                </Col>
                            </Row>
                            <Row className="my-4">
                                <Col className="mycol d-flex justify-content-between">
                                    <div className="mycol">
                                        <Form.Group controlId="formBasicCheckboxDelivery">
                                            <Form.Check onChange={(e) =>
                                                (e.target.checked) ? setExtras(extras + 10) : setExtras(extras - 10)
                                            } type="checkbox" label="Document summarizing the session &amp; makeup tips" />
                                        </Form.Group>
                                    </div>
                                    <p className="mycol">$10</p>
                                </Col>
                            </Row>
                            <Row className="my-4">
                                <Col className="mycol d-flex justify-content-between">
                                    <div className="mycol">
                                        <Form.Group controlId="formBasicCheckboxCustomization">
                                            <Form.Check onChange={(e) =>
                                                (e.target.checked) ? setExtras(extras + 10) : setExtras(extras - 10)
                                            } type="checkbox" label="Link to recorded video of session for viewing later" />
                                        </Form.Group>
                                    </div>
                                    <p className="mycol">$10</p>
                                </Col>
                            </Row>
                            <Row className="my-4">
                                <Col className="mycol d-flex justify-content-between">
                                    <div className="mycol">
                                        <Form.Group controlId="formBasicCheckboxEcommerce">
                                            <Form.Check onChange={(e) =>
                                                (e.target.checked) ? setExtras(extras + 15) : setExtras(extras - 15)
                                            } type="checkbox" label="Both (Document + Video)" />
                                        </Form.Group>
                                    </div>
                                    <p className="mycol">$15</p>
                                </Col>
                            </Row>
                        </Col>
                        <Col className="mycol" lg={4}>
                            <Card className="mt-lg-5">
                                <Card.Body>
                                    <Card.Title>Summary</Card.Title>
                                    <div className="d-flex justify-content-between">
                                        <p>Subtotal</p>
                                        <p>${(quantity * packageDetails.price) + extras}</p>
                                    </div>
                                    <div className="mt-lg-5" style={{
                                        borderBottom: "1px solid black"
                                    }}>
                                    </div>
                                    {/* <div className="d-flex justify-content-between mt-lg-4">
                                    <p>Total <span style={{
                                        color: "orangered"
                                    }}>ONOR</span> Coins</p>
                                    <p>$1773</p>
                                </div> */}
                                    <div className="d-flex justify-content-end">
                                        {/* <p>Delivery Time</p> */}
                                        <p className="mt-1">Validity {quantity * packageDetails.deliveryTime} Days</p>
                                    </div>
                                    <div className="mycol d-flex justify-content-center">
                                        <Button
                                            onClick={
                                                (e) => handleActionCheckout(((quantity * packageDetails.price) + extras), (quantity * packageDetails.deliveryTime))
                                            }
                                            className="w-75 btn btn-primary"
                                            style={{ fontSize: '.8em', padding: '5px 30px', borderRadius: '7px', position: 'relative', bottom: '1px' }}
                                            variant="">
                                            Continue to checkout
                                        </Button>
                                    </div>
                                    <div className="mycol d-flex justify-content-center mt-3">
                                        <Button
                                            onClick={
                                                e => props.history.push(`/${isMobile}buyer/order/summary/${productId}/`)
                                            }
                                            className="w-75 btn btn-dark"
                                            style={{ fontSize: '.8em', padding: '5px 30px', borderRadius: '7px', position: 'relative', bottom: '1px' }}
                                            variant="">
                                            Cancel
                                        </Button>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row> : null}
            </Container>
        </Fragment>
    )
}

const mapStateToProps = (state) => {
    return {
        ProductReviewReducer: state.ProductReviewReducer
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setActionCheckout: (payload) => dispatch(thunk_action_checkout(payload)),
        actionStartProgress: (payload) => dispatch(action_progress_start(payload)),
        actionStopProgress: () => dispatch(action_progress_stop())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BuyerOrderDetails)