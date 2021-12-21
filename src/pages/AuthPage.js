import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { withFirebase } from "../firebase";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import SocialButton from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import { useLocation } from "react-router-dom";
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
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import TextField from '@material-ui/core/TextField';
import CircularProgress from '@material-ui/core/CircularProgress'
import Axios from "axios";
import {
  SEND_OTP_FOR_RECOVER_PASSWORD,
  VERIFY_OTP
} from '../utils/API_ENDPOINTS'
import _ from 'lodash'

let AuthPage = (props) => {


  var getQueryParams = function (s) {
    if (!s || typeof s !== 'string' || s.length < 2) {
      return new Map();
    }
    var a = s
      .substr(1)
      .split('&')
      .map(function (x) {
        var a = x.split('=');
        return [a[0], a[1]];
      })
    return new Map(a)
  }
  const s = useLocation().search
  const m = getQueryParams(s)

  const params =
    m.get('productId') !== undefined && m.get('packageId') !== undefined
      ?
      "?productId=" + m.get('productId') + "&packageId=" + m.get('packageId')
      : ''

  const useStyles = makeStyles((theme) => ({
    button: {
      margin: theme.spacing(1),
    },
  }));

  // forgot password
  const [forgotPasswordDialog, setForgotPasswordDialog] = React.useState(false)
  const [recoveryEmailInput, setRecoveryEmailInput] = useState('')
  const [isMailSending, setIsMailSending] = useState(false)
  const [errorMessage, setErrorMessage] = useState({
    email: '',
    otp: ''
  })
  const [showOtpBox, setShowOtpBox] = useState(false)
  const [otp, setOtp] = useState('')

  const sendEmail = async () => {
    if (recoveryEmailInput !== '') {
      setErrorMessage({
        email: '',
        otp: ''
      })
      setIsMailSending(true)
      try {
        const emailData = {
          "email": recoveryEmailInput
        }
        const result = await Axios.post(SEND_OTP_FOR_RECOVER_PASSWORD, emailData)
        console.log({ ...result })
        if (result.status === 200) {
          // setShowOtpBox(true)
          alert('Password sent to the provided email!')
          setForgotPasswordDialog(false)
        }
      } catch (error) {
        console.log(error)
        if (!_.isUndefined(error.response.data) && !_.isUndefined(error.response.data.message)) {
          setErrorMessage({
            ...errorMessage,
            email: error.response.data.message
          })
        } else {
          setErrorMessage({
            ...errorMessage,
            email: 'Something went wrong, please try again'
          })
        }
      }
      setRecoveryEmailInput('')
      setIsMailSending(false)
    }
  }

  const verifyOtp = async () => {
    if (otp === '') {
      setErrorMessage({
        ...errorMessage,
        otp: 'Please enter One Time Password (OTP) sent to your email address'
      })
    } else {
      try {
        const otpData = {
          otp: Number(otp)
        }
        const result = await Axios.post(VERIFY_OTP, otpData)
        console.log({ ...result })
        if (result.data.status == 'success') {
          alert('OTP Verified')
        }
      } catch (error) {
        console.log({ ...error })
        if (!_.isUndefined(error.response.data) && !_.isUndefined(error.response.data.message)) {
          setErrorMessage({
            ...errorMessage,
            otp: error.response.data.message
          })
        } else {
          setErrorMessage({
            ...errorMessage,
            otp: 'Something went wrong, please try again'
          })
        }
      }
    }
  }

  const forgot_password_jsx = (
    <div>
      <Dialog open={forgotPasswordDialog} onClose={e => setForgotPasswordDialog(false)} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Forgot your Password?</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please enter your email address here. We will send a recovery link to change your password.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            onChange={e => setRecoveryEmailInput(e.target.value)}
            id="name"
            label="Email Address"
            autoComplete={'off'}
            type="email"
            fullWidth
          />
          <span className={'text-danger'}>{errorMessage.email}</span>
          {
            showOtpBox &&
            <>
              <TextField
                autoFocus
                margin="dense"
                onChange={e => setOtp(e.target.value)}
                id="otp"
                label="Enter OTP"
                autoComplete={'off'}
                type="email"
                fullWidth
              />
              <span className={'text-danger'}>{errorMessage.otp}</span>
            </>
          }
        </DialogContent>
        <DialogActions>
          <Button onClick={e => setForgotPasswordDialog(false)} variant={''} className={'onor_secondery_btn'}>
            Close
          </Button>
          {
            !showOtpBox ? isMailSending ? <CircularProgress /> :
              <Button onClick={e => sendEmail()} variant={''} className={'onor_btn'}>
                Send recovery mail
              </Button> : null
          }
          {
            showOtpBox &&
            <Button onClick={e => verifyOtp()} variant={''} className={'onor_btn'}>
              Verify
            </Button>
          }
        </DialogActions>
      </Dialog>
    </div>
  )

  // forgot password ends

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
  const [lname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState(0);
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const handleSignUp = async (e) => {
    if (validateSignup()) {
      e.preventDefault();
      props.actionStartProgress();
      let data = {
        first_name: name,
        last_name: lname,
        email: email,
        // phone: phone,
        password: password,
      };
      try {
        const result = await thunk_user_signup(data);
        console.log(props.firebase);
        // props.firebase
        //   .doCreateUserWithEmailAndPassword(data.email, data.password)
        //   .then((fbResult) => {
        //     console.log("FIREBASE SIGNUP RESULT");
        //     console.log({ ...fbResult });
        //   })
        //   .catch((e) => {
        //     console.log("FIREBASE SIGNUP ERROR");
        //     console.log({ ...e });
        //   });

        console.log("SPRING_SIGNUP_RESULT");
        console.log({ ...result });
        props.actionStopProgress();
        const token = result.data.token;
        localStorage.setItem("jwtToken", token);
        SetAuthorizationToken(token);
        action_sign_up(token);
        props.actionDialogOpen({
          title: "Registration Successful",
          message: "You are successfully registered.",
          positive: "Close",
          type: "Alert",
        });
        if (m.get('productId') !== undefined && m.get('packageId') !== undefined) {
          props.history.push("/buyer/order/details/" + m.get('productId') + "/" + m.get('packageId') + "/")
        } else {
          props.history.push("/")
        }
      } catch (e) {
        console.log(e);
        console.log({ ...e });
        props.actionStopProgress();
        if (!isUndefined(e) && !isUndefined(e.response)) {
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
    }
  };

  const [signinEmail, setSigninEmail] = useState("")
  const [signinEmailError, setSigninEmailError] = useState("")
  const [signinPassword, setSigninPassword] = useState("")
  const [signinPasswordError, setSigninPasswordError] = useState("")

  const [registrationValidation, registrationValidationError] = useState({
    name: "",
    lname: "",
    email: "",
    phone: "",
    password: "",
    rePassword: "",
  });

  const validateLogin = () => {
    if (signinEmail === "") {
      setSigninEmailError("Email is required");
      setSigninPasswordError("");
      return false;
    } else if (!signinEmail.includes("@")) {
      setSigninPasswordError("");
      setSigninEmailError("Invalid Email");
      return false;
    } else if (signinPassword === "") {
      setSigninEmailError("");
      setSigninPasswordError("Password is required");
      return false;
    } else {
      return true;
    }
  };

  const validateSignup = () => {
    if (name === "") {
      registrationValidationError({
        name: "First Name is required",
        lname: "",
        email: "",
        phone: "",
        password: "",
        rePassword: "",
      });
      return false;
    } else if (lname === "") {
      registrationValidationError({
        lname: "Last Name is required",
        name: "",
        email: "",
        phone: "",
        password: "",
        rePassword: "",
      });
      return false;
    } else if (email === "") {
      registrationValidationError({
        email: "Email is required",
        name: "",
        lname: "",
        phone: "",
        password: "",
        rePassword: "",
      });
      return false;
    } else if (!email.includes("@")) {
      registrationValidationError({
        email: "Invalid Email",
        name: "",
        phone: "",
        password: "",
        lname: "",
        rePassword: "",
      });
      return false;
    } else if (phone === "" && false) {
      // registrationValidationError({
      //   phone: "Phone number is required",
      //   name: "",
      //   email: "",
      //   password: "",
      //   lname: "",
      //   rePassword: "",
      // });
      // return false;
    } else if (phone.length !== 10 && false) {
      // registrationValidationError({
      //   phone: "A phone number should contain 10 digits",
      //   name: "",
      //   email: "",
      //   password: "",
      //   lname: "",
      //   rePassword: "",
      // });
      // return false;
    } else if (isNaN(phone)) {
      registrationValidationError({
        phone: "Invalid Phone",
        name: "",
        email: "",
        lname: "",
        password: "",
        rePassword: "",
      });
      return false;
    } else if (password === "") {
      registrationValidationError({
        password: "Password is Required",
        name: "",
        phone: "",
        lname: "",
        email: "",
        rePassword: "",
      });
      return false;
    } else if (
      // !password.match(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/)
      password.length < 6
    ) {
      registrationValidationError({
        password:
          "Password must contain at least 6 characters",
        name: "",
        phone: "",
        lname: "",
        email: "",
        rePassword: "",
      });
    } else if (rePassword === "") {
      registrationValidationError({
        rePassword: "Please confirm your entered password",
        name: "",
        lname: "",
        phone: "",
        password: "",
        email: "",
      });
      return false;
    } else if (rePassword !== password) {
      registrationValidationError({
        rePassword: "Passwords doesn't match",
        name: "",
        lname: "",
        phone: "",
        password: "",
        email: "",
      });
      return false;
    } else {
      registrationValidationError({
        rePassword: "",
        name: "",
        lname: "",
        phone: "",
        password: "",
        email: "",
      });
      return true;
    }
  };

  const handleSignIn = async (e) => {
    if (validateLogin()) {
      setSigninEmailError("");
      setSigninPasswordError("");
      props.actionStartProgress();
      // e.preventDefault();
      const data = {
        email: signinEmail,
        password: signinPassword,
      };
      console.log("SIGNIN DATA");
      console.log({ ...data });
      try {
        const result = await thunk_user_signin(data);
        props.actionStopProgress();
        const token = result.data.token;
        localStorage.setItem("jwtToken", token);
        SetAuthorizationToken(token);
        action_sign_in(token);
        // props.actionDialogOpen({
        //   title: "Success",
        //   message:
        //     "You are successfully Logged in",
        //   positive: "Close",
        //   type: "Alert",
        // });
        if (m.get('productId') !== undefined && m.get('packageId') !== undefined) {
          props.history.push("/buyer/order/details/" + m.get('productId') + "/" + m.get('packageId') + "/")
        } else {
          props.history.push("/")
        }
      } catch (e) {
        console.log({ ...e });
        props.actionStopProgress();
        props.actionDialogOpen({
          title: "Sign in failed",
          message: `${e.response.data.message}`,
          positive: "Retry",
          type: "Alert",
        });

        //   localStorage.removeItem("jwtToken");
        //   SetAuthorizationToken();
      }
    }
  };

  const location = useLocation();
  let isMobile = "";
  if (location.pathname.match("/mobile/")) {
    isMobile = "mobile/";
  } else {
    isMobile = "";
  }

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
      <Row style={{ height: "500px" }} className="mb-5">
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
                placeholder="Enter First Name"
              />
            </div>
            <div className="col-sm-12 mt-1 d-flex justify-content-center">
              <span style={{ color: "red" }}>
                {registrationValidation.name}
              </span>
            </div>

            <div className="col-sm-12 mt-3 d-flex justify-content-center">
              <Form.Control
                className={"w-75"}
                style={{ borderRadius: "10px" }}
                onChange={(e) => setLastName(e.target.value)}
                type="text"
                placeholder="Enter Last Name"
              />
            </div>
            <div className="col-sm-12 mt-1 d-flex justify-content-center">
              <span style={{ color: "red" }}>
                {registrationValidation.lname}
              </span>
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
            <div className="col-sm-12 mt-1 d-flex justify-content-center">
              <span style={{ color: "red" }}>
                {registrationValidation.email}
              </span>
            </div>
            {/* <div className="col-sm-12 mt-3 d-flex justify-content-center">
              <Form.Control
                className={"w-75"}
                style={{ borderRadius: "10px" }}
                onChange={(e) => setPhone(e.target.value)}
                type="phone"
                placeholder="Enter phone number"
              />
            </div> */}
            {/* <div className="col-sm-12 mt-1 d-flex justify-content-center">
              <span style={{ color: "red" }}>
                {registrationValidation.phone}
              </span>
            </div> */}
            <div className="col-sm-12 mt-3 d-flex justify-content-center">
              <Form.Control
                className={"w-75"}
                style={{ borderRadius: "10px" }}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="Password"
              />
            </div>
            <div className="col-sm-12 mt-1 d-flex justify-content-center">
              <span style={{ color: "red" }}>
                {registrationValidation.password}
              </span>
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
            <div className="col-sm-12 mt-1 d-flex justify-content-center">
              <span style={{ color: "red" }}>
                {registrationValidation.rePassword}
              </span>
            </div>
            {/* <div className="col-sm-12 mt-3 d-flex justify-content-center">
              <Form.Group controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
              </Form.Group>
            </div> */}
            <div className="col-sm-12 col-xs-12 d-flex justify-content-center">
              <div className="col-sm-6 col-xs-6 d-flex justify-content-center">
                <Link to={"/" + isMobile + "signin/" + params}>
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
            {/*             
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
          */}
          </div>
        </Col>
      </Row>
    </React.Fragment>
  );

  const sign_in_jsx = (
    // <React.Fragment>
    //   <Row style={{ height: "500px" }}>
    //     <Col sm={6} className={"imageDiv"}>
    //       <img
    //         src={OnorLogo}
    //         alt="logo"
    //         className={
    //           "sideImg img-responsive img-fluid d-flex justify-content-center"
    //         }
    //         style={{
    //           height: "180px",
    //           width: "300px",
    //           marginTop: "12em",
    //           marginLeft: "6em",
    //         }}
    //       />
    //     </Col>
    //     <Col
    //       xs={12}
    //       sm={12}
    //       md={6}
    //       lg={6}
    //       className={"content d-flex justify-content-center"}
    //     >
    //       <div className="form-group row">
    //         <div className="col-sm-12 mt-3 d-flex justify-content-center">
    //           <img
    //             src={OnorLogo}
    //             alt="logo"
    //             className={
    //               "img-responsive img-fluid d-flex justify-content-center"
    //             }
    //             style={{ height: "70px", width: "120px" }}
    //           />
    //         </div>
    //         <div className="col-sm-12 mt-3 mb-1 d-flex justify-content-center">
    //           <h5 className={"header_h4"}>LOGIN</h5>
    //         </div>
    //         <div className="col-sm-12 d-flex justify-content-center">
    //           <Form.Control
    //             className={"w-75"}
    //             style={{ borderRadius: "10px" }}
    //             onChange={(e) => setSigninEmail(e.target.value)}
    //             type="email"
    //             placeholder="Enter email"
    //           />
    //         </div>
    //         <div className="col-sm-12 mt-1 d-flex justify-content-center">
    //           <span style={{ color: "red" }}>{signinEmailError}</span>
    //         </div>
    //         <div className="col-sm-12 mt-4 d-flex justify-content-center">
    //           <Form.Control
    //             className={"w-75"}
    //             style={{ borderRadius: "10px" }}
    //             onChange={(e) => setSigninPassword(e.target.value)}
    //             type="password"
    //             placeholder="Password"
    //           />
    //         </div>
    //         <div className="col-sm-12 mt-1 d-flex justify-content-center">
    //           <label style={{ color: "red" }}>{signinPasswordError}</label>
    //         </div>
    //         <div className="col-sm-12 col-xs-12 d-flex justify-content-center">
    //           <div className="col-sm-6 mt-4 d-flex justify-content-center">
    //             <img
    //               src={loginImage}
    //               onClick={handleSignIn}
    //               alt={"Login"}
    //               style={{ height: "5em", width: "2.8em", cursor: "pointer" }}
    //             />
    //           </div>
    //           <div className="col-sm-6 mt-4 d-flex justify-content-center">
    //             <Link to={"/" + isMobile + "signup/"}>
    //               <img
    //                 src={joinImage}
    //                 alt={"Join"}
    //                 style={{ height: "5em", width: "2.8em", cursor: "pointer" }}
    //               />
    //             </Link>
    //           </div>
    //         </div>
    //         {forgot_password_jsx}
    //         <div className="col-sm-12 mt-4 d-flex justify-content-center">
    //           <span className={"onor_span_color"} style={{ cursor: 'pointer' }} onClick={
    //             e => setForgotPasswordDialog(true)
    //           }>Forgot your Password?</span>
    //         </div>
    //         <div className="col-sm-12 mt-4 d-flex justify-content-center">
    //           <a style={{ cursor: "pointer" }} className={"onor_span_color"} onClick={
    //             e => props.history.push("/" + isMobile + "contact")
    //           }>
    //             Need help?
    //           </a>
    //         </div>
    //         <div className="col-sm-12 mt-4 d-flex justify-content-center">
    //           <p style={{ color: "#252525", textAlign: "center" }}>
    //             By signing up you agree with our
    //             <br />
    //             <span style={{ fontSize: "15pt" }}>
    //               <Link to={"/" + isMobile + "user/privacy"}>Privacy Policy</Link> and <Link to={"/" + isMobile + "user/terms"}>Terms &amp; Conditions</Link>
    //             </span>
    //           </p>
    //         </div>
    //       </div>
    //     </Col>
    //   </Row>
    // </React.Fragment>

    <>
      <Row className={'my-5 pb-5 text-center'}>
        <Col sm={12}>
          <div class="card text-white text-center px-5" style={{ borderRadius: '20px', background: 'linear-gradient(100deg, #FB592E, yellow 400%)' }}>
            <h1 className={'pt-4'} style={{ fontWeight: 'bolder' }}>Login</h1>
            <Row className={'justify-content-center mb-3 mt-3'}>
              <Col sm={12}>
                <div className="col-sm-12 d-flex justify-content-center">
                  <Form.Control
                    className={"w-100"}
                    onChange={(e) => setSigninEmail(e.target.value)}
                    type="email"
                    placeholder="Enter email"
                  />
                </div>
                <div className="col-sm-12 mt-1 d-flex justify-content-center">
                  <span style={{ color: "red" }}>{signinEmailError}</span>
                </div>
                <div className="col-sm-12 mt-3 d-flex justify-content-center">
                  <Form.Control
                    className={"w-100"}
                    onChange={(e) => setSigninPassword(e.target.value)}
                    onKeyUp={e => e.keyCode === 13 && handleSignIn()}
                    type="password"
                    placeholder="Password"
                  />
                </div>
                <button onClick={handleSignIn} style={{ padding: '6px 50px' }} className={'btn btn-dark mt-3 ml-2'}>Enter</button>
                {forgot_password_jsx}
                <div className="col-sm-12 mt-4 d-flex justify-content-center">
                  <span className={"bolder"} style={{ cursor: 'pointer' }} onClick={
                    e => setForgotPasswordDialog(true)
                  }>Forgot your Password?</span>
                </div>
                <div className="col-sm-12 mt-4 d-flex justify-content-center">
                  <p style={{ textAlign: "center" }}>
                    By signing up you agree with our <Link to={"/" + isMobile + "user/privacy"}>Privacy Policy</Link> and <Link to={"/" + isMobile + "user/terms"}>Terms &amp; Conditions</Link>
                  </p>
                </div>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </>
  );

  const unauthorized_jsx = (
    <Fragment>
      <Container fluid className={"px-5 d-flex justify-content-center"}>
        <Row>
          {/* {static_side_jsx} */}
          {signinPage && sign_in_jsx}
          {signupPage && sign_up_jsx}
        </Row>
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
          {/* {
            props.history.push('/')
          } */}
        </Row>
      </Container>
    </Fragment>
  );

  return (
    <Fragment>
      {/* {props.dialog.isOpen && <MyDialog />} */}
      {/* {props.progress.isOpen && (
        <ProgressBar title={"Please wait while you are being logged in"} />
      )} */}
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

AuthPage = connect(mapStateToProps, mapDispatchToProps)(AuthPage);
export default withFirebase(AuthPage);
