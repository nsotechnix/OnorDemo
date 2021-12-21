import React, { Fragment, useState, setRes, useEffect } from "react";
import axios from 'axios'
import jwt from 'jsonwebtoken'
import { Col, Container, Row, Form, Button } from "react-bootstrap";
import "./BuyerPostRequest.scss";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import AttachLogo from "../../svg/file.svg";
import onorLogo from "../../images/onorlogo.png";
import SuccessLogo from "../../svg/success.svg";
import { action_dialog_open } from "../../redux/actions/dialogAction";
import {
  action_progress_start,
  action_progress_stop,
} from "../../redux/actions/progressAction";
import { API_BUYER_POST_A_REQUEST, API_FETCH_ALL_CATEGORIES } from '../../utils/API_ENDPOINTS'
import { isUndefined } from 'lodash'
import { usePromiseTracker, trackPromise } from "react-promise-tracker"
import _ from 'lodash'

const BuyerPostRequest = (props) => {
  const { promiseInProgress } = usePromiseTracker()
  const [layer, setLayer] = React.useState({
    cls: "mycol",
    isShown: "hidden",
  });
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [categoryId, setCategoryId] = useState('')
  const [deliveryTime, setDeliveryTime] = useState('')
  const [supportingDocument, setSupportingDocument] = useState('')
  const [budget, setBudget] = useState('')
  const [categories, setCategories] = useState([])

  const fetchAllCategoriesRemote = async () => {
    try {
      const result = await trackPromise(axios.get(API_FETCH_ALL_CATEGORIES))
      props.progressStop()
      console.log("ALLCATEGORIES")
      console.log(result.data)
      setCategories(result.data.categories)
    } catch (e) {
      console.log(e)
    }
  }


  useEffect(() => {
    props.actionStartProgress({ isOpen: true })
    fetchAllCategoriesRemote()
    if (!props.auth.isAuthorized) {
      props.history.push("/signin");
      props.actionDialogOpen({
        title: "Login First",
        message:
          "Please login to post a custom request",
        positive: "Ok",
        type: "Alert",
      })
    }
  }, [])
  const openLayer = () => {
    setLayer({
      cls: "layerDiv",
      isShown: "visible",
    });
  };
  const [isPosted, setisPosted] = useState({
    data: null,
    error: null
  })

  const [errors, setErrors] = useState({
    titleError: '',
    descriptionError: '',
    imageError: '',
    categoryError: '',
    deliveryTimeError: '',
    budgetError: ''
  })

  const validator = () => {
    let titleError = ''
    let descriptionError = ''
    let imageError = ''
    let categoryError = ''
    let deliveryTimeError = ''
    let budgetError = ''
    if (title == '') {
      titleError = 'Title is required'
    }
    if (description == '') {
      descriptionError = 'Description is required'
    }
    if (description.length > 2100) {
      descriptionError = 'Please enter a description less than 2100 letters'
    }
    if (supportingDocument == '') {
      imageError = 'Please choose a valid supporting document'
    }
    if (categoryId == '') {
      categoryError = 'Please choose a category'
    }
    if (deliveryTime == '') {
      deliveryTimeError = 'Please enter a valid delivery time'
    }
    if (budget == '') {
      budgetError = 'Please enter a valid budget'
    }
    if (titleError) {
      setErrors({
        'titleError': titleError
      })
      return false
    } else if (descriptionError) {
      setErrors({
        'descriptionError': descriptionError
      })
      return false
    } else if (imageError) {
      setErrors({
        'imageError': imageError
      })
      return false
    } else if (categoryError) {
      setErrors({
        'categoryError': categoryError
      })
      return false
    } else if (deliveryTimeError) {
      setErrors({
        'deliveryTimeError': deliveryTimeError
      })
      return false
    } else if (budgetError) {
      setErrors({
        'budgetError': budgetError
      })
      return false
    } else {
      return true
    }
  }

  const handleSubmit = async () => {
    if (validator()) {
      if (props.auth.isAuthorized) {
        props.actionStartProgress()
        const formData = new FormData()
        formData.append('title', title)
        formData.append('description', description)
        formData.append('user_id', jwt.decode(localStorage.getItem("jwtToken"))["userId"])
        formData.append('category_id', categoryId)
        formData.append('delivery_time', deliveryTime)
        formData.append('supporting_document', supportingDocument)
        formData.append('budget', parseFloat(budget))
        const config = {
          headers: {
            'content-type': 'multipart/form-data'
          }
        }
        axios.post(API_BUYER_POST_A_REQUEST, formData, config).then(res => {
          setisPosted({ data: res.data, error: null })
          props.actionDialogOpen({
            title: "Success",
            message:
              "Your request has been posted successfully",
            positive: "Ok",
            type: "Alert",
          })
          props.progressStop()
          props.history.push("/user/requests/");
        }).catch((error) => {
          props.actionDialogOpen({
            title: "Something seems wrong",
            message:
              "Couldn't post your request, please retry",
            positive: "Retry",
            type: "Alert",
          })
          props.progressStop()
        })
      }
    }
  }

  return (
    <Fragment>
      {/* {
        !props.auth.isAuthorized ?
        props.history.push('/signin/')
        : null
      } */}
      {/* {
        props.progress.isOpen && <ProgressBar />
      } */}
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
        </Col>
        <Col xs={12}>
          <Button
            className={"onor_btn centered"}
            style={{ marginTop: "15em" }}
            as={Link}
            to="/"
          >
            Home
          </Button>
        </Col>
      </Row>
      <Container className={layer.cls}>
        <Row className="mycol mt-5">
          <Col className="mycol">
            <h3 className="mycol">What service are you looking for?</h3>
          </Col>
        </Row>
        <Row>
          <Col className={"offset-md-2"} md={8}>
            <Row className="mt-3">
              <Col className="mycol" sm={12}>
                <Form.Group controlId="exampleForm.SelectCustom">
                  <Form.Label>Assignment title</Form.Label>
                  <Form.Control
                    as={"input"}
                    onKeyUp={(e) => setTitle(e.target.value)}
                    style={errors.titleError ? { border: '1px solid red', boxShadow: '0 0 4px red' } : null}
                  />
                  <span className={'text-danger'}>{errors.titleError}</span>
                </Form.Group>
              </Col>
            </Row>
            <Row className="mycol mt-2">
              <Col className="mycol">
                <Form.Group controlId="exampleForm.ControlTextarea1">
                  <Form.Label>
                    Describe the service you are looking to purchase
                  </Form.Label>
                  <Form.Control as="textarea"
                    rows="3"
                    max={2100}
                    onKeyUp={(e) => setDescription(e.target.value)}
                    style={errors.descriptionError ? { border: '1px solid red', boxShadow: '0 0 4px red' } : null}
                  />
                  <Form.Label className="text-muted float-right">
                    {description.length} / 2100
                  </Form.Label>
                  <span className={'text-danger'}>{errors.descriptionError}</span>
                </Form.Group>
              </Col>
            </Row>
            <Row className="mycol">
              <Col className="mycol" sm={6}>
                <Form.File id="formcheck-api-custom">
                  <Form.Label>Upload Details</Form.Label>
                  <div className="d-flex">
                    <img
                      style={{
                        width: "30px",
                        height: "30px",
                      }}
                      alt="attachlogo"
                      src={AttachLogo}
                    />
                    <Form.File.Input
                      accept={'image/*'}
                      style={errors.imageError ? { border: '1px solid red', boxShadow: '0 0 4px red' } : null}
                      onChange={(e) => setSupportingDocument(e.target.files[0])} />
                  </div>
                </Form.File>
                <span className={'text-danger'}>{errors.imageError}</span><br />
                <span className={'text-muted'}>Maximum file size should be: 150KB of 400x750 pixels</span>
              </Col>

              <Col className="mycol" sm={6}>
                <Form.File id="formcheck-api-custom">
                  <Form.Label>Upload Document</Form.Label>
                  <div className="d-flex">
                    <img
                      style={{
                        width: "30px",
                        height: "30px",
                      }}
                      alt="attachlogo"
                      src={AttachLogo}
                    />
                    <Form.File.Input
                      accept={'application/pdf,application/vnd.ms-powerpoint,application/vnd.openxmlformats-officedocument.presentationml.slideshow,application/vnd.openxmlformats-officedocument.presentationml.presentation'}
                      style={errors.imageError ? { border: '1px solid red', boxShadow: '0 0 4px red' } : null}
                      onChange={(e) => setSupportingDocument(e.target.files[0])} />
                  </div>
                </Form.File>
                <span className={'text-danger'}>{errors.imageError}</span>
              </Col>
            </Row>
            <Row className="mt-3">
              <Col className="mycol" sm={6}>
                <Form.Group controlId="exampleForm.SelectCustom">
                  <Form.Label>Choose a category</Form.Label>
                  <Form.Control as="select"
                    custom
                    style={errors.categoryError ? { border: '1px solid red', boxShadow: '0 0 4px red' } : null}
                    onChange={(e) => setCategoryId(e.target.value)}>
                    <option value="" selected disabled>--select--</option>
                    {
                      categories.map((category) => (
                        <option value={category.categoryId}>{category.name}</option>
                      ))
                    }
                  </Form.Control>
                  <span className={'text-danger'}>{errors.categoryError}</span>
                </Form.Group>
              </Col>
              <Col sm={6} className="mycol">
                <Form.Group id="formcheck-api-custom">
                  <Form.Label>Expected delivery time?</Form.Label>
                  <input type="number"
                    placeholder={'Enter days'}
                    className={"form-control"}
                    style={errors.deliveryTimeError ? { border: '1px solid red', boxShadow: '0 0 4px red' } : null}
                    onChange={(e) => {
                      if (!isNaN(e.target.value) && e.target.value > 0) {
                        setDeliveryTime(e.target.value)
                      } else {
                        setDeliveryTime('')
                      }
                    }}
                    value={deliveryTime} />
                  <span className={'text-danger'}>{errors.deliveryTimeError}</span>
                </Form.Group>
              </Col>
            </Row>
            <Row className="mt-lg-4">
              <Col className="mycol" sm={8} md={6} lg={6} xl={6} xs={8}>
                <Form.Label>What is your budget for this service?</Form.Label>
                <input type="number"
                  className={'form-control'}
                  placeholder={'Enter your budget'}
                  style={errors.budgetError ? { border: '1px solid red', boxShadow: '0 0 4px red' } : null}
                  onChange={(e) => {
                    if (!isNaN(e.target.value) && e.target.value > 0) {
                      setBudget(e.target.value)
                    } else {
                      setBudget('')
                    }
                  }}
                  value={budget} />
                <span className={'text-danger'}>{errors.budgetError}</span>
              </Col>
              <Col
                className="mycol align-self-center justify-content-center"
                xs={4}
              >
                {/* <img
                  className="mycol align-self-center justify-content-center"
                  src={onorLogo}
                  style={{ width: "40px", height: "25px" }}
                />{" "}
                Coins */}
              </Col>
            </Row>
            <Row className="mt-3">
              <Col className="mycol d-flex">
                <Button
                  className="onor_secondery_btn"
                  as={Link}
                  to="/"
                  variant=""
                >
                  Back
                </Button>
              </Col>
              <Col className="mycol d-flex justify-content-end">
                <Button
                  className="onor_btn"
                  variant=""
                  onClick={(e) => handleSubmit()}
                >
                  Submit request
                </Button>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};
const mapStateToProps = (state) => {
  return {
    dialog: state.dialog,
    progress: state.progress,
    auth: state.auth,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actionDialogOpen: (payload) => dispatch(action_dialog_open(payload)),
    actionStartProgress: (payload) => dispatch(action_progress_start(payload)),
    progressStop: () => dispatch(action_progress_stop()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BuyerPostRequest);
