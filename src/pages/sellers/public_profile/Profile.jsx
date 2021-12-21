import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { Row, Col, Container } from 'react-bootstrap'
import "./Profile.scss"
import {
    action_progress_start,
    action_progress_stop,
} from "../../../redux/actions/progressAction"
import man from '../../../svg/man.svg'
import {
    GET_SELLER_EDIT_PROFILE_DATA,
    MERCHANT_GIGS_LIST
} from "../../../utils/API_ENDPOINTS"
import Axios from 'axios'
import _ from 'lodash'
import GigComponent from '../../../components/GigComponent'
import Carousel from "react-multi-carousel"
import withWidth, { isWidthUp } from "@material-ui/core/withWidth"

const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 4,
    },
    desktop: {
        breakpoint: { max: 3000, min: 1200 },
        items: 4,
    },
    tablet: {
        breakpoint: { max: 1200, min: 1024 },
        items: 3,
    },
    tabletSmall: {
        breakpoint: { max: 1024, min: 464 },
        items: 2.6,
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 2,
    },
}

const SellerPublicProfile = (props) => {

    const getGridListCols = () => {
        if (isWidthUp("xl", props.width)) {
            return 5;
        }

        if (isWidthUp("lg", props.width)) {
            return 5;
        }

        if (isWidthUp("md", props.width)) {
            return 4;
        }

        if (isWidthUp("sm", props.width)) {
            return 3;
        }

        if (isWidthUp("xs", props.width)) {
            return 1;
        }
    };

    let sellerId = props.match.params.sellerId
    if (sellerId === null) {
        props.history.push("/")
    }
    const [image, setimage] = useState(man)
    const [getData, setGetData] = useState('')
    const [gigsList, setGigsList] = useState({})
    useEffect(() => {
        props.actionStartProgress()
        Axios.get(GET_SELLER_EDIT_PROFILE_DATA + sellerId)
            .then((result) => {
                if (result.data.merchant === null) {
                    props.history.push("/")
                }
                console.log(result.data)
                setimage(result.data.merchant.avatar)
                setGetData(result.data)
                getGigsList(result.data.merchant.merchantId)
                props.progressStop()
            }).catch(e => {
                props.progressStop()
                console.log(e)
            })
    }, [])

    const getGigsList = async (merchantId) => {
        let result = await Axios.get(MERCHANT_GIGS_LIST + merchantId)
        setGigsList(result.data.product_list_of_merchant)
    }
    return (
        <>
            <Container className={"media-body mt-5 mainDiv"}>
                {
                    !_.isUndefined(getData.merchant) &&
                    <>
                        <Row className="pt-5 main-elements">
                            <Col sm={4}>
                                <img src={image} className={'profile-image'} alt="user" />
                            </Col>
                            <Col sm={7}>
                                <h2>{getData.merchant.firstName + ' ' + getData.merchant.lastName}</h2>
                                <h4 className={'onor_span_color'}>Makeup Artist</h4>
                                <p>{getData.merchant.profile.description}</p>
                            </Col>
                        </Row>
                        <Row className="pt-3 main-elements">
                            <Col sm={12}>
                                <h5 className={'mt-5 pb-2 pl-3 title-headers'}>Education</h5>
                            </Col>
                            {
                                getData.merchant.educationSet.map((edu, idx) => {
                                    return (
                                        <>
                                            <Col sm={12} key={idx}>
                                                <p className={'bolder'}>{edu.name} - {edu.yearOfPassing}</p>
                                                <p>{edu.university}</p>
                                            </Col>
                                        </>
                                    )
                                })
                            }
                        </Row>
                        <Row className="pt-3 main-elements">
                            <Col sm={12}>
                                <h5 className={'mt-5 pb-2 pl-3 title-headers'}>Certifications</h5>
                            </Col>
                            {
                                getData.merchant.certificationSet.map((certificate, idx) => {
                                    return (
                                        <>
                                            <Col sm={12} key={idx}>
                                                <p className={'bolder'}>{certificate.name}</p>
                                                <p>{certificate.certificateBy}</p>
                                            </Col>
                                        </>
                                    )
                                })
                            }
                        </Row>
                        <Row className="pt-3 main-elements">
                            <Col sm={12}>
                                <h5 className={'mt-5 pb-2 pl-3 title-headers'}>Languages</h5>
                            </Col>
                            {
                                getData.merchant.languageSet.map((language, idx) => {
                                    return (
                                        <>
                                            <Col sm={12} key={idx}>
                                                <p><span className={'bolder'}>{language.languageName}: </span>{language.proficiency}</p>
                                            </Col>
                                        </>
                                    )
                                })
                            }
                        </Row>
                        <Row className="pt-3 main-elements">
                            <Col sm={12}>
                                <h5 className={'mt-5 pb-2 pl-3 title-headers'}>Expertise</h5>
                            </Col>
                            <Col sm={12}>
                                <p><span className={'bolder'}>Wedding: </span>Bridal, Bridesmaid, Flower Girls, Mother of the bridge / groom</p>
                                <p><span className={'bolder'}>Special Events: </span>Gala, Holiday Parties, Corporate Functions, Girls Night Out, Birthdays, Proms etc.</p>
                                {
                                    getData.merchant.skillsSet.map((skill, idx) => {
                                        return (
                                            <>
                                                <p><span className={'bolder'}>{skill.name}: </span> {skill.proficiency}</p>
                                            </>
                                        )
                                    })
                                }
                            </Col>
                        </Row>
                        <Row className="pt-3 main-elements">
                            <Col sm={12}>
                                <h5 className={'mt-5 pb-2 pl-3 title-headers'}>Sessions</h5>
                            </Col>
                            <Col sm={12}>

                                <Carousel
                                    responsive={responsive}
                                    focusOnSelect={true}
                                    slidesToSlide={getGridListCols()}
                                    containerClass="carousel-container"
                                    itemClass="carousel-item-padding-40-px"
                                >
                                    {
                                        !_.isNull(gigsList) && !_.isUndefined(gigsList) && !_.isEmpty(gigsList) && gigsList.map((currVal, index) => {
                                            return (<GigComponent
                                                key={"sr" + currVal.productId.toString()}
                                                productId={currVal.productId}
                                                productIconLink={currVal.productIconLink}
                                                productName={currVal.productName}
                                                merchantFirstName={currVal.merchant.firstName}
                                                merchantLastName={currVal.merchant.lastName}
                                                merchantRating={currVal.merchant.ratings}
                                                packages={currVal.onorPackages}
                                                merchantImage={currVal.merchant.avatar}
                                            />)
                                        })
                                    }
                                </Carousel>
                            </Col>
                        </Row>
                        <Row className="pt-3 main-elements">
                            <Col sm={12}>
                                <h5 className={'mt-5 pb-2 pl-3 title-headers'}>Reviews</h5>
                            </Col>
                            <Col sm={12}>
                                <p className={'text-center'}>No reviews</p>
                            </Col>
                        </Row>
                    </>
                }
            </Container>
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        auth: state.auth,
        dialog: state.dialog
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        actionStartProgress: (payload) => dispatch(action_progress_start(payload)),
        progressStop: () => dispatch(action_progress_stop()),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(SellerPublicProfile)