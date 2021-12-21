import React from "react";
import { isUndefined, isEmpty, isNull } from "lodash";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import FavoriteIcon from "@material-ui/icons/Favorite";
import StarIcon from "@material-ui/icons/Star";
import { withRouter } from "react-router-dom";
import Avatar from '@material-ui/core/Avatar';
import "./GigComponent.scss";

function GigComponent(props) {
  return (
    <div className="item parent_card">
      <div
        className="job-item"
        style={{ cursor: "pointer" }}
        onClick={(e) => {
          props.history.push("/buyer/order/summary/" + props.productId + "/")
        }}
      >
        <div className="">
          <img
            src={props.productIconLink}
            className={'gig_image'}
            alt=""
            style={{
              width: "100%",
              borderTopLeftRadius: "8%", borderTopRightRadius: "8%"
              // objectFit: "contain" 
            }}
          />
          {/* <div
        className="job-item"
        style={{ cursor: "pointer",boxShadow:"0 0 5px rgba(33, 33, 33, 0.2)" }}
        onClick={(e) => {
          props.history.push("/buyer/order/summary/" + props.productId + "/");
        }}
      >
        <Avatar
            src={props.productIconLink}
            alt=""
            style={{ height: "6.5em", width: "50%", objectFit: "contain" , 
            zIndex:"1", margin:"auto", marginTop:"-2em", 
            boxShadow:"0 -5px 5px rgba(33, 33, 33, 0.2)"
            }}
          />
        <div className="" style={{zIndex:"-1"}}> */}
          <div className="job-urs-dts mt-3">
            <div style={{ overflow: 'auto' }}>
              <img src={props.merchantImage} className={'mt-2 mr-1'} style={{ height: '2em', width: '2em', borderRadius: '50%', float: 'left' }} alt={'dp'} />
              <div style={{ float: 'left' }}>
                <small className="ml-1 bolder artist-name">
                  {
                    (props.merchantFirstName + ' ' + props.merchantLastName).substr(0,20)
                  }
                  {
                    (props.merchantFirstName + ' ' + props.merchantLastName).length >=20 ? "..." : null
                  }
                </small>
                <br />
                <small className={"text-muted ml-1"}>Level 2 seller</small>
              </div>
            </div>
          </div>
        </div>
        <br />
        <span className={"mt-2 job-urs-dts product-name bolder"}
        // style={{ cursor: "pointer" }}
        // onClick={(e) => {
        //   props.history.push(
        //     "/buyer/order/summary/" + props.productId + "/"
        //   );
        // }}
        >
          {props.productName.substr(0, 20)}
          {props.productName.length >= 20 ? (
            "..."
          ) : (
            null
          )}
        </span>
        <div className="job-urs-dts borderer product-name">
          <div className="left-rating">
            <div className="star">
              <span
                style={{ display: "flex", justifyItems: "center" }}
                className={'mb-2'}
              //onClick={(e) => props.actionShowRating()}
              >
                {/* {props.merchantRating === 0 || isNull(props.merchantRating)
                  ? Array(5)
                    .fill()
                    .map((_, i) => <StarIcon key={i.toString()} style={{ color: "grey" }} />)
                  : Array(5)
                    .fill()
                    .map((_, j) =>
                      //<StarIcon style={{ color: "grey" }} />
                      j < props.merchantRating ? (
                        <StarIcon key={j.toString()} style={{ color: "grey" }} />
                      ) : (
                          <StarIcon key={j.toString()} style={{ color: "yellow" }} />
                        )
                    )} */}
                <StarIcon style={{ color: "orangered" }} fontSize={'small'} />
                <span className={'bolder text-small'} style={{ color: 'orangered' }}>{`${isNull(props.merchantRating) ? 5 : props.merchantRating} / 5`}</span>&ensp;
                <span className={'text-muted'}>({Math.round(Math.random() * 10)})</span>
                {/* <p className="rating_value">
                  {isNull(props.merchantRating) ? 0 : props.merchantRating}
                </p> */}
              </span>
            </div>
          </div>
          {/* <div className="right-location">
            <div className="text-left">
              <button className="bookmark1" title="add to wishlist">
                <FavoriteIcon />
              </button>
              <div class="rtitle">From</div>
            </div>
          </div> */}
        </div>
        {/* <div className="job-buttons">
          <Row>
            <Col
              sm={6}
              xs={6}
              className={"pt-1 d-flex justify-content-between"}
            >
              <p className="ml-3 text-muted">Starting from</p>
            </Col>
            <Col
              sm={6}
              xs={6}
              className={"pt-1 d-flex justify-content-end"}
            >
              <div className={'pr-3 bolder'}
                style={{ textAlign: 'center' }}>
                ${!isUndefined(props.packages[0]) && props.packages[0].price}
              </div>
            </Col>
          </Row>
        </div> */}
      </div>
    </div>
  );
}

export default withRouter(GigComponent);
