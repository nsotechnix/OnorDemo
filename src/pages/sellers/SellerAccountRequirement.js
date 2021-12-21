import React, { Fragment } from 'react'
import { Col, Container, Row, Form, Button, Label } from 'react-bootstrap'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import BreadCrumbNav from '../../components/BreadCrumbNav'

const SellerAccountRequirement = (props) => {

    const form_jsx = (
        <Fragment>
            <Row className="mycol mt-lg-5">
                <h3>Description</h3>
            </Row>
            <Row className="mt-lg-3" style={{ borderBottom: "1px solid black" }}>
            </Row>
            <Row className="mycol">
                <Col className="mycol">
                    <Form.Label>Briefly Describe your assignment</Form.Label>
                </Col>
                <Col className="mycol">
                    <Form.Control as="textarea" />
                </Col>
            </Row>
            <Row className="mycol">
                <h3>Upload</h3>
            </Row>
            <Row className="mycol">
                <Form.Group>
                    <Form.Control as="textarea" />
                </Form.Group>
            </Row>
            <Row className="mycol">
                <h3>Frequently asked question</h3>
            </Row>
            <Row className="mycol">
                <h6>Add question &amp; Answers for your buyer</h6>
            </Row>
            <Row className="mycol">
                <Form.Group>
                    <Form.Control as="textarea" />
                </Form.Group>
            </Row>
            <Row>
                <Col>
                    <Button onClick={e => {
                        props.history.push("/seller/create/requirement")
                    }} variant="">Back</Button>
                </Col>
                <Col>
                    <Button as={Link} to={"/seller/create/verify"} variant="">Save &amp; Continue</Button>
                </Col>
            </Row>
        </Fragment>
    )

    return (
        <Fragment>
            <Container>
                <Row>
                    <Col className="mycol">
                        <BreadCrumbNav
                            account={false}
                            summary={true}
                        />
                    </Col>
                </Row>
                {form_jsx}
            </Container>
        </Fragment>
    )
}

export default connect()(SellerAccountRequirement)
