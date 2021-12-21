import React, { Fragment, useState, createRef, useRef, useEffect } from "react";
import { connect } from "react-redux";
import { Container, Row, Col, Form, Button, Table } from "react-bootstrap";
import jwt from "jsonwebtoken";
import { useLocation } from "react-router-dom";
import BreadCrumbNav from "../../components/BreadCrumbNav";
import OnorLogo from "../../images/onorlogo.png";
import CameraLogo from "../../svg/camera.svg";
import "./SellerAccountCreatePage.scss";
import { Link } from "react-router-dom";
import addCircle from "../../images/plus.svg";
import bin from "../../svg/bin-with-lid.svg";
import pencil from "../../svg/pencil.svg";
import picture from "../../svg/picture.svg";
import man from "../../svg/man.svg";
import { isEmpty, isUndefined } from "lodash";
import { Language } from "@material-ui/icons";
import {
  action_append_seller_profile_data,
  action_steps_of_create_seller_profile,
} from "../../redux/actions/CreateSellerProfileActions";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import AddCircleOutlineIcon from "@material-ui/icons/Add";

const SellerAccountCreatePage = (props) => {
  const extractToken = () => {
    if (
      props.auth.isAuthorized &&
      !isUndefined(jwt.decode(localStorage.getItem("jwtToken")))
    ) {
      return jwt.decode(localStorage.getItem("jwtToken"));
    }
  };

  useEffect(() => {
    if (localStorage.getItem("seller_profile_data")) {
      const sellerProfile = JSON.parse(
        localStorage.getItem("seller_profile_data")
      );
      setAbout(sellerProfile.about);
      setLanguageList([...sellerProfile.languageList])
      urltoFile(sellerProfile.image, `${Date.now()}-${Math.random()}.png`).then(
        function (file) {
          setUploadImage(file)
          setimage(sellerProfile.image)
        }
      )
    }
  }, [])

  // language code starts here
  const [languageList, setLanguageList] = useState([
    { languageName: "", proficiency: "" },
  ]);

  const handleLanguageChange = (e, index) => {
    setErrors({
      languageListError: -1,
    });
    const { name, value } = e.target;
    const list = [...languageList];
    list[index][name] = value;
    setLanguageList(list);
  };

  const handleAddLanguage = () => {
    if (
      languageList[languageList.length - 1].languageName !== "" &&
      languageList[languageList.length - 1].proficiency !== ""
    ) {
      setLanguageList([...languageList, { languageName: "", proficiency: "" }]);
    }
  };

  const handleRemoveLanguage = (index) => {
    let list = [...languageList];
    list.splice(index, 1);
    setLanguageList(list);
  };

  const [image, setimage] = useState(man);
  const [uploadImage, setUploadImage] = useState("");
  const [username, setUsername] = useState(
    extractToken()["firstName"] + " " + extractToken()["lastName"]
  );
  const [about, setAbout] = useState("");
  const [email, setEmail] = useState(extractToken()["userEmail"]);

  const onButtonClick = (event) => {
    event.stopPropagation();
    event.preventDefault();
    inputFile.current.click();
    // console.log(event.target.files[0])
  };
  const inputFile = useRef(null);

  const [errors, setErrors] = useState({});

  const validation = () => {
    let languageListError = -1;
    const languageListValidator = () => {
      languageList.map((key, index) => {
        if (key.languageName == "" || key.proficiency == "") {
          languageListError = index;
          return true;
        }
      });
    };
    languageListValidator();
    let uploadImageError = "";
    let aboutError = "";
    if (uploadImage == "") {
      uploadImageError = "Please select your display picture";
    }
    if (about == "" || about.length < 150 || about.length > 800) {
      aboutError = "Please describe yourself between 150 to 800 characters";
    }
    if (aboutError) {
      setErrors({
        aboutError,
      });
      return false;
    } else if (uploadImageError) {
      setErrors({
        uploadImageError,
      });
      return false;
    } else if (languageListError > -1) {
      setErrors({
        languageListError,
      });
      return false;
    } else {
      return true;
    }
  }

  const handleOnSubmit = () => {
    if (validation()) {
      const sellerProfileData = {
        uploadImage,
        languageList,
        username,
        about,
        image,
        email
      }
      props.addProfileData({
        sellerProfileData,
      });
      props.changeStep({
        step: 2,
      });
      localStorage.setItem(
        "seller_profile_data",
        JSON.stringify(sellerProfileData)
      );
      props.history.push("/" + isMobile + "seller/create/professionalinfo/");
    }
  };

  const urltoFile = async (url, filename, mimeType) => {
    mimeType = mimeType || (url.match(/^data:([^;]+);/) || "")[1];
    return fetch(url)
      .then(function (res) {
        return res.arrayBuffer();
      })
      .then(function (buf) {
        return new File([buf], filename, { type: mimeType });
      });
  };

  const onImageChange = (event) => {
    setErrors({
      uploadImageError: "",
    });
    if (event.target.files && event.target.files[0]) {
      let reader = new FileReader();
      reader.onload = (e) => {
        // console.log(e.target.result)
        setimage(e.target.result);
      };
      reader.readAsDataURL(event.target.files[0]);
      setUploadImage(event.target.files[0]);
    }
  };

  const location = useLocation();
  let isMobile = "";
  if (location.pathname.match("/mobile/")) {
    isMobile = "mobile/";
  } else {
    isMobile = "";
  }

  const form_jsx = (
    <Fragment>
      <h4 className="mycol header_h4 mt-2 mb-3">Personal Info</h4>
      <Row>
        <Col className="mycol" sm={12} md={5} lg={5} xl={5}>
          <Row className="mycol">
            <Col className="mycol d-flex justify-content-center">
              <img
                className="mycol img-responsive"
                onClick={onButtonClick}
                src={image}
                alt="profilephoto"
                style={{ width: "100px", height: "100px" }}
              // , errors.uploadImageError ? { border: '1px solid red', boxShadow: '0 0 4px red' } : null
              />
            </Col>
          </Row>
          <br />
          <span className={"text-danger"}>{errors.uploadImageError}</span>
          <Row className="mycol">
            <Col className="mycol" xs={2}></Col>
            <Col className="mycol d-flex justify-content-left" xs={3}>
              <img
                className="mycol img-responsive"
                onClick={onButtonClick}
                style={{ width: "20px", height: "20px" }}
                src={CameraLogo}
                alt="profilephoto"
              />
            </Col>
            {/* <Col className="mycol d-flex justify-content-center" xs={2}>
              <img
                className="mycol img-responsive"
                style={{ width: "20px", height: "20px" }}
                onClick={onButtonClick}
                src={picture}
                alt="profilephoto"
              />
            </Col> */}
            <Col className="mycol d-flex justify-content-left" xs={3}>
              <img
                className="mycol img-responsive"
                onClick={(e) => {
                  setimage(man);
                  setUploadImage(null);
                }}
                style={{ width: "20px", height: "20px", cursor: "pointer" }}
                src={bin}
                alt="profilephoto"
              />
            </Col>
            <Col className="mycol d-flex justify-content-right" xs={3}>
              <img
                className="mycol img-responsive"
                style={{ width: "20px", height: "20px" }}
                src={pencil}
                alt="profilephoto"
              />
            </Col>
            <Col className="mycol" xs={2}></Col>
          </Row>
          <br />
          <Row>
            <Col className="mycol" xs={2}></Col>
            <span className={'text-muted'}>Maximum file size should be less than 250KB</span>
          </Row>

          <input
            type="file"
            id="file"
            accept={"image/*"}
            ref={inputFile}
            onChange={onImageChange}
            style={{ display: "none" }}
          />

          <Row className="">
            {props.auth.isAuthorized && (
              <Col xs={12} className="mycol mt-3 d-flex justify-content-center">
                <Form className="mycol">
                  <Form.Group
                    as={Col}
                    lg={12}
                    md={12}
                    controlId="formBasicEmail"
                  >
                    <Form.Control
                      type="text"
                      onChange={(e) => setUsername(e.target.value)}
                      placeholder="Name"
                      value={
                        extractToken()["firstName"] +
                        " " +
                        extractToken()["lastName"]
                      }
                    />
                  </Form.Group>
                  <Form.Group
                    as={Col}
                    lg={12}
                    md={12}
                    controlId="formBasicEmail"
                  >
                    <Form.Control
                      type="text"
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Email"
                      value={extractToken()["userEmail"]}
                    />
                  </Form.Group>
                </Form>
              </Col>
            )}
          </Row>
        </Col>
        <Col className="mycol" sm={12} md={7} lg={7} xl={7}>
          <Row className="mycol">
            <Col xs={12} className="mycol">
              <label className={"headers_h6"}>About you*</label>
              <label
                className={"text-muted headers_h6"}
                style={{ float: "right" }}
              >
                Mandatory Fields*
              </label>
              <Form className="mycol">
                <Form.Group controlId="exampleForm.ControlTextarea1">
                  <Form.Control
                    as="textarea"
                    rows="3"
                    onChange={(e) => {
                      setAbout(e.target.value.replace(/ {2,}/g, " "));
                      setErrors({
                        aboutError: "",
                      });
                    }}
                    value={about}
                    maxLength={800}
                    style={
                      errors.aboutError
                        ? { border: "1px solid red", boxShadow: "0 0 4px red" }
                        : null
                    }
                    placeholder="Share a bit about your experience"
                  />
                  <span className={"text-danger"}>{errors.aboutError}</span>
                </Form.Group>
                <Row className="mycol">
                  <Col className="mycol">
                    {/* <p className="mycol headers_h6"
                      style={{ color: (about.length < 150 ? 'red' : 'grey') }}>
                      min 150 character
                    </p> */}
                  </Col>
                  <Col className="mycol d-flex justify-content-end">
                    <p className="mycol headers_h6 text-muted">
                      {about.length}/800
                    </p>
                  </Col>
                </Row>
              </Form>
            </Col>
          </Row>
          {languageList.map((value, index) => {
            return (
              <Row key={index} className="mycol align-items-center mt-lg-2">
                <Col className="" sm={5} xs={5}>
                  <Form>
                    <Form.Group controlId="formBasicLanguage">
                      {index === 0 && <label>Language*</label>}
                      <Form.Control
                        onChange={(e) => handleLanguageChange(e, index)}
                        type="text"
                        placeholder="Language"
                        style={
                          errors.languageListError == index
                            ? {
                              border: "1px solid red",
                              boxShadow: "0 0 4px red",
                            }
                            : null
                        }
                        name={"languageName"}
                        value={value.languageName}
                      />
                    </Form.Group>
                  </Form>
                </Col>
                <Col className="" sm={5} xs={5}>
                  <Form>
                    <Form.Group controlId="formBasicProficiency">
                      {index === 0 && <label>Proficiency*</label>}
                      <Form.Control
                        as="select"
                        onChange={(e) => handleLanguageChange(e, index)}
                        name={"proficiency"}
                        style={
                          errors.languageListError == index
                            ? {
                              border: "1px solid red",
                              boxShadow: "0 0 4px red",
                            }
                            : null
                        }
                      >
                        <option value={""} selected disabled>
                          --select--
                        </option>
                        <option
                          selected={
                            value.proficiency === "Beginner" ? "selected" : null
                          }
                          value={"Beginner"}
                        >
                          Beginner
                        </option>
                        <option
                          selected={
                            value.proficiency === "Intermediate"
                              ? "selected"
                              : null
                          }
                          value={"Intermediate"}
                        >
                          Intermediate
                        </option>
                        <option
                          selected={
                            value.proficiency === "Expert" ? "selected" : null
                          }
                          value={"Expert"}
                        >
                          Expert
                        </option>
                      </Form.Control>
                    </Form.Group>
                  </Form>
                </Col>
                <Col className="" sm={1} xs={1} style={{ padding: "5px" }}>
                  {/* <div className="d-flex align-items-center"> */}
                  {languageList.length !== 1 && (
                    <HighlightOffIcon
                      onClick={(e) => handleRemoveLanguage(index)}
                      style={{ cursor: "pointer" }}
                    />
                  )}
                  {/* </div> */}
                </Col>
                <Col className="" sm={1} xs={1} style={{ paddingLeft: "0px" }}>
                  {/* <div className="d-flex align-items-center"> */}
                  {languageList.length - 1 == index && (
                    <AddCircleOutlineIcon
                      onClick={(e) => handleAddLanguage()}
                      className={"mr-2"}
                      style={{ cursor: "pointer" }}
                    />
                  )}
                  {/* </div> */}
                </Col>
              </Row>
            );
          })}
          {errors.languageListError > -1 && (
            <span className="text-danger">
              Language and Proficiency is required
            </span>
          )}
        </Col>
      </Row>
      <Row className="mycol mt-lg-2">
        <Col className="">
          <Button
            onClick={(e) => {
              props.history.push("/" + isMobile + "seller/");
            }}
            variant=""
            className={"onor_secondery_btn"}
          >
            Back
          </Button>
        </Col>
        <Col className="mycol"></Col>
        <Col className="mycol d-flex justify-content-end">
          <Button
            onClick={(e) => handleOnSubmit()}
            variant=""
            className={"onor_btn"}
          >
            Continue
          </Button>
        </Col>
      </Row>
    </Fragment>
  );

  return (
    <Fragment>
      <div
        style={{
          borderBottom: "1px solid black",
        }}
      ></div>
      <Container className="mycol">
        <Row className="mycol">
          <Col className="mycol">
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
    auth: state.auth,
    merchantRegister: state.merchantRegister,
    createSellerProfile: state.createSellerProfile,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actionAppendMerchantRegister: (payload) => dispatch(),
    addProfileData: (payload) =>
      dispatch(action_append_seller_profile_data(payload)),
    changeStep: (payload) =>
      dispatch(action_steps_of_create_seller_profile(payload)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SellerAccountCreatePage);