import React, { useState, useEffect } from 'react'
import { Col, Row } from 'react-bootstrap'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'
import girlImage from "../../svg/onorhomepage.svg"
import SearchIcon from '@material-ui/icons/Search'
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"
import './ServiceHeader.scss'
// import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIosRounded';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIosRounded'
import freeConsultation from '../../images/free-consultation.png'
import { ArrowBack, ArrowForward } from '@material-ui/icons'

const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 1,
    },
    desktop: {
        breakpoint: { max: 3000, min: 1200 },
        items: 1,
    },
    tablet: {
        breakpoint: { max: 1200, min: 1024 },
        items: 1,
    },
    tabletSmall: {
        breakpoint: { max: 1024, min: 464 },
        items: 1,
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
    },
}

const ServiceHeader = (props) => {

    const testimonials = {
        1: {
            name: 'Susana C.',
            description: '“….amazing.  I learned so many new makeup tricks, and I was surprised at the results.  I didn’t think I would be able to do my own makeup that well, but she did such a good job explaining everything and she was so patient..”'
        },
        2: {
            name: 'Jill F.',
            description: '“..I enjoyed it very much and learned a lot from it. I don’t use make up everyday. I just use it for certain occasions. But she explained it in a very simple way, she is very professional and flexible when I asked for variations of what she suggested..”'
        },
        3: {
            name: 'Sidet K.',
            description: '“..Many thanks for all the advice and tips! You are super helpful! I looked like a new and beautiful person after the makeup session..”'
        }
    }

    const [searchedTerm, setSearchedTerm] = useState("")
    const [carouselName, setCarouselName] = useState('')
    const [carouselDescription, setCarouselDescription] = useState('')
    const [currentCarousel, setCurrentCarousel] = useState(1)

    const getCurrentCarousel = (navigate) => {
        setCurrentCarousel(navigate)
        setCarouselName(testimonials[navigate].name)
        setCarouselDescription(testimonials[navigate].description)
    }

    useEffect(() => {
        const fetcher = async () => {
            await getCurrentCarousel(currentCarousel)
        }
        fetcher()
    }, [])
    return (
        <>
            <Row className={'mt-5'}>
                <Col xs={12} md={8}>
                    {/* <p><span className={'bolder onor-heading'}>Onor - A New&ensp;</span><span className={'onor_span_color'} style={{ fontSize: 'max(65px, min(3vw, 50px))', fontWeight: 'regular', fontFamily: "ratyadu" }}>Experience</span></p> */}
                    <img
                        src={freeConsultation}
                        onClick={(e) => window.location.assign('https://calendly.com/onorservices-calendar/consult-a-makeup-maestro', '_blank')}
                        className={'m-0 pr-5 img-fluid crsr'}
                        alt="free-consultation" />
                    <Row className={'mt-3'}>
                        <Col xs={8}>
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <button className="btn btn-outline-secondary" type="button" style={{ border: '1px solid lightgrey', borderRight: '1px solid white' }}><SearchIcon /></button>
                                </div>
                                <input
                                    type="text"
                                    className="form-control input-lg p-4 rounded"
                                    placeholder="Find real-time services"
                                    aria-label=""
                                    aria-describedby="basic-addon1"
                                    value={searchedTerm}
                                    fullWidth
                                    onChange={(e) => setSearchedTerm(e.target.value)}
                                    onKeyPress={(e) => {
                                        if (e.key === "Enter") {
                                            // handleGigSearch()
                                            e.target.value !== '' && props.history.push('/search/' + e.target.value)
                                        }
                                    }} />
                            </div>
                        </Col>
                        <Col xs={4}>
                            <button
                                onClick={(e) => {
                                    // handleGigSearch()
                                    searchedTerm !== '' && props.history.push('/search/' + searchedTerm)
                                }}
                                className={'btn btn-primary btn-lg search-btn-before-login'} style={{ fontSize: '1em', padding: '11px 50px', marginRight: '1em', borderRadius: '7px' }}>Search</button>
                        </Col>
                    </Row>
                    <h4 className={'mb-4 bolder'} style={{ fontSize: 25 }}>The Best Makeup Artists - Wherever you are</h4>
                    <p className={'pt-5 h6'}>Testimonials of the Onor Makeup Video Session Experience</p>
                    <Row className={'mt-3 px-3'} style={{ marginLeft: '-2em' }}>
                        <Col xs={12} md={11} className={'d-flex align-items-center justify-content-start'}>
                            <span onClick={
                                e => getCurrentCarousel(currentCarousel === 1 ? 3 : currentCarousel - 1)
                            } className={'leftBtn crsr'}><ArrowBack /></span>
                            <div className={'testimonialsCarousel testimonialsBox'} style={{ borderRadius: 10 }}>
                                <div className={'px-4 py-2'}>
                                    <p className={'bolder'}>{carouselName}</p>
                                    <p>{carouselDescription}</p>
                                </div>
                            </div>
                            <span onClick={
                                e => getCurrentCarousel(currentCarousel === 3 ? 1 : currentCarousel + 1)
                            } className={'rightBtn crsr'}><ArrowForward /></span>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={10} className={'d-flex align-items-center justify-content-center mt-2'}>
                            <input style={{ color: 'red' }} className={'customCarousel'} type="radio" onClick={
                                e => getCurrentCarousel(1)
                            } name="carousel-dots" checked={currentCarousel === 1} />&ensp;
                            <input className={'customCarousel'} type="radio" onClick={
                                e => getCurrentCarousel(2)
                            } name="carousel-dots" checked={currentCarousel === 2} />&ensp;
                            <input className={'customCarousel'} type="radio" onClick={
                                e => getCurrentCarousel(3)
                            } name="carousel-dots" checked={currentCarousel === 3} />
                        </Col>
                    </Row>
                </Col>
                <Col xs={12} md={4} className={'d-none d-md-block'}>
                    <img
                        style={{ height: '35em' }}
                        className="img-responsive pl-5 ml-5"
                        src={girlImage}
                        alt="slide image"
                    />
                </Col>
            </Row>
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        auth: state.auth,
        dialog: state.dialog,
        searchGig: state.searchGig,
    }
}
export default withRouter(connect(mapStateToProps)(ServiceHeader))


