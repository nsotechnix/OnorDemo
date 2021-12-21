import React, { useState } from "react";
import { isUndefined, isEmpty, isNull } from "lodash";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import FavoriteIcon from "@material-ui/icons/Favorite";
import StarIcon from "@material-ui/icons/Star";
import { withRouter } from "react-router-dom";
import Avatar from '@material-ui/core/Avatar';
import IndividualRequestPage from '../pages/buyers/requests/IndividualRequestPage'
import "./GigComponent.scss";

function TaskComponent(props) {
  const [IndividualRequest, setIndividualRequest] = React.useState(!1)
  const [requestDataSingle, setRequestDataSingle] = useState([])
  return (
    <>
      { IndividualRequest && <IndividualRequestPage setOpen={setIndividualRequest} data={requestDataSingle} isOpen={IndividualRequest} />}
      <div className="item parent_card" onClick={
        e => {
          setIndividualRequest(true)
          setRequestDataSingle(props.data)
        }
      }>
        <div
          className="job-item"
          style={{ cursor: "pointer" }}
        // onClick={(e) => {
        //   props.history.push("/buyer/order/summary/" + props.productId + "/")
        // }}
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
            <div className="job-urs-dts mt-3">
              <div style={{ overflow: 'auto' }}>
                <img src={props.userImage} className={'mt-1 mr-1'} style={{ height: '2em', width: '2em', borderRadius: '50%', float: 'left' }} alt={'dp'} />
                <div style={{ float: 'left' }}>
                  <small className="ml-1 bolder artist-name">
                    {
                      (props.userFirstName + ' ' + props.userLastName).substr(0, 20)
                    }
                    {
                      (props.userFirstName + ' ' + props.userLastName).length >= 20 ? "..." : null
                    }
                  </small>
                </div>
              </div>
            </div>
          </div>
          <div className="job-urs-dts borderer product-name">
            <div className="left-rating">
              <div className="star">
                <span
                  style={{ display: "flex", justifyItems: "center" }}
                  className={'mb-2'}
                //onClick={(e) => props.actionShowRating()}
                >
                  <p>Budget: {props.budget}</p>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default withRouter(TaskComponent);
