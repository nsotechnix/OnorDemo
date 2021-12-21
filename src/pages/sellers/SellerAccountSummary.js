import React, { Fragment, useEffect, useState } from "react";
import "./SellerAccountSummary.scss";
import { useLocation } from "react-router-dom";
import { Col, Container, Row, Form, Button } from "react-bootstrap";
import jwt from "jsonwebtoken";
import { connect } from "react-redux";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";
import BreadCrumbNav from "../../components/BreadCrumbNav";
import Axios from "axios";
import {
  API_BUYER_POST_A_GIG,
  API_FETCH_ALL_CATEGORIES,
  GET_USER_BY_MERCHANT_EMAIL
} from "../../utils/API_ENDPOINTS";
import {
  action_append_post_a_gig_data,
  action_steps_of_post_a_gig,
} from "../../redux/actions/postAGigActions";
import { isUndefined } from "lodash";
import {
  action_progress_start,
  action_progress_stop,
} from "../../redux/actions/progressAction";
import AttachmentIcon from "@material-ui/icons/Attachment";
import _ from 'lodash'

const SellerAccountSummary = (props) => {
  // props.actionStartProgress()
  let [assignmentTitle, setAssignmentTitle] = useState("");
  let [tags, setTags] = useState("");
  let [communityId, setCommunityId] = useState("");
  let [description, setDescription] = useState("");
  let [categoryId, setCategoryId] = useState("");
  let [categories, setCategories] = useState([]);
  let [doc, setDoc] = useState("");
  let [tempDoc, setTempDoc] = useState("");
  let [faq, setFaq] = useState("");

  const [errors, setErrors] = useState({
    assignmentTitleError: "",
    tagsError: "",
    communityIdError: "",
    descriptionError: "",
    categoryIdError: "",
    docError: "",
    faqError: "",
  });

  useEffect(() => {
    const runMyCode = async () => {
      if (!localStorage.getItem('sellerJwtToken')) {
        props.history.push('/signin')
      }
      // get my status
      const merchantEmail = jwt.decode(localStorage.getItem('sellerJwtToken'))['merchantEmail']
      const merchantDetails = await getMerchantStatus(merchantEmail)
      console.log({
        ...merchantDetails
      })
      if (merchantDetails.status != 2) {
        alert("You're not eligible to post a session now, please come back later")
        props.history.push('/')
      }
      if (localStorage.getItem("gig_assignment_data")) {
        let gigAssignmentData = JSON.parse(
          localStorage.getItem("gig_assignment_data")
        )
        setAssignmentTitle(gigAssignmentData.assignmentTitle);
        setTags(gigAssignmentData.tags);
        setDescription(gigAssignmentData.description);
        setCategoryId(gigAssignmentData.categoryId);
        setFaq(gigAssignmentData.faq);
        urltoFile(
          gigAssignmentData.tempDoc,
          `${Date.now()}-${Math.random()}.png`
        ).then(function (file) {
          setDoc(file);
          setTempDoc(gigAssignmentData.tempDoc);
        });
      }
    }
    runMyCode()
  }, []);

  const getMerchantStatus = async (merchantEmail) => {
    try {
      const result = await Axios.post(GET_USER_BY_MERCHANT_EMAIL, {
        "email": String(merchantEmail)
      })
      console.log(result)
      // console.log(!_.isUndefined(result.data.user.status) && !_.isNull(result.data.user.status) ? result.data.user.status : 6)
      return {
        "status": !_.isUndefined(result.data.user) && !_.isUndefined(result.data.user.status) && !_.isNull(result.data.user.status) ? result.data.user.status : 1,
        "userId": result.data.user.userId
      }
    } catch (e) {
      console.log(e)
    }
  }

  if (props.auth.isAuthorized && props.auth.isAlsoSeller) {
    const { userId, merchantId, userEmail } = jwt.decode(
      localStorage.getItem("jwtToken")
    );
  }

  const fetchAllCategoriesRemote = async () => {
    try {
      props.actionStartProgress();
      const result = await Axios.get(API_FETCH_ALL_CATEGORIES);
      props.progressStop();
      setCategories(result.data.categories);
    } catch (e) {
      console.log(e);
    }
  };

  const location = useLocation();
  let isMobile = "";
  if (location.pathname.match("/mobile/")) {
    isMobile = "mobile/";
  } else {
    isMobile = "";
  }

  useEffect(() => {
    fetchAllCategoriesRemote();
  }, []);

  const validator = () => {
    let assignmentTitleError = "";
    let tagsError = "";
    let communityIdError = "";
    let descriptionError = "";
    let categoryIdError = "";
    let docError = "";
    let faqError = "";
    if (assignmentTitle == "") {
      assignmentTitleError = "Assignment title is required";
    }
    if (categoryId == "") {
      categoryIdError = "Please choose a category for your gig";
    }
    if (tags == "") {
      tagsError = "Please enter some tags related to your gig";
    }
    if (
      description == "" ||
      description.length < 150 ||
      description.length > 800
    ) {
      descriptionError =
        "Please enter a description between 150 to 800 characters";
    }
    if (doc == "") {
      docError = "Please choose a cover for your gig";
    }
    // if (faq == '') {
    //     faqError = 'Please enter some frequently asked questions'
    // }
    if (assignmentTitleError) {
      setErrors({
        assignmentTitleError,
      });
      return false;
    } else if (categoryIdError) {
      setErrors({
        categoryIdError,
      });
      return false;
    } else if (tagsError) {
      setErrors({
        tagsError,
      });
      return false;
    } else if (descriptionError) {
      setErrors({
        descriptionError,
      });
      return false;
    } else if (docError) {
      setErrors({
        docError,
      });
      return false;
    } else if (faqError) {
      setErrors({
        faqError,
      });
      return false;
    } else {
      return true;
    }
  };

  const handlePartialSubmit = async () => {
    if (validator()) {
      if (props.auth.isAuthorized && props.auth.isAlsoSeller) {
        const { userId } = jwt.decode(localStorage.getItem("jwtToken"));
        const { merchantId } = jwt.decode(
          localStorage.getItem("sellerJwtToken")
        );
        const assignmentData = {
          assignmentTitle,
          tags,
          communityId,
          tempDoc,
          description,
          categoryId,
          merchantId,
          doc,
          faq,
        };
        props.appendPostAGigData({
          ...assignmentData,
        });
        props.actionAddSteps({
          steps: 2,
        });
        localStorage.setItem(
          "gig_assignment_data",
          JSON.stringify(assignmentData)
        );
        props.history.push("/" + isMobile + "seller/create/price/");
      }
    }
  };

  const urltoFile = (url, filename, mimeType) => {
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
    if (event.target.files && event.target.files[0]) {
      let reader = new FileReader();
      reader.onload = (e) => {
        setTempDoc(e.target.result);
      };
      reader.readAsDataURL(event.target.files[0]);
      setDoc(event.target.files[0]);
    }
  }

  // const onImageChange = (event) => {
  //   if (event.target.files && event.target.files[0]) {
  //     let docObj = event.target.files[0]
  //     let reader = new FileReader();
  //     reader.readAsDataURL(event.target.files[0]);
  //     reader.onload = (e) => {
  //       let image = new Image()
  //       image.src = e.target.result

  //       image.onload = function () {
  //         var height = this.height
  //         var width = this.width
  //         if (height > 800 || width > 1400) {
  //           alert("Maximum file dimensions should be less than 800x1400 pixels")
  //           return false
  //         }
  //         setTempDoc(e.target.result)
  //         setDoc(docObj)
  //         return true
  //       }
  //     }
  //   }
  // }

  const onButtonClick = (event) => {
    event.stopPropagation();
    event.preventDefault();
    inputFile.current.click();
  };
  const inputFile = React.useRef(null);

  const from_jsx = (
    <Fragment>
      <Row className="mycol">
        <Col className="mycol" sm={6}>
          <label>Assignment title</label>
          <Form.Group controlId="exampleForm.ControlInput">
            <Form.Control
              style={
                errors.assignmentTitleError
                  ? { border: "1px solid red", boxShadow: "0 0 4px red" }
                  : null
              }
              onChange={(e) => {
                setAssignmentTitle(e.target.value);
                setErrors({
                  assignmentTitleError: "",
                });
              }}
              value={assignmentTitle}
              as="input"
            />
            <span className={"text-danger"}>{errors.assignmentTitleError}</span>
          </Form.Group>
        </Col>
        <Col className="mycol" sm={6}>
          <Form>
            <label>Select a Category</label>
            <Form.Group controlId="exampleForm.SelectCustom">
              <Form.Control
                style={
                  errors.categoryIdError
                    ? { border: "1px solid red", boxShadow: "0 0 4px red" }
                    : null
                }
                onChange={(e) => setCategoryId(e.target.value)}
                as="select"
                custom
              >
                <option selected disabled>
                  --select category--
                </option>
                {categories.map((category) => (
                  <option
                    selected={categoryId == category.categoryId}
                    value={category.categoryId}
                    key={category.categoryId}
                  >
                    {category.name}
                  </option>
                ))}
              </Form.Control>
              <span className={"text-danger"}>{errors.categoryIdError}</span>
            </Form.Group>
          </Form>
        </Col>
      </Row>
      <Row className="mycol" sm={12}>
        <Col className="mycol">
          <label>Search Tag</label>
          <Form className="mycol">
            <Form.Group controlId="exampleForm.ControlInput">
              <Form.Control
                style={
                  errors.tagsError
                    ? { border: "1px solid red", boxShadow: "0 0 4px red" }
                    : null
                }
                onChange={(e) => setTags(e.target.value)}
                as="input"
                value={tags}
              />
              <span className={"text-danger"}>{errors.tagsError}</span>
            </Form.Group>
          </Form>
        </Col>
      </Row>
      <Row className="mycol" sm={12}>
        <Col className="mycol">
          <label>Description</label>
          <Form className="mycol">
            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Control
                style={
                  errors.descriptionError
                    ? { border: "1px solid red", boxShadow: "0 0 4px red" }
                    : null
                }
                onChange={(e) =>
                  setDescription(e.target.value.replace(/ {2,}/g, " "))
                }
                value={description}
                as="textarea"
                rows="2"
                maxLength={800}
              />
              <span className={"text-danger"}>{errors.descriptionError}</span>
            </Form.Group>
          </Form>
          <label className={"float-right text-muted"}>
            {description.length}/800 Max
          </label>
        </Col>
      </Row>
      <Row className="mycol">
        <Col className="mycol" xs={12}>
          <label>Upload Details</label>
          <Form className="mycol">
            <Form.Group controlId="exampleForm.ControlTextarea1">
              <input
                onChange={
                  // console.log(e.target.files[0])
                  // setDoc(e.target.files[0])
                  onImageChange
                }
                type="file"
                ref={inputFile}
                style={{ display: "none" }}
                accept={"image/*"}
              />
              <Grid
                container
                direction="row"
                alignItems="center"
                onClick={onButtonClick}
                style={{ cursor: "pointer" }}
              >
                <Grid item>
                  <AttachmentIcon />
                </Grid>
                <Grid item>
                  &emsp;{doc ? "change image" : "choose an image "}
                </Grid>
              </Grid>
              {tempDoc && (
                <img
                  className="mycol img-responsive"
                  style={
                    errors.docError
                      ? { border: "1px solid red", boxShadow: "0 0 4px red" }
                      : null
                  }
                  onClick={onButtonClick}
                  src={tempDoc}
                  alt=""
                  style={{ width: "100px", height: "100px" }}
                />
              )}
              <span className={"text-danger"}>{errors.docError}</span><br />
              <span className={'text-muted'}>Maximum file size should be: 300KB of less than 800x1400 pixels</span>
            </Form.Group>
          </Form>
        </Col>
        <Col className="mycol" sm={12}>
          <label>FAQ</label>
          <Row className="mycol">
            <Col className="" sm={9} xs={9}>
              <Form>
                <Form.Group controlId="faq">
                  <Form.Control
                    as="textarea"
                    rows={2}
                    value={faq}
                    maxLength={3000}
                    style={
                      errors.faqError
                        ? { border: "1px solid red", boxShadow: "0 0 4px red" }
                        : null
                    }
                    onChange={(e) => setFaq(e.target.value)}
                    placeholder="Frequently asked questions"
                  />
                </Form.Group>
                <span className={"text-danger"}>{errors.faqError}</span>
              </Form>
            </Col>
            {/* <Col className="d-flex justify-content-between" style={{ marginTop: '-1em' }} sm={2} xs={2}>
                            <Button variant="secondery"><img src={addCircle} style={{ width: '25px' }} className={'d-block'} alt={"Add More"}></img></Button>
                        </Col> */}
          </Row>
        </Col>
      </Row>
      <Row className="mt-lg-5">
        <Col>
          <Button
            onClick={(e) => {
              localStorage.removeItem("gig_assignment_data");
              localStorage.removeItem("gig_package_onor_data_basic");
              localStorage.removeItem("gig_package_onor_data_basic_onor");
              localStorage.removeItem("gig_package_onor_data_standard");
              localStorage.removeItem("gig_package_onor_data_premium");
            }}
            as={Link}
            to={"/"}
            className={"onor_secondery_btn"}
          >
            Cancel
          </Button>
        </Col>
        <Col></Col>
        <Col>
          <Button
            className="onor_btn"
            onClick={() => handlePartialSubmit()}
            variant=""
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
        <Row className="">
          <Col>
            <BreadCrumbNav account={false} summary={true} />
          </Col>
        </Row>
        <Row className="mycol mt-2 mb-xl-2">
          <Col sm={6}>
            <h4 className={"header_h4"}>Post a Session</h4>
          </Col>
        </Row>
        <Row className="mt-xl-3"></Row>
        {from_jsx}
      </Container>
    </Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    postAgig: state.postAgig,
    auth: state.auth,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actionStartProgress: () => dispatch(action_progress_start()),
    progressStop: () => dispatch(action_progress_stop()),
    appendPostAGigData: (payload) =>
      dispatch(action_append_post_a_gig_data(payload)),
    actionAddSteps: (payload) => dispatch(action_steps_of_post_a_gig(payload)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SellerAccountSummary);
