import React, { Fragment, useState } from "react";
import { Col, Container, Row, Form } from "react-bootstrap";
import { connect } from "react-redux";
import { useLocation } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Link from "@material-ui/core/Link";
import HomeIcon from "@material-ui/icons/Home";
import WhatshotIcon from "@material-ui/icons/Whatshot";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import DetailsIcon from "@material-ui/icons/Details";
import MonetizationOnIcon from "@material-ui/icons/MonetizationOn";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import { action_append_post_a_gig_data } from "../../redux/actions/postAGigActions";
import { useEffect } from "react";

const useStyles = makeStyles((theme) => ({
  link: {
    display: "flex",
  },
  icon: {
    marginRight: theme.spacing(0.5),
    width: 40,
    height: 40,
  },
}));

const SellerPostAGig = (props) => {
  const classes = useStyles();
  const location = useLocation();

  // const [assignmentTitle, setAssignmentTitle] = useState("")
  // const [tags, setTags] = useState("")
  // const [communityId, setCommunityId] = useState("")
  // const [description, setDescription] = useState("")
  // const [doc, setDoc] = useState("")

  return (
    <Fragment>
      <Container>
        <Row>
          <Col className="mycol">
            <Row>
              <Col className="mycol">
                <h1
                  className="mycol"
                  style={{
                    color: "orangered",
                  }}
                >
                  Post A Session
                </h1>
              </Col>
              <Col className="mycol">
                <Breadcrumbs
                  separator={<NavigateNextIcon className={classes.icon} />}
                  className="mycol mt-lg-1"
                  aria-label="breadcrumb"
                >
                  export const ACTION_SET_ST
                  {location.pathname === "/seller/postagig" ? (
                    <Link
                      color="orangered"
                      href="/#/seller/postagig"
                      className={classes.link}
                    >
                      <DetailsIcon className={classes.icon} />
                      <p
                        className="mycol"
                        style={{
                          fontSize: "20px",
                        }}
                      >
                        Summary
                      </p>
                    </Link>
                  ) : (
                    <Link
                      color="inherit"
                      href="/#/seller/postagig"
                      className={classes.link}
                    >
                      <DetailsIcon className={classes.icon} />
                      <p
                        className="mycol"
                        style={{
                          fontSize: "20px",
                        }}
                      >
                        Summary
                      </p>
                    </Link>
                  )}
                  <Link
                    color="inherit"
                    href="/getting-started/installation/"
                    className={classes.link}
                  >
                    <MonetizationOnIcon className={classes.icon} />
                    <p
                      className="mycol"
                      style={{
                        fontSize: "20px",
                      }}
                    >
                      Price
                    </p>
                  </Link>
                </Breadcrumbs>
              </Col>
            </Row>
            <Row className="mt-lg-4">
              <Col>
                <Form.Group
                  className="row mycol d-flex align-content-center"
                  controlId="formBasicEmail"
                >
                  <Form.Label className="mycol col-lg-4">
                    Email address
                  </Form.Label>
                  <Form.Control
                    className="mycol col-lg-8"
                    type="email"
                    placeholder="Enter email"
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group
                  className="row mycol d-flex align-content-center"
                  controlId="formBasicEmail"
                >
                  <Form.Label className="mycol col-lg-4">Community</Form.Label>
                  <Form.Control
                    className={"col-lg-8"}
                    as="select"
                    id="inlineFormCustomSelectPref"
                    custom
                  >
                    <option value="0">Choose...</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </Form.Control>
                </Form.Group>
              </Col>
            </Row>
            <Row className="mt-lg-4">
              <Col>
                <Form.Group
                  className="row mycol d-flex align-content-center"
                  controlId="formBasicEmail"
                >
                  <Form.Label className="mycol col-lg-4">
                    Search Tags
                  </Form.Label>
                  <Form.Control
                    className="mycol col-lg-8"
                    type="email"
                    placeholder="Search tags"
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group
                  className="mycol row"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Label className="mycol col-lg-4">
                    Description
                  </Form.Label>
                  <Form.Control
                    placeholder="Please give description in details"
                    className="mycol col-lg-8"
                    as="textarea"
                    rows="4"
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group
                  className="mycol"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Label className="mycol col-lg-4">
                    Upload details
                  </Form.Label>
                  <Form.Control
                    placeholder="Upload your details"
                    className="mycol col-lg-8"
                    as="textarea"
                    rows="4"
                  />
                </Form.Group>
              </Col>
              <Col>
                <Row>
                  <Col lg={10} className="mycol">
                    <Form.Group
                      className="mycol"
                      controlId="exampleForm.ControlTextarea1"
                    >
                      <Form.Label className="mycol col-lg-4">FAQ</Form.Label>
                      <Form.Control
                        placeholder="Upload your details"
                        className="mycol col-lg-8"
                        as="textarea"
                        rows="4"
                      />
                    </Form.Group>
                  </Col>
                  <Col lg={2} className="mycol">
                    <AddCircleOutlineIcon className="mycol" />
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    appendPostAGigData: (payload) =>
      dispatch(action_append_post_a_gig_data(payload)),
  };
};

export default connect(null, mapDispatchToProps)(SellerPostAGig);
