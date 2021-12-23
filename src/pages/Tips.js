import React from "react";
import { Container, Tabs, Tab, Row, Col, Card } from "react-bootstrap";
import "./Tips.scss";
import { FaCloudsmith } from 'react-icons/fa';
import { HiLightBulb } from "react-icons/hi";
import { BsArrowRight } from "react-icons/bs";

function Tips() {
  return (
    <div className="beauty_container" fluid>
      <Container style={{ paddingBottom: '78px', paddingTop: '58px' }}>
        <h2 style={{ marginBottom: '30px', fontFamily: 'Inter' }} className="font-weight-bolder ">
          Beauty Tips & Hacks
        </h2>

        <Tabs defaultActiveKey="makeup">
          <Tab tabClassName="mytabs" style={{ border: 'none', }}
            eventKey="makeup"
            title="Makeup Hacks"
          >
            <Row className=" card_size" style={{ marginTop: '40px' }}>
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
          </Tab>

          <Tab tabClassName="mytabs" eventKey="brushes" title="Brushes you must have">
            <Row className=" card_size" style={{ marginTop: '40px' }}>
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
          </Tab>

          <Tab tabClassName="mytabs" eventKey="eye" title="Eye Makeup Hacks">
            <Row className=" card_size" style={{ marginTop: '40px' }}>
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
          </Tab>
        </Tabs>
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
