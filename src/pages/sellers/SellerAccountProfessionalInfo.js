import React, { Fragment, useState, useEffect, useRef, createRef } from "react";
import { useLocation } from "react-router-dom";
import { connect } from "react-redux";
import { Container, Row, Col, Form, Table, Button } from "react-bootstrap";
import BreadCrumbNav from "../../components/BreadCrumbNav";
import { Link } from "react-router-dom";
import "./SellerAccountProfessionalInfo.scss";
import addCircle from "../../images/plus.svg";
import onorLogo from "../../images/onorlogo.png";
import { isUndefined, values } from "lodash";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import AddCircleOutlineIcon from "@material-ui/icons/Add";
import {
  action_append_seller_profile_data,
  action_steps_of_create_seller_profile,
} from "../../redux/actions/CreateSellerProfileActions";
import _ from "lodash";

const SellerAccountProfessionalInfo = (props) => {
  useEffect(() => {
    if (localStorage.getItem("seller_profile_data_2")) {
      const sellerProfile = JSON.parse(
        localStorage.getItem("seller_profile_data_2")
      );
      setSkillList([...sellerProfile.skillList]);
      setAreasOfInterests(sellerProfile.areasOfInterests);
      setEducationList([...sellerProfile.educationList]);
      setCertificationsList([...sellerProfile.certificationsList]);
      setOnorCertificationsList([...sellerProfile.onorCertificationsList]);
      setWebsite(sellerProfile.website);
    }
  }, []);

  var websitePattern = new RegExp(
    "^(https?:\\/\\/)?" + // protocol
      "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // domain name
      "((\\d{1,3}\\.){3}\\d{1,3}))" + // OR ip (v4) address
      "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // port and path
      "(\\?[;&a-z\\d%_.~+=-]*)?" + // query string
      "(\\#[-a-z\\d_]*)?$",
    "i"
  ); // fragment locator

  const location = useLocation();
  let isMobile = "";
  if (location.pathname.match("/mobile/")) {
    isMobile = "mobile/";
  } else {
    isMobile = "";
  }

  const backToPageOne = () => {
    if (!isUndefined(props.createSellerProfile)) {
      console.log("STEP: " + props.createSellerProfile.step);
      if (props.createSellerProfile.step === 1) {
        props.history.push("/" + isMobile + "seller/create/personalinfo");
      }
    } else {
      props.history.push("/" + isMobile + "seller/create/personalinfo/");
    }
  };

  useEffect(() => {
    backToPageOne();
  }, []);

  const [errors, setErrors] = useState({});

  const validator = () => {
    let skillsError = -1;
    let areasOfInterestsError = "";
    let educationError = -1;
    let certificationsError = -1;
    let onorCertificationsError = -1;
    let websiteError = "";

    const skillListValidator = () => {
      skillList.map((key, index) => {
        if (key.name == "" || key.proficiency == "") {
          skillsError = index;
          return true;
        }
      });
    };
    skillListValidator();

    if (areasOfInterests == "") {
      areasOfInterestsError = "Please enter your interests";
    }

    const educationListValidator = () => {
      educationList.map((key, index) => {
        if (key.name == "" || key.yearOfPassing == "" || key.university == "") {
          educationError = index;
          return true;
        }
      });
    };
    educationListValidator();

    const certificationsListValidator = () => {
      certificationsList.map((key, index) => {
        if (key.name == "" || key.certificateBy == "") {
          certificationsError = index;
          return true;
        }
      });
    };
    certificationsListValidator();

    // const onorCertificationsListValidator = () => {
    //     onorCertificationsList.map((key, index) => {
    //         if (key.onorCertifications == '') {
    //             onorCertificationsError = index
    //             return true
    //         }
    //     })
    // }
    // onorCertificationsListValidator()

    if (website != "") {
      if (!websitePattern.test(website)) {
        websiteError = "Please enter a valid website";
      }
    }

    if (skillsError > -1) {
      setErrors({
        skillsError,
      });
      return false;
    } else if (areasOfInterestsError) {
      setErrors({
        areasOfInterestsError,
      });
      return false;
    } else if (educationError > -1) {
      setErrors({
        educationError,
      });
      return false;
    } else if (certificationsError > -1) {
      setErrors({
        certificationsError,
      });
      return false;
    } else if (onorCertificationsError > -1) {
      setErrors({
        onorCertificationsError,
      });
      return false;
    } else if (websiteError) {
      setErrors({
        websiteError,
      });
      return false;
    } else {
      return true;
    }
  };

  const handleContinue = () => {
    if (validator()) {
      const sellerProfileData = {
        ...props.createSellerProfile,
        skillList,
        areasOfInterests,
        educationList,
        certificationsList,
        onorCertificationsList,
        website,
      };
      props.addProfileData({
        sellerProfileData,
      });
      props.changeStep({
        step: 3,
      });
      localStorage.setItem(
        "seller_profile_data_2",
        JSON.stringify({
          skillList,
          areasOfInterests,
          educationList,
          certificationsList,
          onorCertificationsList,
          website,
        })
      );
      props.history.push("/" + isMobile + "seller/create/accountsecurity/");
    }
  };

  const [areasOfInterests, setAreasOfInterests] = useState("");
  const [website, setWebsite] = useState("");

  // skills and proficiency
  const [skillList, setSkillList] = useState([{ name: "", proficiency: "" }]);
  const handleSkillChange = (e, index) => {
    setErrors({
      skillsError: -1,
    });
    const { name, value } = e.target;
    const list = [...skillList];
    list[index][name] = value;
    setSkillList(list);
  };

  const handleAddSkill = () => {
    if (
      skillList[skillList.length - 1].name !== "" &&
      skillList[skillList.length - 1].proficiency !== ""
    ) {
      setSkillList([...skillList, { name: "", proficiency: "" }]);
    }
  };

  const handleRemoveSkill = (index) => {
    let list = [...skillList];
    list.splice(index, 1);
    setSkillList(list);
  };

  // education
  const [educationList, setEducationList] = useState([
    { name: "", yearOfPassing: "", university: "" },
  ]);

  const handleEducationChange = (e, index) => {
    setErrors({
      educationError: -1,
    });
    const { name, value } = e.target;
    const list = [...educationList];
    list[index][name] = value;
    setEducationList(list);
  };

  const handleAddEducation = () => {
    setErrors({
      educationError: -1,
    });
    if (
      educationList[educationList.length - 1].name !== "" &&
      educationList[educationList.length - 1].yearOfPassing !== "" &&
      educationList[educationList.length - 1].university !== ""
    ) {
      setEducationList([
        ...educationList,
        { name: "", yearOfPassing: "", university: "" },
      ]);
    }
  };

  const handleRemoveEducation = (index) => {
    setErrors({
      educationError: -1,
    });
    let list = [...educationList];
    list.splice(index, 1);
    setEducationList(list);
  };

  // certifications
  const [certificationsList, setCertificationsList] = useState([
    { name: "", certificateBy: "" },
  ]);

  const handleCertificationsChange = (e, index) => {
    setErrors({
      certificationsError: -1,
    });
    const { name, value } = e.target;
    const list = [...certificationsList];
    list[index][name] = value;
    setCertificationsList(list);
  };

  const handleAddCertifications = () => {
    if (
      certificationsList[certificationsList.length - 1].name !== "" &&
      certificationsList[certificationsList.length - 1].certificateBy !== ""
    ) {
      setCertificationsList([
        ...certificationsList,
        { name: "", certificateBy: "" },
      ]);
    }
  };

  const handleRemoveCertifications = (index) => {
    let list = [...certificationsList];
    list.splice(index, 1);
    setCertificationsList(list);
  };

  // ONOR certifications

  const [onorCertificationsList, setOnorCertificationsList] = useState([
    { name: "" },
  ]);

  const handleOnorCertificationsChange = (e, index) => {
    setErrors({
      onorCertificationsError: -1,
    });
    const { name, value } = e.target;
    const list = [...onorCertificationsList];
    list[index][name] = value;
    setOnorCertificationsList(list);
  };

  const handleAddOnorCertifications = () => {
    if (onorCertificationsList[onorCertificationsList.length - 1].name !== "") {
      setOnorCertificationsList([...onorCertificationsList, { name: "" }]);
    }
  };

  const handleRemoveOnorCertifications = (index) => {
    let list = [...onorCertificationsList];
    list.splice(index, 1);
    setOnorCertificationsList(list);
  };

  const dateElem = new Date();

  const form_jsx = (
    <Fragment>
      {skillList.map((value, index) => {
        return (
          <Row className="mycol align-items-center">
            <Col className="mycol " sm={6} xs={12}>
              {index === 0 && <label>Skill*</label>}
              <Form>
                <Form.Group controlId="formBasicEmail">
                  <Form.Control
                    type="text"
                    value={value.name}
                    onChange={(e) => handleSkillChange(e, index)}
                    id={"addSkills"}
                    placeholder="Add skills"
                    name={"name"}
                    style={
                      errors.skillsError == index
                        ? { border: "1px solid red", boxShadow: "0 0 4px red" }
                        : null
                    }
                    className={"input-lg"}
                  />
                </Form.Group>
              </Form>
            </Col>
            <Col className="mycol " sm={5} xs={10}>
              {index === 0 && <label>Proficiency*</label>}
              <Form>
                <Form.Group controlId="exampleForm.SelectCustom">
                  <Form.Control
                    id={"proficiency"}
                    as="select"
                    custom
                    onChange={(e) => handleSkillChange(e, index)}
                    name={"proficiency"}
                    style={
                      errors.skillsError == index
                        ? { border: "1px solid red", boxShadow: "0 0 4px red" }
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
                        value.proficiency === "Intermediate" ? "selected" : null
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
            <Col className="align-items-center" sm={1} xs={2} xl={1}>
              <div className="d-flex align-items-center">
                {skillList.length !== 1 && (
                  <HighlightOffIcon
                    onClick={(e) => handleRemoveSkill(index)}
                    style={{ cursor: "pointer" }}
                  />
                )}
                {skillList.length - 1 == index && (
                  <AddCircleOutlineIcon
                    onClick={(e) => handleAddSkill()}
                    className={"mr-2"}
                    style={{ cursor: "pointer" }}
                  />
                )}
              </div>
            </Col>
          </Row>
        );
      })}
      <Row className="mycol  align-items-center">
        <Col className="mycol " sm={12}>
          <label for={"addSkills"}>Areas of Interest*</label>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Control
                type="textarea"
                id={"interests"}
                onChange={(e) => {
                  setAreasOfInterests(e.target.value);
                  setErrors({
                    areasOfInterestsError: "",
                  });
                }}
                value={areasOfInterests}
                placeholder="Areas of Interest"
                style={
                  errors.areasOfInterestsError
                    ? { border: "1px solid red", boxShadow: "0 0 4px red" }
                    : null
                }
                className={"input-lg"}
              />
              <span className={"text-danger"}>
                {errors.areasOfInterestsError}
              </span>
            </Form.Group>
          </Form>
        </Col>
      </Row>
      <Row className="mycol  align-items-center">
        <Col className="mycol " sm={12}>
          <label>Education</label>
          <Table bordered style={{ tableLayout: "fixed", textAlign: "center" }}>
            <thead>
              <tr>
                <th className="table_header_1">Degree</th>
                <th className="table_header_2">Year of passing</th>
                <th className="table_header_3">Board/ University</th>
                <th className="table_header_4">Action</th>
              </tr>
            </thead>
            {/* </Table>
          <Row> */}
            {educationList.map((value, index) => {
              return (
                <tr>
                  <td>
                    <input
                      placeholder={"Degree"}
                      type={"text"}
                      className={"form-control mb-2 fCtrl"}
                      onChange={(e) => handleEducationChange(e, index)}
                      name={"name"}
                      value={value.name}
                      style={
                        errors.educationError == index
                          ? {
                              border: "1px solid red",
                              boxShadow: "0 0 4px red",
                            }
                          : null
                      }
                    />
                  </td>

                  <td>
                    <select
                      className={"form-control mb-2 fCtrl"}
                      onChange={(e) => handleEducationChange(e, index)}
                      style={
                        errors.educationError == index
                          ? {
                              border: "1px solid red",
                              boxShadow: "0 0 4px red",
                            }
                          : null
                      }
                      name={"yearOfPassing"}
                    >
                      <option value={""}>--select year--</option>
                      {_.times(35, (i) => {
                        return (
                          <option
                            selected={
                              i + (dateElem.getFullYear() + 1 - 35) ==
                              value.yearOfPassing
                            }
                            value={i + (dateElem.getFullYear() + 1 - 35)}
                            selected={
                              i + (dateElem.getFullYear() + 1 - 35) ==
                              value.yearOfPassing
                            }
                          >
                            {i + (dateElem.getFullYear() + 1 - 35)}
                          </option>
                        );
                      })}
                    </select>
                  </td>

                  <td>
                    <input
                      type={"text"}
                      placeholder={"Board or University"}
                      className={"form-control mb-2 fCtrl"}
                      onChange={(e) => handleEducationChange(e, index)}
                      name={"university"}
                      value={value.university}
                      style={
                        errors.educationError == index
                          ? {
                              border: "1px solid red",
                              boxShadow: "0 0 4px red",
                            }
                          : null
                      }
                    />
                  </td>

                  <td>
                    {educationList.length !== 1 && (
                      <HighlightOffIcon
                        onClick={(e) => handleRemoveEducation(index)}
                        style={{ cursor: "pointer" }}
                      />
                    )}
                    {educationList.length - 1 == index && (
                      <AddCircleOutlineIcon
                        onClick={(e) => handleAddEducation()}
                        className={"mr-2"}
                        style={{ cursor: "pointer" }}
                      />
                    )}
                  </td>
                </tr>
              );
            })}
          </Table>
          {/* </Row> */}
        </Col>
      </Row>
      <Row className="mycol align-items-center mt-4 fCtrl">
        {certificationsList.map((value, index) => {
          return (
            <React.Fragment>
              <Col className="mycol " sm={6} xs={12}>
                {index === 0 && <label>Certifications*</label>}
                <Form>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Control
                      type="text"
                      name={"name"}
                      onChange={(e) => handleCertificationsChange(e, index)}
                      value={value.name}
                      style={
                        errors.certificationsError == index
                          ? {
                              border: "1px solid red",
                              boxShadow: "0 0 4px red",
                            }
                          : null
                      }
                      placeholder="Certificate Name"
                    />
                  </Form.Group>
                </Form>
              </Col>
              <Col className="mycol " sm={5} xs={10}>
                {index === 0 && <label>Certified by*</label>}
                <Form>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Control
                      type="text"
                      name={"certificateBy"}
                      onChange={(e) => handleCertificationsChange(e, index)}
                      value={value.certificateBy}
                      style={
                        errors.certificationsError == index
                          ? {
                              border: "1px solid red",
                              boxShadow: "0 0 4px red",
                            }
                          : null
                      }
                      placeholder="Certified by"
                    />
                  </Form.Group>
                </Form>
              </Col>
              <Col className="align-items-center" sm={1} xs={2} xl={1}>
                {certificationsList.length !== 1 && (
                  <HighlightOffIcon
                    onClick={(e) => handleRemoveCertifications(index)}
                    style={{ cursor: "pointer" }}
                  />
                )}
                {certificationsList.length - 1 == index && (
                  <AddCircleOutlineIcon
                    onClick={(e) => handleAddCertifications()}
                    className={"mr-2"}
                    style={{ cursor: "pointer" }}
                  />
                )}
              </Col>
            </React.Fragment>
          );
        })}
      </Row>
      <Row className="mycol ">
        <Col className="mycol" xs={6} sm={6} xl={6}>
          <Row className="mycol align-items-center">
            {onorCertificationsList.map((value, index) => {
              return (
                <React.Fragment>
                  <Col className="mycol" xs={10} sm={10} xl={10}>
                    {index === 0 && (
                      <label>
                        Certifications by{" "}
                        <img
                          src={onorLogo}
                          alt={"Add More"}
                          style={{ height: "20px", width: "42px" }}
                        />
                      </label>
                    )}
                    <Form>
                      <Form.Group controlId="formBasicEmail">
                        <Form.Control
                          type="text"
                          name={"name"}
                          onChange={(e) =>
                            handleOnorCertificationsChange(e, index)
                          }
                          value={value.name}
                          style={
                            errors.onorCertificationsError == index
                              ? {
                                  border: "1px solid red",
                                  boxShadow: "0 0 4px red",
                                }
                              : null
                          }
                          placeholder="Certificate Name"
                        />
                      </Form.Group>
                    </Form>
                  </Col>
                  <Col className="align-items-center mt-2" sm={2} xs={2} xl={2}>
                    {onorCertificationsList.length !== 1 && (
                      <HighlightOffIcon
                        onClick={(e) => handleRemoveOnorCertifications(index)}
                        style={{ cursor: "pointer" }}
                      />
                    )}
                    {onorCertificationsList.length - 1 == index && (
                      <AddCircleOutlineIcon
                        onClick={(e) => handleAddOnorCertifications()}
                        className={"mr-2"}
                        style={{ cursor: "pointer" }}
                      />
                    )}
                  </Col>
                </React.Fragment>
              );
            })}
          </Row>
        </Col>

        <Col className="mycol " sm={6}>
          <Form>
            <label>Personal Website</label>
            <Form.Group controlId="formBasicEmail">
              <Form.Control
                type="text"
                onChange={(e) => {
                  setWebsite(e.target.value);
                  setErrors({
                    websiteError: "",
                  });
                }}
                value={website}
                style={
                  errors.websiteError
                    ? { border: "1px solid red", boxShadow: "0 0 4px red" }
                    : null
                }
                placeholder="Your website"
              />
              <span className={"text-danger"}>{errors.websiteError}</span>
            </Form.Group>
          </Form>
        </Col>
      </Row>
      <Row className="mycol ">
        <Col className="mycol ">
          <Button
            onClick={(e) => {
              props.history.push("/" + isMobile + "seller/create/personalinfo");
            }}
            variant=""
            className={"onor_secondery_btn"}
          >
            Back
          </Button>
        </Col>
        <Col className="mycol "></Col>
        <Col className="mycol d-flex justify-content-end">
          <Button
            onClick={(e) => handleContinue()}
            variant="secondery"
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
      <Container>
        <Row className="mycol ">
          <Col className="mycol" style={{ borderBottom: "0px solid black" }}>
            <BreadCrumbNav account={true} summary={false} className="mycol " />
          </Col>
        </Row>
        <Row className="mycol">
          <Col className="mycol">
            <h4 className="mycol header_h4 mt-lg-2 mb-lg-5">
              Professional Info
            </h4>
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
    createSellerProfile: state.createSellerProfile,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    addProfileData: (payload) =>
      dispatch(action_append_seller_profile_data(payload)),
    changeStep: (payload) =>
      dispatch(action_steps_of_create_seller_profile(payload)),
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SellerAccountProfessionalInfo);
