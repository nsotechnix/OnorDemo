import React, { useRef } from "react";
import "./Footer.css";
import { Row, Col, Container, Button, FormGroup } from "react-bootstrap";
import { BsArrowUpCircle } from "react-icons/bs";
import { BiVideo } from "react-icons/bi";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import SideColorImage from "../svg/triangle.svg";
import emailjs from "@emailjs/browser";
import { useAlert } from "react-alert";
import { positions, Provider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";

const options = {
  timeout: 5000,
  position: positions.BOTTOM_CENTER,
};

function MyVerticallyCenteredModal(props) {
  const form = useRef();
  const alert = useAlert();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_z4mr28n",
        "template_bb5xf17",
        form.current,
        "user_9YPsl5f4o0fi44Sz1zfKy"
      )
      .then(
        () => {
          alert.success("Success!");
        },
        (error) => {
          console.log(error.text);
        }
      );
    form.current.reset(form);
    return;
  };

  return (
    <div className="container">
      <Modal
        Modal
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
          <form className="mt-4" ref={form} onSubmit={sendEmail}>
            <Row className="mb-3">
              <Col md={2}>
                <h5 style={{ fontFamily: "Inter" }}>Name</h5>
              </Col>
              <Col md={10}>
                <input
                  style={{
                    border: "1px solid #EA5B28",
                    borderRadius: "0px",
                    fontFamily: "Inter",
                    padding: "5px",
                  }}
                  placeholder="Enter your name..."
                  type="text"
                  name="from_name"
                  required
                />
              </Col>
            </Row>

            <Row className="mb-3">
              <Col md={2}>
                <h5 style={{ fontFamily: "Inter" }}>Email</h5>
              </Col>
              <Col md={10}>
                <input
                  style={{
                    border: "1px solid #EA5B28",
                    borderRadius: "0px",
                    fontFamily: "Inter",
                    padding: "5px",
                  }}
                  placeholder="Enter your email..."
                  type="email"
                  name="email"
                  required
                />
              </Col>
            </Row>

            <Row>
              <Col md={12}>
                <h5 className="mb-3" style={{ fontFamily: "Inter" }}>
                  What are your makeup goals?
                </h5>
                <textarea
                  style={{
                    border: "1px solid #EA5B28",
                    borderRadius: "0px",
                    fontFamily: "Inter",
                    padding: "5px",
                    width: "100%",
                  }}
                  rows="4"
                  placeholder="Tell us about the look you want to accomplish, challenge you have or reason you want a makeup evaluation"
                  name="message"
                  required
                />
              </Col>
            </Row>

            <Row>
              <Col md={12}>
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
              <Col md={12}>
                <div className="mb-3" style={{ fontFamily: "Inter" }}>
                  <input type="checkbox" />

                  <span> I accept the the </span>
                  <Link to={"/terms"}>Terms and Conditions</Link>
                  <span> of Onor Services LLC.</span>
                </div>
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
                    padding: "5px 40px",
                    marginRight: "5px",
                    fontFamily: "Inter",
                  }}
                >
                  Close
                </Button>
                <Button
                  type="submit"
                  style={{
                    backgroundColor: "#000000",
                    border: "none",
                    borderRadius: "0px",
                    padding: "5px 40px",
                    fontFamily: "Inter",
                  }}
                >
                  Submit
                </Button>
              </Col>
            </Row>
          </form>
        </Modal.Body>
      </Modal>
    </div>
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
                  marginLeft: "5px",
                }}
              />
            </button>
            <button className="button-black" onClick={() => setModalShow(true)}>
              Upload your photo
              <BsArrowUpCircle
                style={{
                  backgroundColor: "transparent",
                  fontSize: "20px",
                  marginLeft: "5px",
                }}
              />
            </button>
            <Provider template={AlertTemplate} {...options}>
              <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
              />
            </Provider>
          </Col>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
