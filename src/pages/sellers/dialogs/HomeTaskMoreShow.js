import React, { Fragment } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import CloseIcon from "@material-ui/icons/Close";
import Slide from "@material-ui/core/Slide";
import { Col, Container, Row, Form, Card } from "react-bootstrap";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import LocationOnIcon from "@material-ui/icons/LocationOn";

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: "relative",
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

let SellerPrivateGigPublishDialog = (props) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(props.isOpen);

  const handleClose = () => {
    props.setOpen(false);
    setOpen(false);
  };

  console.log({ ...props });

  return (
    <Fragment>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              Custom Session Page
            </Typography>
          </Toolbar>
        </AppBar>
        <Container className="mt-lg-5">
          <Row>
            <Col>
              <Row>
                <Col className="mycol">
                  <Card className="p-2 h-100">
                    <Form.Group
                      className="mycol mt-4"
                      controlId="formBasicEmail"
                    >
                      <Form.Control
                        className="mycol"
                        type="text"
                        placeholder="Description"
                      />
                    </Form.Group>
                    <Form.Group className="mycol" controlId="formBasicEmail">
                      <Form.Control
                        as="select"
                        id="inlineFormCustomSelectPref"
                        custom
                      >
                        <option value="0">TimeFrame...</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </Form.Control>
                    </Form.Group>
                  </Card>
                </Col>
                <Col className="mycol">
                  <Card className="p-2">
                    <Card.Title className="mycol">
                      <h3
                        style={{
                          color: "orangered",
                        }}
                      >
                        Seller details
                      </h3>
                    </Card.Title>
                    <Card.Body
                      style={{
                        border: "1px solid lightgrey",
                        borderRadius: "8px",
                      }}
                      className="mycol"
                    >
                      <div className="mycol d-flex">
                        <AccountCircleIcon />
                        <h5 className="mx-2">Name</h5>
                      </div>
                      <div className="mycol d-flex">
                        <LocationOnIcon />
                        <h5 className="mx-2">Location</h5>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
              <Row className="mt-4">
                <Col className="mycol">
                  <Card
                    onClick={(e) => {
                      props.history.push("/buyer/order/details");
                    }}
                    className="p-2"
                  >
                    <Card.Title className="mycol">
                      <h4>Custom offer option</h4>
                    </Card.Title>
                    <Card.Body
                      style={{
                        border: "1px solid lightgrey",
                        borderRadius: "8px",
                      }}
                      className="mycol"
                    >
                      <h6>Offer 1 includes</h6>
                      <h6>1. xxxx</h6>
                      <h6>2. yyyy</h6>
                      <h6>3. zzzz</h6>
                      <div className="mycol row d-flex justify-content-between my-3">
                        <h6
                          className="mycol col-6"
                          style={{
                            color: "orangered",
                          }}
                        >
                          Buy
                        </h6>
                        {/* <div className="col-6 mycol d-flex justify-content-between">
                                                    <h6>50</h6>
                                                    <h6><span style={{
                                                        color: "orangered"
                                                    }}>Onor</span> COIN 300</h6>
                                                </div> */}
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
                <Col className="mycol">
                  <Card className="p-2 h-100">
                    <Card.Title className="mycol">
                      <h4>Reviews</h4>
                    </Card.Title>
                    <Card.Body
                      style={{
                        border: "1px solid lightgrey",
                        borderRadius: "8px",
                      }}
                      className="mycol"
                    >
                      <Form.Group
                        className="mycol"
                        controlId="exampleForm.ControlTextarea1"
                      >
                        <Form.Control
                          placeholder="Post your review here"
                          className="mycol"
                          as="textarea"
                          rows="4"
                        />
                      </Form.Group>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </Dialog>
    </Fragment>
  );
};

SellerPrivateGigPublishDialog = withRouter(SellerPrivateGigPublishDialog);
export default connect()(SellerPrivateGigPublishDialog);
