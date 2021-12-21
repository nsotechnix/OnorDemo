import React, { Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { connect } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import jwt from "jsonwebtoken";
import BreadCrumbNav from "../../components/BreadCrumbNav";
import EmailLogo from "../../svg/email.svg";
import PhoneLogo from "../../svg/phone-call.svg";
import "./SellerAccountSecurity.scss";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import MyDialog from "../../components/MyDialog";
import {
  action_sign_up_as_seller,
  thunk_seller_sign_up,
} from "../../redux/actions/authActions";
import { action_dialog_open } from "../../redux/actions/dialogAction";
import SuccessLogo from "../../svg/success.svg";
import {
  action_progress_start,
  action_progress_stop,
} from "../../redux/actions/progressAction"
import { isUndefined } from 'lodash'

const SellerAccountSecurity = (props) => {
  const location = useLocation()
  let isMobile = ''
  if (location.pathname.match('/mobile/')) {
    isMobile = 'mobile/'
  } else {
    isMobile = ''
  }

  const returnValidator = () => {
    if (!isUndefined(props.createSellerProfile)) {
      if (props.createSellerProfile.step === 2) {
        props.history.push("/" + isMobile + "seller/create/professionalinfo/")
      }
      if (props.createSellerProfile.step === 1) {
        props.history.push("/" + isMobile + "seller/create/personalinfo/")
      }
    } else {
      props.history.push("/" + isMobile + "seller/create/personalinfo/")
    }
  }
  const [profileImage, setProfileImage] = React.useState('')
  const [checkImageConverted, setCheckImageConverted] = React.useState(false)

  React.useEffect(() => {
    // returnValidator()
    const sellerPersonalInfo = JSON.parse(localStorage.getItem('seller_profile_data'))
    !checkImageConverted && urltoFile(sellerPersonalInfo.image, `${Date.now()}-${Math.random()}.png`)
    .then((file) => {
      setProfileImage(file)
    })
  }, [profileImage])

  const [open, setOpen] = React.useState(false)
  const [openPhone, setOpenPhone] = React.useState(false)
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClickOpenPhone = () => {
    setOpenPhone(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleClosePhone = () => {
    setOpenPhone(false);
  };

  const [layer, setLayer] = React.useState({
    cls: "mycol",
    isShown: "hidden",
  });

  const openLayer = () => {
    setLayer({
      cls: "layerDiv",
      isShown: "visible",
    });
  };

  function urltoFile(url, filename, mimeType) {
    setCheckImageConverted(true)
    mimeType = mimeType || (url.match(/^data:([^;]+);/) || '')[1];
    return (fetch(url)
      .then(function (res) { return res.arrayBuffer(); })
      .then(function (buf) { return new File([buf], filename, { type: mimeType }); })
    );
  }

  const handleSellerSignUp = async () => {
    if (props.auth.isAuthorized) {
      props.progressStart(true)
      try {
        const { userEmail, firstName, lastName, userPassword, phone } = jwt.decode(
          localStorage.getItem("jwtToken")
        )
        const step1Data = JSON.parse(localStorage.getItem('seller_profile_data'))
        const step2Data = JSON.parse(localStorage.getItem('seller_profile_data_2'))
        let data = new FormData()
        data.append('first_name', firstName)
        data.append('last_name', lastName)
        data.append('email', userEmail)
        data.append('password', userPassword)
        data.append('description', step1Data.about)
        data.append('alternate_email', "")
        data.append('phone1', phone)
        data.append('phone2', "")
        data.append('website', step2Data.website)
        data.append('area_of_interest', step2Data.areasOfInterests)
        data.append('avatar', profileImage)
        data.append('languages', JSON.stringify(step1Data.languageList))
        data.append('skills', JSON.stringify(step2Data.skillList))
        data.append('certificates', JSON.stringify(step2Data.certificationsList))
        data.append('onor_certifications', JSON.stringify(step2Data.onorCertificationsList))
        data.append('educations', JSON.stringify(step2Data.educationList))
        console.log(profileImage)

        const result = await props.thunkSellerSignUp(data);
        localStorage.setItem("sellerJwtToken", result.data.token);
        props.signUpAsSeller();
        localStorage.removeItem('seller_profile_data')
        localStorage.removeItem('seller_profile_data_2')
        props.progressStop();
        props.history.push("/")
        props.actionDialogOpen({
          title: `Success`,
          message: `You are successfully registered as Seller`,
          positive: "Ok",
          type: "Alert",
        })
      } catch (e) {
        console.log({ ...e });
        props.actionDialogOpen({
          title: `Something went wrong`,
          message: `Sorry we couldn't register you as seller now`,
          positive: "Ok",
          type: "Alert",
        })
      }
      props.progressStop()
    }
  };

  const form_jsx = (
    <Fragment>
      {props.dialog.isOpen && <MyDialog />}
      <Row className="mycol mt-lg-2 mb-lg-5">
        <Col className="mycol">
          <h4 className="mycol header_h4 mt-lg-2">Account Security</h4>
        </Col>
      </Row>
      <Row className="mycol">
        <Col className="mycol">
          <p>Trust and safety is a big deal in our community</p>
          <p>
            Please verify your phone number and email so that we can keep you
            account secure
          </p>
        </Col>
      </Row>
      {/* <Row className="mycol mt-lg-5">
        <Col className="mycol d-flex">
          <img
            src={EmailLogo}
            style={{
              width: "45px",
              height: "45px",
            }}
            alt="emaillogo"
            className="mycol img-fluid rounded"
          />
          <h4 className="mycol ml-lg-2 ml-3">Email</h4>
        </Col>
        <Col className="mycol d-flex justify-content-center">
          <Button
            variant="outline-primary"
            className="dialogBtns onor_outline_btn"
            onClick={handleClickOpen}
          >
            Add Email
          </Button>
        </Col>
      </Row> */}
      <br />
      {/* <Row className="mycol">
        <Col className="mycol d-flex">
          <img
            src={PhoneLogo}
            style={{
              width: "40px",
              height: "45px",
            }}
            className="mycol"
            alt="phonelogo"
          />
          <h4 className="mycol ml-lg-2 ml-3">Phone number</h4>
        </Col>
        <Col className="mycol d-flex justify-content-center">
          <Button
            variant="outline-primary"
            className="dialogBtns onor_outline_btn"
            onClick={handleClickOpenPhone}
          >
            Add Phone
          </Button>
        </Col>
      </Row> */}
      <br />
      <Row className="">
        <Col className="">
          <Button
            onClick={(e) => {
              props.history.push("/" + isMobile + "seller/create/professionalinfo");
            }}
            variant=""
            className={"onor_secondery_btn"}
          >
            Back
          </Button>
        </Col>
        <Col className="mycol" sm={0}></Col>
        <Col className="mycol d-flex justify-content-end">
          <Button
            onClick={(e) => {
              // props.signUpAsSeller();
              // openLayer();
              handleSellerSignUp()
            }}
            className="onor_btn"
            variant=""
          >
            Finish
          </Button>
        </Col>
      </Row>
      <Dialog
        open={open}
        // onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">
          Verify your Email Address
        </DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button color="primary" onClick={handleClose}>
            Cancel
          </Button>
          <Button color="primary">Send OTP</Button>
        </DialogActions>
      </Dialog>

      <Dialog
        open={openPhone}
        // onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">
          Verify your Phone Number
        </DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Phone Number"
            type="email"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button color="primary" onClick={handleClosePhone}>
            Cancel
          </Button>
          <Button color="primary">Send OTP</Button>
        </DialogActions>
      </Dialog>
    </Fragment>
  );

  return (
    <Fragment>
      <Row style={{ visibility: layer.isShown }}>
        <Col xs={12}>
          <img
            className="centered"
            style={{
              width: "100px",
              height: "100px",
            }}
            alt="avatar"
            src={SuccessLogo}
          />
          <Link to={"/"}>
            <Button
              className={"onor_btn centered"}
              style={{ position: "absolute", top: "30em" }}
            >
              Home
            </Button>
          </Link>
        </Col>
      </Row>
      <Container className={layer.cls}>
        <Row>
          <Col style={{ borderBottom: "0px solid black" }}>
            <BreadCrumbNav account={true} summary={false} className="mycol" />
          </Col>
        </Row>
        {form_jsx}
      </Container>
    </Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    dialog: state.dialog,
    auth: state.auth,
    createSellerProfile: state.createSellerProfile
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signUpAsSeller: () => dispatch(action_sign_up_as_seller()),
    actionDialogOpen: (payload) => dispatch(action_dialog_open(payload)),
    thunkSellerSignUp: (payload) => dispatch(thunk_seller_sign_up(payload)),
    progressStart: (payload) => dispatch(action_progress_start(payload)),
    progressStop: () => dispatch(action_progress_stop()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SellerAccountSecurity);
