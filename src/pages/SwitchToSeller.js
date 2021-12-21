import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { useLocation } from "react-router-dom"
import { Container, Row, Col, Button } from 'react-bootstrap'
import "./SwitchToSeller.scss"
import BookLogo from '../svg/study.svg'
import ProfileLogo from '../svg/man.svg'
import ShopLogo from '../svg/shop.svg'
import { Link } from 'react-router-dom'
import rightPic from '../images/switch-to-seller.png'
const SwitchToSeller = (props) => {

    const location = useLocation()
    let isMobile = ''
    if (location.pathname.match('/mobile/')) {
      isMobile = 'mobile/'
    } else {
      isMobile = ''
    }
    return (
        <Fragment>
            <Container className={"media-body"}>
                <Row className={"mt-lg-5"}>
                    <Col className="videoViewer responsiveImage d-block d-sm-block d-md-none d-lg-none d-xl-none" xs={12} sm={12} md={6} lg={6} xl={6}>
                        <img src={rightPic} className={'img-fluid rounded mx-auto'} alt="Switch to seller" />
                    </Col>
                    <Col style={{margin: '0 auto'}} xs={12} sm={12} md={6} lg={6} xl={6}>
                        <h4 className="header_h3">Ready to start selling ?</h4>
                        <Row className="switchseller__spacer">
                            <Col className="switchseller__image_div" xs={4} sm={4}>
                                <img src={BookLogo} alt="booklogo" className="switchseller__logo_image" />
                            </Col>
                            <Col className="" xs={8} sm={8}>
                                <h5 className="align-self-center snippets">Learn to make seller profile.</h5>
                            </Col>
                        </Row>
                        <Row>
                            <Col className="switchseller__image_div" xs={4} sm={4}>
                                <img src={ProfileLogo} alt="booklogo" className="switchseller__logo_image" />
                            </Col>
                            <Col className="" xs={8} sm={8}>
                                <h5 className="d-flex align-self-center snippets">Create seller profile</h5>
                            </Col>
                        </Row>
                        <Row>
                            <Col className="switchseller__image_div" xs={4} sm={4}>
                                <img src={ShopLogo} alt="booklogo" className="switchseller__logo_image" />
                            </Col>
                            <Col className="" xs={8} sm={8}>
                                <h5 className="align-self-center snippets">Assignment</h5>
                            </Col>
                        </Row>
                    </Col>
                    <Col className="videoViewer mainImage d-none d-md-block d-lg-block d-xl-block d-sm-none d-md-none" xs={12} sm={12} md={6} lg={6} xl={6}>
                        <img src={rightPic} className={'img-fluid rounded mx-auto'} alt="Switch to seller" />
                    </Col>
                </Row>
                <Row className="pull-left">
                    <Col>
                        <Button as={Link} to={"/" + isMobile + "seller/create/personalinfo"} variant="" className="onor_btn">Continue</Button>
                    </Col>
                </Row>
            </Container>
        </Fragment>
    )
}


export default connect()(SwitchToSeller)
