import React from "react";
import { HiLightBulb } from "react-icons/hi";
import { IoSettingsSharp, IoGlobeSharp, IoClipboard } from "react-icons/io5";
import { AiFillDollarCircle } from "react-icons/ai";
import { RiTimerFill } from "react-icons/ri";
import ConsImg from "../images/choose_onor.png";
import "./Cons.css";
import { Container, Row, Col } from "react-bootstrap";

function Cons() {
  return (
    <Container>
      <Row style={{ marginTop: "140px" }}>
        <Col lg={12}>
          <h1 className="why-onor-header" style={{ fontFamily: "Inter" }}>
            Few more reasons to get you started
          </h1>
        </Col>
        <Col lg={6}>
          <Row className="mt-4 align-items-center">
            <Col xs={1}>
              <AiFillDollarCircle className="why-onor-icon" />
            </Col>
            <Col xs={11} className="why-onor-text">
              {" "}
              Click Connect to an expert – instant solutions to your questions
            </Col>
          </Row>
          <Row className="mt-3">
            <Col xs={1}>
              <HiLightBulb className="why-onor-icon" />{" "}
            </Col>
            <Col xs={11} className="why-onor-text">
              Best Experts trained to provide a superlative experience
            </Col>
          </Row>
          <Row className="mt-3">
            <Col xs={1}>
              <IoClipboard className="why-onor-icon" />{" "}
            </Col>
            <Col xs={11} className="why-onor-text">
              60% economical than a salon & delivers better results
            </Col>
          </Row>
          <Row className="mt-3">
            <Col xs={1}>
              <IoSettingsSharp className="why-onor-icon" />{" "}
            </Col>
            <Col xs={11} className="why-onor-text">
              Round-the-clock service at your convenience
            </Col>
          </Row>
          <Row className="mt-3">
            <Col xs={1}>
              <IoGlobeSharp className="why-onor-icon" />{" "}
            </Col>
            <Col xs={11} className="why-onor-text">
              Each session customized to what you want
            </Col>
          </Row>
        </Col>
        <Col lg={6} className="mt-5 mt-sm-0">
          <img src={ConsImg} className="why-onor-img" alt="demo" />
        </Col>
      </Row>
    </Container>
  );
}

export default Cons;
