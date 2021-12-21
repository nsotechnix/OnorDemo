import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Container, Carousel, Row, Col } from 'react-bootstrap'
import './WhyOnor.scss'
import _ from 'lodash'
import Heart from '../images/about/heart.png'
import WeMakeItEasy from '../images/why-onor/main.png'
import WeMakeItEasyImage1 from '../images/why-onor/image1.png'
import WeMakeItEasyImage2 from '../images/why-onor/image2.png'
import WeMakeItEasyImage3 from '../images/why-onor/image3.png'
// banners
import Banner1 from '../images/why-onor/banners/1.png'
import Banner2 from '../images/why-onor/banners/2.png'
import Banner3 from '../images/why-onor/banners/3.png'
import Banner4 from '../images/why-onor/banners/4.png'
import Banner5 from '../images/why-onor/banners/5.png'

// import Collage from '../images/why-onor/collage.png'
// services
import Service1 from '../images/why-onor/services/1.png'
import Service2 from '../images/why-onor/services/2.png'
import Service3 from '../images/why-onor/services/3.png'
import Service4 from '../images/why-onor/services/4.png'

const WhyOnor = (props) => {

    return (
        <>
            <Container>
                <h2 className={'mt-4 pb-3 mb-2 text-center bolder'}>We Make It Easy</h2>
                <div className="row">
                    {/* <div className="col-sm-3 d-flex align-items-center justify-content-center right-side-content">
                        <h2>We Make It Easy</h2>
                    </div> */}
                    <div className="col-sm-12">
                        <div className="parent">
                            <img
                            style={{width:'100%'}}
                                className="slider-image WeMakeItEasyImage image1"
                                src={WeMakeItEasy}
                                alt="Main"
                            // useMap="#mainImage"
                            />
                            <img
                                className="slider-image crsr WeMakeItEasyImage image2 addShadow"
                                src={WeMakeItEasyImage1}
                                alt="First"
                                onClick={e => props.history.push('/gigs/popular/')}
                            />
                            <img
                                className="slider-image crsr WeMakeItEasyImage image3 addShadow"
                                src={WeMakeItEasyImage2}
                                alt="Second"
                                onClick={e => props.history.push('/buyer/postrequest')}
                            />
                            <img
                                className="slider-image crsr WeMakeItEasyImage image4 addShadow"
                                src={WeMakeItEasyImage3}
                                alt="Third"
                                onClick={e => window.location.assign('https://calendly.com/onorservices-calendar/consult-a-makeup-maestro')}
                            />
                        </div>
                    </div>
                </div>
                {/* <map name="mainImage" id="mark">
                    <area shape="rect" onBlur={
                        e => e.target.focus()
                    } className={'crsr'} title="Browse and find the right session" coords="0,0,50,50" onClick={e => props.history.push('/gigs/popular/')} />
                    <area shape="rect" className={'crsr'} title="Post your request" coords="50, 0, 100, 100" onClick={e => props.history.push('/buyer/postrequest')} />
                    <area shape="rect" className={'crsr'} title="Get a Private Cosult" coords="100, 0, 200, 200" target="_BLANK" href="https://calendly.com/onorservices-calendar/consult-a-makeup-maestro" />
                </map> */}
                <h2 className={'mt-5 pt-5 pb-3 text-center bolder'}>The Best of Everything</h2>
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="slider-image"
                            src={Banner1}
                            alt={`Banner 1`}
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="slider-image"
                            src={Banner2}
                            alt={`Banner 2`}
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="slider-image"
                            src={Banner3}
                            alt={`Banner 3`}
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="slider-image"
                            src={Banner4}
                            alt={`Banner 4`}
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="slider-image"
                            src={Banner5}
                            alt={`Banner 5`}
                        />
                    </Carousel.Item>
                </Carousel>
                <h2 className={'mt-5 pt-5 pb-3 text-center bolder'}>Services You Need</h2>
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="slider-image"
                            src={Service1}
                            alt={`Service 1`}
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="slider-image"
                            src={Service2}
                            alt={`Service 2`}
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="slider-image"
                            src={Service3}
                            alt={`Service 3`}
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="slider-image"
                            src={Service4}
                            alt={`Service 4`}
                        />
                    </Carousel.Item>
                </Carousel>
            </Container>
        </>
    )
}

export default connect()(WhyOnor)