{/* <Carousel
                                showDots={true}
                                responsive={responsive}
                                infinite={true}
                                autoPlaySpeed={1000}
                                keyBoardControl={true}
                                customTransition="all .5"
                                transitionDuration={500}
                                containerClass="carousel-container"
                                itemClass="carousel-item-padding-40-px"
                                customRightArrow={false}
                                customLeftArrow={false}
                            >
                                <div className={'glowing p-3 mb-5 bg-white rounded'}>
                                    <h5 className={'text-left pb-2'}>Jill F.</h5>
                                    <p>“….amazing.  I learned so many new makeup tricks, and I was surprised at the results.  I didn’t think I would be able to do my own makeup that well, but she did such a good job explaining everything and she was so patient..”</p>
                                </div>
                                <div className={'glowing p-3 mb-5 bg-white rounded'}>
                                    <h5 className={'text-left pb-2'}>Susana C.</h5>
                                    <p>“..I enjoyed it very much and learned a lot from it. I don’t use make up everyday. I just use it for certain occasions. But she explained it in a very simple way, she is very professional and flexible when I asked for variations of what she suggested..”</p>
                                </div>
                                <div className={'glowing p-3 mb-5 bg-white rounded'}>
                                    <h5 className={'text-left pb-2'}>Sidet K.</h5>
                                    <p>“..Many thanks for all the advice and tips! You are super helpful!<br /> I looked like a new and beautiful person after the makeup session..”</p>
                                </div>
                            </Carousel> */}