import React, { useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import "./Tips.scss";
import { FaCloudsmith } from 'react-icons/fa';
import { HiLightBulb } from "react-icons/hi";
import { BsArrowRight } from "react-icons/bs";

function Tips() {
  const [state, setState] = useState(1);
  function makeup() {
    setState(1);
  }

  function brushes() {
    setState(2);
  }

  function eye() {
    setState(3);
  }
  return (
    <div className="beauty_container" fluid>
      <Container style={{ paddingBottom: '78px', paddingTop: '58px' }}>
        <h2 style={{ marginBottom: '30px', fontFamily: 'Inter' }} className="font-weight-bolder ">
          Beauty Tips & Hacks
        </h2>

        <Row>
          <Col className="text-center text-sm-left">
            <button className="btn-1 active" autoFocus onClick={makeup} style={{ fontFamily: 'Inter' }}>Make up Hacks</button>
            <button className="btn-2" onClick={brushes} style={{ fontFamily: 'Inter' }}>Brushes you must have</button>
            <button className="btn-3" onClick={eye} style={{ fontFamily: 'Inter' }}>Eye makeup hacks</button>
          </Col>
        </Row>
        {state === 1 ? (
          <Row className="card_size" style={{ marginTop: '40px' }}>
            <Col md={4} lg={4} xs={12} className="mb-5 text-center">
              <h5 classname="text-center" style={{ fontFamily: 'Inter' }}>Ran out of Blush?</h5>
              <Card className="border-0 mt-4">
                <Card.Body xs={12} className={"card_body "} style={{ borderRadius: '8px' }}>
                  <HiLightBulb className={"card_bulb"} />
                  <Card.Text className="font-italic" style={{ fontWeight: '700' }}>
                    CIDESCO1
                  </Card.Text>
                  <Card.Text style={{ color: "gray" }}>
                    Just use any tinted lip balm instead. Its cheaper, and gives a natural glow to cheeks plus has a natural Blush Color
                  </Card.Text>
                  <Card.Text>Share <FaCloudsmith /></Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col md={4} lg={4} xs={12} className="mb-5 text-center">
              <h5 classname="text-center" style={{ fontFamily: 'Inter' }}>Ran out of Blush?</h5>
              <Card className="border-0 mt-4">
                <Card.Body xs={12} className={"card_body "} style={{ borderRadius: '8px' }}>
                  <HiLightBulb className={"card_bulb"} />
                  <Card.Text className="font-italic" style={{ fontWeight: '700' }}>
                    CIDESCO
                  </Card.Text>
                  <Card.Text style={{ color: "gray" }}>
                    Just use any tinted lip balm instead. Its cheaper, and gives a natural glow to cheeks plus has a natural Blush Color
                  </Card.Text>
                  <Card.Text>Share <FaCloudsmith /></Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col md={4} lg={4} xs={12} className="mb-5 text-center">
              <h5 classname="text-center" style={{ fontFamily: 'Inter' }}>Ran out of Blush?</h5>
              <Card className="border-0 mt-4">
                <Card.Body xs={12} className={"card_body "} style={{ borderRadius: '8px' }}>
                  <HiLightBulb className={"card_bulb"} />
                  <Card.Text className="font-italic" style={{ fontWeight: '700' }}>
                    CIDESCO
                  </Card.Text>
                  <Card.Text style={{ color: "gray" }}>
                    Just use any tinted lip balm instead. Its cheaper, and gives a natural glow to cheeks plus has a natural Blush Color
                  </Card.Text>
                  <Card.Text>Share <FaCloudsmith /></Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col md={4} lg={4} xs={12} className="mb-5 text-center">
              <h5 classname="text-center" style={{ fontFamily: 'Inter' }}>Ran out of Blush?</h5>
              <Card className="border-0 mt-4">
                <Card.Body xs={12} className={"card_body "} style={{ borderRadius: '8px' }}>
                  <HiLightBulb className={"card_bulb"} />
                  <Card.Text className="font-italic" style={{ fontWeight: '700' }}>
                    CIDESCO
                  </Card.Text>
                  <Card.Text style={{ color: "gray" }}>
                    Just use any tinted lip balm instead. Its cheaper, and gives a natural glow to cheeks plus has a natural Blush Color
                  </Card.Text>
                  <Card.Text>Share <FaCloudsmith /></Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col md={4} lg={4} xs={12} className="mb-5 text-center">
              <h5 classname="text-center" style={{ fontFamily: 'Inter' }}>Ran out of Blush?</h5>
              <Card className="border-0 mt-4">
                <Card.Body xs={12} className={"card_body "} style={{ borderRadius: '8px' }}>
                  <HiLightBulb className={"card_bulb"} />
                  <Card.Text className="font-italic" style={{ fontWeight: '700' }}>
                    CIDESCO
                  </Card.Text>
                  <Card.Text style={{ color: "gray" }}>
                    Just use any tinted lip balm instead. Its cheaper, and gives a natural glow to cheeks plus has a natural Blush Color
                  </Card.Text>
                  <Card.Text>Share <FaCloudsmith /></Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        ) : state === 2 ? (
          < Row className=" card_size" style={{ marginTop: '40px' }}>
            <Col md={4} lg={4} xs={12} className="mb-5 text-center">
              <h5 classname="text-center" style={{ fontFamily: 'Inter' }}>Ran out of Blush?</h5>
              <Card className="border-0 mt-4">
                <Card.Body xs={12} className={"card_body "} style={{ borderRadius: '8px' }}>
                  <HiLightBulb className={"card_bulb"} />
                  <Card.Text className="font-italic" style={{ fontWeight: '700' }}>
                    CIDESCO2
                  </Card.Text>
                  <Card.Text style={{ color: "gray" }}>
                    Just use any tinted lip balm instead. Its cheaper, and gives a natural glow to cheeks plus has a natural Blush Color
                  </Card.Text>
                  <Card.Text>Share <FaCloudsmith /></Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col md={4} lg={4} xs={12} className="mb-5 text-center">
              <h5 classname="text-center" style={{ fontFamily: 'Inter' }}>Ran out of Blush?</h5>
              <Card className="border-0 mt-4">
                <Card.Body xs={12} className={"card_body "} style={{ borderRadius: '8px' }}>
                  <HiLightBulb className={"card_bulb"} />
                  <Card.Text className="font-italic" style={{ fontWeight: '700' }}>
                    CIDESCO
                  </Card.Text>
                  <Card.Text style={{ color: "gray" }}>
                    Just use any tinted lip balm instead. Its cheaper, and gives a natural glow to cheeks plus has a natural Blush Color
                  </Card.Text>
                  <Card.Text>Share <FaCloudsmith /></Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col md={4} lg={4} xs={12} className="mb-5 text-center">
              <h5 classname="text-center" style={{ fontFamily: 'Inter' }}>Ran out of Blush?</h5>
              <Card className="border-0 mt-4">
                <Card.Body xs={12} className={"card_body "} style={{ borderRadius: '8px' }}>
                  <HiLightBulb className={"card_bulb"} />
                  <Card.Text className="font-italic" style={{ fontWeight: '700' }}>
                    CIDESCO
                  </Card.Text>
                  <Card.Text style={{ color: "gray" }}>
                    Just use any tinted lip balm instead. Its cheaper, and gives a natural glow to cheeks plus has a natural Blush Color
                  </Card.Text>
                  <Card.Text>Share <FaCloudsmith /></Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col md={4} lg={4} xs={12} className="mb-5 text-center">
              <h5 classname="text-center" style={{ fontFamily: 'Inter' }}>Ran out of Blush?</h5>
              <Card className="border-0 mt-4">
                <Card.Body xs={12} className={"card_body "} style={{ borderRadius: '8px' }}>
                  <HiLightBulb className={"card_bulb"} />
                  <Card.Text className="font-italic" style={{ fontWeight: '700' }}>
                    CIDESCO
                  </Card.Text>
                  <Card.Text style={{ color: "gray" }}>
                    Just use any tinted lip balm instead. Its cheaper, and gives a natural glow to cheeks plus has a natural Blush Color
                  </Card.Text>
                  <Card.Text>Share <FaCloudsmith /></Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col md={4} lg={4} xs={12} className="mb-5 text-center">
              <h5 classname="text-center" style={{ fontFamily: 'Inter' }}>Ran out of Blush?</h5>
              <Card className="border-0 mt-4">
                <Card.Body xs={12} className={"card_body "} style={{ borderRadius: '8px' }}>
                  <HiLightBulb className={"card_bulb"} />
                  <Card.Text className="font-italic" style={{ fontWeight: '700' }}>
                    CIDESCO
                  </Card.Text>
                  <Card.Text style={{ color: "gray" }}>
                    Just use any tinted lip balm instead. Its cheaper, and gives a natural glow to cheeks plus has a natural Blush Color
                  </Card.Text>
                  <Card.Text>Share <FaCloudsmith /></Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        ) : (
          < Row className=" card_size" style={{ marginTop: '40px' }}>
            <Col md={4} lg={4} xs={12} className="mb-5 text-center">
              <h5 classname="text-center" style={{ fontFamily: 'Inter' }}>Ran out of Blush?</h5>
              <Card className="border-0 mt-4">
                <Card.Body xs={12} className={"card_body "} style={{ borderRadius: '8px' }}>
                  <HiLightBulb className={"card_bulb"} />
                  <Card.Text className="font-italic" style={{ fontWeight: '700' }}>
                    CIDESCO3
                  </Card.Text>
                  <Card.Text style={{ color: "gray" }}>
                    Just use any tinted lip balm instead. Its cheaper, and gives a natural glow to cheeks plus has a natural Blush Color
                  </Card.Text>
                  <Card.Text>Share <FaCloudsmith /></Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col md={4} lg={4} xs={12} className="mb-5 text-center">
              <h5 classname="text-center" style={{ fontFamily: 'Inter' }}>Ran out of Blush?</h5>
              <Card className="border-0 mt-4">
                <Card.Body xs={12} className={"card_body "} style={{ borderRadius: '8px' }}>
                  <HiLightBulb className={"card_bulb"} />
                  <Card.Text className="font-italic" style={{ fontWeight: '700' }}>
                    CIDESCO
                  </Card.Text>
                  <Card.Text style={{ color: "gray" }}>
                    Just use any tinted lip balm instead. Its cheaper, and gives a natural glow to cheeks plus has a natural Blush Color
                  </Card.Text>
                  <Card.Text>Share <FaCloudsmith /></Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col md={4} lg={4} xs={12} className="mb-5 text-center">
              <h5 classname="text-center" style={{ fontFamily: 'Inter' }}>Ran out of Blush?</h5>
              <Card className="border-0 mt-4">
                <Card.Body xs={12} className={"card_body "} style={{ borderRadius: '8px' }}>
                  <HiLightBulb className={"card_bulb"} />
                  <Card.Text className="font-italic" style={{ fontWeight: '700' }}>
                    CIDESCO
                  </Card.Text>
                  <Card.Text style={{ color: "gray" }}>
                    Just use any tinted lip balm instead. Its cheaper, and gives a natural glow to cheeks plus has a natural Blush Color
                  </Card.Text>
                  <Card.Text>Share <FaCloudsmith /></Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col md={4} lg={4} xs={12} className="mb-5 text-center">
              <h5 classname="text-center" style={{ fontFamily: 'Inter' }}>Ran out of Blush?</h5>
              <Card className="border-0 mt-4">
                <Card.Body xs={12} className={"card_body "} style={{ borderRadius: '8px' }}>
                  <HiLightBulb className={"card_bulb"} />
                  <Card.Text className="font-italic" style={{ fontWeight: '700' }}>
                    CIDESCO
                  </Card.Text>
                  <Card.Text style={{ color: "gray" }}>
                    Just use any tinted lip balm instead. Its cheaper, and gives a natural glow to cheeks plus has a natural Blush Color
                  </Card.Text>
                  <Card.Text>Share <FaCloudsmith /></Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col md={4} lg={4} xs={12} className="mb-5 text-center">
              <h5 classname="text-center" style={{ fontFamily: 'Inter' }}>Ran out of Blush?</h5>
              <Card className="border-0 mt-4">
                <Card.Body xs={12} className={"card_body "} style={{ borderRadius: '8px' }}>
                  <HiLightBulb className={"card_bulb"} />
                  <Card.Text className="font-italic" style={{ fontWeight: '700' }}>
                    CIDESCO
                  </Card.Text>
                  <Card.Text style={{ color: "gray" }}>
                    Just use any tinted lip balm instead. Its cheaper, and gives a natural glow to cheeks plus has a natural Blush Color
                  </Card.Text>
                  <Card.Text>Share <FaCloudsmith /></Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        )}




        <p style={{ fontSize: '80px', fontFamily: 'Clash Display', marginTop: '60px' }} className="d-none d-lg-block">Learn and share plenty of<br /> other hacks and tips</p>
        <button
          onClick={(e) =>
            window.open(
              "https://calendly.com/onorservices-calendar/consult-a-makeup-maestro",
              "_blank"
            )
          }
          className={
            "mt-2 mt-lg-5 mb-0 mb-lg-3 btn btn-dark makeup-upload-button-tips"
          }
          style={{ fontSize: "18px" }}
        >
          All Beauty Tips and Hacks {" "}
          <BsArrowRight
            style={{ backgroundColor: "transparent", fontSize: "20px" }}
          />
        </button>
      </Container>
    </div >
  );
}

export default Tips;
