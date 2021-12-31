import React, { useState } from "react";
import "./NewsAndHacks.scss";
import { Row, Col } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import lip from "../images/news-and-hacks/lip.png";
import eyeliner from "../images/news-and-hacks/eyeliner.png";
import concealer from "../images/news-and-hacks/concealer.png";
import foundation from "../images/news-and-hacks/foundation.png";
import lipstick from "../images/news-and-hacks/lipstick.png";
import Card from "react-bootstrap/Card";
import powder from "../images/news-and-hacks/powder.png";
import blush from "../images/news-and-hacks/blush.png";
import large from "../images/news-and-hacks/large.png";
import dome from "../images/news-and-hacks/dome.png";
import angle from "../images/news-and-hacks/angle.png";
import lashes from "../images/news-and-hacks/lashes.png";
import concealertriangle from "../images/news-and-hacks/concealertriangle.png";
import complimenteye from "../images/news-and-hacks/complimenteye.png";
import fakeeyelashes from "../images/news-and-hacks/fakeeyelashes.png";
import lookdown from "../images/news-and-hacks/lookdown.png";
import clumsymascarra from "../images/news-and-hacks/clumsymascarra.png";

export default function News() {
  const [makeup, setmakeup] = useState(1);
  const [brushes, setbrushes] = useState(1);
  const [eye, seteye] = useState(1);

  function makeup1() {
    setmakeup(1);
  }

  function makeup2() {
    setmakeup(2);
  }
  function makeup3() {
    setmakeup(3);
  }

  function makeup4() {
    setmakeup(4);
  }
  function makeup5() {
    setmakeup(5);
  }

  //Brushes
  function brushes1() {
    setbrushes(1);
  }

  function brushes2() {
    setbrushes(2);
  }
  function brushes3() {
    setbrushes(3);
  }

  function brushes4() {
    setbrushes(4);
  }
  function brushes5() {
    setbrushes(5);
  }

  //EYE
  function eye1() {
    seteye(1);
  }

  function eye2() {
    seteye(2);
  }
  function eye3() {
    seteye(3);
  }

  function eye4() {
    seteye(4);
  }
  function eye5() {
    seteye(5);
  }
  function eye6() {
    seteye(6);
  }

  return (
    <Container className="container">
      <Row>
        {/* <Col style={{ textAlign: "right" }}>
          <input
            className="search"
            type="text"
            placeholder="Search News & Hacks.."
          />
        </Col> */}
        <Col sm={12} style={{ textAlign: "left", marginTop: "80px" }}>
          <h1 style={{ fontSize: "18px", fontWeight: "bold" }}>
            Onor-Our{" "}
            <span className="design-text" style={{ color: "tomato" }}>
              Tips & Hacks
            </span>
          </h1>
        </Col>
      </Row>

      <Row>
        <Col style={{ textAlign: "left", marginTop: "20px" }}>
          <span className="span">Brushes</span>
          <span className="span">Colors & Hues</span>
          <span className="span">Makeup Kit</span>
        </Col>
      </Row>

      <Row>
        <Col style={{ marginTop: "80px" }} md={6}>
          <h2
            style={{ textAlign: "left", marginTop: "40px", fontWeight: "bold" }}
          >
            5 MAKEUP HACKS
          </h2>
          {makeup === 1 ? (
            <Col className="background">
              <button onClick={makeup1} className="list-active">
                1.Lip Balm Hack
              </button>{" "}
            </Col>
          ) : (
            <Col className="background">
              {" "}
              <button onClick={makeup1} className="list">
                1.Lip Balm Hack
              </button>{" "}
            </Col>
          )}

          {makeup === 2 ? (
            <Col className="background">
              <button onClick={makeup2} className="list-active">
                2.Colored Eyeliner Hack
              </button>{" "}
            </Col>
          ) : (
            <Col className="background">
              {" "}
              <button onClick={makeup2} className="list">
                2.Colored Eyeliner Hack
              </button>{" "}
            </Col>
          )}
          {makeup === 3 ? (
            <Col className="background">
              <button onClick={makeup3} className="list-active">
                3.Concealer Hack
              </button>{" "}
            </Col>
          ) : (
            <Col className="background">
              {" "}
              <button onClick={makeup3} className="list">
                3.Concealer Hack
              </button>{" "}
            </Col>
          )}
          {makeup === 4 ? (
            <Col className="background">
              <button onClick={makeup4} className="list-active">
                4.Foundation Hack
              </button>{" "}
            </Col>
          ) : (
            <Col className="background">
              {" "}
              <button onClick={makeup4} className="list">
                4.Foundation Hack
              </button>{" "}
            </Col>
          )}
          {makeup === 5 ? (
            <Col className="background">
              <button onClick={makeup5} className="list-active">
                5.Lipstick Hack
              </button>{" "}
            </Col>
          ) : (
            <Col className="background">
              {" "}
              <button onClick={makeup5} className="list">
                5.Lipstick Hack
              </button>{" "}
            </Col>
          )}
        </Col>
        <Col md={6} style={{marginTop:'100px'}}>
          {makeup === 1 ? (
            <Card
              style={{ width: "100%", borderRadius: "10px", marginTop: "40px" }}
            >
              <Card.Body
                style={{
                  height: "100%",
                  width: "100%",
                  borderRadius: "10px",
                  boxShadow: " 0 3px 10px rgb(0 0 0 / 0.2)",
                  textAlign: "left",
                }}
              >
                <img src={lip} alt="lip" className="image-slides" />
              </Card.Body>
            </Card>
          ) : makeup === 2 ? (
            <Card
              style={{ width: "100%", borderRadius: "10px", marginTop: "40px" }}
            >
              <Card.Body
                style={{
                  height: "100%",
                  width: "100%",
                  borderRadius: "10px",
                  boxShadow: " 0 3px 10px rgb(0 0 0 / 0.2)",
                  textAlign: "left",
                }}
              >
                <img src={eyeliner} alt="eyeliner" className="image-slides" />
              </Card.Body>
            </Card>
          ) : makeup === 3 ? (
            <Card
              style={{ width: "100%", borderRadius: "10px", marginTop: "40px" }}
            >
              <Card.Body
                style={{
                  height: "100%",
                  width: "100%",
                  borderRadius: "10px",
                  boxShadow: " 0 3px 10px rgb(0 0 0 / 0.2)",
                  textAlign: "left",
                }}
              >
                <img
                  src={concealer}
                  alt="conceleaer"
                  className="image-slides"
                />
              </Card.Body>
            </Card>
          ) : makeup === 4 ? (
            <Card
              style={{ width: "100%", borderRadius: "10px", marginTop: "40px" }}
            >
              <Card.Body
                style={{
                  height: "100%",
                  width: "100%",
                  borderRadius: "10px",
                  boxShadow: " 0 3px 10px rgb(0 0 0 / 0.2)",
                  textAlign: "left",
                }}
              >
                <img src={foundation} alt="lip" className="image-slides" />
              </Card.Body>
            </Card>
          ) : (
            <Card
              style={{ width: "100%", borderRadius: "10px", marginTop: "40px" }}
            >
              <Card.Body
                style={{
                  height: "100%",
                  width: "100%",
                  borderRadius: "10px",
                  boxShadow: " 0 3px 10px rgb(0 0 0 / 0.2)",
                  textAlign: "left",
                }}
              >
                <img src={lipstick} alt="lip" className="image-slides" />
              </Card.Body>
            </Card>
          )}
        </Col>
      </Row>

      {/*Makeup Brushes */}

      <Row style={{ marginTop: "50px" }}>
        <Col style={{ marginTop: "40px" }} md={6}>
          <h2
            style={{ textAlign: "left", marginTop: "40px", fontWeight: "bold" }}
          >
            5 MAKEUP BRUSHES YOU MUST HAVE
          </h2>
          {brushes === 1 ? (
            <Col className="background">
              <button onClick={brushes1} className="list-active">
                1.Powder Brush
              </button>{" "}
            </Col>
          ) : (
            <Col className="background">
              {" "}
              <button onClick={brushes1} className="list">
                1.Powder Brush
              </button>{" "}
            </Col>
          )}

          {brushes === 2 ? (
            <Col className="background">
              <button onClick={brushes2} className="list-active">
                2.Blush Brush
              </button>{" "}
            </Col>
          ) : (
            <Col className="background">
              {" "}
              <button onClick={brushes2} className="list">
                2.Blush Brush
              </button>{" "}
            </Col>
          )}
          {brushes === 3 ? (
            <Col className="background">
              <button onClick={brushes3} className="list-active">
                3.Large Eye Shadown Blush
              </button>{" "}
            </Col>
          ) : (
            <Col className="background">
              {" "}
              <button onClick={brushes3} className="list">
                3.Large Eye Shadown Blush
              </button>{" "}
            </Col>
          )}
          {brushes === 4 ? (
            <Col className="background">
              <button onClick={brushes4} className="list-active">
                4.Dome Eye Shadow Brush
              </button>{" "}
            </Col>
          ) : (
            <Col className="background">
              {" "}
              <button onClick={brushes4} className="list">
                4.Dome Eye Shadow Brush
              </button>{" "}
            </Col>
          )}
          {brushes === 5 ? (
            <Col className="background">
              <button onClick={brushes5} className="list-active">
                5.Angle Brush
              </button>{" "}
            </Col>
          ) : (
            <Col className="background">
              {" "}
              <button onClick={brushes5} className="list">
                5.Angle Brush
              </button>{" "}
            </Col>
          )}
        </Col>
        <Col style={{ marginTop: "40px" }} md={6}>
          {brushes === 1 ? (
            <Card
              style={{ width: "100%", borderRadius: "10px", marginTop: "40px" }}
            >
              <Card.Body
                style={{
                  height: "100%",
                  width: "100%",
                  borderRadius: "10px",
                  boxShadow: " 0 3px 10px rgb(0 0 0 / 0.2)",
                  textAlign: "left",
                }}
              >
                <img src={powder} alt="lip" className="image-slides" />
              </Card.Body>
            </Card>
          ) : brushes === 2 ? (
            <Card
              style={{ width: "100%", borderRadius: "10px", marginTop: "40px" }}
            >
              <Card.Body
                style={{
                  height: "100%",
                  width: "100%",
                  borderRadius: "10px",
                  boxShadow: " 0 3px 10px rgb(0 0 0 / 0.2)",
                  textAlign: "left",
                }}
              >
                <img src={blush} alt="eyeliner" className="image-slides" />
              </Card.Body>
            </Card>
          ) : brushes === 3 ? (
            <Card
              style={{ width: "100%", borderRadius: "10px", marginTop: "40px" }}
            >
              <Card.Body
                style={{
                  height: "100%",
                  width: "100%",
                  borderRadius: "10px",
                  boxShadow: " 0 3px 10px rgb(0 0 0 / 0.2)",
                  textAlign: "left",
                }}
              >
                <img src={large} alt="conceleaer" className="image-slides" />
              </Card.Body>
            </Card>
          ) : brushes === 4 ? (
            <Card
              style={{ width: "100%", borderRadius: "10px", marginTop: "40px" }}
            >
              <Card.Body
                style={{
                  height: "100%",
                  width: "100%",
                  borderRadius: "10px",
                  boxShadow: " 0 3px 10px rgb(0 0 0 / 0.2)",
                  textAlign: "left",
                }}
              >
                <img src={dome} alt="lip" className="image-slides" />
              </Card.Body>
            </Card>
          ) : (
            <Card
              style={{ width: "100%", borderRadius: "10px", marginTop: "40px" }}
            >
              <Card.Body
                style={{
                  height: "100%",
                  width: "100%",
                  borderRadius: "10px",
                  boxShadow: " 0 3px 10px rgb(0 0 0 / 0.2)",
                  textAlign: "left",
                }}
              >
                <img src={angle} alt="lip" className="image-slides" />
              </Card.Body>
            </Card>
          )}
        </Col>
      </Row>

      {/*Eye Makeup */}

      <Row style={{ marginTop: "50px" }}>
        <Col style={{ marginTop: "40px" }} md={6}>
          <h2
            style={{ textAlign: "left", marginTop: "40px", fontWeight: "bold" }}
          >
            6 EYE MAKEUP HACKS YOU CAN'T MISS
          </h2>
          {eye === 1 ? (
            <Col className="background">
              <button onClick={eye1} className="list-active">
                1.Powder Your Lashes
              </button>{" "}
            </Col>
          ) : (
            <Col className="background">
              {" "}
              <button onClick={eye1} className="list">
                1.Powder Your Lashes
              </button>{" "}
            </Col>
          )}

          {eye === 2 ? (
            <Col className="background">
              <button onClick={eye2} className="list-active">
                2.Apply Concealer in Triangle
              </button>{" "}
            </Col>
          ) : (
            <Col className="background">
              {" "}
              <button onClick={eye2} className="list">
                2.Apply Concealer in Triangle
              </button>{" "}
            </Col>
          )}
          {eye === 3 ? (
            <Col className="background">
              <button onClick={eye3} className="list-active">
                3.Compliment Your Eye Shape
              </button>{" "}
            </Col>
          ) : (
            <Col className="background">
              {" "}
              <button onClick={eye3} className="list">
                3.Compliment Your Eye Shape
              </button>{" "}
            </Col>
          )}
          {eye === 4 ? (
            <Col className="background">
              <button onClick={eye4} className="list-active">
                4.Take Time to apply eyelashes
              </button>{" "}
            </Col>
          ) : (
            <Col className="background">
              {" "}
              <button onClick={eye4} className="list">
                4.Take Time to apply eyelashes
              </button>{" "}
            </Col>
          )}
          {eye === 5 ? (
            <Col className="background">
              <button onClick={eye5} className="list-active">
                5.Don't Forget to look down
              </button>{" "}
            </Col>
          ) : (
            <Col className="background">
              {" "}
              <button onClick={eye5} className="list">
                5.Don't Forget to look down
              </button>{" "}
            </Col>
          )}

          {eye === 6 ? (
            <Col className="background">
              <button onClick={eye6} className="list-active">
                6.Refresh Your Clumpy Mascarra
              </button>{" "}
            </Col>
          ) : (
            <Col className="background">
              {" "}
              <button onClick={eye6} className="list">
                6.Refresh Your Clumpy Mascarra
              </button>{" "}
            </Col>
          )}
        </Col>
        <Col style={{ marginTop: "40px" }} md={6}>
          {eye === 1 ? (
            <Card
              style={{ width: "100%", borderRadius: "10px", marginTop: "40px" }}
            >
              <Card.Body
                style={{
                  height: "100%",
                  width: "100%",
                  borderRadius: "10px",
                  boxShadow: " 0 3px 10px rgb(0 0 0 / 0.2)",
                  textAlign: "center",
                }}
              >
                <img src={lashes} alt="lip" className="image-slides2" />
              </Card.Body>
            </Card>
          ) : eye === 2 ? (
            <Card
              style={{ width: "100%", borderRadius: "10px", marginTop: "40px" }}
            >
              <Card.Body
                style={{
                  height: "100%",
                  width: "100%",
                  borderRadius: "10px",
                  boxShadow: " 0 3px 10px rgb(0 0 0 / 0.2)",
                  textAlign: "center",
                }}
              >
                <img
                  src={concealertriangle}
                  alt="eyeliner"
                  className="image-slides2"
                />
              </Card.Body>
            </Card>
          ) : eye === 3 ? (
            <Card
              style={{ width: "100%", borderRadius: "10px", marginTop: "40px" }}
            >
              <Card.Body
                style={{
                  height: "100%",
                  width: "100%",
                  borderRadius: "10px",
                  boxShadow: " 0 3px 10px rgb(0 0 0 / 0.2)",
                  textAlign: "center",
                }}
              >
                <img
                  src={complimenteye}
                  alt="conceleaer"
                  className="image-slides2"
                />
              </Card.Body>
            </Card>
          ) : eye === 4 ? (
            <Card
              style={{ width: "100%", borderRadius: "10px", marginTop: "40px" }}
            >
              <Card.Body
                style={{
                  height: "100%",
                  width: "100%",
                  borderRadius: "10px",
                  boxShadow: " 0 3px 10px rgb(0 0 0 / 0.2)",
                  textAlign: "center",
                }}
              >
                <img src={fakeeyelashes} alt="lip" className="image-slides2" />
              </Card.Body>
            </Card>
          ) : eye == 5 ? (
            <Card
              style={{ width: "100%", borderRadius: "10px", marginTop: "40px" }}
            >
              <Card.Body
                style={{
                  height: "100%",
                  width: "100%",
                  borderRadius: "10px",
                  boxShadow: " 0 3px 10px rgb(0 0 0 / 0.2)",
                  textAlign: "center",
                }}
              >
                <img src={lookdown} alt="lip" className="image-slides2" />
              </Card.Body>
            </Card>
          ) : (
            <Card
              style={{ width: "100%", borderRadius: "10px", marginTop: "40px" }}
            >
              <Card.Body
                style={{
                  height: "100%",
                  width: "100%",
                  borderRadius: "10px",
                  boxShadow: " 0 3px 10px rgb(0 0 0 / 0.2)",
                  textAlign: "center",
                }}
              >
                <img src={clumsymascarra} alt="lip" className="image-slides2" />
              </Card.Body>
            </Card>
          )}
        </Col>
      </Row>
    </Container>
  );
}
