import React from "react";
import "./Footer.css";
import { Row, Col, Container, Button } from "react-bootstrap";
import { BsArrowUpCircle } from "react-icons/bs";
import { BiVideo } from "react-icons/bi";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import SideColorImage from "../svg/triangle.svg";

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body className="px-3 py-2">
        <h5 style={{ fontFamily: "Inter" }}>
          {" "}
          <img src={SideColorImage} /> Photo Submission for Facial Analysis
        </h5>
        <Form className="mt-4">
          <Row>
            <Col md={2}>
              <h5 style={{ fontFamily: "Inter" }}>Name</h5>
            </Col>
            <Col md={10}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control
                  type="text"
                  style={{
                    border: "1px solid #EA5B28",
                    borderRadius: "0px",
                    fontFamily: "Inter",
                  }}
                  placeholder="Enter name"
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col md={2}>
              <h5 style={{ fontFamily: "Inter" }}>Email</h5>
            </Col>
            <Col md={10}>
              <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control
                    type="email"
                    style={{
                      border: "1px solid #EA5B28",
                      borderRadius: "0px",
                      fontFamily: "Inter",
                    }}
                    placeholder="Enter email"
                  />
                </Form.Group>
              </Form>
            </Col>
          </Row>
          <Row>
            <Col md={2}>
              <h5 style={{ fontFamily: "Inter" }}>Phone</h5>
            </Col>
            <Col md={10}>
              <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control
                    type="text"
                    style={{
                      border: "1px solid #EA5B28",
                      borderRadius: "0px",
                      fontFamily: "Inter",
                    }}
                    placeholder="Enter phone"
                  />
                </Form.Group>
              </Form>
            </Col>
          </Row>
          <Row>
            <Col md={2}></Col>
            <Col md={10}>
              <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label style={{ fontFamily: "Inter" }}>
                    What are your makeup goals?
                  </Form.Label>
                  <Form.Control
                    as="textarea"
                    style={{
                      border: "1px solid #EA5B28",
                      borderRadius: "0px",
                      fontFamily: "Inter",
                    }}
                    rows="4"
                    placeholder="Tell us about the look you want to accomplish, challenge you have or reason you want a makeup evaluation"
                  />
                </Form.Group>
              </Form>
            </Col>
          </Row>
          <Row>
            <Col md={2}></Col>
            <Col md={10}>
              <p style={{ fontFamily: "Inter" }}>
                Submit three pics of your face
              </p>
              <Row>
                <Col md="4">
                  <div
                    style={{
                      height: "100px",
                      padding: "5px 5px",
                      marginBottom: "5px",
                      width: "100%",
                      border: "1px solid red",
                    }}
                  ></div>
                </Col>
                <Col md="4">
                  <div
                    style={{
                      height: "100px",
                      padding: "5px 5px",
                      marginBottom: "5px",
                      width: "100%",
                      border: "1px solid red",
                    }}
                  ></div>
                </Col>
                <Col md="4">
                  <div
                    style={{
                      height: "100px",
                      padding: "5px 5px",
                      marginBottom: "5px",
                      width: "100%",
                      border: "1px solid red",
                    }}
                  ></div>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row>
            <Col md={2}></Col>
            <Col md={10}>
              <Form.Group
                className="mb-3"
                style={{ fontFamily: "Inter" }}
                controlId="formBasicCheckbox"
              >
                <Form.Check
                  type="checkbox"
                  label={
                    <div>
                      <span>I accept the the </span>
                      <Link to={"/terms"}>Terms and Conditions</Link>
                      <span> of Onor Services LLC.</span>
                    </div>
                  }
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col className="text-right">
              <Button
                onClick={props.onHide}
                variant="secondary"
                style={{
                  backgroundColor: "red",
                  border: "none",
                  borderRadius: "0px",
                  padding: "10px 40px",
                  marginRight: "10px",
                  fontFamily: "Inter",
                }}
              >
                Close
              </Button>
              <Button
                style={{
                  backgroundColor: "#000",
                  border: "none",
                  borderRadius: "0px",
                  padding: "10px 40px",
                  fontFamily: "Inter",
                }}
              >
                Submit
              </Button>
            </Col>
          </Row>
        </Form>
      </Modal.Body>
    </Modal>
  );
}

function Footer() {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <Container fluid>
      <Row>
        <Col className="footer_parent" md={12}>
          <h1 className="footer_text_heading_1">
            What’re you waiting for? Sit back, relax & try now!
          </h1>
          <Col className="btn_class_footer">
            <button
              onClick={(e) =>
                window.open(
                  "https://calendly.com/onorservices-calendar/consult-a-makeup-maestro",
                  "_blank"
                )
              }
              className="button-orange"
            >
              Book a free live session
              <BiVideo
                style={{
                  backgroundColor: "transparent",
                  fontSize: "25px",
                  marginLeft: "10px",
                }}
              />
            </button>
            <button className="button-black" onClick={() => setModalShow(true)}>
              Upload your photo
              <BsArrowUpCircle
                style={{
                  backgroundColor: "transparent",
                  fontSize: "20px",
                  marginLeft: "10px",
                }}
              />
            </button>
            <MyVerticallyCenteredModal
              show={modalShow}
              onHide={() => setModalShow(false)}
            />
          </Col>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
