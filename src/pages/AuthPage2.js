import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import SocialButton from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import "./AuthPage.scss";
import SvgGoingUp from "../svg/going-up-animate.svg";
import {
  action_sign_in,
  action_sign_up,
  thunk_user_signin,
  thunk_user_signup,
} from "../redux/actions/authActions";
import { connect } from "react-redux";
import SetAuthorizationToken from "../utils/SetAuthorizationToken";
import { action_dialog_open } from "../redux/actions/dialogAction";
import ProgressBar from "../components/ProgressBar";
import {
  action_progress_start,
  action_progress_stop,
} from "../redux/actions/progressAction";
import MyDialog from "../components/MyDialog";
import OnorLogo from "../images/onorlogo.png";
import loginImage from "../images/login.png";
import joinImage from "../images/join.png";
import FacebookIcon from "@material-ui/icons/Facebook";
import AppleIcon from "@material-ui/icons/Apple";
import GTranslateIcon from "@material-ui/icons/GTranslate";
import { isUndefined } from "lodash";
import { Formik } from 'formik'

const AuthPage = (props) => {
  const useStyles = makeStyles((theme) => ({
    button: {
      margin: theme.spacing(1),
    },
  }));

  const {
    thunk_user_signup,
    thunk_user_signin,
    action_sign_in,
    action_sign_up,
    signinPage,
    signupPage,
    auth,
  } = props;
  // const {auth} = props

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState(0);
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");

  const handleSignUp = async (e) => {
    e.preventDefault();
    props.actionStartProgress();
    const data = {
      name,
      email,
      phone,
      password,
    };
    try {
      const result = await thunk_user_signup(data);
      console.log({ ...result });
      props.actionStopProgress();
      const token = result.data.token;
      localStorage.setItem("jwtToken", token);
      SetAuthorizationToken(token);
      action_sign_up(token);
      props.actionDialogOpen({
        title: "Registration Successfull",
        message:
          "You are successfully registered. For security reason your session will expire in two hours",
        positive: "Ok",
        negative: "Close",
        type: "Alert",
      });
      props.history.push("/");
    } catch (e) {
      console.log(e);
      console.log({ ...e });
      props.actionStopProgress();
      if (!isUndefined(e)) {
        if (e.response.status === 401) {
          props.actionDialogOpen({
            title: `Registration failed.`,
            message: `${e.response.data.message}. Server returned error of type: ${e.response.data.error}`,
            positive: "Ok",
            negative: "Close",
            type: "Alert",
          });
        } else {
          props.actionDialogOpen({
            title: `Registration failed.`,
            message: `Server returned error with response code: ${e.response.status}.

                    Something went wrong. Couldn't register currently. Please try again`,
            positive: "Ok",
            negative: "Close",
            type: "Alert",
          });
        }
      }

      //   localStorage.removeItem("jwtToken");
      //   SetAuthorizationToken();
    }
  };

  const handleSignIn = async (e) => {
    props.actionStartProgress();
    e.preventDefault();
    const data = {
      email,
      password,
    };

    try {
      const result = await thunk_user_signin(data);
      props.actionStopProgress();
      const token = result.data.token;
      localStorage.setItem("jwtToken", token);
      SetAuthorizationToken(token);
      action_sign_in(token);
      props.actionDialogOpen({
        title: "Sign in Successfully",
        message:
          "You are successfully logged in. For security reason your session will expire in two hours",
        positive: "Ok",
        negative: "Close",
        type: "Alert",
      });
      props.history.push("/");
    } catch (e) {
      console.log({ ...e });
      props.actionStopProgress();
      props.actionDialogOpen({
        title: "Sign in failed",
        message: `Server returned error with response code:}.
                 Something went wrong. Couldn't Sign in currently. Please try again`,
        positive: "Ok",
        negative: "Close",
        type: "Alert",
      });

      //   localStorage.removeItem("jwtToken");
      //   SetAuthorizationToken();
    }
  };

  const static_side_jsx = (
    <Fragment>
      <Col md={6} sm={12} className="d-none d-md-block mycol">
        <img src={SvgGoingUp} alt={"svg going up"} />
      </Col>
    </Fragment>
  );
  const classes = useStyles();
  const sign_up_jsx = (
    <React.Fragment>
      <Row style={{ height: "500px" }}>
        <Col sm={6} className={"imageDiv"}>
          <img
            src={OnorLogo}
            alt="logo"
            className={
              "sideImg img-responsive img-fluid d-flex justify-content-center"
            }
            style={{
              height: "180px",
              width: "300px",
              marginTop: "15em",
              marginLeft: "6em",
            }}
          />
        </Col>
        <Col
          xs={12}
          sm={12}
          md={6}
          lg={6}
          className={"content d-flex justify-content-center"}
        >
          <div className="form-group row">
            <div className="col-sm-12 mt-3 d-flex justify-content-center">
              <img
                src={OnorLogo}
                alt="logo"
                className={
                  "img-responsive img-fluid d-flex justify-content-center"
                }
                style={{ height: "70px", width: "120px" }}
              />
            </div>
            <div className="col-sm-12 mt-3 mb-1 d-flex justify-content-center">
              <h5 className={"header_h4"}>JOIN</h5>
            </div>
            <div className="col-sm-12 d-flex justify-content-center">
              <Form.Control
                className={"w-75"}
                style={{ borderRadius: "10px" }}
                onChange={(e) => setName(e.target.value)}
                type="text"
                placeholder="Enter Name"
              />
            </div>
            {/* <div className="col-sm-12 mt-3 d-flex justify-content-center">
                            <Form.Control className={'w-75'} style={{ borderRadius: '10px' }} onChange={(e) => setLastName(e.target.value)} type="text" placeholder="Enter Last Name"/>
                        </div> */}
            <div className="col-sm-12 mt-3 d-flex justify-content-center">
              <Form.Control
                className={"w-75"}
                style={{ borderRadius: "10px" }}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="Enter email"
              />
            </div>
            <div className="col-sm-12 mt-3 d-flex justify-content-center">
              <Form.Control
                className={"w-75"}
                style={{ borderRadius: "10px" }}
                onChange={(e) => setPhone(e.target.value)}
                type="phone"
                placeholder="Enter phone number"
              />
            </div>
            <div className="col-sm-12 mt-3 d-flex justify-content-center">
              <Form.Control
                className={"w-75"}
                style={{ borderRadius: "10px" }}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="Password"
              />
            </div>
            <div className="col-sm-12 mt-3 d-flex justify-content-center">
              <Form.Control
                className={"w-75"}
                style={{ borderRadius: "10px" }}
                onChange={(e) => setRePassword(e.target.value)}
                type="password"
                placeholder="Re enter Password"
              />
            </div>
            <div className="col-sm-12 mt-3 d-flex justify-content-center">
              <Form.Group controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
              </Form.Group>
            </div>
            <div className="col-sm-12 col-xs-12 d-flex justify-content-center">
              <div className="col-sm-6 col-xs-6 d-flex justify-content-center">
                <Link to="/signin/">
                  <Button variant="" className={"onor_secondery_btn"}>
                    Back
                  </Button>
                </Link>
              </div>
              <div className="col-sm-6 col-xs-6 d-flex justify-content-center">
                <Button
                  onClick={handleSignUp}
                  variant=""
                  className={"onor_btn"}
                >
                  Join
                </Button>
              </div>
            </div>
            <div className="col-sm-12 mt-3 d-flex justify-content-center">
              <p>OR</p>
            </div>
            <div className="col-sm-12 d-flex justify-content-center">
              <SocialButton
                variant="contained"
                style={{
                  backgroundColor: "#3b5998",
                  color: "white",
                  width: "20em",
                }}
                className={classes.button}
                startIcon={<FacebookIcon />}
              >
                Continue with Facebook
              </SocialButton>
            </div>
            <div className="col-sm-12 d-flex justify-content-center">
              <SocialButton
                variant="contained"
                style={{
                  backgroundColor: "#fff",
                  color: "black",
                  width: "20em",
                }}
                className={classes.button}
                startIcon={<GTranslateIcon />}
              >
                Continue with Google
              </SocialButton>
            </div>
            <div className="col-sm-12 d-flex justify-content-center">
              <SocialButton
                variant="contained"
                style={{
                  backgroundColor: "#fff",
                  color: "black",
                  width: "20em",
                }}
                className={classes.button}
                startIcon={<AppleIcon />}
              >
                Continue with Apple
              </SocialButton>
            </div>
          </div>
        </Col>
      </Row>
    </React.Fragment>
  );

  const sign_in_jsx = (
    <React.Fragment>
      <Row style={{ height: "500px" }}>
        <Formik
          initialValues={{ email: '', password: '' }}
          validate={values => {
            const errors = {};
            if (!values.email) {
              errors.email = 'Required';
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = 'Invalid email address';
            }
            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 400);
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
            /* and other goodies */
          }) => (
              <React.Fragment>
                <Col sm={6} className={"imageDiv"}>
                  <img
                    src={OnorLogo}
                    alt="logo"
                    className={
                      "sideImg img-responsive img-fluid d-flex justify-content-center"
                    }
                    style={{
                      height: "180px",
                      width: "300px",
                      marginTop: "12em",
                      marginLeft: "6em",
                    }}
                  />
                </Col>
                <Col
                  xs={12}
                  sm={12}
                  md={6}
                  lg={6}
                  className={"content d-flex justify-content-center"}
                >
                  <div className="form-group row">
                    <div className="col-sm-12 mt-3 d-flex justify-content-center">
                      <img
                        src={OnorLogo}
                        alt="logo"
                        className={
                          "img-responsive img-fluid d-flex justify-content-center"
                        }
                        style={{ height: "70px", width: "120px" }}
                      />
                    </div>
                    <div className="col-sm-12 mt-3 mb-1 d-flex justify-content-center">
                      <h5 className={"header_h4"}>LOGIN</h5>
                    </div>
                    <div className="col-sm-12 d-flex justify-content-center">
                      <Form.Control
                        className={"w-75"}
                        style={{ borderRadius: "10px" }}
                        onChange={(e) => setEmail(e.target.value)}
                        type="email"
                        placeholder="Enter email"
                      />
                      {errors.email && touched.email && errors.email}
                    </div>
                    <div className="col-sm-12 mt-4 d-flex justify-content-center">
                      <Form.Control
                        className={"w-75"}
                        style={{ borderRadius: "10px" }}
                        onChange={(e) => setPassword(e.target.value)}
                        type="password"
                        placeholder="Password"
                      />
                      {errors.password && touched.password && errors.password}
                    </div>
                    <div className="col-sm-12 col-xs-12 d-flex justify-content-center">
                      <div className="col-sm-6 mt-4 d-flex justify-content-center">
                        <img
                          src={loginImage}
                          onClick={handleSignIn}
                          disabled={isSubmitting}
                          alt={"Login"}
                          style={{ height: "5em", width: "2.8em", cursor: "pointer" }}
                        />
                      </div>
                      <div className="col-sm-6 mt-4 d-flex justify-content-center">
                        <Link to="/signup/">
                          <img
                            src={joinImage}
                            alt={"Join"}
                            style={{ height: "5em", width: "2.8em", cursor: "pointer" }}
                          />
                        </Link>
                      </div>
                    </div>
                    <div className="col-sm-12 mt-4 d-flex justify-content-center">
                      <Link to={"/signup/"}>
                        <a style={{ cursor: "pointer" }} className={"onor_span_color"}>
                          Not a member?
                </a>
                      </Link>
                    </div>
                    <div className="col-sm-12 mt-4 d-flex justify-content-center">
                      <a className={"onor_span_color"}>Need help?</a>
                    </div>
                    <div className="col-sm-12 mt-4 d-flex justify-content-center">
                      <p style={{ color: "#252525", textAlign: "center" }}>
                        By signing up you agree with our
                <br />
                        <span style={{ fontSize: "15pt" }}>
                          Privacy Policy and Terms &amp; Conditions
                </span>
                      </p>
                    </div>
                  </div>
                </Col>
              </React.Fragment>
            )}
        </Formik>
      </Row>
    </React.Fragment>
  );

  const unauthorized_jsx = (
    <Fragment>
      <Container fluid className={"px-5"}>
        {/* <Row> */}
        {/* {static_side_jsx} */}
        {signinPage && sign_in_jsx}
        {signupPage && sign_up_jsx}
        {/* </Row> */}
      </Container>
    </Fragment>
  );

  const authorized_jsx = (
    <Fragment>
      <Container>
        <Row className={"d-flex justify-content-center"}>
          <Button className={"ml-5 mt-5"} variant="">
            Please Logout First
          </Button>
        </Row>
      </Container>
    </Fragment>
  );

  return (
    <Fragment>
      {props.dialog.isOpen && <MyDialog />}
      {props.progress.isOpen && (
        <ProgressBar title={"Please wait while you are being logged in"} />
      )}
      {auth.isAuthorized ? authorized_jsx : unauthorized_jsx}
    </Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
    progress: state.progress,
    dialog: state.dialog,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    thunk_user_signup: (data) => dispatch(thunk_user_signup(data)),
    thunk_user_signin: (data) => dispatch(thunk_user_signin(data)),
    action_sign_in: (data) => dispatch(action_sign_in(data)),
    action_sign_up: (data) => dispatch(action_sign_up(data)),
    actionDialogOpen: (payload) => dispatch(action_dialog_open(payload)),
    actionStartProgress: (payload) => dispatch(action_progress_start(payload)),
    actionStopProgress: () => dispatch(action_progress_stop()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AuthPage);
