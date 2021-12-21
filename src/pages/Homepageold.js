import React, { Fragment, useEffect, useState } from "react";
import { API_FETCH_GIGS, API_FETCH_TASKS_ALL } from "../utils/API_ENDPOINTS";
import { Link } from "react-router-dom";
import withWidth, { isWidthUp } from "@material-ui/core/withWidth";
import SearchBar from "../components/SearchBar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import MyCard from "../components/MyCard";
import axios from "axios";
import { connect } from "react-redux";
import MyDialog from "../components/MyDialog"
import "./Homepage.scss";
import { makeStyles } from "@material-ui/core/styles";
import HomeTaskMoreShow from "./sellers/dialogs/HomeTaskMoreShow";
import { get_homepage_gigs } from "../redux/actions/HomePageAction";
import { isUndefined, isEmpty, isNull } from "lodash";
import { withFirebase } from "../firebase";
import { usePromiseTracker, trackPromise } from "react-promise-tracker";
import Loader from "react-loader-spinner";
import { action_rating_dialog_start } from "../redux/actions/RatingAction";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
// carousel
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import FavoriteIcon from "@material-ui/icons/Favorite";
import StarIcon from "@material-ui/icons/Star";
import MyCarousel from "react-bootstrap/Carousel";
import Skeleton from "@material-ui/lab/Skeleton";
import Banner from "../components/Banner";
import GigComponent from "../components/GigComponent";
import GigsListLoading from "../components/GigsListLoading";
import SearchHeader from "../components/SearchHeader";
import ServiceHeader from "../components/ServiceHeader";
// react slick
// import Slider from "react-slick"
// import "slick-carousel/slick/slick.css"
// import "slick-carousel/slick/slick-theme.css"

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5.1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1200 },
    items: 4.7,
  },
  tablet: {
    breakpoint: { max: 1200, min: 1024 },
    items: 3.5,
  },
  tabletSmall: {
    breakpoint: { max: 1024, min: 464 },
    items: 3.15,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1.25,
  },
};

