import React, { Fragment } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import BreadCrumbNav from '../../components/BreadCrumbNav'
import GoogleLogo from '../../svg/google.svg'
import FacebookLogo from '../../svg/facebook.svg'
import TwitterLogo from '../../svg/twitter.svg'
import './SellerAccountLinkedAccount.scss'

const SellerAccountLinkedAccount = (props) => {

    const form_jsx = (
        <Fragment>
            <Row className="mycol mt-lg-2 mb-lg-5">
                <Col className="mycol">
                    <h4 className="mycol header_h4 mt-lg-2">Linked Accounts</h4>
                </Col>
            </Row>
            <Row className="mycol mt-lg-4">
                <Col className="mycol">
                    <div className="mycol d-flex justify-content-center">
                        <img className="mycol" alt="googlelogo" src={GoogleLogo} style={{
                            width: "25px"
                        }} />
                        <h5 className="mycol ml-lg-2">Google</h5>
                    </div>
                </Col>
                <Col className="mycol d-flex justify-content-center">
                    <Button className="w-25 onor_outline_btn" variant="outline-primary">Connect</Button>
                </Col>
            </Row>
            <Row className="mt-lg-4">
                <Col className="mycol">
                    <div className="mycol d-flex justify-content-center">
                        <img className="mycol" alt="googlelogo" src={FacebookLogo} style={{
                            width: "25px"
                        }} />
                        <h5 className="mycol ml-lg-2">Facebook</h5>
                    </div>
                </Col>
                <Col className="mycol d-flex justify-content-center">
                    <Button className="w-25 onor_outline_btn" variant="">Connect</Button>
                </Col>
            </Row>
            <Row className="mt-lg-4">
                <Col className="mycol">
                    <div className="mycol d-flex justify-content-center">
                        <img className="mycol" alt="googlelogo" src={TwitterLogo} style={{
                            width: "25px"
                        }} />
                        <h5 className="mycol ml-lg-2">Twitter</h5>
                    </div>
                </Col>
                <Col className="mycol d-flex justify-content-center">
                    <Button className="w-25 onor_outline_btn" variant="">Connect</Button>
                </Col>
            </Row>
            <Row className="mt-lg-5">
                <Col className="mycol">
                    <Button onClick={e => {
                        props.history.push("/seller/create/professionalinfo")
                    }} className="onor_secondery_btn" variant="">Back</Button>
                </Col>
                <Col className="mycol d-flex justify-content-end">
                    <Button className="onor_btn" to={"/seller/create/accountsecurity"} as={Link} variant="">Continue</Button>
                </Col>
            </Row>
        </Fragment>
    )

    return (
        <Fragment>
            <div style={{
                borderBottom: "1px solid black"
            }}></div>
            <Container>
                <Row>
                    <Col style={{ borderBottom: "1px solid black" }} >
                        <BreadCrumbNav
                            account={true}
                            summary={false}
                            className="mycol"
                        />
                    </Col>
                </Row>
                {form_jsx}
            </Container>
        </Fragment>
    )
}

export default connect()(SellerAccountLinkedAccount)
