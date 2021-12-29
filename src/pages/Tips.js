import React, { useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import "./Tips.scss";
import { FaCloudsmith } from "react-icons/fa";
import { HiLightBulb } from "react-icons/hi";
import { BsArrowRight } from "react-icons/bs";
import { event } from "react-ga";

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
      <Container style={{ paddingBottom: "78px", paddingTop: "58px" }}>
        <h2
          style={{ marginBottom: "30px", fontFamily: "Inter" }}
          className="font-weight-bolder "
        >
          Beauty Tips & Hacks
        </h2>

        <Row>
          <Col className="text-center text-sm-left">
            {state == 1 ? (
              <button
                className="btn-1-active"
                onClick={makeup}
                style={{ fontFamily: "Inter" }}
              >
                Make up Hacks
              </button>
            ) : (
              <button
                className="btn-1"
                onClick={makeup}
                style={{ fontFamily: "Inter" }}
              >
                Make up Hacks
              </button>
            )}
            {state == 2 ? (
              <button
                className="btn-2-active"
                onClick={brushes}
                style={{ fontFamily: "Inter" }}
              >
                Brushes you must have
              </button>
            ) : (
              <button
                className="btn-2"
                onClick={brushes}
                style={{ fontFamily: "Inter" }}
              >
                Brushes you must have
              </button>
            )}
            {state == 3 ? (
              <button
                className="btn-3-active"
                onClick={eye}
                style={{ fontFamily: "Inter" }}
              >
                Eye makeup hacks
              </button>
            ) : (
              <button
                className="btn-3"
                onClick={eye}
                style={{ fontFamily: "Inter" }}
              >
                Eye makeup hacks
              </button>
            )}
          </Col>
        </Row>
        {state === 1 ? (
          <Row className="card_size" style={{ marginTop: "40px" }}>
            <Col md={4} lg={4} xs={12} className="mb-5 text-center">
              <h5 classname="text-center" style={{ fontFamily: "Inter" }}>
                Lip Balm Hack
              </h5>
              <Card className="border-0 mt-4">
                <Card.Body
                  xs={12}
                  className={"card_body "}
                  style={{ borderRadius: "8px" }}
                >
                  <HiLightBulb className={"card_bulb"} />
                  <Card.Text
                    className="font-italic"
                    style={{ fontWeight: "700" }}
                  >
                    Ran out of Blush?
                  </Card.Text>
                  <Card.Text style={{ color: "gray" }}>
                    Just use any tinted lip balm instead. Its cheaper, and gives
                    a natural glow to cheeks plus has a natural Blush Color
                  </Card.Text>
                  <Card.Text>
                    Share <FaCloudsmith />
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col md={4} lg={4} xs={12} className="mb-5 text-center">
              <h5 classname="text-center" style={{ fontFamily: "Inter" }}>
                Colored Eyeliner Hack
              </h5>
              <Card className="border-0 mt-4">
                <Card.Body
                  xs={12}
                  className={"card_body "}
                  style={{ borderRadius: "8px" }}
                >
                  <HiLightBulb className={"card_bulb"} />
                  <Card.Text
                    className="font-italic"
                    style={{ fontWeight: "700" }}
                  >
                    Dont't have color mascara?
                  </Card.Text>
                  <Card.Text style={{ color: "gray" }}>
                    Use a solar eyeliner instead. Just make sure you use a clean
                    mascara blush to apply.
                  </Card.Text>
                  <Card.Text>
                    Share <FaCloudsmith />
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col md={4} lg={4} xs={12} className="mb-5 text-center">
              <h5 classname="text-center" style={{ fontFamily: "Inter" }}>
                Concealer Hack
              </h5>
              <Card className="border-0 mt-4">
                <Card.Body
                  xs={12}
                  className={"card_body "}
                  style={{ borderRadius: "8px" }}
                >
                  <HiLightBulb className={"card_bulb"} />
                  <Card.Text
                    className="font-italic"
                    style={{ fontWeight: "700" }}
                  >
                    Messed up while applying lipstick?
                  </Card.Text>
                  <Card.Text style={{ color: "gray" }}>
                    Just dab on a concealer of your skin tone. And you are good
                    to go!
                  </Card.Text>
                  {""}
                  <br />
                  {""}
                  <Card.Text>
                    Share <FaCloudsmith />
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col md={4} lg={4} xs={12} className="mb-5 text-center">
              <h5 classname="text-center" style={{ fontFamily: "Inter" }}>
                Foundation Hack
              </h5>
              <Card className="border-0 mt-4">
                <Card.Body
                  xs={12}
                  className={"card_body "}
                  style={{ borderRadius: "8px" }}
                >
                  <HiLightBulb className={"card_bulb"} />
                  <Card.Text
                    className="font-italic"
                    style={{ fontWeight: "700" }}
                  >
                    Ran out of dewy foundation?
                  </Card.Text>
                  <Card.Text style={{ color: "gray" }}>
                    Just mix a good moisturizer with your matte foudation. And
                    voila-dewy foundation!
                  </Card.Text>
                  <Card.Text>
                    Share <FaCloudsmith />
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col md={4} lg={4} xs={12} className="mb-5 text-center">
              <h5 classname="text-center" style={{ fontFamily: "Inter" }}>
                Lipstick Hack
              </h5>
              <Card className="border-0 mt-4">
                <Card.Body
                  xs={12}
                  className={"card_body "}
                  style={{ borderRadius: "8px" }}
                >
                  <HiLightBulb className={"card_bulb"} />
                  <Card.Text
                    className="font-italic"
                    style={{ fontWeight: "700" }}
                  >
                    Don't have a color corrector?
                  </Card.Text>
                  <Card.Text style={{ color: "gray" }}>
                    Don't have a color corrector for dark circles or spot? Just
                    use red or orange lipstick to cover and blend.
                  </Card.Text>
                  <Card.Text>
                    Share <FaCloudsmith />
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        ) : state === 2 ? (
          <Row className=" card_size" style={{ marginTop: "40px" }}>
            <Col md={4} lg={4} xs={12} className="mb-5 text-center">
              <h5 classname="text-center" style={{ fontFamily: "Inter" }}>
                Powder Brush
              </h5>
              <Card className="border-0 mt-4">
                <Card.Body
                  xs={12}
                  className={"card_body "}
                  style={{ borderRadius: "8px" }}
                >
                  <HiLightBulb className={"card_bulb"} />
                  {/* <Card.Text
                    className="font-italic"
                    style={{ fontWeight: "700" }}
                  >
                    CIDESCO2
                  </Card.Text> */}
                  <Card.Text style={{ color: "gray" }}>
                    A powder brush is the largest of the brushes you need. It is
                    used to apply loose powder, typically after foundation is
                    applied.
                  </Card.Text>
                  <Card.Text>
                    Share <FaCloudsmith />
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col md={4} lg={4} xs={12} className="mb-5 text-center">
              <h5 classname="text-center" style={{ fontFamily: "Inter" }}>
                Blush Brush
              </h5>
              <Card className="border-0 mt-4">
                <Card.Body
                  xs={12}
                  className={"card_body "}
                  style={{ borderRadius: "8px" }}
                >
                  <HiLightBulb className={"card_bulb"} />
                  {/* <Card.Text
                    className="font-italic"
                    style={{ fontWeight: "700" }}
                  >
                    CIDESCO
                  </Card.Text> */}
                  <Card.Text style={{ color: "gray" }}>
                    A blush brush is a bit smaller than and not as full as a
                    powder brush. Use the blush brush to apply cheek color
                    powder(rouge or brozer). You can also use this brush to
                    apply contour color.
                  </Card.Text>
                  <Card.Text>
                    Share <FaCloudsmith />
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col md={4} lg={4} xs={12} className="mb-5 text-center">
              <h5 classname="text-center" style={{ fontFamily: "Inter" }}>
                Large Eye Shadow Blush
              </h5>
              <Card className="border-0 mt-4">
                <Card.Body
                  xs={12}
                  className={"card_body "}
                  style={{ borderRadius: "8px" }}
                >
                  <HiLightBulb className={"card_bulb"} />
                  {/* <Card.Text
                    className="font-italic"
                    style={{ fontWeight: "700" }}
                  >
                    CIDESCO
                  </Card.Text> */}
                  <Card.Text style={{ color: "gray" }}>
                    A large eye shadow brush made of either natural or synthetic
                    bristles is great for applying lighter eye shadow pigments.
                  </Card.Text>
                  <Card.Text>
                    Share <FaCloudsmith />
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col md={4} lg={4} xs={12} className="mb-5 text-center">
              <h5 classname="text-center" style={{ fontFamily: "Inter" }}>
                Dome Eye Shadow Brush
              </h5>
              <Card className="border-0 mt-4">
                <Card.Body
                  xs={12}
                  className={"card_body "}
                  style={{ borderRadius: "8px" }}
                >
                  <HiLightBulb className={"card_bulb"} />
                  {/* <Card.Text
                    className="font-italic"
                    style={{ fontWeight: "700" }}
                  >
                    CIDESCO
                  </Card.Text> */}
                  <Card.Text style={{ color: "gray" }}>
                    A dome eye shadow brush has dome or round shaped bristles
                    and comes to a point. The dome brush fits into the crease of
                    the eye. The point deposits stronger color into the crease,
                    while the sides of the dome blend the color on either side.
                  </Card.Text>
                  <Card.Text>
                    Share <FaCloudsmith />
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col md={4} lg={4} xs={12} className="mb-5 text-center">
              <h5 classname="text-center" style={{ fontFamily: "Inter" }}>
                Angle Brush
              </h5>
              <Card className="border-0 mt-4">
                <Card.Body
                  xs={12}
                  className={"card_body "}
                  style={{ borderRadius: "8px" }}
                >
                  <HiLightBulb className={"card_bulb"} />
                  {/* <Card.Text
                    className="font-italic"
                    style={{ fontWeight: "700" }}
                  >
                    CIDESCO
                  </Card.Text> */}
                  <Card.Text style={{ color: "gray" }}>
                    An angle brush is flat, cut at an angle, and comes in both
                    synthetic and natural bristles. You can use the angle brush
                    primarily for eyebrow color and appli\ying powder and gel
                    liner around the eye.
                  </Card.Text>
                  <Card.Text>
                    Share <FaCloudsmith />
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        ) : (
          <Row className=" card_size" style={{ marginTop: "40px" }}>
            <Col md={4} lg={4} xs={12} className="mb-5 text-center">
              <h5 classname="text-center" style={{ fontFamily: "Inter" }}>
                Apply Concealer in Triangle
              </h5>
              <Card className="border-0 mt-4">
                <Card.Body
                  xs={12}
                  className={"card_body "}
                  style={{ borderRadius: "8px" }}
                >
                  <HiLightBulb className={"card_bulb"} />
                  {/* <Card.Text
                    className="font-italic"
                    style={{ fontWeight: "700" }}
                  >
                    CIDESCO
                  </Card.Text> */}
                  <Card.Text style={{ color: "gray" }}>
                    The key to fluffier and fuller lashes - a little translucent
                    powder. After your first coat of mascara, dust your lashes
                    with a mild coat of loose powder. Add another coat of
                    mascara to hide the dustiness, and you will see the
                    difference for yourself.
                  </Card.Text>
                  <Card.Text>
                    Share <FaCloudsmith />
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col md={4} lg={4} xs={12} className="mb-5 text-center">
              <h5 classname="text-center" style={{ fontFamily: "Inter" }}>
                Complement Your Eye Shape
              </h5>
              <Card className="border-0 mt-4">
                <Card.Body
                  xs={12}
                  className={"card_body "}
                  style={{ borderRadius: "8px" }}
                >
                  <HiLightBulb className={"card_bulb"} />
                  {/* <Card.Text
                    className="font-italic"
                    style={{ fontWeight: "700" }}
                  >
                    CIDESCO
                  </Card.Text> */}
                  <Card.Text style={{ color: "gray" }}>
                    Everyone's eyes are different - learn the simlest ways to
                    apply eyeliner to outline your eyes and make them stand out.
                  </Card.Text>
                  <Card.Text>
                    Share <FaCloudsmith />
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col md={4} lg={4} xs={12} className="mb-5 text-center">
              <h5 classname="text-center" style={{ fontFamily: "Inter" }}>
                Take Time to Apply Eyelashes
              </h5>
              <Card className="border-0 mt-4">
                <Card.Body
                  xs={12}
                  className={"card_body "}
                  style={{ borderRadius: "8px" }}
                >
                  <HiLightBulb className={"card_bulb"} />
                  {/* <Card.Text
                    className="font-italic"
                    style={{ fontWeight: "700" }}
                  >
                    CIDESCO
                  </Card.Text> */}
                  <Card.Text style={{ color: "gray" }}>
                    After applying glue wait for 30 to 40 seconds before
                    applying falsies to keep the strip from sliding around.
                  </Card.Text>
                  <Card.Text>
                    Share <FaCloudsmith />
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col md={4} lg={4} xs={12} className="mb-5 text-center">
              <h5 classname="text-center" style={{ fontFamily: "Inter" }}>
                Don't Forget to Look Down
              </h5>
              <Card className="border-0 mt-4">
                <Card.Body
                  xs={12}
                  className={"card_body "}
                  style={{ borderRadius: "8px" }}
                >
                  <HiLightBulb className={"card_bulb"} />
                  {/* <Card.Text
                    className="font-italic"
                    style={{ fontWeight: "700" }}
                  >
                    CIDESCO
                  </Card.Text> */}
                  <Card.Text style={{ color: "gray" }}>
                    As you apply your falsies hold a mirror below your line of
                    sight and look down into it - you will find it mush easier
                    to apply the strip at the edge of the lash line.
                  </Card.Text>
                  <Card.Text>
                    Share <FaCloudsmith />
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col md={4} lg={4} xs={12} className="mb-5 text-center">
              <h5 classname="text-center" style={{ fontFamily: "Inter" }}>
                Refresh Your Clumpy Mascara
              </h5>
              <Card className="border-0 mt-4">
                <Card.Body
                  xs={12}
                  className={"card_body "}
                  style={{ borderRadius: "8px" }}
                >
                  <HiLightBulb className={"card_bulb"} />
                  {/* <Card.Text
                    className="font-italic"
                    style={{ fontWeight: "700" }}
                  >
                    CIDESCO
                  </Card.Text> */}
                  <Card.Text style={{ color: "gray" }}>
                    If your favourite tuve of mascara is beginning to get a
                    touch clumpy, add a couple of drops of sterline saline and
                    swirl with you brush - it'll add moisture to the mascara's
                    formula and extend its life.
                  </Card.Text>
                  <Card.Text>
                    Share <FaCloudsmith />
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        )}

        <p
          style={{
            fontSize: "80px",
            fontFamily: "Clash Display",
            marginTop: "60px",
          }}
          className="d-none d-lg-block"
        >
          Learn and share plenty of
          <br /> other hacks and tips
        </p>
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
          style={{
            fontSize: "14px",
            fontFamily: "Inter",
            backgroundColor: "#000000",
          }}
        >
          All Beauty Tips and Hacks{" "}
          <BsArrowRight
            style={{ backgroundColor: "transparent", fontSize: "20px" }}
          />
        </button>
      </Container>
    </div>
  );
}

export default Tips;