let Homepage = (props) => {
  const { promiseInProgress } = usePromiseTracker();
  const [setHomeTaskMoreShow, setHomeTaskMoreShowOpen] = useState(false);
  const [productList, setProductList] = useState([]);
  const [taskList, setTaskList] = useState([]);
  const [searchedGigs, setSearchedGigs] = useState([]);

  const db = props.firebase.firestore;

  console.log("SEARCHED GIG");
  console.log(props.searchGig);

  // console.warn({...props})
  const getGridListCols = () => {
    if (isWidthUp("xl", props.width)) {
      return 5;
    }

    if (isWidthUp("lg", props.width)) {
      return 5;
    }

    if (isWidthUp("md", props.width)) {
      return 4;
    }

    if (isWidthUp("sm", props.width)) {
      return 3;
    }

    if (isWidthUp("xs", props.width)) {
      return 1;
    }
  };

  const useStyles = makeStyles((theme) => ({
    root: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "space-around",
      overflow: "hidden",
      backgroundColor: theme.palette.background.paper,
    },
    gridList: {
      flexWrap: "nowrap",
      // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
      transform: "translateZ(0)",
      overflowY: "auto",
      margin: 0,
      padding: 0,
      listStyle: "none",
      height: "102%",
      "&::-webkit-scrollbar": {
        width: "0em",
      },
      "&::-webkit-scrollbar-track": {
        boxShadow: "inset 0 0 12px rgba(0,0,0,0.00)",
        webkitBoxShadow: "inset 0 0 12px rgba(0,0,0,0.00)",
      },
      "&::-webkit-scrollbar-thumb": {
        backgroundColor: "rgba(0,0,0,.2)",
      },
    },
    title: {
      color: "#fa6331",
    },
    titleBar: {
      background:
        "linear-gradient(to top, black 0%, rgba(0,0,0,0.3) 100%, rgba(0,0,0,0) 100%)",
    },
  }));
  const classes = useStyles();

  let initailState = [];
  const [imageLink, setImageLink] = useState(initailState);
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
        console.log(taskList);
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
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
        setProductList(prodResult.data.gig_list.productList);
      }
    } catch (e) {
      console.log(e);
    }
  };

  console.log(responsive);

  useEffect(() => {
    db.collection("chatInfo")
      .get()
      .then((querySnapshot) => {
        querySnapshot.docs.map((doc) => {});
      });
  }, []);
  // console.log(imageLink)
  let demoImage = imageLink.slice(0, 8);

  return (
    <Fragment>
      {auth.isAuthorized ? (
        props.auth.isAlsoSeller ? (
          <ServiceHeader isRequest={0} />
        ) : (
          <ServiceHeader isRequest={1} />
        )
      ) : (
        <SearchHeader />
      )}

      {/* <Banner></Banner> */}
      {/* <Row>
            <Col>
            <h3 style={{margin:"auto", textAlign:"center"}}>Learn</h3>
          <h4 style={{margin:"auto", textAlign:"center"}}>What you can do in 30 minutes?</h4>
            </Col>
          </Row>
          <div>
          
          </div> */}
      {auth.isAuthorized && (
        <MyDialog
          isOpen={dialog.isOpen}
          title="Success"
          message="You are successfully Logged in"
          positive="Ok"
        />
      )}

      {/* <div className={"mt-5"}>
        <SearchBar />
      </div> */}

      {!isEmpty(props.searchGig) && (
        <Fragment>
          <div className={"mt-2 mx-4"} id="search">
            <Row>
              <Col>
                <h5>Searched Results</h5>
              </Col>
              <Col>
                <p
                  className={"float-right onor_span_color"}
                  onClick={(e) => props.history.push("/gigs/popular")}
                >
                  See All
                </p>
              </Col>
            </Row>
          </div>
          <Fragment>
            {promiseInProgress && (
              <React.Fragment>
                <Skeleton
                  variant="rect"
                  className={"mx-4"}
                  height={150}
                  style={{ marginBottom: 6 }}
                ></Skeleton>
                <Skeleton
                  variant="h4"
                  className={"mx-4"}
                  style={{ marginBottom: 6 }}
                ></Skeleton>
                <Skeleton
                  variant="caption"
                  className={"mx-4"}
                  style={{ marginBottom: 6 }}
                ></Skeleton>
                <Skeleton
                  animation="wave"
                  height={10}
                  className={"mx-4"}
                  style={{ marginBottom: 6 }}
                />
              </React.Fragment>
            )}
          </Fragment>
          <Fragment>
            {!promiseInProgress && (
              <div className={"mt-1"}>
                <Row className={"d-flex justify-content-center"}>
                  <Col sm={12}>
                    {/* integrate api here */}
                    <Carousel
                      responsive={responsive}
                      focusOnSelect={true}
                      slidesToSlide={getGridListCols()}
                      containerClass="carousel-container"
                      itemClass="carousel-item-padding-40-px"
                    >
                      {props.searchGig.filtered_gigs.map((currVal, index) => {
                        return (
                          !currVal.isPrivate && <GigComponent
                            key={"sr" + currVal.productId.toString()}
                            productId={currVal.productId}
                            productIconLink={currVal.productIconLink}
                            productName={currVal.productName}
                            merchantFirstName={currVal.merchant.firstName}
                            merchantLastName={currVal.merchant.lastName}
                            merchantRating={currVal.merchant.ratings}
                            packages={currVal.onorPackages}
                            merchantImage={currVal.merchant.avatar}
                          />
                        );
                      })}
                    </Carousel>
                  </Col>
                </Row>
              </div>
            )}
          </Fragment>
        </Fragment>
      )}

      {props.auth.isAlsoSeller ? (
        <div className={"mt-2 mx-4"}>
          <Row>
            <Col>
              <h5>HOT TASKS</h5>
            </Col>
            <Col>
              <p
                className={"float-right onor_span_color"}
                style={{ cursor: "pointer" }}
                onClick={() => props.history.push("tasks/hot/")}
              >
                See All
              </p>
            </Col>
          </Row>
        </div>
      ) : (
        <div className={"mt-2 mx-4"}>
          <Row>
            <Col>
              <h5>Popular Sessions</h5>
            </Col>
            <Col>
              <p
                className={"float-right onor_span_color"}
                style={{ cursor: "pointer" }}
                onClick={(e) => props.history.push("/gigs/popular/")}
              >
                See All
              </p>
            </Col>
          </Row>
        </div>
      )}

      {/* {setHomeTaskMoreShow && (
        <HomeTaskMoreShow
          setOpen={setHomeTaskMoreShowOpen}
          isOpen={setHomeTaskMoreShow}
        />
      )} */}

      {promiseInProgress && <GigsListLoading />}

      {props.auth.isAlsoSeller
        ? !promiseInProgress && (
            <div className={"mt-1"}>
              <Row className={"d-flex justify-content-center"}>
                <Col sm={12}>
                  <Carousel responsive={responsive}>
                    {taskList.map((currVal, index) => {
                      console.log("OUT");
                      console.log(currVal);
                      return (
                        <div className="item" style={{ padding: "20px" }}>
                          <div className="job-item">
                            <div className="">
                              <img
                                src={currVal.docUrl}
                                alt=""
                                style={{ height: "8em", width: "100%" }}
                              />
                              <div className="job-urs-dts">
                                <p className={"mt-1"}>{currVal.title}</p>
                                <div className="avialable">{`${currVal.user.firstName} ${currVal.user.lastName}`}</div>
                              </div>
                            </div>
                            <div className="mt-1 rating-location borderer">
                              <div class="left-rating">
                                <div class="rtitle">Rating</div>
                                <div class="star">
                                  <span>
                                    Not Rated{" "}
                                    <StarIcon style={{ color: "orange" }} />
                                  </span>
                                </div>
                              </div>
                              <div class="right-location">
                                <div class="text-left">
                                  <div class="rtitle">Price</div>
                                  <span>${currVal.budget}</span>
                                </div>
                              </div>
                            </div>
                            <div className="job-buttons">
                              <Row>
                                <Col sm={8}>
                                  <button className="link-j1" title="View more">
                                    View
                                  </button>
                                </Col>
                                <Col
                                  sm={4}
                                  className={
                                    "pt-1 d-flex justify-content-between"
                                  }
                                >
                                  <button
                                    className="bookmark1"
                                    title="add to wishlist"
                                  >
                                    <FavoriteIcon size={"small"} />
                                  </button>
                                </Col>
                              </Row>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </Carousel>
                </Col>
              </Row>
            </div>
          )
        : !promiseInProgress && (
            <div className={"mt-1"}>
              <Row className={"d-flex justify-content-center"}>
                <Col sm={12}>
                  <Carousel
                    responsive={responsive}
                    focusOnSelect={true}
                    draggable={false}
                    slidesToSlide={getGridListCols()}
                    itemClass="carousel-item-padding-40-px"
                  >
                    {productList.map((currVal, index) => {
                      console.log("OUT");
                      console.log(currVal);
                      return (
                        !currVal.isPrivate && <GigComponent
                          key={"pg" + currVal.productId.toString()}
                          productId={currVal.productId}
                          productIconLink={currVal.productIconLink}
                          productName={currVal.productName}
                          merchantFirstName={currVal.merchant.firstName}
                          merchantLastName={currVal.merchant.lastName}
                          merchantRating={currVal.merchant.ratings}
                          packages={currVal.onorPackages}
                          merchantImage={currVal.merchant.avatar}
                        />
                      );
                    })}
                  </Carousel>
                </Col>
              </Row>
            </div>
          )}

      <div className={"mt-2 mx-4"}>
        <Row>
          <Col>
            <h5>What's Hot</h5>
          </Col>
          <Col>
            <p
              className={"float-right onor_span_color"}
              style={{ cursor: "pointer" }}
              onClick={(e) => props.history.push("/gigs/popular")}
            >
              See All
            </p>
          </Col>
        </Row>
      </div>
      {promiseInProgress && <GigsListLoading />}
      {!promiseInProgress && (
        <div className={"mt-1"}>
          <Row className={"d-flex justify-content-center"}>
            <Col sm={12}>
              {/* integrate api here */}
              <Carousel
                responsive={responsive}
                focusOnSelect={true}
                //slidesToSlide={getGridListCols()}
                containerClass="carousel-container"
                itemClass="carousel-item-padding-40-px"
              >
                {productList.map((currVal, index) => {
                  return (
                    !currVal.isPrivate && <GigComponent
                      key={"wh" + currVal.productId.toString()}
                      productId={currVal.productId}
                      productIconLink={currVal.productIconLink}
                      productName={currVal.productName}
                      merchantFirstName={currVal.merchant.firstName}
                      merchantLastName={currVal.merchant.lastName}
                      merchantRating={currVal.merchant.ratings}
                      packages={currVal.onorPackages}
                      merchantImage={currVal.merchant.avatar}
                    />
                  );
                })}
              </Carousel>
            </Col>
          </Row>
        </div>
      )}
      <div className={"mt-2 mx-4"}>
        <Row>
          <Col>
            <h5>Buy again from trusted seller</h5>
          </Col>
          <Col>
            <p
              className={"float-right onor_span_color"}
              style={{ cursor: "pointer" }}
              onClick={(e) => props.history.push("/gigs/popular")}
            >
              See All
            </p>
          </Col>
        </Row>
      </div>
      {promiseInProgress && (
        <React.Fragment>
          <GigsListLoading />
        </React.Fragment>
      )}
      {!promiseInProgress && (
        <div className={"mt-1"}>
          <Row className={"d-flex justify-content-center"}>
            <Col sm={12}>
              {/* integrate api here */}
              <Carousel
                responsive={responsive}
                focusOnSelect={true}
                slidesToSlide={getGridListCols()}
                containerClass="carousel-container"
                itemClass="carousel-item-padding-40-px"
              >
                {productList.map((currVal, index) => {
                  return (
                    !currVal.isPrivate && <GigComponent
                      key={"ba" + currVal.productId.toString()}
                      productId={currVal.productId}
                      productIconLink={currVal.productIconLink}
                      productName={currVal.productName}
                      merchantFirstName={currVal.merchant.firstName}
                      merchantLastName={currVal.merchant.lastName}
                      merchantRating={currVal.merchant.ratings}
                      packages={currVal.onorPackages}
                      merchantImage={currVal.merchant.avatar}
                    />
                  );
                })}
              </Carousel>
            </Col>
          </Row>
        </div>
      )}
      <div className={"mt-2 mx-4"}>
        <Row>
          <Col>
            <h5>Inspired by your browsing history</h5>
          </Col>
          <Col>
            <p
              className={"float-right onor_span_color"}
              style={{ cursor: "pointer" }}
              onClick={(e) => props.history.push("/gigs/popular")}
            >
              See All
            </p>
          </Col>
        </Row>
      </div>
      {promiseInProgress && <GigsListLoading />}
      {!promiseInProgress && (
        <div className={"mt-1"}>
          <Row className={"d-flex justify-content-center"}>
            <Col sm={12}>
              {/* integrate api here */}
              <Carousel
                responsive={responsive}
                focusOnSelect={true}
                slidesToSlide={getGridListCols()}
                containerClass="carousel-container"
                itemClass="carousel-item-padding-40-px"
              >
                {productList.map((currVal, index) => {
                  return (
                    !currVal.isPrivate && <GigComponent
                      key={"bh" + currVal.productId.toString()}
                      productId={currVal.productId}
                      productIconLink={currVal.productIconLink}
                      productName={currVal.productName}
                      merchantFirstName={currVal.merchant.firstName}
                      merchantLastName={currVal.merchant.lastName}
                      merchantRating={currVal.merchant.ratings}
                      packages={currVal.onorPackages}
                      merchantImage={currVal.merchant.avatar}
                    />
                  );
                })}
              </Carousel>
            </Col>
          </Row>
        </div>
      )}
    </Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
    dialog: state.dialog,
    searchGig: state.searchGig,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    get_homepage_gigs: () => dispatch(get_homepage_gigs()),
    actionShowRating: () => dispatch(action_rating_dialog_start()),
  };
};
Homepage = withWidth()(Homepage);
Homepage = withFirebase(Homepage);
export default connect(mapStateToProps, mapDispatchToProps)(Homepage);
