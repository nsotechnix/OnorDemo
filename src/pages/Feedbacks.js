import React from "react";
import "./Feedback.scss";
import { Row, Col, Card, Container } from "react-bootstrap";
import { FaStar } from "react-icons/fa";
import exp1 from "../images/exp1.png";
import exp2 from "../images/exp2.png";
import exp3 from "../images/exp3.png";
import exp4 from "../images/exp4.png";
import exp5 from "../images/exp5.png";
import exp6 from "../images/exp6.png";
import exp7 from "../images/exp7.png";

function Feedbacks() {
  return (
    <Container style={{ marginBottom: "120px", marginTop: "100px" }}>
      <Row md={12} className={"beauty_head mb-4 mb-lg-0"}>
        <Col md={6}>
          <h2 className="first_head">Onor Beauty Experts</h2>
        </Col>
        <Col md={6}>
          <h5 className="second_head">200+ Expert available</h5>
        </Col>
      </Row>
      <Row
        xs={2}
        md={4}
        style={{ justifyContent: "space-evenly", marginTop: "50px" }}
      >
        <Card
          style={{
            width: "200px",
            alignItems: "center",
            backgroundColor: "transparent",
          }}
          className="border-0"
        >
          <Card.Img
            variant="top"
            style={{
              borderRadius: "10px",
            }}
            src={exp1}
          />
          <Card.Body style={{ textAlign: "center" }}>
            <Card.Title className="card_title">
              <h3
                style={{
                  fontWeight: "bold",
                  fontFamily: "Inter",
                  fontSize: "18px",
                  marginTop: "4px",
                }}
              >
                Melissa McChesney
              </h3>
              <p
                style={{ color: "gray", fontFamily: "Inter", fontSize: "14px" }}
              >
                Degree in Special Effect Makeup
              </p>
              <p
                style={{
                  color: "gray",
                  fontFamily: "Inter",
                  fontSize: "14px",
                  marginTop: "-6px",
                }}
              >
                10+ years experience
              </p>
              <p
                style={{
                  fontWeight: "bold",
                  fontFamily: "Inter",
                  fontSize: "12px",
                }}
              >
                60 Sessions on Onor World
              </p>
              <p>
                <span>
                  {Array(5)
                    .fill("")
                    .map((_, i) => (
                      <FaStar color="#F6AF25" style={{ fontSize: "18px" }} />
                    ))}
                </span>

                <span
                  className="text-dark"
                  style={{
                    fontFamity: "Fira Sans",
                    fontWeight: "bold",
                    fontSize: "18px",
                  }}
                >
                  {" "}
                  5.0
                </span>
              </p>
            </Card.Title>
          </Card.Body>
        </Card>

        <Card
          style={{
            width: "200px",
            alignItems: "center",
            backgroundColor: "transparent",
          }}
          className="border-0"
        >
          <Card.Img
            variant="top"
            style={{
              borderRadius: "10px",
            }}
            src={exp2}
          />
          <Card.Body style={{ textAlign: "center" }}>
            <Card.Title className="card_title">
              <h3
                style={{
                  fontWeight: "bold",
                  fontFamily: "Inter",
                  fontSize: "18px",
                  marginTop: "4px",
                }}
              >
                Christin Birckhead
              </h3>
              <p
                style={{ color: "gray", fontFamily: "Inter", fontSize: "14px" }}
              >
                Artist to Celebrities
              </p>
              <p
                style={{
                  color: "gray",
                  fontFamily: "Inter",
                  fontSize: "14px",
                  marginTop: "-6px",
                }}
              >
                20+ years experience
              </p>
              <p
                style={{
                  fontWeight: "bold",
                  fontFamily: "Inter",
                  fontSize: "12px",
                }}
              >
                25 Sessions on Onor World
              </p>
              <p>
                <span>
                  {Array(5)
                    .fill("")
                    .map((_, i) => (
                      <FaStar color="#F6AF25" style={{ fontSize: "18px" }} />
                    ))}
                </span>

                <span
                  className="text-dark"
                  style={{
                    fontFamity: "Fira Sans",
                    fontWeight: "bold",
                    fontSize: "18px",
                  }}
                >
                  {" "}
                  5.0
                </span>
              </p>
            </Card.Title>
          </Card.Body>
        </Card>

        <Card
          style={{
            width: "200px",
            alignItems: "center",
            backgroundColor: "transparent",
          }}
          className="border-0"
        >
          <Card.Img
            variant="top"
            style={{
              borderRadius: "10px",
            }}
            src={exp3}
          />
          <Card.Body style={{ textAlign: "center" }}>
            <Card.Title className="card_title">
              <h3
                style={{
                  fontWeight: "bold",
                  fontFamily: "Inter",
                  fontSize: "18px",
                  marginTop: "4px",
                }}
              >
                Mary Geleecka
              </h3>
              <p
                style={{ color: "gray", fontFamily: "Inter", fontSize: "14px" }}
              >
                Phibrows Artist
              </p>
              <p
                style={{
                  color: "gray",
                  fontFamily: "Inter",
                  fontSize: "14px",
                  marginTop: "-6px",
                }}
              >
                5+ years experience
              </p>
              <p
                style={{
                  fontWeight: "bold",
                  fontFamily: "Inter",
                  fontSize: "12px",
                }}
              >
                18 Sessions on Onor World
              </p>
              <p>
                <span>
                  {Array(5)
                    .fill("")
                    .map((_, i) => (
                      <FaStar color="#F6AF25" style={{ fontSize: "18px" }} />
                    ))}
                </span>

                <span
                  className="text-dark"
                  style={{
                    fontFamity: "Fira Sans",
                    fontWeight: "bold",
                    fontSize: "18px",
                  }}
                >
                  {" "}
                  5.0
                </span>
              </p>
            </Card.Title>
          </Card.Body>
        </Card>

        <Card
          style={{
            width: "200px",
            alignItems: "center",
            backgroundColor: "transparent",
          }}
          className="border-0"
        >
          <Card.Img
            variant="top"
            style={{
              borderRadius: "10px",
            }}
            src={exp4}
          />
          <Card.Body style={{ textAlign: "center" }}>
            <Card.Title className="card_title">
              <h3
                style={{
                  fontWeight: "bold",
                  fontFamily: "Inter",
                  fontSize: "18px",
                  marginTop: "4px",
                }}
              >
                Sarah Monares
              </h3>
              <p
                style={{ color: "gray", fontFamily: "Inter", fontSize: "14px" }}
              >
                Masters from Makeup Designory Burbank
              </p>
              <p
                style={{
                  color: "gray",
                  fontFamily: "Inter",
                  fontSize: "14px",
                  marginTop: "-6px",
                }}
              >
                8+ years experience
              </p>
              <p
                style={{
                  fontWeight: "bold",
                  fontFamily: "Inter",
                  fontSize: "12px",
                }}
              >
                14 Sessions on Onor World
              </p>
              <p>
                <span>
                  {Array(5)
                    .fill("")
                    .map((_, i) => (
                      <FaStar color="#F6AF25" style={{ fontSize: "18px" }} />
                    ))}
                </span>

                <span
                  className="text-dark"
                  style={{
                    fontFamity: "Fira Sans",
                    fontWeight: "bold",
                    fontSize: "18px",
                  }}
                >
                  {" "}
                  5.0
                </span>
              </p>
            </Card.Title>
          </Card.Body>
        </Card>

        <Card
          style={{
            width: "200px",
            alignItems: "center",
            backgroundColor: "transparent",
          }}
          className="border-0"
        >
          <Card.Img
            variant="top"
            style={{
              borderRadius: "10px",
            }}
            src={exp5}
          />
          <Card.Body style={{ textAlign: "center" }}>
            <Card.Title className="card_title">
              <h3
                style={{
                  fontWeight: "bold",
                  fontFamily: "Inter",
                  fontSize: "18px",
                  marginTop: "4px",
                }}
              >
                Lucrezia Mapelli
              </h3>
              <p
                style={{ color: "gray", fontFamily: "Inter", fontSize: "14px" }}
              >
                Makeup Designory Certified Instructor
              </p>
              <p
                style={{
                  color: "gray",
                  fontFamily: "Inter",
                  fontSize: "14px",
                  marginTop: "-6px",
                }}
              >
                10+ years experience
              </p>
              <p
                style={{
                  fontWeight: "bold",
                  fontFamily: "Inter",
                  fontSize: "12px",
                }}
              >
                8 Sessions on Onor World
              </p>
              <p>
                <span>
                  {Array(5)
                    .fill("")
                    .map((_, i) => (
                      <FaStar color="#F6AF25" style={{ fontSize: "18px" }} />
                    ))}
                </span>

                <span
                  className="text-dark"
                  style={{
                    fontFamity: "Fira Sans",
                    fontWeight: "bold",
                    fontSize: "18px",
                  }}
                >
                  {" "}
                  5.0
                </span>
              </p>
            </Card.Title>
          </Card.Body>
        </Card>

        <Card
          style={{
            width: "200px",
            alignItems: "center",
            backgroundColor: "transparent",
          }}
          className="border-0"
        >
          <Card.Img
            variant="top"
            style={{
              borderRadius: "10px",
            }}
            src={exp6}
          />
          <Card.Body style={{ textAlign: "center" }}>
            <Card.Title className="card_title">
              <h3
                style={{
                  fontWeight: "bold",
                  fontFamily: "Inter",
                  fontSize: "18px",
                  marginTop: "4px",
                }}
              >
                Annie Mittal
              </h3>
              {/* <p style={{ color: 'gray', fontFamily: 'Inter', fontSize: '14px' }}>Degree in Special Effect Makeup</p> */}
              <p
                style={{ color: "gray", fontFamily: "Inter", fontSize: "14px" }}
              >
                8+ years experience
              </p>
              <p
                style={{
                  fontWeight: "bold",
                  fontFamily: "Inter",
                  fontSize: "12px",
                }}
              >
                26 Sessions on Onor World
              </p>
              <p>
                <span>
                  {Array(5)
                    .fill("")
                    .map((_, i) => (
                      <FaStar color="#F6AF25" style={{ fontSize: "18px" }} />
                    ))}
                </span>

                <span
                  className="text-dark"
                  style={{
                    fontFamity: "Fira Sans",
                    fontWeight: "bold",
                    fontSize: "18px",
                  }}
                >
                  {" "}
                  5.0
                </span>
              </p>
            </Card.Title>
          </Card.Body>
        </Card>

        <Card
          style={{
            width: "200px",
            alignItems: "center",
            backgroundColor: "transparent",
          }}
          className="border-0"
        >
          <Card.Img
            variant="top"
            style={{
              borderRadius: "10px",
            }}
            src={exp7}
          />
          <Card.Body style={{ textAlign: "center" }}>
            <Card.Title className="card_title">
              <h3
                style={{
                  fontWeight: "bold",
                  fontFamily: "Inter",
                  fontSize: "18px",
                  marginTop: "4px",
                }}
              >
                Neha Arora
              </h3>
              {/* <p style={{ color: 'gray', fontFamily: 'Inter', fontSize: '14px' }}>Degree in Special Effect Makeup</p> */}
              <p
                style={{ color: "gray", fontFamily: "Inter", fontSize: "14px" }}
              >
                5+ years experience
              </p>
              <p
                style={{
                  fontWeight: "bold",
                  fontFamily: "Inter",
                  fontSize: "12px",
                }}
              >
                12 Sessions on Onor World
              </p>
              <p>
                <span>
                  {Array(5)
                    .fill("")
                    .map((_, i) => (
                      <FaStar color="#F6AF25" style={{ fontSize: "18px" }} />
                    ))}
                </span>

                <span
                  className="text-dark"
                  style={{
                    fontFamity: "Fira Sans",
                    fontWeight: "bold",
                    fontSize: "18px",
                  }}
                >
                  {" "}
                  5.0
                </span>
              </p>
            </Card.Title>
          </Card.Body>
        </Card>

        <Card
          style={{ width: "250px", backgroundColor: "transparent" }}
          className="border-0"
        >
          <Card.Img variant="top" src={""} />
          <Card.Body style={{ textAlign: "center" }}>
            <Card.Title className="card_title">
              <h3
                style={{
                  fontWeight: "bold",
                  fontFamily: "Inter",
                  fontSize: "18px",
                  marginTop: "4px",
                }}
              >
                {/* Lucrezia Mapelli */}
              </h3>
              <p
                style={{ color: "gray", fontFamily: "Inter", fontSize: "14px" }}
              >
                {/* Makeup Designory Certified Instructor */}
              </p>
              <p
                style={{
                  color: "gray",
                  fontFamily: "Inter",
                  fontSize: "14px",
                  marginTop: "-6px",
                }}
              >
                {/* 10+ years experience */}
              </p>
              <p
                style={{
                  fontWeight: "bold",
                  fontFamily: "Inter",
                  fontSize: "12px",
                }}
              >
                {/* 8 Sessions on Onor World */}
              </p>
              <p>
                <span>
                  {/* {Array(5)
                    .fill("")
                    .map((_, i) => (
                      <FaStar color="#F6AF25" style={{ fontSize: '18px' }} />
                    ))} */}
                </span>

                <span
                  className="text-dark"
                  style={{
                    fontFamity: "Fira Sans",
                    fontWeight: "bold",
                    fontSize: "18px",
                  }}
                >
                  {/* 5.0 */}
                </span>
              </p>
            </Card.Title>
          </Card.Body>
        </Card>
      </Row>
    </Container>
  );
}

export default Feedbacks;
