import React, { Fragment, useEffect, useState } from "react";
import {
  API_FETCH_ALL_CATEGORIES,
  API_FETCH_GIGS,
  API_FETCH_TASKS_ALL,
} from "../utils/API_ENDPOINTS";
import withWidth, { isWidthUp } from "@material-ui/core/withWidth";
import axios from "axios";
import { connect } from "react-redux";
import MyDialog from "../components/MyDialog";
import "./Homepage.scss";
import { get_homepage_gigs } from "../redux/actions/HomePageAction";
import { isNull, isUndefined } from "lodash";
import { withFirebase } from "../firebase";
import { usePromiseTracker, trackPromise } from "react-promise-tracker";
import { action_rating_dialog_start } from "../redux/actions/RatingAction";
import { Container } from "react-bootstrap";
// imports for homepage components
import NavComponent from "./homepage/Nav";
import ServiceHeader from "./homepage/ServiceHeader";
import dummyImage from "../svg/man.svg";
import Testimonials from "./homepage/Testimonials";
import HomePage1 from "../images/homepage12.png";
import HomePage2 from "../images/beauty_expert.png";
import { Row, Col, Card, Button } from "react-bootstrap";
import HeadsetMicIcon from "../svg/headset.svg";
import SearchIcon from "../svg/triangle.svg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Banner from "../components/Banner";
import GigComponent from "../components/GigComponent";
import TaskComponent from "../components/TaskComponent";
import GigsListLoading from "../components/GigsListLoading";
import TextField from "@material-ui/core/TextField";
import ProgressBar from "../components/ProgressBar";
import ServiceHeaderAuth from "../components/ServiceHeader";
import CategoryComponent from "./homepage/CategoryComponent";
import CarousalSlider from "./CarousalSlide";
import { BiVideo } from "react-icons/bi";
import { BsArrowUpCircle } from "react-icons/bs";
import {
  action_progress_start,
  action_progress_stop,
} from "../redux/actions/progressAction";
import {
  action_clear_gig_search,
  action_start_gig_search,
} from "../redux/actions/searchActions";
import {
  action_sign_out,
  action_sign_out_seller,
  thunk_seller_sign_in,
} from "../redux/actions/authActions";

import { action_sign_up_as_seller } from "../redux/actions/authActions";
import { action_dialog_open } from "../redux/actions/dialogAction";
import TextTransition, { presets } from "react-text-transition";
import Session from "../images/session.png";
import Interactive from "../images/interactive.png";
import Look from "../images/look.png";
import Arrow from "../svg/arrow-right.png";
import Upload from "../images/upload.png";
import Analyze from "../images/analyze.png";
import Report from "../images/report.png";
import Analysis from "../images/analysis_makeup.png";
import Challenge from "../images/makeup_challenge.png";
import Slider from "react-slick";
import { HStack, Box, Stack, Image, Text } from "@chakra-ui/react";
import { FaStar } from "react-icons/fa";
import { FiArrowRight, FiShare } from "react-icons/fi";
import Feedback1 from "../images/feedback1.png";
import Feedback2 from "../images/feedback2.png";
import Feedback3 from "../images/feedback3.png";
import Feedback4 from "../images/feedback4.png";
import Wade from "../images/wade.png";
import Cons from "./Cons";
import Feedback from "./Feedbacks";
import Tips from "./Tips";
import FAQ from "./FAQ";
import Footer from "./Footer";
import Footerr from "./Footerr";
import TextTruncate from "react-text-truncate";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
const settings = {
  centerMode: true,
  infinite: true,
  centerPadding: "100px",
  slidesToShow: 3,
  speed: 1000,
  fontFamily: "Clash Display Bold",
};
const TEXTS = [
  "Social media",
  "Shows & Reels",
  "Parties",
  "Events",
  "Yourself",
  "Your World",
];

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 4,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1200 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1200, min: 1024 },
    items: 3,
  },
  tabletSmall: {
    breakpoint: { max: 1024, min: 464 },
    items: 2.6,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2,
  },
};

