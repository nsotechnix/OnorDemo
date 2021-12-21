import React from 'react'
import { Link } from 'react-router-dom'
import { Col, Row, Form, Button, Container } from 'react-bootstrap'
import { connect } from 'react-redux'
import UserImage from '../../svg/man.svg'
import { action_dialog_open } from "../../redux/actions/dialogAction"
import {
    action_progress_start,
    action_progress_stop,
} from "../../redux/actions/progressAction"
import jwt from 'jsonwebtoken'

const SellerEditProfilePage = (props) => {
    if (!props.auth.isAuthorized) {
        props.actionDialogOpen({
            title: "Please login or signup to continue",
            positive: "Ok",
            type: "Alert",
        })
        props.history.push("/signin");
    }

    if (!props.auth.isAlreadySeller) {
        props.history.push("/seller");
    }
    return (
        <React.Fragment>
            <Container className={"media-body"}>
                <h4 className={'header_h4 my-3'}>Edit Seller Profile</h4>
                <Row className={'d-flex justify-content-center'}>
                    <Col sm={12} className={'d-flex justify-content-center'}>
                        <img src={UserImage} alt="user" style={{height: '40px', width: '40px'}} />&emsp;
                        <Form.Group controlId="formBasicPassword">
                            <Form.Control type="text" disabled value={jwt.decode(localStorage.getItem('jwtToken')).userEmail}/>
                        </Form.Group>
                    </Col>
                </Row>
                <Row className={'d-flex justify-content-center my-3'}>
                    <Col sm={2} className={'align-self-center'}>
                        <Form.Label>Edit Email</Form.Label>
                    </Col>
                    <Col sm={5}>
                        <Form.Control type={'text'} placeholder={'Email'} value={jwt.decode(localStorage.getItem('jwtToken')).userEmail}></Form.Control>
                    </Col>
                    <Col sm={2} className={'align-self-center'}>
                        <Button className={'onor_outline_btn'}>Confirm</Button>
                    </Col>
                </Row>
                <Row className={'d-flex justify-content-center my-3'}>
                    <Col sm={2} className={'align-self-center'}>
                        <Form.Label>Add/ Edit Address</Form.Label>
                    </Col>
                    <Col sm={5}>
                        <Form.Control type={'text'} placeholder={'Address'}></Form.Control>
                    </Col>
                    <Col sm={2} className={'align-self-center'}>
                        <Button className={'onor_outline_btn'}>Confirm</Button>
                    </Col>
                </Row>

                <Row className={'d-flex justify-content-center my-3'}>
                    <Col sm={2}></Col>
                    <Col sm={5}>
                        <Form.Control type={'text'} placeholder={'Address'}></Form.Control>
                    </Col>
                    <Col sm={2} className={'align-self-center'}></Col>
                </Row>

                <Row className={'d-flex justify-content-center my-3'}>
                    <Col sm={2}></Col>
                    <Col sm={5}>
                        <Form.Control type={'text'} placeholder={'Address'}></Form.Control>
                    </Col>
                    <Col sm={2} className={'align-self-center'}></Col>
                </Row>
                <Row className={'d-flex justify-content-center my-3'}>
                    <Col sm={2} className={'align-self-center'}>
                        <Form.Label>Upload Identification Number</Form.Label>
                    </Col>
                    <Col sm={5}>
                        <Form.Control type={'text'} placeholder={'Identification Number'}></Form.Control>
                    </Col>
                    <Col sm={2} className={'align-self-center'}></Col>
                </Row>
                <Row className={'d-flex justify-content-center my-4'}>
                    <Col sm={8} className={'align-self-center'}>
                        <Button as={ Link } to={"/user/buyer/edit/"} variant="" className="onor_secondery_btn">Update Buyer Profile</Button>
                        <Button variant="" className="onor_btn float-right">Update Profile</Button>
                    </Col>
                </Row>
            </Container>
        </React.Fragment>
    )
}
const mapStateToProps = (state) => {
    return {
        auth: state.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        actionDialogOpen: (payload) => dispatch(action_dialog_open(payload)),
        actionStartProgress: (payload) => dispatch(action_progress_start(payload)),
        progressStop: () => dispatch(action_progress_stop()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SellerEditProfilePage)