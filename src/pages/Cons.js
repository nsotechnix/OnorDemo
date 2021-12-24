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
            Why you should choose onorworld
          </h1>
        </Col>
        <Col lg={6}>
          <Row className="mt-5 align-items-center">
            <Col xs={2}>
              <RiTimerFill className="why-onor-icon" />
            </Col>
            <Col xs={10} className="why-onor-text">
              {" "}
              Instant makeup
            </Col>
          </Row>
          <Row className="mt-3">
            <Col xs={2}>
              <HiLightBulb className="why-onor-icon" />{" "}
            </Col>
            <Col xs={10} className="why-onor-text">
              Instant beauty tips
            </Col>
          </Row>
          <Row className="mt-3">
            <Col xs={2}>
              <IoClipboard className="why-onor-icon" />{" "}
            </Col>
            <Col xs={10} className="why-onor-text">
              Reviews and Recommendations for products
            </Col>
          </Row>
          <Row className="mt-3">
            <Col xs={2}>
              <IoSettingsSharp className="why-onor-icon" />{" "}
            </Col>
            <Col xs={10} className="why-onor-text">
              Expert and AI based suggestions for your skin color
            </Col>
          </Row>
          <Row className="mt-3">
            <Col xs={2}>
              <IoGlobeSharp className="why-onor-icon" />{" "}
            </Col>
            <Col xs={10} className="why-onor-text">
              Do it from anywhere
            </Col>
          </Row>
          <Row className="mt-3">
            <Col xs={2}>
              <AiFillDollarCircle className="why-onor-icon" />{" "}
            </Col>
            <Col xs={10} className="why-onor-text">
              Very nominal or lower cost - less than
              <span style={{ color: "#EA5B28" }}>50-60%</span> from regular
              saloon
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
