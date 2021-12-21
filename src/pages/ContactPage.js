import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import "./AuthPage.scss";
import { connect } from "react-redux";
import ProgressBar from "../components/ProgressBar";

const ContactPage = (props) => {

    const contact_jsx = (
        <Fragment>
            <Container className={'mt-5'}>
                <h3>Contact</h3>
                <Row className={"d-flex justify-content-center"}>
                    <Col sm={12}>
                        <center>
                            <h3>ONOR - A New System</h3>
                            <p>Contact: (240) 883-7445</p>
                            <p>Email: info@onor.world</p>
                            <p>Arlington, VA , USA</p>
                        </center>
                    </Col>
                </Row>
            </Container>
        </Fragment>
    );

    return (
        <Fragment>
            {contact_jsx}
        </Fragment>
    );
};

export default connect()(ContactPage);
