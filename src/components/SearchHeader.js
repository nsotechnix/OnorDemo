import React, { useState } from "react";
import { Container, TextField } from "@material-ui/core";
import { Row, Col } from "react-bootstrap";
import "./SearchHeader.scss";
import GridImage from "../assets/grid.png";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import Image1 from "../assets/HomePageImage_1.png";
import Image2 from "../assets/HomePageImage_2.png";
import Image3 from "../assets/HomePageImage_3.png";
import { Carousel, CarouselItem } from "react-bootstrap";
import Slider from "react-slick";
import Axios from "axios";
import { API_GIG_SEARCH } from "../utils/API_ENDPOINTS";
import { action_dialog_open } from "../redux/actions/dialogAction";
import { isEmpty, isUndefined } from "lodash";
import {
  action_clear_gig_search,
  action_start_gig_search,
} from "../redux/actions/searchActions";
import {
  action_progress_start,
  action_progress_stop,
} from "../redux/actions/progressAction";
import { connect } from "react-redux";
import FreeConsultation from '../images/free-consultation.png'
import MyDialog from "../components/MyDialog"

function SearchHeader(props) {
  const [searchedTerm, setSearchedTerm] = useState("");

  const handleGigSearch = async () => {
    if (!isEmpty(searchedTerm)) {
      try {
        let currData = {
          search_terms: searchedTerm,
        };
        // props.history.push("/#search");
        props.actionStartProgress();
        const searchedResult = await Axios.post(API_GIG_SEARCH, currData);
        // console.log(searchedResult)
        if (!isUndefined(searchedResult.data)) {
          props.actionGigSearch(searchedResult.data.filtered_products);
        }
        props.actionStopProgress();
      } catch (e) {
        console.log(e);
      }
    } else {
      // props.history.push("/#search");
      props.actionClearSearch();
    }
  };

  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    autoplay: true,
    speed: 1500,
    autoplaySpeed: 5000,
    cssEase: "linear",
  };
  return (
    <div>
      {/* <Row>
        <span className="search_header_title_1">Learn</span>
      </Row>
      <Row>
        <span className="search_header_title_2">
          What could you <span className="search_header_title_2_mid">do</span>{" "}
          in 30 minutes
        </span>
      </Row>
      <Row>
        <span className="search_header_title_3">achieve</span>
      </Row> */}
      <Row>
        <div className="search_parent">
          <div className="search_text">

            {/* <span className="search_header_sub_title_1">
              Find freelancer for whatever
            </span> */}
            {/* className="search_control mt-3 mb-3" */}
            {/* <div className="search_prefix_icon"> */}

            <span className="search_header_sub_title_1">
              <img
                src={FreeConsultation}
                alt={'image'}
                className={'img-responsive '}
                style={{ height: '100px', width: '150px', marginTop: '-8em', cursor: 'pointer' }}
                onClick={
                  e => {
                    // window.open("https://calendly.com/onorservices-calendar/let-other-better-book-my-calendar?month=2021-01", "_blank")
                    window.open('https://calendly.com/onorservices-calendar/consult-a-makeup-maestro', '_blank')
                  }
                }
              />
            </span>
            {/*<div className="search_control  mt-3 mb-3">
              <div className="search_prefix_icon">
                <SearchIcon />
              </div> */}
            <div style={{ width: "50%" }}>
              <TextField
                id="outlined-basic"
                label="Search"
                variant="outlined"
                color={"secondary"}
                value={searchedTerm}
                fullWidth
                onChange={(e) => setSearchedTerm(e.target.value)}
                onKeyPress={(e) => {
                  if (e.key === "Enter") {
                    handleGigSearch();
                  }
                }}
              />
              {/* <InputBase
                className="search_text_val"
                value={searchedTerm}
                onChange={(e) => setSearchedTerm(e.target.value)}
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
                onKeyPress={(e) => {
                  if (e.key === "Enter") {
                    handleGigSearch();
                  }
                }}
              /> */}
            </div>

            <span className="search_header_sub_title_2">
              Connect with the Best Pros. 1:1.
            </span>
          </div>

          <Slider {...settings} className="p-1 search_carousel">
            <img
              style={{ margin: "auto" }}
              className="d-block carousel_image"
              src={Image1}
              alt="First slide"
            />
            <img
              style={{ margin: "auto" }}
              className="d-block carousel_image"
              src={Image2}
              alt="First slide"
            />
            <img
              style={{ margin: "auto" }}
              className="d-block carousel_image"
              src={Image3}
              alt="First slide"
            />
          </Slider>
          {/* <Carousel
            itemClass="carousel-item-padding-40-px"
            className="p-1 search_carousel"
            slide={false}
            fade={true}
          >
            <Carousel.Item style={{ background: "grey" }}>
              <img
                style={{ margin: "auto" }}
                className="d-block carousel_image"
                src={Image1}
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item style={{ background: "grey" }}>
              <img
                style={{ margin: "auto" }}
                className="d-block carousel_image"
                src={Image2}
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item style={{ background: "grey" }}>
              <img
                style={{ margin: "auto" }}
                className="d-block carousel_image"
                src={Image3}
                alt="First slide"
              />
            </Carousel.Item>
          </Carousel> */}

          {/* <div className="search_grid_image">
            <img src={GridImage} />
          </div> */}
        </div>
      </Row>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
    dialog: state.dialog,
    progress: state.progress,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actionStartProgress: (payload) => dispatch(action_progress_start(payload)),
    actionStopProgress: (payload) => dispatch(action_progress_stop(payload)),
    actionGigSearch: (payload) => dispatch(action_start_gig_search(payload)),
    actionDialogOpen: (payload) => dispatch(action_dialog_open(payload)),
    actionClearSearch: () => dispatch(action_clear_gig_search()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchHeader);
