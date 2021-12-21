import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { API_FETCH_GIGS } from "../../utils/API_ENDPOINTS";
import withWidth, { isWidthUp } from "@material-ui/core/withWidth";
import { Row, Col, Container } from "react-bootstrap";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import ListSubheader from "@material-ui/core/ListSubheader";
import IconButton from "@material-ui/core/IconButton";
import InfoIcon from "@material-ui/icons/Info";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import Carousel from "react-multi-carousel"

import GigComponent from "../../components/GigComponent";
import { isUndefined } from "lodash";
import { usePromiseTracker, trackPromise } from "react-promise-tracker";
import Loader from "react-loader-spinner";

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
    items: 2.8,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2,
  },
}

const style = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "auto",
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: "100%",
    height: "auto",
  },
  icon: {
    color: "rgba(255, 255, 255, 0.54)",
  },
}));

let PopularGigsList = (props) => {
  const { promiseInProgress } = usePromiseTracker();
  const getGridListCols = () => {
    if (isWidthUp("xl", props.width)) {
      return 4;
    }

    if (isWidthUp("lg", props.width)) {
      return 4;
    }

    if (isWidthUp("md", props.width)) {
      return 3;
    }

    if (isWidthUp("sm", props.width)) {
      return 2;
    }

    if (isWidthUp("xs", props.width)) {
      return 2;
    }
  };

  const [productList, setProductList] = useState([]);
  const classes = style();
  useEffect(() => {
    handleGetProductList();
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

  return (
    <React.Fragment>
      <div className={"mt-5"}>
        <Container>
          <Row>
            <Col>
              <h5>POPULAR SESSIONS</h5>
            </Col>
            <Col>
              <p
                className={"float-right onor_span_color"}
                style={{ cursor: "pointer" }}
                onClick={() => props.history.push("/")}
              >
                Home
              </p>
            </Col>
          </Row>
        </Container>
      </div>
      <div className={"mt-1"}>
        {promiseInProgress && (
          <div
            style={{
              width: "100%",
              height: "100",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Loader type="ThreeDots" color="#fa6331" height="100" width="100" />
          </div>
        )}
        {!promiseInProgress && (
          <Container>
            <Row className={"d-flex justify-content-center"}>
              <Col sm={12}>
                {!promiseInProgress && (
                  <div className={"mt-1"}>
                    <Row className={"d-flex justify-content-center"}>
                      {productList.map((currVal, index) => {
                        return (
                          !currVal.isPrivate &&
                          <Col xs={6} sm={4} md={4} lg={3} className={'p-0 m-0'}>
                            <GigComponent
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
                          </Col>
                        );
                      })}
                    </Row>
                  </div>
                )}
              </Col>
            </Row>
          </Container>
        )}
      </div>
    </React.Fragment >
  );
};

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
    dialog: state.dialog,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    // get_homepage_gigs: () => dispatch(get_homepage_gigs()),
  };
};
PopularGigsList = withWidth()(PopularGigsList);
export default connect(mapStateToProps, mapDispatchToProps)(PopularGigsList);
