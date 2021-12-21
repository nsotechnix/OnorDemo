import React, { Fragment } from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./SearchBar.scss";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const SearchBar = (props) => {
  // props.auth.isAlsoSeller=true

  const as_buyer_jsx = (
    <Fragment>
      <Col
        lg={12}
        md={12}
        style={{ paddingRight: "2em" }}
        className={"my-2 d-flex justify-content-end mycol"}
      >
        <Button
          as={Link}
          to="/buyer/postrequest"
          className={"onor_outline_btn"}
          variant="outline-primary"
        >
          Post a request
        </Button>
      </Col>
    </Fragment>
  );

  const as_seller_jsx = (
    <Fragment>
      <Col
        lg={12}
        md={12}
        style={{ paddingRight: "2em" }}
        className={"my-2 d-flex justify-content-end mycol"}
      >
        <Button
          as={Link}
          to="/seller/create/summary"
          className={"onor_outline_btn"}
          variant="outline-primary"
        >
          Post a Session
        </Button>
      </Col>
    </Fragment>
  );

  return (
    <Fragment>
      <Row>{props.auth.isAlsoSeller ? as_seller_jsx : as_buyer_jsx}</Row>
    </Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};

export default connect(mapStateToProps)(SearchBar);