let Homepage = (props) => {
  const { promiseInProgress } = usePromiseTracker();
  const [] = useState(false);
  const [taskList, setTaskList] = useState([]);
  const [categories, setCategories] = useState({});
  const [] = useState([]);
  const [productList, setProductList] = useState([]);
  const [subscriptionEmail, setSubscriptionEmail] = useState("");

  const db = props.firebase.firestore;

  // console.warn({...props})

  let initailState = [];
  const [, setImageLink] = useState(initailState);
  const { auth, dialog } = props;

  useEffect(() => {
    // !props.auth.isAlsoSeller ?
    handleGetProductList();
    // :
    handleHotTaskLists();
    console.log("taskList");

    axios
      .get(
        "https://api.unsplash.com/photos/?client_id=VJF70gv6h3Dwsy7p5PYFpoQMteJuv4QaNBO0MgU4woY"
      )
      .then((result) => {
        setImageLink(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleHotTaskLists = async () => {
    try {
      const taskResult = await trackPromise(axios.get(API_FETCH_TASKS_ALL));
      if (!isUndefined(taskResult) && !isUndefined(taskResult.data)) {
        setTaskList(taskResult.data.request_list);
      }
    } catch (e) {
      console.log(e);
    }
  };

  const fetchCategories = async () => {
    try {
      const result = await axios.get(API_FETCH_ALL_CATEGORIES);
      if (!isUndefined(result) && !isUndefined(result.data)) {
        setCategories(result.data);
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchCategories();
    const query = new URLSearchParams(window.location.search);

    if (query.get("success")) {
      console.log("Order placed! You will receive an email confirmation.");
    }

    if (query.get("canceled")) {
      console.log("Order placed! You will receive an email confirmation.");
    }
  }, []);

  const handleGetProductList = async () => {
    try {
      const prodResult = await trackPromise(axios.get(API_FETCH_GIGS));
      if (!isUndefined(prodResult) && !isUndefined(prodResult.data)) {
        setProductList(prodResult.data.gig_list.productList.reverse());
      }
    } catch (e) {
      console.log(e);
    }
  };

  const firstList = productList.slice(0, 4);
  const secondList = productList.slice(4, 8);
  const firstListTasks = taskList.slice(0, 4);
  const secondListTasks = taskList.slice(4, 8);

  useEffect(() => {
    db.collection("chatInfo")
      .get()
      .then((querySnapshot) => {
        querySnapshot.docs.map(() => {});
      });
  }, []);

  const subscribeToOnor = (e) => {
    if (
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        subscriptionEmail
      )
    ) {
      props.actionDialogOpen({
        title: "Success",
        message: `Hi ${subscriptionEmail}, Thank you for subscribing us.`,
        positive: "Okay",
        type: "Alert",
      });
      setSubscriptionEmail("");
    } else {
      props.actionDialogOpen({
        title: "Invalid email",
        message: `Please enter a valid email address`,
        positive: "Retry",
        type: "Alert",
      });
    }
  };
  const [index, setIndex] = React.useState(0);
  useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      2000 // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);
  const [modalShow, setModalShow] = useState(false);

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
            <img src={SearchIcon} /> Photo Submission for Facial Analysis
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

  return (
    <Fragment>
      {auth.isAuthorized ? (
        props.auth.isAlsoSeller ? (
          <ServiceHeaderAuth isRequest={0} />
        ) : (
          <ServiceHeaderAuth isRequest={1} />
        )
      ) : null}
      {/* {props.progress.isOpen && (
        <ProgressBar title={"Hang on! We're processing..."} />
      )} */}
      <Container>
        {/* <NavComponent /> */}
        {auth.isAuthorized && (
          <MyDialog
            isOpen={dialog.isOpen}
            title="Success"
            message="You are successfully Logged in"
            positive="Ok"
          />
        )}
      </Container>
      {/* <hr /> */}
      {!auth.isAuthorized && (
        <>
          <Row>
            <Col md={6} className={"m-top"}>
              <Col>
                <h1 className={"main-header"}>Get ready for</h1>
                {/* Dynamic Text starts*/}
                <Col>
                  <Row className="slide-text-center">
                    <h1 className={"main-sub-header"}>
                      <TextTransition
                        className="text-trans"
                        text={TEXTS[index % TEXTS.length]}
                        springConfig={presets.slow}
                      />
                    </h1>
                  </Row>
                </Col>
                {/* Dynamic Text ends */}
                <br />
                <p className={"header-text"}>
                  Personalized makeup session to get you ready for life
                </p>
                <span className={"booking-btn-up"}>
                  <button
                    onClick={(e) =>
                      window.open(
                        "https://calendly.com/onorservices-calendar/consult-a-makeup-maestro",
                        "_blank"
                      )
                    }
                    class={"header-book-button"}
                  >
                    Book a free live consult{" "}
                    <BiVideo
                      style={{
                        backgroundColor: "transparent",
                        fontSize: "28px",
                      }}
                    />
                    <span className="material-icons"></span>
                  </button>
                  <p className="header-question">
                    1:1 expert consult to analyze your skin & <br /> make
                    customized recommendations
                  </p>
                  <p className="header-question header-review">
                    <span
                      style={{ marginLeft: "5px", color: "orange" }}
                      class="fa fa-star checked"
                    ></span>
                    <span
                      style={{ marginLeft: "5px", color: "orange" }}
                      class="fa fa-star checked"
                    ></span>
                    <span
                      style={{ marginLeft: "5px", color: "orange" }}
                      class="fa fa-star checked"
                    ></span>
                    <span
                      style={{ marginLeft: "5px", color: "orange" }}
                      class="fa fa-star checked"
                    ></span>
                    <span
                      style={{ marginLeft: "5px", color: "orange" }}
                      class="fa fa-star checked"
                    ></span>
                    <span
                      style={{
                        fontFamily: "Fira sans",
                        fontSize: "18px",
                        marginLeft: "5px",
                        fontWeight: "700",
                        color: "black",
                        lineHeight: "22px",
                      }}
                    >
                      4.9
                    </span>
                    <span
                      style={{
                        fontFamily: "Fira sans",
                        fontSize: "18px",
                        marginLeft: "5px",
                        fontWeight: "400",
                        color: "black",
                        lineHeight: "22px",
                        color: "gray",
                      }}
                    >
                      100's of reviews
                    </span>
                  </p>
                </span>
              </Col>
            </Col>
            <Col md={6} className={"d-flex align-items-left mt-0 mt-sm-5"}>
              <img
                src={HomePage1}
                alt="image"
                className={"mx-sm-4"}
                style={{ height: "100%", width: "100%" }}
                className={"homepage-images"}
              />
            </Col>
            <Col
              lg={12}
              style={{ margin: "0 16px 0 16px" }}
              className={"booking-btn"}
            >
              <button class={"header-book-button"}>
                Book a free live consult{" "}
                <BiVideo
                  style={{ backgroundColor: "transparent", fontSize: "25px" }}
                />
                <span className="material-icons"></span>
              </button>
              <p className="header-question">
                1:1 expert consult to analyze your skin & <br /> make customized
                recommendations
              </p>
              <p className="header-question header-review">
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
                <span
                  style={{
                    marginLeft: "5px",
                    fontWeight: "bold",
                    color: "black",
                  }}
                >
                  4.9
                </span>
                <span
                  style={{
                    marginLeft: "10px",
                    color: "gray",
                  }}
                >
                  100's of Reviews
                </span>
              </p>
            </Col>
          </Row>

          <Row className={"mt-5 mx-md-5"}>
            <Col xs={12}>
              <h1 className={"slider-header"}>
                A search bar is a drag. Just talk to an expert!
              </h1>
              <p className={"slider-text"}>
                Onor’s certified makeup gurus offers custom recommendation for
                YOUR needs! Anytime. Anywhere.
              </p>
              {/* <img
                src={Challenge}
                alt="image"
                className={"mx-sm-4"}
                style={{ height: "100%", width: "100%" }}
                className={"homepage-images"}
              /> */}

              <Col className={"slider-division"}>
                <CarousalSlider />
              </Col>
            </Col>
          </Row>
          <Container className="slider-margin-top">
            <Row className={"text-center slider-button-top"}>
              <Col>
                <p className="slider-makeup-text">
                  What's right look for you? The right shade? The right brushes?
                  <br />
                  Need help re-creating a filter IRL? Or help figuring it all
                  out?
                </p>
                <button
                  className={
                    "mt-2 btn btn-dark makeup-upload-button-slider makeup-upload-button-slider-display"
                  }
                  style={{ fontSize: "18px", backgroundColor: "#000000" }}
                >
                  Book a free live consult{" "}
                  <BsArrowUpCircle
                    style={{
                      backgroundColor: "transparent",
                      fontSize: "20px",
                    }}
                  />
                </button>
              </Col>
            </Row>
          </Container>
          <h1 className={"help-header"}>Our 3 Step Process</h1>

          <Row>
            <Col md={6} className={"d-flex"}>
              <Container>
                <img className={"help-image"} src={HomePage2} alt="image" />
              </Container>
            </Col>
            <Col md={6}>
              <Container className="d-flex text-container">
                <span>
                  <img className={"makeup-side-image"} src={SearchIcon} />
                </span>
                <span>
                  {" "}
                  <h1 className={"makeup-section-header"}>
                    Live session with <br />
                    <span
                      style={{
                        fontFamily: "Clash Display Bold",
                        color: "black",
                      }}
                    >
                      {" "}
                      Onor BEAUTY{" "}
                    </span>{" "}
                    <span
                      style={{
                        fontWeight: "bold",
                        color: "black",
                        fontFamily: "Clash Display Bold",
                      }}
                    >
                      {" "}
                      <br /> Expert{" "}
                    </span>
                  </h1>{" "}
                </span>
              </Container>
              <Container>
                <Row
                  className={"justify-content-center align-items-center px-5"}
                >
                  <Col lg={3} className={"text-center"}>
                    <img className={"help-round-image"} src={Session} />
                    <br />
                    <span class={"help-round-image-text"}>
                      Book a
                      <br />
                      free consult
                    </span>
                  </Col>
                  <Col lg={1} className={"arrow-mobile"}>
                    <img
                      style={{
                        marginTop: "-35px",
                        marginLeft: "-8px",
                        height: "1.5em",
                        width: "2em",
                        filter: "grayscale(100%)",
                      }}
                      src={Arrow}
                    />
                  </Col>
                  <Col lg={3} className={"text-center"}>
                    <img className={"help-round-image"} src={Interactive} />
                    <br />
                    <span class={"help-round-image-text"}>
                      Get customized <br />
                      recommendations
                    </span>
                  </Col>
                  <Col lg={1} className={"arrow-mobile"}>
                    <img
                      style={{
                        height: "1.5em",
                        width: "2em",
                        marginLeft: "-10px",
                        marginTop: "-35px",
                        filter: "grayscale(100%)",
                      }}
                      src={Arrow}
                    />
                  </Col>
                  <Col lg={3} className={"text-center"}>
                    <img className={"help-round-image"} src={Look} />
                    <br />
                    <span class={"help-round-image-text"}>
                      Buy session for <br />
                      'your' best look
                    </span>
                  </Col>
                </Row>
              </Container>
              <Container
                style={{ marginLeft: "60px" }}
                className={"arrow-mobile"}
              >
                <span>
                  <button
                    style={{
                      padding: "11px 50px",
                      marginLeft: "20px",
                      fontSize: "18px",
                      boxShadow: "7px 6px 0px rgba(0, 0, 0, 0.12)",
                      borderRadius: "4px",
                      height: "64px",
                      fontFamily: "Inter",
                      fontWeight: "700",
                    }}
                    onClick={(e) =>
                      window.open(
                        "https://calendly.com/onorservices-calendar/consult-a-makeup-maestro",
                        "_blank"
                      )
                    }
                    className={
                      "mt-2 mt-lg-5 mb-0 mb-lg-3 btn btn-primary rounded"
                    }
                  >
                    Book a free live consult{" "}
                    <BiVideo
                      style={{
                        backgroundColor: "transparent",
                        fontSize: "25px",
                      }}
                    />
                  </button>
                </span>
              </Container>
            </Col>
          </Row>

          {/* 3rd section */}

          <Row style={{ paddingTop: "150px" }}>
            <Col md={6} className={"second-image-temp"}>
              {/* <img src={HomePage2} alt="image" className={"homepage-images"} /> */}
            </Col>
            <Col md={6} xs={{ span: 12, order: 2 }} md={{ span: 6, order: 1 }}>
              <Container className={"d-flex"}>
                <span>
                  <img className={"makeup-side-image"} src={SearchIcon} />
                </span>
                <span>
                  {" "}
                  <h1 className={"makeup-section-header2"}>
                    Upload your photo for <br />
                    <span
                      style={{
                        fontFamily: "Clash Display Bold",
                        color: "black",
                      }}
                    >
                      {" "}
                      Face Analysis &{" "}
                    </span>{" "}
                    <span
                      style={{
                        color: "black",
                        fontFamily: "Clash Display Bold",
                      }}
                    >
                      {" "}
                      <br /> makeup suggestions{" "}
                    </span>
                  </h1>{" "}
                </span>
              </Container>
              <Container>
                <Row
                  className={"justify-content-center align-items-center px-5"}
                >
                  <Col lg={3} className={"text-center"}>
                    <img className={"help-round-image-2"} src={Upload} />
                    <br />
                    <span class={"help-round-image-text-2"}>
                      Upload your <br />
                      Photos
                    </span>
                  </Col>
                  <Col lg={1} className={"arrow-mobile"}>
                    <img
                      style={{
                        marginTop: "-35px",
                        marginLeft: "-10px",
                        height: "1.5em",
                        width: "2em",
                        filter: "grayscale(100%)",
                      }}
                      src={Arrow}
                    />
                  </Col>
                  <Col lg={4} className={"text-center"}>
                    <img className={"help-round-image-2"} src={Analyze} />
                    <br />
                    <span class={"help-round-image-text-2-a"}>
                      Onor Experts + AI gives
                      <br /> custom recommendations
                    </span>
                  </Col>
                  <Col lg={1} className={"arrow-mobile"}>
                    <img
                      style={{
                        height: "1.5em",
                        width: "2em",
                        marginLeft: "-10px",
                        marginTop: "-35px",
                        filter: "grayscale(100%)",
                      }}
                      src={Arrow}
                    />
                  </Col>
                  <Col lg={3} className={"text-center"}>
                    <img className={"help-round-image-2"} src={Report} />
                    <br />
                    <span class={"help-round-image-text-2"}>
                      Get detailed <br />
                      report
                    </span>
                  </Col>
                </Row>
              </Container>
              <Container className={"upload-btn"}>
                <button
                  onClick={() => setModalShow(true)}
                  className={
                    "mt-2 mt-lg-5 mb-0 mb-lg-3 btn btn-dark makeup-upload-button"
                  }
                  style={{
                    fontSize: "18px",
                    fontFamily: "Inter",
                    backgroundColor: "#000000",
                    fontWeight: "700",
                  }}
                >
                  Upload your Photos{" "}
                  <BsArrowUpCircle
                    style={{
                      backgroundColor: "transparent",
                      fontSize: "20px",
                    }}
                  />
                </button>
                <MyVerticallyCenteredModal
                  show={modalShow}
                  onHide={() => setModalShow(false)}
                />
              </Container>
            </Col>
            <Col md={6} xs={{ span: 12, order: 1 }} md={{ span: 6, order: 1 }}>
              <Container>
                <img
                  src={Analysis}
                  alt="image"
                  className={"makeup-section-image-2"}
                />
              </Container>
            </Col>
          </Row>
          <Container>
            <Row></Row>
          </Container>
        </>
      )}
      <Container className={"section-5-container pb-5"} fluid>
        <Container style={{ background: "none" }}>
          <h2 className={"section-5-header"}>100's of Happy Customers</h2>
          <h1 className={"section-5-header-2"}>
            Hear it from folks who availed the Onor Makeup Experience{" "}
          </h1>
          <Row style={{ background: "none" }} className="mt-2">
            <Col
              style={{ background: "none" }}
              lg={3}
              md={6}
              xs={6}
              className="p-4"
            >
              <Card
                style={{ background: "none" }}
                className="bg-transparent border-0"
              >
                <Card.Img variant="top rounded-lg" src={Feedback1} />
                <Card.Body
                  style={{ background: "none", borderRadius: "10px" }}
                  className="text-center"
                >
                  <Card.Text
                    className="font-weight-bold"
                    style={{
                      fontFamily: "Inter",
                      fontSize: "18px",
                      marginBottom: "0px",
                    }}
                  >
                    Valerie
                  </Card.Text>
                  <span
                    style={{
                      background: "none",
                      fontFamily: "Fira Sans",
                      fontWeight: "bold",
                    }}
                  >
                    {Array(5)
                      .fill("")
                      .map((_, i) => (
                        <FaStar style={{ marginTop: "-5px" }} color="#F6AF25" />
                      ))}
                    <text className="text-dark"> 5.0</text>
                  </span>
                  <Card.Text
                    style={{
                      background: "none",
                      fontSize: "14px",
                      color: "#3D3D3D",
                    }}
                  >
                    <TextTruncate
                      line={3}
                      element="span"
                      truncateText="…"
                      text="I was so excited we just did eye-makeup and it is just great!Kisten advised me abou so many good things to do,how to apply product which i have already and which product I could get.Now I know how to put my eyelashes, I did it wrong all time!"
                      textTruncateChild={
                        <a href={"/#/testimonials"}>Read more</a>
                      }
                    ></TextTruncate>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col
              style={{ background: "none" }}
              lg={3}
              md={6}
              xs={6}
              className="p-4"
            >
              <Card
                style={{ background: "none" }}
                className="bg-transparent border-0"
              >
                <Card.Img variant="top rounded-lg" src={Feedback2} />
                <Card.Body
                  style={{ background: "none" }}
                  className="text-center"
                >
                  <Card.Text
                    className="font-weight-bold"
                    style={{
                      fontFamily: "Inter",
                      fontSize: "18px",
                      marginBottom: "0px",
                    }}
                  >
                    Daria Mudrova
                  </Card.Text>
                  <span
                    style={{
                      background: "none",
                      fontFamily: "Fira Sans",
                      fontWeight: "bold",
                    }}
                  >
                    {Array(5)
                      .fill("")
                      .map((_, i) => (
                        <FaStar style={{ marginTop: "-5px" }} color="#F6AF25" />
                      ))}
                    <text style={{ marginTop: "10px" }} className="text-dark">
                      {" "}
                      5.0
                    </text>
                  </span>
                  <Card.Text
                    style={{
                      background: "none",
                      fontSize: "14px",
                      color: "#3D3D3D",
                    }}
                  >
                    <TextTruncate
                      line={3}
                      element="span"
                      truncateText="…"
                      text="She taught me how to do beautiful everyday soft glam look! She taught me how to do makeup more flattering for my eyeshape, how to get full coverage foundation,how to contour properly and many more usefull tips!"
                      textTruncateChild={
                        <a href={"/#/testimonials"}>Read more</a>
                      }
                    />
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col
              style={{ background: "none" }}
              lg={3}
              md={6}
              xs={6}
              className="p-4"
            >
              <Card
                style={{ background: "none" }}
                className="bg-transparent border-0"
              >
                <Card.Img variant="top rounded-lg" src={Feedback3} />
                <Card.Body
                  style={{ background: "none" }}
                  className="text-center"
                >
                  <Card.Text
                    className="font-weight-bold"
                    style={{
                      fontFamily: "Inter",
                      fontSize: "18px",
                      marginBottom: "0px",
                    }}
                  >
                    Alyssa Eckstein
                  </Card.Text>
                  <span
                    style={{
                      background: "none",
                      fontFamily: "Fira Sans",
                      fontWeight: "bold",
                    }}
                  >
                    {Array(5)
                      .fill("")
                      .map((_, i) => (
                        <FaStar style={{ marginTop: "-5px" }} color="#F6AF25" />
                      ))}
                    <text className="text-dark"> 5.0</text>
                  </span>
                  <Card.Text
                    style={{
                      background: "none",
                      fontSize: "14px",
                      color: "#3D3D3D",
                    }}
                  >
                    <TextTruncate
                      line={3}
                      element="span"
                      truncateText="…"
                      text="Awesome..! I had a lot of people who loved my eyes during my live and TikToks that day(after the Onor Session)."
                      textTruncateChild={
                        <a href={"/#/testimonials"}>Read more</a>
                      }
                    />
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col
              style={{ background: "none" }}
              lg={3}
              md={6}
              xs={6}
              className="p-4"
            >
              <Card
                style={{ background: "none" }}
                className="bg-transparent border-0"
              >
                <Card.Img variant="top rounded-lg" src={Feedback4} />
                <Card.Body
                  style={{ background: "none" }}
                  className="text-center"
                >
                  <Card.Text
                    className="font-weight-bold"
                    style={{
                      fontFamily: "Inter",
                      fontSize: "18px",
                      marginBottom: "0px",
                    }}
                  >
                    Shavan Fulton
                  </Card.Text>
                  <span
                    style={{
                      background: "none",
                      fontFamily: "Fira Sans",
                      fontWeight: "bold",
                    }}
                  >
                    {Array(5)
                      .fill("")
                      .map((_, i) => (
                        <FaStar style={{ marginTop: "-5px" }} color="#F6AF25" />
                      ))}
                    <text className="text-dark"> 5.0</text>
                  </span>
                  <Card.Text
                    style={{
                      background: "none",
                      fontSize: "14px",
                      color: "#3D3D3D",
                    }}
                  >
                    <TextTruncate
                      line={3}
                      element="span"
                      truncateText="…"
                      text="It was great! The Makeup Artist showed me some really cool stuff & guided me to achieve my best looks. i will recommend... Great going guys.."
                      textTruncateChild={
                        <a href={"/#/testimonials"}>Read more</a>
                      }
                    />
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </Container>

      <Container
        fluid
        style={{
          backgroundColor: "rgba(241, 90, 37, 0.04)",
          paddingBottom: "80px",
        }}
      >
        <Container style={{ background: "none" }}>
          <Row
            style={{ background: "none" }}
            className="justify-content-center align-items-center"
          >
            <Col style={{ background: "none" }} lg={3} xs={4}>
              <img
                src={Wade}
                className="testimonial-image"
                alt=""
                style={{ borderRadius: "50%", backgroud: "none" }}
              />
            </Col>
            <Col>
              <Row>
                <Col
                  xs={12}
                  lg={4}
                  className="chelsea"
                  style={{ background: "none", marginLeft: "-20px" }}
                >
                  Chelsea Bennett
                </Col>
                <Col
                  style={{ background: "none", marginLeft: "-20px" }}
                  xs={12}
                  lg={9}
                  className="text-left"
                >
                  <span
                    style={{
                      color: "#F6AF25",
                      background: "none",
                    }}
                  >
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <span style={{ fontFamily: "Fira Sans" }}>
                      <b className="text-dark"> 4.9</b>
                    </span>
                  </span>
                </Col>
              </Row>
              <Row lg={9} xs={12}>
                <Col
                  style={{ background: "none", marginLeft: "-20px" }}
                  className="mt-2 d-none d-lg-block d-xs-block"
                >
                  <span
                    style={{
                      color: "#000",
                      background: "none",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                    }}
                  >
                    <TextTruncate
                      line={2}
                      element="span"
                      truncateText="…"
                      text="I loved the Virtual consult and being able to ask specific
                      questions. It's a very unique opportunity. Your whole team
                      was amazing & provided me a very new opportunity & I
                      learned a lot. Artist was very helpful & guided me to
                      achieve my looks. Great Company. Thank You!"
                      textTruncateChild={
                        <a
                          style={{ color: "#ea5b28 !important" }}
                          href={"/#/testimonials"}
                        >
                          Read more
                        </a>
                      }
                    ></TextTruncate>
                  </span>
                </Col>
              </Row>
            </Col>
            <Row lg={9} xs={12} className="d-block px-3 py-2 d-lg-none">
              <Col>
                I loved the Virtual consult and being able to ask specific
                questions. It's a very unique opportunity. Your whole team was
                amazing & provided me a very new opportunity & I learned a lot.
                Artist was very helpful & guided me to achieve my looks. Great
                Company. Thank You!
              </Col>
            </Row>
          </Row>
          <Row style={{ background: "none" }} className="text-right">
            <Col style={{ background: "none" }} lg={12}>
              <button
                className="testimonial-button"
                onClick={(e) => window.open("/#/testimonials")}
              >
                View our review wall{" "}
                <FiArrowRight style={{ fontSize: "18px" }} />
              </button>
            </Col>
          </Row>
          <Col style={{ background: "none" }} className="mt-4">
            <h1 style={{ background: "none" }} className="makeup-tip-text">
              Want to Get similar top quality makeup tips and suggestions?
            </h1>
            <span>
              <button
                onClick={(e) =>
                  window.open(
                    "https://calendly.com/onorservices-calendar/consult-a-makeup-maestro",
                    "_blank"
                  )
                }
                class={"makeup-tip-button"}
              >
                Book a free live session{" "}
                <BiVideo
                  style={{
                    backgroundColor: "transparent",
                    fontSize: "18px",
                    fontFamily: "Inter",
                  }}
                />
                <span className="material-icons"></span>
              </button>
              <button
                onClick={() => setModalShow(true)}
                className={"makeup-tip-button-dark"}
                style={{ fontSize: "18px" }}
              >
                Upload your Photos{" "}
                <BsArrowUpCircle
                  style={{
                    backgroundColor: "transparent",
                    fontSize: "18px",
                    fontFamily: "Inter",
                  }}
                />
              </button>
            </span>
          </Col>
        </Container>
      </Container>

      {/* Section 7*/}
      <Cons />
      {/* Section 7*/}

      {/* Section 8*/}
      <Feedback />
      {/* Section 8*/}
      {/* Section 9*/}
      <Tips />
      {/* Section 9*/}
      {/* Section 10*/}
      <FAQ />
      <Footer />
      <Footerr />
      {/* Section 10*/}

      {/* {!isUndefined(categories.categories) &&
        !isNull(categories.categories) &&
        auth.isAuthorized && (
          <Container>
            <div className={"mt-1"}>
              <Row className={"d-flex justify-content-center"}>
                <Col sm={12}>
                  {/* integrate api here */}
      {/* <Carousel
                    responsive={responsive}
                    focusOnSelect={true}
                    //slidesToSlide={getGridListCols()}
                    containerClass="carousel-container"
                    itemClass="carousel-item-padding-40-px"
                  >
                    {categories.categories.map((category, index) => {
                      return (
                        <CategoryComponent
                          image={category.categoryImageUrl}
                          categoryId={category.categoryId}
                          name={category.name}
                        />
                      );
                    })}
                  </Carousel> */}
      {/* </Col>
              </Row>
            </div>
          </Container>
        )} */}
      {/* <h2 className={"mt-5 pt-5 pb-3 mb-5 text-center bolder"}>Explore</h2> */}
      {!props.auth.isAlsoSeller && (
        <Container style={{ display: "none" }}>
          {promiseInProgress}
          {!promiseInProgress && (
            <div style={{ display: "none" }}>
              <Row style={{ display: "none" }}>
                <Col style={{ display: "none" }} sm={12}>
                  {/* integrate api here */}
                  {/* <Carousel
                    responsive={responsive}
                    focusOnSelect={true}
                    //slidesToSlide={getGridListCols()}
                    containerClass="carousel-container"
                    itemClass="carousel-item-padding-40-px"
                  > */}
                  {firstList.map((currVal, index) => {
                    return (
                      !currVal.isPrivate && (
                        <div></div>
                        // <GigComponent
                        //   key={"wh" + currVal.productId.toString()}
                        //   productId={currVal.productId}
                        //   productIconLink={currVal.productIconLink}
                        //   productName={currVal.productName}
                        //   merchantFirstName={currVal.merchant.firstName}
                        //   merchantLastName={currVal.merchant.lastName}
                        //   merchantRating={currVal.merchant.ratings}
                        //   packages={currVal.onorPackages}
                        //   merchantImage={currVal.merchant.avatar}
                        // />
                      )
                    );
                  })}
                  {/* </Carousel> */}
                </Col>
              </Row>
            </div>
          )}
          <br />
          {promiseInProgress && <div></div>}
          {!promiseInProgress && (
            // <div className={"mt-1"}>
            // <Row className={"d-flex justify-content-center"}>
            <Col sm={12}>
              {/* integrate api here */}
              {/* <Carousel
                    responsive={responsive}
                    focusOnSelect={true}
                    //slidesToSlide={getGridListCols()}
                    containerClass="carousel-container"
                    itemClass="carousel-item-padding-40-px"
                  > */}
              {secondList.map((currVal, index) => {
                return (
                  !currVal.isPrivate && (
                    <div> </div>
                    // <GigComponent
                    //   key={"wh" + currVal.productId.toString()}
                    //   productId={currVal.productId}
                    //   productIconLink={currVal.productIconLink}
                    //   productName={currVal.productName}
                    //   merchantFirstName={currVal.merchant.firstName}
                    //   merchantLastName={currVal.merchant.lastName}
                    //   merchantRating={currVal.merchant.ratings}
                    //   packages={currVal.onorPackages}
                    //   merchantImage={currVal.merchant.avatar}
                    // />
                  )
                );
              })}
              {/* </Carousel> */}
            </Col>
            // </Row>
            // </div>
          )}
          {/* <Row>
            <Col sm={12} className={"text-center pb-5 my-4"}>
              {/* <button
                style={{ padding: "11px 50px" }}
                onClick={(e) => props.history.push("/gigs/popular/")}
                className={"btn btn-primary mt-3 mb-5"}
              >
                See more
              </button> */}
          {/* </Col>
          </Row>  */}
        </Container>
      )}
      {props.auth.isAlsoSeller && (
        <div></div>
        // <Container>
        //   {promiseInProgress && <GigsListLoading />}
        //   {!promiseInProgress && (
        //     <div className={"mt-1"}>
        //       <Row className={"d-flex justify-content-center"}>
        //         <Col sm={12}>
        //           {/* integrate api here */}
        //           <Carousel
        //             responsive={responsive}
        //             focusOnSelect={true}
        //             //slidesToSlide={getGridListCols()}
        //             containerClass="carousel-container"
        //             itemClass="carousel-item-padding-40-px"
        //           >
        //             {firstListTasks.map((currVal, index) => {
        //               return (
        //                 !currVal.isPrivate && (
        //                   <TaskComponent
        //                     key={"wh" + currVal.productRequestId.toString()}
        //                     requestId={currVal.productRequestId}
        //                     productIconLink={currVal.docUrl}
        //                     productName={currVal.title}
        //                     userFirstName={currVal.user.firstName}
        //                     userLastName={currVal.user.lastName}
        //                     userImage={
        //                       currVal.user.avatar == null
        //                         ? dummyImage
        //                         : currVal.user.avatar
        //                     }
        //                     budget={currVal.budget}
        //                     data={currVal}
        //                   />
        //                 )
        //               );
        //             })}
        //           </Carousel>
        //         </Col>
        //       </Row>
        //     </div>
        //   )}
        //   <br />
        //   {promiseInProgress && <GigsListLoading />}
        //   {!promiseInProgress && (
        //     <div className={"mt-1"}>
        //       <Row className={"d-flex justify-content-center"}>
        //         <Col sm={12}>
        //           {/* integrate api here */}
        //           <Carousel
        //             responsive={responsive}
        //             focusOnSelect={true}
        //             //slidesToSlide={getGridListCols()}
        //             containerClass="carousel-container"
        //             itemClass="carousel-item-padding-40-px"
        //           >
        //             {secondListTasks.map((currVal, index) => {
        //               return (
        //                 !currVal.isPrivate && (
        //                   <TaskComponent
        //                     key={"wh" + currVal.productRequestId.toString()}
        //                     requestId={currVal.productRequestId}
        //                     productIconLink={currVal.docUrl}
        //                     productName={currVal.title}
        //                     userFirstName={currVal.user.firstName}
        //                     userLastName={currVal.user.lastName}
        //                     userImage={
        //                       currVal.user.avatar == null
        //                         ? dummyImage
        //                         : currVal.user.avatar
        //                     }
        //                     budget={currVal.budget}
        //                     data={currVal}
        //                   />
        //                 )
        //               );
        //             })}
        //           </Carousel>
        //         </Col>
        //       </Row>
        //     </div>
        //   )}
        // </Container>
      )}
      {/* <Row className={"justify-content-center my-5 pb-5"}>
        <Col sm={6} className={"mx-4"}>
          <div
            class="card text-white text-center px-5"
            style={{
              borderRadius: "20px",
              background: "linear-gradient(100deg, #FB592E, yellow 400%)",
            }}
          >
            <h1 className={"py-4"} style={{ fontWeight: "bolder" }}>
              Subscribe
            </h1>
            <p className={"bolder"}>
              Don't miss the opportunity to know about our special offers,
              update, and live events. Subscribe and stay informed
            </p>
            <Row className={"justify-content-center mb-5 mt-3"}>
              <Col sm={12}>
                <TextField
                  id="standard-basic"
                  label="Your Email"
                  value={subscriptionEmail}
                  onChange={(e) => setSubscriptionEmail(e.target.value)}
                />
                <button
                  className={"btn btn-dark mt-2 ml-2"}
                  onClick={(e) => subscribeToOnor()}
                >
                  Send
                </button>
              </Col>
            </Row>
          </div>
        </Col>
      </Row> */}
    </Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
    dialog: state.dialog,
    searchGig: state.searchGig,
    progress: state.progress,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    get_homepage_gigs: () => dispatch(get_homepage_gigs()),
    actionShowRating: () => dispatch(action_rating_dialog_start()),
    signUpAsSeller: () => dispatch(action_sign_up_as_seller()),
    actionSignOut: () => dispatch(action_sign_out()),
    actionDialogOpen: (payload) => dispatch(action_dialog_open(payload)),
    actionSignOutAsSeller: () => dispatch(action_sign_out_seller()),
    thunkActionSignInAsSeller: (payload) =>
      dispatch(thunk_seller_sign_in(payload)),
    actionStartProgress: (payload) => dispatch(action_progress_start(payload)),
    actionStopProgress: (payload) => dispatch(action_progress_stop(payload)),
    actionGigSearch: (payload) => dispatch(action_start_gig_search(payload)),
    actionClearSearch: () => dispatch(action_clear_gig_search()),
  };
};
Homepage = withWidth()(Homepage);
Homepage = withFirebase(Homepage);
export default connect(mapStateToProps, mapDispatchToProps)(Homepage);
