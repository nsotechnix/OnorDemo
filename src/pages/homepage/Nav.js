import React from "react";
import { connect } from "react-redux";
import OnorLogo from "../../images/onorlogo.png";
import { Link, withRouter } from "react-router-dom";
import { Col, Navbar, Nav, Row, NavDropdown } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import jwt from "jsonwebtoken";
import _, { isUndefined } from "lodash";
import {
  action_progress_start,
  action_progress_stop,
} from "../../redux/actions/progressAction";
import "./Nav.scss";
import {
  action_sign_out,
  action_sign_out_seller,
  thunk_seller_sign_in,
} from "../../redux/actions/authActions";
import { action_sign_up_as_seller } from "../../redux/actions/authActions";
import { action_dialog_open } from "../../redux/actions/dialogAction";
import freeConsultation from "../../images/free-consultation.png";
import EmailOutlinedIcon from "@material-ui/icons/EmailOutlined";
import NotificationsOutlinedIcon from "@material-ui/icons/NotificationsOutlined";
import dummyUser from "../../images/dummyUser.png";
import dummyIcon from "../../images/navbar.png";

const NavComponent = (props) => {
  var getQueryParams = function (s) {
    if (!s || typeof s !== "string" || s.length < 2) {
      return new Map();
    }
    var a = s
      .substr(1)
      .split("&")
      .map(function (x) {
        var a = x.split("=");
        return [a[0], a[1]];
      });
    return new Map(a);
  };
  const s = useLocation().search;
  const m = getQueryParams(s);
  const params =
    m.get("productId") !== undefined && m.get("packageId") !== undefined
      ? "?productId=" + m.get("productId") + "&packageId=" + m.get("packageId")
      : "";

  const handleSignOut = (e) => {
    props.actionSignOut();
    localStorage.removeItem("sellerJwtToken");
    localStorage.removeItem("jwtToken");
    localStorage.removeItem("seller_profile_data");
    localStorage.removeItem("seller_profile_data_2");
    localStorage.removeItem("gig_assignment_data");
    props.actionDialogOpen({
      title: "Logged out",
      message: "You are successfully logged out.",
      positive: "Close",
    });
    props.history.push("/signin/");
  };

  const userImage = !props.auth.isAlsoSeller
    ? _.isNull(localStorage.getItem("jwtToken")) ||
      JSON.stringify(jwt.decode(localStorage.getItem("jwtToken")).avatar) == ""
      ? dummyUser
      : JSON.stringify(jwt.decode(localStorage.getItem("jwtToken")).avatar)
    : _.isNull(localStorage.getItem("sellerJwtToken")) ||
      JSON.stringify(
        jwt.decode(localStorage.getItem("sellerJwtToken")).avatar
      ) == ""
      ? dummyUser
      : JSON.stringify(jwt.decode(localStorage.getItem("sellerJwtToken")).avatar);

  // console.log(JSON.stringify(jwt.decode(localStorage.getItem('jwtToken')).avatar))
  const handleSignInAsSeller = async () => {
    try {
      if (props.auth.isAuthorized) {
        const { userEmail, userPassword } = jwt.decode(
          localStorage.getItem("jwtToken")
        );
        const payload = {
          email: userEmail,
          password: userPassword,
        };
        props.actionStartProgress({
          isOpen: 1,
        });
        const result = await props.thunkActionSignInAsSeller(payload);
        props.actionDialogOpen({
          title: `Success`,
          message: `You've successfully switched to seller`,
          positive: "Ok",
          type: "Alert",
        });
        props.history.push("/");
        localStorage.setItem("sellerJwtToken", result.data.token);
        props.signUpAsSeller();
        props.progressStop();

        props.history.push("/");
      }
    } catch (e) {
      props.actionStopProgress({
        isOpen: false,
      });
      if (
        !isUndefined(e) &&
        !isUndefined(e.response) &&
        !isUndefined(e.response.status)
      ) {
        if (e.response.status === 404) {
          // props.actionDialogOpen({
          //   title: `You are not registered`,
          //   message: `You are not registered as merchant. Please register yourself`,
          //   positive: "Ok",
          //   type: "Alert",
          // });
          props.history.push("/seller/");
        }
      }
    }
  };
  return (
    <>
      <Navbar
        className={"mt-0 pr-md-5 fixed-top shadow bg-white"}
        collapseOnSelect
        expand="lg"
      >
        <Navbar.Brand className="logo-app pl-0 pl-sm-5">
          <div className="container-fluid mt-md-0 pb-1">
            <img
              src={OnorLogo}
              width="100"
              height="50"
              className="d-inline-block align-top crsr"
              onClick={(e) => props.history.push("/")}
              alt="logo"
            />
          </div>
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          className="navbar-toggler-css"
          style={{ outline: "none", border: "none" }}
        >
          <img className="logo-rotate"
            src={dummyIcon}
          />
        </Navbar.Toggle>
        <Navbar.Collapse
          id="responsive-navbar-nav"
          className="justify-content-between"
        >
          <Nav>
            {props.auth.isAuthorized && (
              <Nav.Item className={"px-4"}>
                <Nav.Link
                  eventKey="0"
                  className={"text-dark"}
                  onClick={(e) =>
                    window.location.assign(
                      "https://calendly.com/onorservices-calendar/consult-a-makeup-maestro",
                      "_blank"
                    )
                  }
                >
                  <img
                    src={freeConsultation}
                    style={{ height: "70px", width: "250px" }}
                    className={"m-0 p-0"}
                    alt="free-consultation"
                  />
                </Nav.Link>
              </Nav.Item>
            )}
            <Nav.Item className={"px-3 mt-md-2"}>
              <Nav.Link
                eventKey="1"
                className={"text-dark"}
                onClick={(e) => props.history.push("/")}
                style={{ fontSize: '18px', fontWeight: '700' }}
              >
                Home
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className={"px-3 mt-md-2"}>
              <Nav.Link
                eventKey="1"
                className={"text-dark"}
                onClick={(e) => props.history.push("/why-onor")}
                style={{ fontSize: '18px' }}
              >
                Why Onor
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className={"px-3 mt-md-2"}>
              <Nav.Link
                eventKey="2"
                className={"text-dark"}
                onClick={(e) => props.history.push("/testimonials")}
                style={{ fontSize: '18px' }}
              >
                Testimonials
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className={"px-3 mt-md-2"}>
              <Nav.Link
                eventKey="2"
                className={"text-dark"}
                onClick={(e) => props.history.push("/news-and-hacks")}
                style={{ fontSize: '18px' }}
              >
                News
              </Nav.Link>
            </Nav.Item>
            {/* <Nav.Item className={'px-3 mt-md-2'}>
                            <Nav.Link eventKey="2" className={'text-dark'} onClick={(e) => props.history.push('/messages2')}>Message</Nav.Link>
                        </Nav.Item> */}
            {/* <Nav.Item className={'px-3 mt-md-2'}>
                            <Nav.Link eventKey="3" className={'text-dark'} onClick={(e) => props.history.push('/user/buyer/edit/')}>Profile</Nav.Link>
                        </Nav.Item> */}
            <Nav.Item className={"px-3 mt-md-2"}>
              <Nav.Link
                eventKey="4"
                className={"text-dark"}
                onClick={(e) => props.history.push("/about")}
                style={{ fontSize: '18px' }}
              >
                About Onor
              </Nav.Link>
            </Nav.Item>
            {props.auth.isAuthorized ? (
              <>
                <Nav.Item className={"px-1 mt-md-2"}>
                  <Nav.Link
                    eventKey="5"
                    className={"text-dark"}
                    onClick={(e) => props.history.push("/messages2")}
                  >
                    <EmailOutlinedIcon fontSize="medium" />
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item className={"px-1 mt-md-2"}>
                  <Nav.Link eventKey="6" className={"text-dark"}>
                    <NotificationsOutlinedIcon fontSize="medium" />
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item className={"px-1 mt-md-2"}>
                  <Nav.Link className={"text-dark"}>
                    <NavDropdown
                      eventKey={1}
                      title={
                        <img
                          className="rounded-circle"
                          height={30}
                          width={30}
                          style={{ marginTop: "-1em" }}
                          src={
                            !isUndefined(userImage)
                              ? userImage.replaceAll('"', "")
                              : dummyUser
                          }
                          alt="user pic"
                        />
                      }
                      role="menu"
                      className="pull-left"
                      id="basic-nav-dropdown"
                    >
                      {!props.auth.isAlsoSeller ? (
                        <>
                          <NavDropdown.Item
                            eventKey={1.1}
                            onClick={(e) => {
                              handleSignInAsSeller();
                            }}
                          >
                            Switch to Seller
                          </NavDropdown.Item>
                          <NavDropdown.Item
                            as={Link}
                            eventKey={1.2}
                            to="/buyer/orders/"
                          >
                            Manage Orders
                          </NavDropdown.Item>
                          <NavDropdown.Item
                            as={Link}
                            eventKey={1.3}
                            to="/user/requests/"
                          >
                            Manage Requests
                          </NavDropdown.Item>
                          <NavDropdown.Item
                            as={Link}
                            eventKey={1.4}
                            to="/buyer/postrequest"
                          >
                            Post a Request
                          </NavDropdown.Item>
                          <NavDropdown.Item
                            as={Link}
                            eventKey={1.5}
                            to="/user/preferences/"
                          >
                            Preferences
                          </NavDropdown.Item>
                          <NavDropdown.Item
                            as={Link}
                            eventKey={1.6}
                            to="/user/buyer/edit/"
                          >
                            Edit Profile
                          </NavDropdown.Item>
                          <NavDropdown.Item
                            as={Link}
                            eventKey={1.7}
                            to="/user/password/"
                          >
                            Change Password
                          </NavDropdown.Item>
                          <NavDropdown.Item
                            as={Link}
                            eventKey={1.8}
                            onClick={(e) => handleSignOut()}
                          >
                            Signout
                          </NavDropdown.Item>
                        </>
                      ) : (
                        <>
                          <NavDropdown.Item
                            as={Link}
                            eventKey={1.1}
                            onClick={(e) => {
                              props.history.push("/");
                              props.actionSignOutAsSeller();
                              props.actionDialogOpen({
                                title: `Success`,
                                message: `You've successfully switched to Buyer`,
                                positive: "Ok",
                                type: "Alert",
                              });
                              props.history.push("/");
                            }}
                          >
                            Switch to Buyer
                          </NavDropdown.Item>
                          <NavDropdown.Item
                            as={Link}
                            eventKey={1.2}
                            to="/seller/gigs/"
                          >
                            Manage Sessions
                          </NavDropdown.Item>
                          <NavDropdown.Item
                            as={Link}
                            eventKey={1.3}
                            to="/seller/receivedOrders/"
                          >
                            Received Orders
                          </NavDropdown.Item>
                          <NavDropdown.Item
                            as={Link}
                            eventKey={1.4}
                            to="/seller/create/summary/"
                          >
                            Post a Session
                          </NavDropdown.Item>
                          <NavDropdown.Item
                            as={Link}
                            eventKey={1.5}
                            to="/user/preferences/"
                          >
                            Preferences
                          </NavDropdown.Item>
                          <NavDropdown.Item
                            as={Link}
                            eventKey={1.6}
                            to="/user/buyer/edit/"
                          >
                            Edit Profile
                          </NavDropdown.Item>
                          <NavDropdown.Item
                            as={Link}
                            eventKey={1.7}
                            to="/user/password/"
                          >
                            Change Password
                          </NavDropdown.Item>
                          <NavDropdown.Item
                            as={Link}
                            eventKey={1.8}
                            onClick={(e) => handleSignOut()}
                          >
                            Signout
                          </NavDropdown.Item>
                        </>
                      )}
                    </NavDropdown>
                  </Nav.Link>
                </Nav.Item>
              </>
            ) : (
              <>
                {/* <Nav.Item className={"px-3 mt-md-2 mb-0"}>
                  <Nav.Link
                    eventKey="5"
                    className={"text-light rounded text-center text-uppercase"}
                    style={{ backgroundColor: '#EA5B28', padding: "7px 35px" }}
                    onClick={(e) => props.history.push("/signin" + params)}
                  >
                    Login
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item className={"px-3 mt-md-2"}>
                  <Nav.Link
                    eventKey="6"
                    className={"bg-dark text-light text-center rounded text-uppercase"}
                    onClick={(e) => props.history.push("/signup" + params)}
                    style={{ padding: "7px 35px" }}
                  >
                    Sign up
                  </Nav.Link>
                </Nav.Item> */}
              </>
            )}
          </Nav>
          <Nav>
            <Nav.Item className={"px-3 mt-md-2 mb-2 mb-sm-0"}>
              <Nav.Link
                eventKey="5"
                className={"text-light rounded text-center text-uppercase"}
                style={{ backgroundColor: '#EA5B28', padding: "7px 35px" }}
                onClick={(e) => props.history.push("/signin" + params)}
              >
                Login
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className={"px-3 mt-md-2"}>
              <Nav.Link
                eventKey="6"
                className={"bg-dark text-light text-center rounded text-uppercase"}
                onClick={(e) => props.history.push("/signup" + params)}
                style={{ padding: "7px 35px" }}
              >
                Sign up
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
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
    signUpAsSeller: () => dispatch(action_sign_up_as_seller()),
    actionSignOut: () => dispatch(action_sign_out()),
    actionDialogOpen: (payload) => dispatch(action_dialog_open(payload)),
    actionSignOutAsSeller: () => dispatch(action_sign_out_seller()),
    thunkActionSignInAsSeller: (payload) =>
      dispatch(thunk_seller_sign_in(payload)),
    actionStartProgress: (payload) => dispatch(action_progress_start(payload)),
    actionStopProgress: (payload) => dispatch(action_progress_stop(payload)),
  };
};
export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(NavComponent)
);
