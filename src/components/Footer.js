import React, { Fragment } from "react";
import "./Footer.scss";
import { useLocation, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import OnorLogo from "../images/onorlogo.png";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import FooterSymbol from "../assets/symbol.png";

let Footer = (props) => {
  const [hideTheDrawer, setHideTheDrawer] = React.useState(false);
  const location = useLocation();
  if (location.pathname.match("/mobile/")) {
    if (location.pathname.match("/mobile/") && hideTheDrawer === false) {
      setHideTheDrawer(true);
    } else if (!location.pathname.match("/mobile/") && hideTheDrawer) {
      setHideTheDrawer(false);
    }
  } else {
    if (hideTheDrawer) {
      setHideTheDrawer(false);
    }
  }
  return (
    <Fragment>
      {
        // (!location.pathname.match("/mobile/") && !location.pathname.match("/signin") && !location.pathname.match("/signup")) &&
        !hideTheDrawer && (
          <div className={"footer"}>
            <div
              className="shadow-none main-footer mt-2 text-white pb-3"
              style={{ fontSize: 15, backgroundColor: "#333333" }}
            >
              <div className="container">
                <div className="row">
                  <div className="col-sm-3 col-xs-12">
                    <div
                      className={
                        "d-flex justify-content-center align-items-center mb-sm-5"
                      }
                    >
                      <img
                        src={OnorLogo}
                        className={"footerImageLogo"}
                        alt="onor logo"
                        style={{
                          height: "32%",
                          width: "30%",
                          marginLeft: "-8em",
                          marginTop: "5%",
                          paddingBottom: "5%",
                        }}
                        draggable={false}
                      />
                    </div>
                  </div>

                  <div className="col-sm-3 col-xs-6">
                    <h6 className={"pb-2"} style={{ fontWeight: "bolder" }}>
                      ONOR - A New System
                    </h6>
                    <p className="list-unstyled">
                      <li>Contact: (240) 883-7445</li>
                      <li>Email: info@onor.world</li>
                      <li> Arlington, VA , USA</li>
                      <li></li>
                    </p>
                  </div>

                  <div className="col-sm-3 col-xs-6">
                    <h6 className={"pb-2"} style={{ fontWeight: "bolder" }}>
                      Quick Links
                    </h6>
                    <ui className="list-unstyled">
                      <li
                        className="crsr"
                        onClick={(e) => props.history.push("/")}
                      >
                        ONOR Home
                      </li>
                      <li
                        className="crsr"
                        onClick={(e) => props.history.push("/about")}
                      >
                        About Us
                      </li>

                      <li
                        className="crsr"
                        onClick={(e) => props.history.push("/contact")}
                      >
                        Contact Us
                      </li>
                    </ui>
                  </div>

                  <div className="col-sm-3 col-xs-6">
                    <h6 className={"pb-2"} style={{ fontWeight: "bolder" }}>
                      Important Links
                    </h6>
                    <ui className="list-unstyled">
                      <li
                        className="crsr"
                        onClick={(e) => props.history.push("/user/privacy")}
                      >
                        Privacy Policy
                      </li>
                      <li
                        className="crsr"
                        onClick={(e) => props.history.push("/user/terms/")}
                      >
                        Terms and Condition
                      </li>
                      <li
                        className="crsr"
                        onClick={(e) =>
                          props.history.push("/conduct-and-dispute-resolution")
                        }
                      >
                        Conduct &amp; Dispute resolution
                      </li>
                    </ui>
                  </div>
                </div>
              </div>
              <img
                src={FooterSymbol}
                alt="onor logo"
                style={{
                  height: "100%",
                  width: "11%",
                  position: "absolute",
                  top: 0,
                  right: 0,
                }}
                draggable={false}
              />
            </div>

            <div
              className="row shadow-none text-white"
              style={{ fontSize: 15, backgroundColor: "#333333" }}
            >
              <div className="col-sm-12 d-flex justify-content-end align-items-end mt-2">
                <p className={"mr-4"}>
                  <InstagramIcon />
                  &ensp;
                  <FacebookIcon />
                  &ensp;
                  <TwitterIcon />
                  &ensp;
                  <LinkedInIcon />
                </p>
              </div>
            </div>
            <div
              className="row shadow-none d-flex justify-content-center align-items-center text-center pt-2"
              style={{ backgroundColor: "#2D2D2D", color: "grey" }}
            >
              <p className="col-sm-12">
                &copy;{new Date().getFullYear()} ONOR | All rights reserved |{" "}
                <span
                  className="crsr"
                  onClick={(e) => props.history.push("/user/terms")}
                >
                  Terms Of Service
                </span>{" "}
                |{" "}
                <span
                  className="crsr"
                  onClick={(e) => props.history.push("/user/privacy")}
                >
                  Privacy Policy
                </span>
              </p>
            </div>
          </div>
        )
      }
    </Fragment>
  );
};
Footer = withRouter(Footer);
export default connect()(Footer);
