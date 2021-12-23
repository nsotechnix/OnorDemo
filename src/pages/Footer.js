import React from "react";
import "./Footer.css";
import { Row, Col, Container } from "react-bootstrap";
import { BsArrowUpCircle } from "react-icons/bs";
import { BiVideo } from "react-icons/bi";

function Footer() {
  return (
    <Container fluid>
      <Row>
        <Col className="footer_parent" md={12}>
          <h1 className="footer_text_heading_1">
            Lets glow your skin and give you perfect make up
          </h1>
          <Col className="btn_class_footer">
            <button className="button-orange">
              Book a free live session
              <BiVideo
                style={{
                  backgroundColor: "transparent",
                  fontSize: "25px",
                  marginLeft: "10px",
                }}
              />
            </button>
            <button className="button-black">
              Upload your photo
              <BsArrowUpCircle
                style={{
                  backgroundColor: "transparent",
                  fontSize: "20px",
                  marginLeft: "10px",
                }}
              />
            </button>
          </Col>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
