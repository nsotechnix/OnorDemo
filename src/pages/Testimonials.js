import React from "react";
import { Row, Col } from "react-bootstrap";
import YouTube from "react-youtube";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import image1 from "../images/news-and-hacks/4.png";
import image5 from "../images/news-and-hacks/5.png";
import mobile1 from "../images/news-and-hacks/mobile.png";
import "./Testimonials.scss";
import daria from "../images/news-and-hacks/daria.png";
export default function testimonials() {
  const opts = {
    height: "500",
    width: "550",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  function onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }
  return (
    <Container className="container">
      <Row>
        {/* <Col style={{ textAlign: "right" }}>
          <input
            className="search"
            type="text"
            placeholder="Search Testimonials.."
          />
        </Col> */}
        <Col sm={12} style={{ textAlign: "left", marginTop: "80px" }}>
          <h1 style={{ fontSize: "18px", fontWeight: "bold" }}>
            Onor-Our{" "}
            <span className="design-text" style={{ color: "tomato" }}>
              Testimonials
            </span>
          </h1>
        </Col>
      </Row>

      <Col style={{ textAlign: "left", marginTop: "20px" }}>
        <span
          style={{
            backgroundColor: "pink",
            borderRadius: "10px",
            padding: "10px 15px",
            marginRight: "5px",
            color: "tomato",
            textTransform: "uppercase",
          }}
        >
          Artist
        </span>
        <span
          style={{
            backgroundColor: "pink",
            borderRadius: "10px",
            padding: "10px 15px",
            marginLeft: "10px",
            color: "tomato",
            textTransform: "uppercase",
          }}
        >
          Session Type
        </span>
      </Col>

      <Row>
        <Col md={6}>
          <Card
            style={{ width: "100%", borderRadius: "10px", marginTop: "40px" }}
          >
            <Card.Body
              style={{
                height: "100%",
                width: "100%",
                borderRadius: "10px",
                boxShadow: " 0 3px 10px rgb(0 0 0 / 0.2)",
              }}
            >
              <Card.Title style={{ textAlign: "left" }}>
                <div style={{ color: "orange" }}>
                  <span
                    style={{ marginLeft: "5px" }}
                    class="fa fa-star checked"
                  ></span>
                  <span
                    style={{ marginLeft: "5px" }}
                    class="fa fa-star checked"
                  ></span>
                  <span
                    style={{ marginLeft: "5px" }}
                    class="fa fa-star checked"
                  ></span>
                  <span
                    style={{ marginLeft: "5px" }}
                    class="fa fa-star checked"
                  ></span>
                  <span
                    style={{ marginLeft: "5px" }}
                    class="fa fa-star checked"
                  ></span>
                </div>{" "}
              </Card.Title>
              <Card.Title style={{ textAlign: "left", fontWeight: "bold" }}>
                -Jennifer
              </Card.Title>
              <Card.Text style={{ fontSize: "15px", textAlign: "left" }}>
                "Doing my makeup is super fun from me but I've never been as
                efficient at it, and my technique was amateur. Ever Since my
                live session from Onor, it now takes me 20 minutes to do the
                best looks I've ever done! Makeup is more fun for me now that
                I've techniques for the looks that best compliment my eyes and
                face shape!"
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <img className="image1" src={image1} alt="image1" />
          <img className="mobile" src={mobile1} alt="image1" />
        </Col>
      </Row>

      {/*2nd section (Valerie) */}
      <Row>
        <Col sm={12} style={{ textAlign: "left", marginTop: "40px" }}>
          <h1 className="design-text" style={{ color: "tomato" }}>
            Valerie{" "}
            <span
              style={{
                fontSize: "18px",
                color: "black",
                marginLeft: "0px",
                fontFamily: "sans-serif",
                fontWeight: "bold",
              }}
            >
              for Onor
            </span>
          </h1>
        </Col>
      </Row>
      <Row style={{ marginTop: "40px" }}>
        <Col md={6}>
          <YouTube
            className="youtube"
            videoId="lGvef2HynpU"
            opts={opts}
            onReady={onReady}
          />
        </Col>
        <Col md={6}>
          <img className="image5" src={image5} alt="image5" />
          <hr
            style={{
              color: "tomato",
              height: "3px",
              width: "50%",
              borderColor: "tomato",
              backgroundColor: "tomato",
            }}
          />
          <Col md={12}>
            <p style={{ textAlign: "left" }}>
              "She taught me how to do beautiful everyday soft glam look"! She
              taught me how to do makeup more flattering for my eyeshape, how to
              get full coverage foundation,how to contour properly and many more
              usefull tips!"
            </p>
          </Col>
        </Col>
        <Col></Col>
      </Row>

      {/*Section 3 (Daria)*/}

      <Row>
        <Col sm={12} className="section-3-heading">
          <h1 className="design-text" style={{ color: "tomato" }}>
            Daria{" "}
            <span
              style={{
                fontSize: "18px",
                color: "black",
                marginLeft: "0px",
                fontFamily: "sans-serif",
                fontWeight: "bold",
              }}
            >
              for Onor
            </span>
          </h1>
        </Col>
      </Row>
      <Row style={{ marginTop: "40px" }}>
        <Col md={6}>
          <img className="image5" src={daria} alt="image5" />
          <hr
            style={{
              color: "tomato",
              height: "3px",
              width: "50%",
              borderColor: "tomato",
              backgroundColor: "tomato",
            }}
          />
          <Col md={12}>
            <p style={{ textAlign: "left" }}>
              "I was so excited we just did eye-makeup and it is just
              great!Kisten advised me abou so many good things to do,how to
              apply product which i have already and which product I could
              get.Now I know how to put my eyelashes, I did it wrong all time!"
            </p>
          </Col>
        </Col>
        <Col md={6}>
          <YouTube
            className="youtube"
            videoId="bYspDoHd-s8"
            opts={opts}
            onReady={onReady}
          />
        </Col>
        <Col></Col>
      </Row>

      {/*Testimonial Cards  heading*/}

      <Row>
        <Col sm={12} style={{ textAlign: "left", marginTop: "40px" }}>
          <h1 className="design-text" style={{ color: "tomato" }}>
            Testimonials{" "}
            <span
              style={{
                fontSize: "18px",
                color: "black",
                marginLeft: "0px",
                fontFamily: "sans-serif",
                fontWeight: "bold",
              }}
            >
              for Onor
            </span>
          </h1>
        </Col>
      </Row>
      {/*Testimonial Cards Start */}
      <Row style={{ marginBottom: "20px" }}>
        <Col md={6}>
          {/* Card 1*/}

          <Card
            style={{ width: "100%", borderRadius: "10px", marginTop: "40px" }}
          >
            <Card.Body
              style={{
                height: "100%",
                width: "100%",
                borderRadius: "10px",
                boxShadow: " 0 3px 10px rgb(0 0 0 / 0.2)",
              }}
            >
              <Card.Title style={{ textAlign: "left" }}>
                <div style={{ color: "orange" }}>
                  <span
                    style={{ marginLeft: "5px" }}
                    class="fa fa-star checked"
                  ></span>
                  <span
                    style={{ marginLeft: "5px" }}
                    class="fa fa-star checked"
                  ></span>
                  <span
                    style={{ marginLeft: "5px" }}
                    class="fa fa-star checked"
                  ></span>
                  <span
                    style={{ marginLeft: "5px" }}
                    class="fa fa-star checked"
                  ></span>
                  <span
                    style={{ marginLeft: "5px" }}
                    class="fa fa-star checked"
                  ></span>
                </div>{" "}
              </Card.Title>
              <Card.Title style={{ textAlign: "left", fontWeight: "bold" }}>
                -Darriel Roy
              </Card.Title>
              <Card.Text style={{ fontSize: "15px", textAlign: "left" }}>
                "Yesterday I had my @onor_a_new_system makeup tutorial! The
                makeup artist walked me though a step by step tutorial from
                application to product recommendations! @onor_a_new_system
                connects and allows you to access the best makeup artists from
                anywherse in the world."
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        {/* Card 2*/}

        <Col md={6}>
          <Card
            style={{ width: "100%", borderRadius: "10px", marginTop: "40px" }}
          >
            <Card.Body
              style={{
                height: "190px",
                width: "100%",
                borderRadius: "10px",
                boxShadow: " 0 3px 10px rgb(0 0 0 / 0.2)",
              }}
            >
              <Card.Title style={{ textAlign: "left" }}>
                <div style={{ color: "orange" }}>
                  <span
                    style={{ marginLeft: "5px" }}
                    class="fa fa-star checked"
                  ></span>
                  <span
                    style={{ marginLeft: "5px" }}
                    class="fa fa-star checked"
                  ></span>
                  <span
                    style={{ marginLeft: "5px" }}
                    class="fa fa-star checked"
                  ></span>
                  <span
                    style={{ marginLeft: "5px" }}
                    class="fa fa-star checked"
                  ></span>
                  <span
                    style={{ marginLeft: "5px", color: "gray" }}
                    class="fa fa-star checked"
                  ></span>
                </div>{" "}
              </Card.Title>
              <Card.Title style={{ textAlign: "left", fontWeight: "bold" }}>
                -Jeremiah Jacques{" "}
              </Card.Title>
              <Card.Text style={{ fontSize: "15px", textAlign: "left" }}>
                "My consult was cute, I get something new as it was definitely
                fun getting to relate / talk about all things makeup."
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        {/* Card 3 */}

        <Col md={6}>
          <Card
            style={{ width: "100%", borderRadius: "10px", marginTop: "40px" }}
          >
            <Card.Body
              style={{
                height: "190px",
                width: "100%",
                borderRadius: "10px",
                boxShadow: " 0 3px 10px rgb(0 0 0 / 0.2)",
              }}
            >
              <Card.Title style={{ textAlign: "left" }}>
                <div style={{ color: "orange" }}>
                  <span
                    style={{ marginLeft: "5px" }}
                    class="fa fa-star checked"
                  ></span>
                  <span
                    style={{ marginLeft: "5px" }}
                    class="fa fa-star checked"
                  ></span>
                  <span
                    style={{ marginLeft: "5px" }}
                    class="fa fa-star checked"
                  ></span>
                  <span
                    style={{ marginLeft: "5px" }}
                    class="fa fa-star checked"
                  ></span>
                  <span
                    style={{ marginLeft: "5px", color: "gray" }}
                    class="fa fa-star checked"
                  ></span>
                </div>{" "}
              </Card.Title>
              <Card.Title style={{ textAlign: "left", fontWeight: "bold" }}>
                -EMILY Cho
              </Card.Title>
              <Card.Text style={{ fontSize: "15px", textAlign: "left" }}>
                "I found the Onor Makeup session very fun and got lots of great
                makeup advice that I will be sure to try."
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        {/* CARD 4*/}
        <Col md={6}>
          <Card
            style={{ width: "100%", borderRadius: "10px", marginTop: "40px" }}
          >
            <Card.Body
              style={{
                height: "190px",
                width: "100%",
                borderRadius: "10px",
                boxShadow: " 0 3px 10px rgb(0 0 0 / 0.2)",
              }}
            >
              <Card.Title style={{ textAlign: "left" }}>
                <div style={{ color: "orange" }}>
                  <span
                    style={{ marginLeft: "5px" }}
                    class="fa fa-star checked"
                  ></span>
                  <span
                    style={{ marginLeft: "5px" }}
                    class="fa fa-star checked"
                  ></span>
                  <span
                    style={{ marginLeft: "5px" }}
                    class="fa fa-star checked"
                  ></span>
                  <span
                    style={{ marginLeft: "5px" }}
                    class="fa fa-star checked"
                  ></span>
                  <span
                    style={{ marginLeft: "5px", color: "gray" }}
                    class="fa fa-star checked"
                  ></span>
                </div>{" "}
              </Card.Title>
              <Card.Title style={{ textAlign: "left", fontWeight: "bold" }}>
                -Dr. Wasifa Ahmad Hasan
              </Card.Title>
              <Card.Text style={{ fontSize: "15px", textAlign: "left" }}>
                "The Onor session was good; I enjoyed talking to the instructor"
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        {/* CARD 5*/}
        <Col md={6}>
          <Card
            style={{ width: "100%", borderRadius: "10px", marginTop: "40px" }}
          >
            <Card.Body
              style={{
                height: "100%",
                width: "100%",
                borderRadius: "10px",
                boxShadow: " 0 3px 10px rgb(0 0 0 / 0.2)",
              }}
            >
              <Card.Title style={{ textAlign: "left" }}>
                <div style={{ color: "orange" }}>
                  <span
                    style={{ marginLeft: "5px" }}
                    class="fa fa-star checked"
                  ></span>
                  <span
                    style={{ marginLeft: "5px" }}
                    class="fa fa-star checked"
                  ></span>
                  <span
                    style={{ marginLeft: "5px" }}
                    class="fa fa-star checked"
                  ></span>
                  <span
                    style={{ marginLeft: "5px" }}
                    class="fa fa-star checked"
                  ></span>
                  <span
                    style={{ marginLeft: "5px" }}
                    class="fa fa-star checked"
                  ></span>
                </div>{" "}
              </Card.Title>
              <Card.Title style={{ textAlign: "left", fontWeight: "bold" }}>
                -Abby
              </Card.Title>
              <Card.Text style={{ fontSize: "15px", textAlign: "left" }}>
                "The Onor Makeup Artist was extremely helpful. She met me at my
                skill level and gave me product recommendations to elevate my
                current makeup routine. As someone who doesn't wear a lot of
                makeup, she made the process accessible and empowered me to be
                able to recreate the look."
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        {/* CARD 6*/}
        <Col md={6}>
          <Card
            style={{ width: "100%", borderRadius: "10px", marginTop: "40px" }}
          >
            <Card.Body
              style={{
                height: "100%",
                width: "100%",
                borderRadius: "10px",
                boxShadow: " 0 3px 10px rgb(0 0 0 / 0.2)",
              }}
            >
              <Card.Title style={{ textAlign: "left" }}>
                <div style={{ color: "orange" }}>
                  <span
                    style={{ marginLeft: "5px" }}
                    class="fa fa-star checked"
                  ></span>
                  <span
                    style={{ marginLeft: "5px" }}
                    class="fa fa-star checked"
                  ></span>
                  <span
                    style={{ marginLeft: "5px" }}
                    class="fa fa-star checked"
                  ></span>
                  <span
                    style={{ marginLeft: "5px" }}
                    class="fa fa-star checked"
                  ></span>
                  <span
                    style={{ marginLeft: "5px" }}
                    class="fa fa-star checked"
                  ></span>
                </div>{" "}
              </Card.Title>
              <Card.Title style={{ textAlign: "left", fontWeight: "bold" }}>
                -Andrea
              </Card.Title>
              <Card.Text style={{ fontSize: "15px", textAlign: "left" }}>
                "I learned a lot during the session regarding products and
                technique. She gave me an unbiased opinion on the best products,
                which I was never able to do by going to an in-store makeup
                consultation. She also took the time to adjust my technique and
                point out helpful tips. She adjusted the level of makeup to fit
                my lifestyle. It was a great experience and I will definitely be
                using what I learned in my day to day! "
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        {/* CARD 7*/}
        <Col md={6}>
          <Card
            style={{ width: "100%", borderRadius: "10px", marginTop: "40px" }}
          >
            <Card.Body
              style={{
                height: "190px",
                width: "100%",
                borderRadius: "10px",
                boxShadow: " 0 3px 10px rgb(0 0 0 / 0.2)",
              }}
            >
              <Card.Title style={{ textAlign: "left" }}>
                <div style={{ color: "orange" }}>
                  <span
                    style={{ marginLeft: "5px" }}
                    class="fa fa-star checked"
                  ></span>
                  <span
                    style={{ marginLeft: "5px" }}
                    class="fa fa-star checked"
                  ></span>
                  <span
                    style={{ marginLeft: "5px" }}
                    class="fa fa-star checked"
                  ></span>
                  <span
                    style={{ marginLeft: "5px" }}
                    class="fa fa-star checked"
                  ></span>
                  <span
                    style={{ marginLeft: "5px", color: "gray" }}
                    class="fa fa-star checked"
                  ></span>
                </div>{" "}
              </Card.Title>
              <Card.Title style={{ textAlign: "left", fontWeight: "bold" }}>
                -Aisha Abdul Rahman
              </Card.Title>
              <Card.Text style={{ fontSize: "15px", textAlign: "left" }}>
                "The session went well. It was a lot of fun to learn a lot of
                things about makeup, application, color theory, brush quality
                etc. I learned a lot."
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        {/* CARD 8*/}
        <Col md={6}>
          <Card
            style={{ width: "100%", borderRadius: "10px", marginTop: "40px" }}
          >
            <Card.Body
              style={{
                height: "100%",
                width: "100%",
                borderRadius: "10px",
                boxShadow: " 0 3px 10px rgb(0 0 0 / 0.2)",
              }}
            >
              <Card.Title style={{ textAlign: "left" }}>
                <div style={{ color: "orange" }}>
                  <span
                    style={{ marginLeft: "5px" }}
                    class="fa fa-star checked"
                  ></span>
                  <span
                    style={{ marginLeft: "5px" }}
                    class="fa fa-star checked"
                  ></span>
                  <span
                    style={{ marginLeft: "5px" }}
                    class="fa fa-star checked"
                  ></span>
                  <span
                    style={{ marginLeft: "5px" }}
                    class="fa fa-star checked"
                  ></span>
                  <span
                    style={{ marginLeft: "5px" }}
                    class="fa fa-star checked"
                  ></span>
                </div>{" "}
              </Card.Title>
              <Card.Title style={{ textAlign: "left", fontWeight: "bold" }}>
                -Deya VZ
              </Card.Title>
              <Card.Text style={{ fontSize: "15px", textAlign: "left" }}>
                "Awesome! Thank you so much for your time! I had a wonderful
                session and learned so much more about contouring and doing my
                eyebrows. I think my fans would love to join as well"
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        {/* CARD 9*/}
        <Col md={6}>
          <Card
            style={{ width: "100%", borderRadius: "10px", marginTop: "40px" }}
          >
            <Card.Body
              style={{
                height: "100%",
                width: "100%",
                borderRadius: "10px",
                boxShadow: " 0 3px 10px rgb(0 0 0 / 0.2)",
              }}
            >
              <Card.Title style={{ textAlign: "left" }}>
                <div style={{ color: "orange" }}>
                  <span
                    style={{ marginLeft: "5px" }}
                    class="fa fa-star checked"
                  ></span>
                  <span
                    style={{ marginLeft: "5px" }}
                    class="fa fa-star checked"
                  ></span>
                  <span
                    style={{ marginLeft: "5px" }}
                    class="fa fa-star checked"
                  ></span>
                  <span
                    style={{ marginLeft: "5px" }}
                    class="fa fa-star checked"
                  ></span>
                  <span
                    style={{ marginLeft: "5px" }}
                    class="fa fa-star checked"
                  ></span>
                </div>{" "}
              </Card.Title>
              <Card.Title style={{ textAlign: "left", fontWeight: "bold" }}>
                -Alyssa Eckstein
              </Card.Title>
              <Card.Text style={{ fontSize: "15px", textAlign: "left" }}>
                "Awesome, thank you so much! Yes! I had a lot of people who
                loved my eyes during my live and TikToks that day. I told them
                about the 20 minutes session and I have a lot interested! I will
                share this with my followers :)"
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        {/* CARD 10*/}
        <Col md={6}>
          <Card
            style={{ width: "100%", borderRadius: "10px", marginTop: "40px" }}
          >
            <Card.Body
              style={{
                height: "190px",
                width: "100%",
                borderRadius: "10px",
                boxShadow: " 0 3px 10px rgb(0 0 0 / 0.2)",
              }}
            >
              <Card.Title style={{ textAlign: "left" }}>
                <div style={{ color: "orange" }}>
                  <span
                    style={{ marginLeft: "5px" }}
                    class="fa fa-star checked"
                  ></span>
                  <span
                    style={{ marginLeft: "5px" }}
                    class="fa fa-star checked"
                  ></span>
                  <span
                    style={{ marginLeft: "5px" }}
                    class="fa fa-star checked"
                  ></span>
                  <span
                    style={{ marginLeft: "5px" }}
                    class="fa fa-star checked"
                  ></span>
                  <span
                    style={{ marginLeft: "5px", color: "gray" }}
                    class="fa fa-star checked"
                  ></span>
                </div>{" "}
              </Card.Title>
              <Card.Title style={{ textAlign: "left", fontWeight: "bold" }}>
                -Juhi Nigam{" "}
              </Card.Title>
              <Card.Text style={{ fontSize: "15px", textAlign: "left" }}>
                "Session was great. Learned a lot of Makeup Hacks & Tips.
                Looking forward to collaborating and working with you guys."
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        {/* CARD 11*/}
        <Col md={6}>
          <Card
            style={{ width: "100%", borderRadius: "10px", marginTop: "40px" }}
          >
            <Card.Body
              style={{
                height: "100%",
                width: "100%",
                borderRadius: "10px",
                boxShadow: " 0 3px 10px rgb(0 0 0 / 0.2)",
              }}
            >
              <Card.Title style={{ textAlign: "left" }}>
                <div style={{ color: "orange" }}>
                  <span
                    style={{ marginLeft: "5px" }}
                    class="fa fa-star checked"
                  ></span>
                  <span
                    style={{ marginLeft: "5px" }}
                    class="fa fa-star checked"
                  ></span>
                  <span
                    style={{ marginLeft: "5px" }}
                    class="fa fa-star checked"
                  ></span>
                  <span
                    style={{ marginLeft: "5px" }}
                    class="fa fa-star checked"
                  ></span>
                  <span
                    style={{ marginLeft: "5px" }}
                    class="fa fa-star checked"
                  ></span>
                </div>{" "}
              </Card.Title>
              <Card.Title style={{ textAlign: "left", fontWeight: "bold" }}>
                -Og S{" "}
              </Card.Title>
              <Card.Text style={{ fontSize: "15px", textAlign: "left" }}>
                "Thank you so much!!! I absolutely loved it!!! She was so
                incredibly friendly and professional and so informative! Even
                for all of my knowledge in make-up she was still able to teach
                me so much! What is a good way to share a link with my followers
                for your services? I have some video I am working to put
                together to help promote everything you guys offer!"
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        {/* CARD 12*/}
        <Col md={6}>
          <Card
            style={{ width: "100%", borderRadius: "10px", marginTop: "40px" }}
          >
            <Card.Body
              style={{
                height: "100%",
                width: "100%",
                borderRadius: "10px",
                boxShadow: " 0 3px 10px rgb(0 0 0 / 0.2)",
              }}
            >
              <Card.Title style={{ textAlign: "left" }}>
                <div style={{ color: "orange" }}>
                  <span
                    style={{ marginLeft: "5px" }}
                    class="fa fa-star checked"
                  ></span>
                  <span
                    style={{ marginLeft: "5px" }}
                    class="fa fa-star checked"
                  ></span>
                  <span
                    style={{ marginLeft: "5px" }}
                    class="fa fa-star checked"
                  ></span>
                  <span
                    style={{ marginLeft: "5px" }}
                    class="fa fa-star checked"
                  ></span>
                  <span
                    style={{ marginLeft: "5px" }}
                    class="fa fa-star checked"
                  ></span>
                </div>{" "}
              </Card.Title>
              <Card.Title style={{ textAlign: "left", fontWeight: "bold" }}>
                -Jenna Gehring
              </Card.Title>
              <Card.Text style={{ fontSize: "15px", textAlign: "left" }}>
                "Yes it was awesome! They only thing is maybe you can categorize
                everything and we can pick something to focus on in the initial
                email. Also writing down everything applicable to that focus, ie
                lip liner, lip stick, tissue paper for lips, ya know? That would
                be my only thing. Categorizing is a little more organized."
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        {/* CARD 13*/}
        <Col md={6}>
          <Card
            style={{ width: "100%", borderRadius: "10px", marginTop: "40px" }}
          >
            <Card.Body
              style={{
                height: "190px",
                width: "100%",
                borderRadius: "10px",
                boxShadow: " 0 3px 10px rgb(0 0 0 / 0.2)",
              }}
            >
              <Card.Title style={{ textAlign: "left" }}>
                <div style={{ color: "orange" }}>
                  <span
                    style={{ marginLeft: "5px" }}
                    class="fa fa-star checked"
                  ></span>
                  <span
                    style={{ marginLeft: "5px" }}
                    class="fa fa-star checked"
                  ></span>
                  <span
                    style={{ marginLeft: "5px" }}
                    class="fa fa-star checked"
                  ></span>
                  <span
                    style={{ marginLeft: "5px" }}
                    class="fa fa-star checked"
                  ></span>
                  <span
                    style={{ marginLeft: "5px", color: "gray" }}
                    class="fa fa-star checked"
                  ></span>
                </div>{" "}
              </Card.Title>
              <Card.Title style={{ textAlign: "left", fontWeight: "bold" }}>
                -Mellie Manfredi{" "}
              </Card.Title>
              <Card.Text style={{ fontSize: "15px", textAlign: "left" }}>
                "It was great! I got so many compliments from my friends on how
                my makeup looked :)"
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        {/* CARD 14*/}
        <Col md={6}>
          <Card
            style={{ width: "100%", borderRadius: "10px", marginTop: "40px" }}
          >
            <Card.Body
              style={{
                height: "190px",
                width: "100%",
                borderRadius: "10px",
                boxShadow: " 0 3px 10px rgb(0 0 0 / 0.2)",
              }}
            >
              <Card.Title style={{ textAlign: "left" }}>
                <div style={{ color: "orange" }}>
                  <span
                    style={{ marginLeft: "5px" }}
                    class="fa fa-star checked"
                  ></span>
                  <span
                    style={{ marginLeft: "5px" }}
                    class="fa fa-star checked"
                  ></span>
                  <span
                    style={{ marginLeft: "5px" }}
                    class="fa fa-star checked"
                  ></span>
                  <span
                    style={{ marginLeft: "5px" }}
                    class="fa fa-star checked"
                  ></span>
                  <span
                    style={{ marginLeft: "5px", color: "gray" }}
                    class="fa fa-star checked"
                  ></span>
                </div>{" "}
              </Card.Title>
              <Card.Title style={{ textAlign: "left", fontWeight: "bold" }}>
                -Chrysalis Pipkin
              </Card.Title>
              <Card.Text style={{ fontSize: "15px", textAlign: "left" }}>
                "Yes, it was great. I enjoyed it. Artist was very helpful &
                guided me to achieve my looks. Thank you!"
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        {/* CARD 15*/}
        <Col md={6}>
          <Card
            style={{ width: "100%", borderRadius: "10px", marginTop: "40px" }}
          >
            <Card.Body
              style={{
                height: "190px",
                width: "100%",
                borderRadius: "10px",
                boxShadow: " 0 3px 10px rgb(0 0 0 / 0.2)",
              }}
            >
              <Card.Title style={{ textAlign: "left" }}>
                <div style={{ color: "orange" }}>
                  <span
                    style={{ marginLeft: "5px" }}
                    class="fa fa-star checked"
                  ></span>
                  <span
                    style={{ marginLeft: "5px" }}
                    class="fa fa-star checked"
                  ></span>
                  <span
                    style={{ marginLeft: "5px" }}
                    class="fa fa-star checked"
                  ></span>
                  <span
                    style={{ marginLeft: "5px" }}
                    class="fa fa-star checked"
                  ></span>
                  <span
                    style={{ marginLeft: "5px" }}
                    class="fa fa-star checked"
                  ></span>
                </div>{" "}
              </Card.Title>
              <Card.Title style={{ textAlign: "left", fontWeight: "bold" }}>
                -Kaytee Godiva{" "}
              </Card.Title>
              <Card.Text style={{ fontSize: "15px", textAlign: "left" }}>
                "It was wonderful thank you. I already shared stories yesterday
                regarding it. Both the makeup artist and Onor were tagged and it
                was saved as a highlight."
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        {/* CARD 16*/}
        <Col md={6}>
          <Card
            style={{ width: "100%", borderRadius: "10px", marginTop: "40px" }}
          >
            <Card.Body
              style={{
                height: "190px",
                width: "100%",
                borderRadius: "10px",
                boxShadow: " 0 3px 10px rgb(0 0 0 / 0.2)",
              }}
            >
              <Card.Title style={{ textAlign: "left" }}>
                <div style={{ color: "orange" }}>
                  <span
                    style={{ marginLeft: "5px" }}
                    class="fa fa-star checked"
                  ></span>
                  <span
                    style={{ marginLeft: "5px" }}
                    class="fa fa-star checked"
                  ></span>
                  <span
                    style={{ marginLeft: "5px" }}
                    class="fa fa-star checked"
                  ></span>
                  <span
                    style={{ marginLeft: "5px" }}
                    class="fa fa-star checked"
                  ></span>
                  <span
                    style={{ marginLeft: "5px", color: "gray" }}
                    class="fa fa-star checked"
                  ></span>
                </div>{" "}
              </Card.Title>
              <Card.Title style={{ textAlign: "left", fontWeight: "bold" }}>
                -Niyati Jain{" "}
              </Card.Title>
              <Card.Text style={{ fontSize: "15px", textAlign: "left" }}>
                "It was great indeed. I like the way Artist help me to looks
                good. She was so very friendly and professional and so
                informative too!"
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        {/* CARD 17*/}
        <Col md={6}>
          <Card
            style={{ width: "100%", borderRadius: "10px", marginTop: "40px" }}
          >
            <Card.Body
              style={{
                height: "190px",
                width: "100%",
                borderRadius: "10px",
                boxShadow: " 0 3px 10px rgb(0 0 0 / 0.2)",
              }}
            >
              <Card.Title style={{ textAlign: "left" }}>
                <div style={{ color: "orange" }}>
                  <span
                    style={{ marginLeft: "5px" }}
                    class="fa fa-star checked"
                  ></span>
                  <span
                    style={{ marginLeft: "5px" }}
                    class="fa fa-star checked"
                  ></span>
                  <span
                    style={{ marginLeft: "5px" }}
                    class="fa fa-star checked"
                  ></span>
                  <span
                    style={{ marginLeft: "5px" }}
                    class="fa fa-star checked"
                  ></span>
                  <span
                    style={{ marginLeft: "5px", color: "gray" }}
                    class="fa fa-star checked"
                  ></span>
                </div>{" "}
              </Card.Title>
              <Card.Title style={{ textAlign: "left", fontWeight: "bold" }}>
                -Julie Piccolo{" "}
              </Card.Title>
              <Card.Text style={{ fontSize: "15px", textAlign: "left" }}>
                "It went great, I really enjoyed the session! Artist was so
                helpful. Can’t wait to post :)"
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        {/* CARD 18*/}
        <Col md={6}>
          <Card
            style={{ width: "100%", borderRadius: "10px", marginTop: "40px" }}
          >
            <Card.Body
              style={{
                height: "190px",
                width: "100%",
                borderRadius: "10px",
                boxShadow: " 0 3px 10px rgb(0 0 0 / 0.2)",
              }}
            >
              <Card.Title style={{ textAlign: "left" }}>
                <div style={{ color: "orange" }}>
                  <span
                    style={{ marginLeft: "5px" }}
                    class="fa fa-star checked"
                  ></span>
                  <span
                    style={{ marginLeft: "5px" }}
                    class="fa fa-star checked"
                  ></span>
                  <span
                    style={{ marginLeft: "5px" }}
                    class="fa fa-star checked"
                  ></span>
                  <span
                    style={{ marginLeft: "5px" }}
                    class="fa fa-star checked"
                  ></span>
                  <span
                    style={{ marginLeft: "5px" }}
                    class="fa fa-star checked"
                  ></span>
                </div>{" "}
              </Card.Title>
              <Card.Title style={{ textAlign: "left", fontWeight: "bold" }}>
                -Janette LeBreux
              </Card.Title>
              <Card.Text style={{ fontSize: "15px", textAlign: "left" }}>
                "I actually enjoyed yesterday session very much. It was like
                talking with old friend. Looking forward second session with
                makeup. I will make a list in this week to help out."
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        {/* CARD 19*/}
        <Col md={6}>
          <Card
            style={{ width: "100%", borderRadius: "10px", marginTop: "40px" }}
          >
            <Card.Body
              style={{
                height: "190px",
                width: "100%",
                borderRadius: "10px",
                boxShadow: " 0 3px 10px rgb(0 0 0 / 0.2)",
              }}
            >
              <Card.Title style={{ textAlign: "left" }}>
                <div style={{ color: "orange" }}>
                  <span
                    style={{ marginLeft: "5px" }}
                    class="fa fa-star checked"
                  ></span>
                  <span
                    style={{ marginLeft: "5px" }}
                    class="fa fa-star checked"
                  ></span>
                  <span
                    style={{ marginLeft: "5px" }}
                    class="fa fa-star checked"
                  ></span>
                  <span
                    style={{ marginLeft: "5px" }}
                    class="fa fa-star checked"
                  ></span>
                  <span
                    style={{ marginLeft: "5px", color: "gray" }}
                    class="fa fa-star checked"
                  ></span>
                </div>{" "}
              </Card.Title>
              <Card.Title style={{ textAlign: "left", fontWeight: "bold" }}>
                -Ramona Diez
              </Card.Title>
              <Card.Text style={{ fontSize: "15px", textAlign: "left" }}>
                "It was amazing experience. I learned a lots of Makeup hacks.
                Artist was amazing, would recommend Onor sessions to all Makeup
                lovers"
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        {/* CARD 20*/}
        <Col md={6}>
          <Card
            style={{ width: "100%", borderRadius: "10px", marginTop: "40px" }}
          >
            <Card.Body
              style={{
                height: "190px",
                width: "100%",
                borderRadius: "10px",
                boxShadow: " 0 3px 10px rgb(0 0 0 / 0.2)",
              }}
            >
              <Card.Title style={{ textAlign: "left" }}>
                <div style={{ color: "orange" }}>
                  <span
                    style={{ marginLeft: "5px" }}
                    class="fa fa-star checked"
                  ></span>
                  <span
                    style={{ marginLeft: "5px" }}
                    class="fa fa-star checked"
                  ></span>
                  <span
                    style={{ marginLeft: "5px" }}
                    class="fa fa-star checked"
                  ></span>
                  <span
                    style={{ marginLeft: "5px" }}
                    class="fa fa-star checked"
                  ></span>
                  <span
                    style={{ marginLeft: "5px", color: "gray" }}
                    class="fa fa-star checked"
                  ></span>
                </div>{" "}
              </Card.Title>
              <Card.Title style={{ textAlign: "left", fontWeight: "bold" }}>
                -Tien Nguyen{" "}
              </Card.Title>
              <Card.Text style={{ fontSize: "15px", textAlign: "left" }}>
                "It was great experience. So informative & fruitful. I like the
                way Artist brief me about the Makeup hacks & tricks. Surely
                recommend to others."
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        {/* CARD 21*/}
        <Col md={6}>
          <Card
            style={{ width: "100%", borderRadius: "10px", marginTop: "40px" }}
          >
            <Card.Body
              style={{
                height: "100%",
                width: "100%",
                borderRadius: "10px",
                boxShadow: " 0 3px 10px rgb(0 0 0 / 0.2)",
              }}
            >
              <Card.Title style={{ textAlign: "left" }}>
                <div style={{ color: "orange" }}>
                  <span
                    style={{ marginLeft: "5px" }}
                    class="fa fa-star checked"
                  ></span>
                  <span
                    style={{ marginLeft: "5px" }}
                    class="fa fa-star checked"
                  ></span>
                  <span
                    style={{ marginLeft: "5px" }}
                    class="fa fa-star checked"
                  ></span>
                  <span
                    style={{ marginLeft: "5px" }}
                    class="fa fa-star checked"
                  ></span>
                  <span
                    style={{ marginLeft: "5px" }}
                    class="fa fa-star checked"
                  ></span>
                </div>{" "}
              </Card.Title>
              <Card.Title style={{ textAlign: "left", fontWeight: "bold" }}>
                -April Paisley
              </Card.Title>
              <Card.Text style={{ fontSize: "15px", textAlign: "left" }}>
                "It was wonderful! I really learned a lot about what I’ve been
                doing wrong. I also learned many new tricks. I felt really
                comfortable through the whole thing and I’m usually one to be
                super anxious on video calls."
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        {/* CARD 22*/}
        <Col md={6}>
          <Card
            style={{ width: "100%", borderRadius: "10px", marginTop: "40px" }}
          >
            <Card.Body
              style={{
                height: "190px",
                width: "100%",
                borderRadius: "10px",
                boxShadow: " 0 3px 10px rgb(0 0 0 / 0.2)",
              }}
            >
              <Card.Title style={{ textAlign: "left" }}>
                <div style={{ color: "orange" }}>
                  <span
                    style={{ marginLeft: "5px" }}
                    class="fa fa-star checked"
                  ></span>
                  <span
                    style={{ marginLeft: "5px" }}
                    class="fa fa-star checked"
                  ></span>
                  <span
                    style={{ marginLeft: "5px" }}
                    class="fa fa-star checked"
                  ></span>
                  <span
                    style={{ marginLeft: "5px" }}
                    class="fa fa-star checked"
                  ></span>
                  <span
                    style={{ marginLeft: "5px" }}
                    class="fa fa-star checked"
                  ></span>
                </div>{" "}
              </Card.Title>
              <Card.Title style={{ textAlign: "left", fontWeight: "bold" }}>
                -Carla Maggiolo{" "}
              </Card.Title>
              <Card.Text style={{ fontSize: "15px", textAlign: "left" }}>
                "Make up session went great! It was so informative; I will post
                content & create on my feed. I can add those to stories & only
                original content on my posts about Onor."
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        {/* CARD 23*/}
        <Col md={6}>
          <Card
            style={{ width: "100%", borderRadius: "10px", marginTop: "40px" }}
          >
            <Card.Body
              style={{
                height: "190px",
                width: "100%",
                borderRadius: "10px",
                boxShadow: " 0 3px 10px rgb(0 0 0 / 0.2)",
              }}
            >
              <Card.Title style={{ textAlign: "left" }}>
                <div style={{ color: "orange" }}>
                  <span
                    style={{ marginLeft: "5px" }}
                    class="fa fa-star checked"
                  ></span>
                  <span
                    style={{ marginLeft: "5px" }}
                    class="fa fa-star checked"
                  ></span>
                  <span
                    style={{ marginLeft: "5px" }}
                    class="fa fa-star checked"
                  ></span>
                  <span
                    style={{ marginLeft: "5px" }}
                    class="fa fa-star checked"
                  ></span>
                  <span
                    style={{ marginLeft: "5px" }}
                    class="fa fa-star checked"
                  ></span>
                </div>{" "}
              </Card.Title>
              <Card.Title style={{ textAlign: "left", fontWeight: "bold" }}>
                -Diana Carranza{" "}
              </Card.Title>
              <Card.Text style={{ fontSize: "15px", textAlign: "left" }}>
                "Makeup Session was good & I enjoyed it. I will recommend this
                to my followers & urge them to take a up a free session with you
                guys for sure"
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        {/* CARD 24*/}
        <Col md={6}>
          <Card
            style={{ width: "100%", borderRadius: "10px", marginTop: "40px" }}
          >
            <Card.Body
              style={{
                height: "190px",
                width: "100%",
                borderRadius: "10px",
                boxShadow: " 0 3px 10px rgb(0 0 0 / 0.2)",
              }}
            >
              <Card.Title style={{ textAlign: "left" }}>
                <div style={{ color: "orange" }}>
                  <span
                    style={{ marginLeft: "5px" }}
                    class="fa fa-star checked"
                  ></span>
                  <span
                    style={{ marginLeft: "5px" }}
                    class="fa fa-star checked"
                  ></span>
                  <span
                    style={{ marginLeft: "5px" }}
                    class="fa fa-star checked"
                  ></span>
                  <span
                    style={{ marginLeft: "5px" }}
                    class="fa fa-star checked"
                  ></span>
                  <span
                    style={{ marginLeft: "5px", color: "gray" }}
                    class="fa fa-star checked"
                  ></span>
                </div>{" "}
              </Card.Title>
              <Card.Title style={{ textAlign: "left", fontWeight: "bold" }}>
                -Chelsea Brown{" "}
              </Card.Title>
              <Card.Text style={{ fontSize: "15px", textAlign: "left" }}>
                "Awesome Makeup consult. Would definitely recommend top my
                followers."
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col md={6}>
          <Card
            style={{ width: "100%", borderRadius: "10px", marginTop: "40px" }}
          >
            <Card.Body
              style={{
                height: "190px",
                width: "100%",
                borderRadius: "10px",
                boxShadow: " 0 3px 10px rgb(0 0 0 / 0.2)",
              }}
            >
              <Card.Title style={{ textAlign: "left" }}>
                <div style={{ color: "orange" }}>
                  <span
                    style={{ marginLeft: "5px" }}
                    class="fa fa-star checked"
                  ></span>
                  <span
                    style={{ marginLeft: "5px" }}
                    class="fa fa-star checked"
                  ></span>
                  <span
                    style={{ marginLeft: "5px" }}
                    class="fa fa-star checked"
                  ></span>
                  <span
                    style={{ marginLeft: "5px" }}
                    class="fa fa-star checked"
                  ></span>
                  <span
                    style={{ marginLeft: "5px", color: "gray" }}
                    class="fa fa-star checked"
                  ></span>
                </div>{" "}
              </Card.Title>
              <Card.Title style={{ textAlign: "left", fontWeight: "bold" }}>
                -Susana C{" "}
              </Card.Title>
              <Card.Text style={{ fontSize: "15px", textAlign: "left" }}>
                "The artist explained it in a very simple way, she is very
                professional and flexible/open when I asked for variations of
                what she suggested."
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col md={6}>
          <Card
            style={{ width: "100%", borderRadius: "10px", marginTop: "40px" }}
          >
            <Card.Body
              style={{
                height: "100%",
                width: "100%",
                borderRadius: "10px",
                boxShadow: " 0 3px 10px rgb(0 0 0 / 0.2)",
              }}
            >
              <Card.Title style={{ textAlign: "left" }}>
                <div style={{ color: "orange" }}>
                  <span
                    style={{ marginLeft: "5px" }}
                    class="fa fa-star checked"
                  ></span>
                  <span
                    style={{ marginLeft: "5px" }}
                    class="fa fa-star checked"
                  ></span>
                  <span
                    style={{ marginLeft: "5px" }}
                    class="fa fa-star checked"
                  ></span>
                  <span
                    style={{ marginLeft: "5px" }}
                    class="fa fa-star checked"
                  ></span>
                  <span
                    style={{ marginLeft: "5px", color: "gray" }}
                    class="fa fa-star checked"
                  ></span>
                </div>{" "}
              </Card.Title>
              <Card.Title style={{ textAlign: "left", fontWeight: "bold" }}>
                -Jill F{" "}
              </Card.Title>
              <Card.Text style={{ fontSize: "15px", textAlign: "left" }}>
                "The artist did an amazing job. She was so patient and
                communicated everything in a way that was easy to understand.
                She was also really friendly and made the session so much fun.
                She taught me some new makeup tricks that I never would have
                figured out on my own. I am now using what I learned every time
                I apply my makeup and I’m so happy with the results."
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
