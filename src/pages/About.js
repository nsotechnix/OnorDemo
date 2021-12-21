import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { Container, Carousel, Row, Col, Button } from 'react-bootstrap'
import OnorMeaning from '../images/about/meaning.png'
import './About.scss'
import Heart from '../images/about/heart.png'
import OnorCloudLogo from '../images/about/onorcloud.png'
import onorLogo from '../images/onorlogo.png'
// onor promise banners
import Banner1 from '../images/about/onor-promise/1.png'
import Banner2 from '../images/about/onor-promise/2.png'
import Banner3 from '../images/about/onor-promise/3.png'
import Banner4 from '../images/about/onor-promise/4.png'
import Banner5 from '../images/about/onor-promise/5.png'

const aboutPage = () => {
    return (
        <>
            <Container>
                {/* <Row className={'mt-5'}>
                    <Col sm={6} className={'d-flex align-self-center'}>
                        <h3>About Onor</h3>
                    </Col>
                    <Col sm={12}>
                        <p style={{ textIndent: '2em', textAlign: 'justify' }}>
                            Onor is a new idea; a new system. We connect the best experts with the clients who need them through virtual sessions. We curate professionals and choose only the best. And the buyers can try out a free consult with our professionals before buying a session.
                        </p>
                        <p style={{ textAlign: 'justify' }}>
                            We pride ourselves in making the process simple. Its essentially a three step process - join with just an email id or phone number, search for your exact need, connect with the artist on a virtual 1:1 session and buy a session when you are sure you have found the right expert.
                        </p>
                    </Col>
                </Row> */}
                <h2 className={'mt-3 text-center bolder'}></h2>
                {/* <img
                    className="slider-image"
                    src={OnorMeaning}
                    alt="Onor Meaning"
                    draggable={false}
                /> */}
                <center>
                    <Row className={'mt-5'}>
                        <Col md={6} className={'d-flex align-items-center '}>
                            <Container>
                                <img
                                    className="img-fluid"
                                    src={OnorCloudLogo}
                                    alt="Onor Meaning"
                                    draggable={false}
                                />
                                <br />
                                {/* <p className={'mx-5 pl-4 next-generational-text'}>Next Generational Personal Services</p> */}
                                {/* <span className={'mx-5 pl-4'}>
                                    <img
                                        className="h-25 w-25"
                                        src={Heart}
                                        alt="Onor Meaning"
                                        draggable={false}
                                    />
                                </span> */}
                            </Container>
                        </Col>
                        <Col md={6} className={'d-flex align-items-center'}>
                            <div className="left-side-content mt-sm-2">
                                <div className={'ml-4'} style={{
                                    fontSize: '15pt'
                                }}>
                                    <p style={{ marginBottom: '0.28cm', lineHeight: '108%', textAlign: 'left', background: 'transparent', fontSize: '18pt' }}>Onor</p>
                                    <p style={{ marginBottom: '0.28cm', lineHeight: '108%', textAlign: 'left', background: 'transparent' }}><em>noun</em> (From Latin honor, honorem)</p>
                                    <p style={{ marginBottom: '0.28cm', lineHeight: '108%', textAlign: 'left', background: 'transparent' }}>/ˈɑn·ər/</p>
                                    <ul>
                                        <li>
                                            <p style={{ marginBottom: '0cm', lineHeight: '100%', textAlign: 'left', background: 'transparent', marginTop: '0.49cm' }}><span lang="en-US">honesty, fairness, or integrity in one's beliefs and action</span></p>
                                        </li>
                                        <li>
                                            <p style={{ marginBottom: '0cm', lineHeight: '100%', textAlign: 'left', background: 'transparent' }}><span lang="en-US">adherence to what is right or to a conventional standard of conduct</span></p>
                                        </li>
                                        <li>
                                            <p style={{ marginBottom: '0.49cm', lineHeight: '100%', textAlign: 'left', background: 'transparent' }}><span lang="en-US">high respect; great esteem; a source of credit or distinction</span></p>
                                        </li>
                                    </ul>
                                    <p style={{ marginBottom: '0.28cm', lineHeight: '108%', textAlign: 'left', background: 'transparent' }}><em>verb</em> (Respect, Showing respect)</p>
                                    <p style={{ marginBottom: '0.28cm', lineHeight: '108%', textAlign: 'left', background: 'transparent' }}>/ˈɑn·ər/</p>
                                    <ul>
                                        <li>
                                            <p style={{ marginBottom: '0cm', lineHeight: '100%', textAlign: 'left', background: 'transparent', marginTop: '0.49cm' }}><span lang="en-US">regard with great respect</span></p>
                                        </li>
                                        <li>
                                            <p style={{ marginBottom: '0.49cm', lineHeight: '100%', textAlign: 'left', background: 'transparent' }}><span lang="en-US">fulfill (an obligation) or keep (an agreement)</span></p>
                                        </li>
                                    </ul>
                                    <p style={{ marginBottom: '0.28cm', lineHeight: '108%', textAlign: 'left', background: 'transparent' }}><br />&nbsp;</p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </center>
                <h2 className={'mt-5 pt-5 pb-3 mb-2 text-center bolder'}>The Onor Promise</h2>
                <Row>
                    <Col md={8}>
                        <div className="right-side-content pr-4 d-flex justify-content-center align-items-center h-100">
                            <h4><i>The right experts providing you the exact guidance you need on a platform you can trust</i></h4>
                        </div>
                    </Col>
                    <Col md={4} className="d-flex align-items-center justify-content-center">
                        <div className="d-inline-block">
                            <center>
                                <h4 className={''} style={{
                                    fontWeight: 'bolder',
                                    verticalAlign: 'text-bottom'
                                }}>The <img src={onorLogo} alt="Onor" className="img-responsive h-25 w-25 pb-3" /> Promise</h4>
                                <span className={'mx-5 pl-4'}>
                                    <img
                                        className="h-50 w-50"
                                        src={Heart}
                                        alt="Onor Promise"
                                        draggable={false}
                                    />
                                </span>
                            </center>
                        </div>
                    </Col>
                </Row>
                {/* <Carousel>
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
                </Carousel> */}
            </Container>
        </>
    )
}
export default connect()(aboutPage)