import React, { Fragment, useState } from 'react'
import {
    Col, Container, Row,
    FormControl
} from 'react-bootstrap'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import JoinImg from '../images/join.png'
import LoginImg from '../images/login.png'
import LogoImg from '../images/onorlogo.png'
import LogoutImg from '../images/logoutbutton.png'
import SellerImg from '../images/sellerbutton.png'
import AboutUsImg from '../images/aboutus.png'
import ContactImg from '../images/contact.png'
import BuyerImg from '../images/buyerbutton.png'
import './LandingPage.scss'
import { action_dialog_open, action_dialog_close } from '../redux/actions/dialogAction'
import MyDialog from '../components/MyDialog'
import { action_sign_out } from '../redux/actions/authActions'

const LandingPage = (props) => {

    const [display, setDisplay] = useState(false)
    const [search, setSearch] = useState("")

    const demoArray = ["Musician", "Graphics Designer",
        "Painter", "Illustrator", "Video Editor",
        "Wordpress designer", "Fashion Designer", "Content writer"]

    const constact_us_message_jsx = (
        <Fragment>
            <p>
                <p>Onor International Ltd.</p>
                <p>57 Street Koramangala,</p>
                <p>Bengaluru, Karnataka, India</p>
                <p>+91-72-2280910</p>
                <p>(Address, including zip code, and telephone number, including
                    area code, of Registrant's principal executive offices)</p>
            </p>
        </Fragment>
    )

    const about_us_message_jsx = (
        <Fragment>
            <p>
                At vero eos et accusamus et iusto odio dignissimos
                ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos
                dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique
                sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.
                Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore,
                cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat
                ossimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam
                et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae
                sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus,
                ut aut reiciendis voluptatibus maiores
                alias consequatur aut perferendis doloribus asperiores repellat.
            </p>
            <p>
                At vero eos et accusamus et iusto odio dignissimos
                ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos
                dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique
                sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.
                Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore,
                cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat
                ossimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam
                et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae
                sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus,
                ut aut reiciendis voluptatibus maiores
                alias consequatur aut perferendis doloribus asperiores repellat.
            </p>
        </Fragment>
    )


    const authorized_jsx = (
        <Fragment>
            <Row className="mycol top_icon_row">
                <Col className="mycol d-none d-sm-block">
                </Col>
                <Col className="mycol d-none d-md-block">
                </Col>
                <Col className="mycol d-none d-md-block">
                </Col>
                <Col className="mycol d-none d-md-block">
                    
                </Col>
                <Col className="mycol d-flex justify-content-center">


                    <img onClick={(e) => {

                        localStorage.removeItem("jwtToken")
                        props.actionSignOut();
                        props.dialogOpen({
                            title: "Logout successful",
                            message: "You are logged out successfully. To login again click on the login button on top right corner homepage",
                            positive: "Ok",
                        })

                    }} className="iconbtn" src={LogoutImg} alt="joinimg" />
                </Col>
            </Row>
        </Fragment>
    )

    const unauthorized_jsx = (
        <Fragment>
            <Row className="mycol top_icon_row">
                <Col className="mycol d-none d-sm-block">
                </Col>
                <Col className="mycol d-none d-md-block">
                </Col>
                <Col className="mycol d-none d-md-block">
                </Col>
                <Col className="mycol d-none d-md-block">
                </Col>
                <Col className="mycol d-flex justify-content-center">
                    <Link to="/signup">
                        <img onClick={(e) => {
                            // props.dialogOpen({
                            //     title: "Coming Soon",
                            //     message: "The feature is currently in development. It will be ready soon",
                            //     positive: "Close",
                            // })

                        }} className="iconbtn" src={JoinImg} alt="joinimg" />
                    </Link>
                    <Link to="/signin">
                        <img onClick={(e) => {
                            // props.dialogOpen({
                            //     title: "Coming Soon",
                            //     message: "The feature is currently in development. It will be ready soon",
                            //     positive: "Close",
                            // })

                        }} className="iconbtn" src={LoginImg} alt="joinimg" />
                    </Link>
                </Col>
            </Row>
        </Fragment>
    )

    return (
        <Fragment>
            {
                props.dialog.isOpen &&
                <MyDialog />
            }
            <Container>
                {props.auth.isAuthorized ? authorized_jsx : unauthorized_jsx}
                <Row className="mt-5">
                    <Col className="mycol d-flex justify-content-center">
                        <img className="logoicon" src={LogoImg} alt="logo" />
                    </Col>
                </Row>
                <Row>
                    <Col className="mycol d-flex justify-content-center mt-3">
                        <FormControl
                            onClick={(e) => {
                                setDisplay(!display)
                            }}
                            onChange={e => {
                                console.log(e.target.value)
                                setSearch(e.target.value)
                            }}

                            onBlur={(e) => {
                                setDisplay(!display)
                            }}
                            className="searchbox"
                            placeholder="Search service"
                            aria-label="Recipient's username"
                            aria-describedby="basic-addon2"
                        />
                    </Col>
                </Row>
                <Row className="mycol">
                    <Col className="d-flex justify-content-center">
                        {
                            display &&
                            <div>
                                {
                                    demoArray.filter((name) =>
                                        name.toLowerCase().indexOf(search.toLowerCase()) > -1
                                    ).map((v, i) => {
                                        return (
                                            <div className="divider d-flex justify-content-center" key={i}>
                                                <span>{v}</span>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        }
                    </Col>
                </Row>
                <Row className="bottom_icon_row">
                    <Col xs={3} className="mycol d-flex justify-content-center">
                        <img onClick={(e) => {
                            props.dialogOpen({
                                title: "Coming Soon",
                                message: "The feature is currently in development. It will be ready soon",
                                positive: "Close",
                            })

                        }} className="iconbtn" src={SellerImg} alt="logo" />
                    </Col>
                    <Col xs={6} className="mycol d-flex justify-content-center">
                        <img onClick={(e) => {
                            props.dialogOpen({
                                title: "About Us",
                                message: about_us_message_jsx,
                                positive: "Close",
                            })
                        }} className="iconbtn" src={AboutUsImg} alt="logo" />
                        <img onClick={e => {
                            e.preventDefault()
                            props.dialogOpen({
                                title: "Contact Us",
                                message: constact_us_message_jsx,
                                positive: "Close",
                            })
                        }} className="iconbtn" src={ContactImg} alt="logo" />
                    </Col>
                    <Col xs={3} className="mycol  d-flex justify-content-center">
                        <img onClick={(e) => {
                            props.dialogOpen({
                                title: "Coming Soon",
                                message: "The feature is currently in development. It will be ready soon",
                                positive: "Close",
                            })

                        }} className="iconbtn buyerbtn ml-lg-5" src={BuyerImg} alt="logo" />
                    </Col>
                </Row>
                <Row className="mt-5">
                    <Col sm={3} className="mycol">
                    </Col>
                    <Col sm={6} className="mycol d-flex justify-content-center">
                        <p style={{ textAlign: "center", fontSize: "15px" }}>&#169; Privileged And Confidential. All Right Reserverd</p>
                    </Col>
                    <Col sm={3} className="mycol">
                    </Col>
                </Row>
            </Container>
        </Fragment>
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
        dialogOpen: (payload) => dispatch(action_dialog_open(payload)),
        dialogClose: (payload) => dispatch(action_dialog_close(payload)),
        actionSignOut: () => dispatch(action_sign_out())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LandingPage)
