import React from "react";
import { Container, Tabs, Tab, Row, Col, Card } from "react-bootstrap";
import "./Tips.scss";
import { HiLightBulb } from "react-icons/hi";

function Tips() {
  return (
    <>
      <Container className="beauty_container" fluid>
        <Container>
          <Row className="bg-transparent tips-header-text">
            <Col md={12} className="mt-3 bg-transparent">
              <h2 className="font-weight-bolder bg-transparent">
                Beauty Tips & Hacks
              </h2>
            </Col>
          </Row>

          <Row className="bg-transparent">
            <Tabs defaultActiveKey="makeup" className="bg-transparent tab">
              <Tab
                eventKey="makeup"
                title="Makeup Hacks"
                style={{
                  backgroundColor: "rgba($color: #F15A25, $alpha: 0.04)",
                }}
              >
                <Row className="bg-transparent card_size">
                  <Col md={4} lg={4} xs={12} className="px-6">
                    <Card className="border-0 card_style bg-transparent">
                      <Card.Title
                        className="bg-transparent"
                        style={{ textAlign: "center" }}
                      >
                        Ran out of Blush?
                      </Card.Title>

                      <Card.Body xs={12} className={"card_body "}>
                        <Card.Text
                          style={{
                            color: "gray",
                            marginLeft: "40px",
                            marginBottom: "0px",
                          }}
                        >
                          CIDESCO <HiLightBulb className={"card_bulb"} />
                        </Card.Text>
                        <Card.Text style={{ color: "gray" }}>
                          8+ years experience
                        </Card.Text>
                        <Card.Text>134 Sessions on Onor World</Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col md={4} lg={4} xs={12} className="px-6">
                    <Card className="border-0 card_style bg-transparent">
                      <Card.Title
                        className="bg-transparent"
                        style={{ textAlign: "center" }}
                      >
                        Ran out of Blush?
                      </Card.Title>

                      <Card.Body className={"card_body"}>
                        <Card.Text
                          style={{
                            color: "gray",
                            marginLeft: "40px",
                            marginBottom: "0px",
                          }}
                        >
                          CIDESCO <HiLightBulb className={"card_bulb"} />
                        </Card.Text>
                        <Card.Text style={{ color: "gray" }}>
                          8+ years experience
                        </Card.Text>
                        <Card.Text>134 Sessions on Onor World</Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col md={4} lg={4} xs={12} className="px-6">
                    <Card className="border-0 card_style bg-transparent">
                      <Card.Title
                        className="bg-transparent"
                        style={{ textAlign: "center" }}
                      >
                        Ran out of Blush?
                      </Card.Title>

                      <Card.Body className={"card_body"}>
                        <Card.Text
                          style={{
                            color: "gray",
                            marginLeft: "40px",
                            marginBottom: "0px",
                          }}
                        >
                          CIDESCO <HiLightBulb className={"card_bulb"} />
                        </Card.Text>
                        <Card.Text style={{ color: "gray" }}>
                          8+ years experience
                        </Card.Text>
                        <Card.Text>134 Sessions on Onor World</Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col md={4} lg={4} xs={12} className="px-6">
                    <Card className="border-0 card_style bg-transparent">
                      <Card.Title
                        className="bg-transparent"
                        style={{ textAlign: "center" }}
                      >
                        Ran out of Blush?
                      </Card.Title>

                      <Card.Body className={"card_body"}>
                        <Card.Text
                          style={{
                            color: "gray",
                            marginLeft: "40px",
                            marginBottom: "0px",
                          }}
                        >
                          CIDESCO <HiLightBulb className={"card_bulb"} />
                        </Card.Text>
                        <Card.Text style={{ color: "gray" }}>
                          8+ years experience
                        </Card.Text>
                        <Card.Text>134 Sessions on Onor World</Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col md={4} lg={4} xs={12} className="px-6">
                    <Card className="border-0 card_style bg-transparent">
                      <Card.Title
                        className="bg-transparent"
                        style={{ textAlign: "center" }}
                      >
                        Ran out of Blush?
                      </Card.Title>

                      <Card.Body className={"card_body"}>
                        <Card.Text
                          style={{
                            color: "gray",
                            marginLeft: "40px",
                            marginBottom: "0px",
                          }}
                        >
                          CIDESCO <HiLightBulb className={"card_bulb"} />
                        </Card.Text>
                        <Card.Text style={{ color: "gray" }}>
                          8+ years experience
                        </Card.Text>
                        <Card.Text>134 Sessions on Onor World</Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
              </Tab>

              <Tab eventKey="brushes" title="Brushes you must have"></Tab>

              <Tab eventKey="eye" title="Eye Makeup Hacks"></Tab>
            </Tabs>
          </Row>
        </Container>
      </Container>
    </>
  );
}

export default Tips;
