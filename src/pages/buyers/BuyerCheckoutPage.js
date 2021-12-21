import React, { Fragment, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Col, Container, Row, Card, Button, Form } from "react-bootstrap";
import { connect } from "react-redux";
import SuccessLogo from "../../svg/success.svg";
import DangerLogo from "../../svg/danger.svg";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import { loadStripe } from "@stripe/stripe-js";
import jwt from "jsonwebtoken";
import {
  API_FETCH_SINGLE_GIG,
  API_MAKE_ORDER,
  API_MAKE_PAYMENT,
  WEB_ENDPOINT,
} from "../../utils/API_ENDPOINTS";
import {
  action_dialog_close,
  action_dialog_open,
} from "../../redux/actions/dialogAction";
import { isUndefined, isNull } from "lodash";
import Axios from "axios";
import {
  action_progress_start,
  action_progress_stop,
} from "../../redux/actions/progressAction";
import { ContactsOutlined } from "@material-ui/icons";

const BuyerCheckoutPage = (props) => {

  const stripePromise = window.location.hostname == 'onor.world' ? loadStripe(
    "pk_live_51Hk0OjIcm9Ch0A9uGORRxupVh2r88Ng1YU1JgHFfvltFojUYwBcLppfu5WoM0obWozS1m7a8V3gENPSW3jDIrRZ800iBgWsmBu"
  ) : loadStripe(
    "pk_test_51Hk0OjIcm9Ch0A9uQIVnLl9Jp5PlN665mfA5LiZ2o9h1afoo79LROyqR8iqd1dpq09qonU3BSBQzNKcYjPKsnZCT00QUT50aQf"
  )

  if (!props.auth.isAuthorized) {
    props.actionDialogOpen({
      title: `Please Login`,
      message: `Sorry, to buy session you have to login`,
      positive: "Ok",
      type: "Alert",
    });
    props.history.push("/signin?productId=" + props.ProductReviewReducer.productId + "&packageId=" + props.ProductReviewReducer.packageId);
  }
  const [productDetails, setProductDetails] = useState({ product: null });
  const [packageDetails, setPackageDetails] = useState(undefined);
  const [paymentSuccessState, setPaymentSuccessState] = useState(false);
  const [message, setMessage] = useState("");
  //console.log(productId);
  let packageId = props.ProductReviewReducer.packageId;
  let productId = props.ProductReviewReducer.productId;
  console.log(productId);
  let subTotal = undefined;
  if (!isUndefined(props.ProductReviewReducer.subTotal)) {
    console.log(`PRICE THE SUBTOTAL: ${props.ProductReviewReducer.subTotal}`);
    subTotal = props.ProductReviewReducer.subTotal;
  }
  // console.log(subTotal)
  const deliveryTime = props.ProductReviewReducer.deliveryTime;
  if (isUndefined(productId) || isNull(productId)) {
    let productDetailsFromStorage = JSON.parse(
      localStorage.getItem("currentProductAtCheckout")
    );
    productId = productDetailsFromStorage.productId;
  }

  const [layer, setLayer] = React.useState({
    cls: "mycol",
    isShown: "hidden",
    isPaymentFailed: "hidden",
  });

  const openLayer = () => {
    setLayer({
      ...layer,
      cls: "layerDiv",
      isShown: "visible",
    });
  };

  const paymentFailedDialog = () => {
    setLayer({
      ...layer,
      cls: "layerDiv",
      isPaymentFailed: "visible",
    });
  };

  const paymentRetry = () => {
    setLayer({
      ...layer,
      isPaymentFailed: "hidden",
      cls: "mycol",
    });
  };

  const [radio, setradio] = React.useState("");

  const handleChangeRadio = (event) => {
    setradio(event.target.value);
  };

  const location = useLocation();
  let isMobile = "";
  if (location.pathname.match("/mobile/")) {
    isMobile = "mobile/";
  } else {
    isMobile = "";
  }

  //stripe payment use effects
  useEffect(() => {
    console.log("STRIPE_USE_EFFECT_RAN");
    handleGetProductList();

    const query = props.location.search;
    console.log(query);

    if (query === "?success=true") {
      console.log("Order placed! You will receive an email confirmation.");
      setMessage("Order placed! You will receive an email confirmation.");
      props.actionDialogOpen({
        title: `Payment success`,
        message: `Your payment is successfully processed`,
        positive: "Ok",
        type: "Alert",
      });
      handleOrder("paid");
    }

    if (query === "?canceled=true") {
      console.log("Order placed! You will receive an email confirmation.");
      setMessage(
        "Order canceled -- continue to shop around and checkout when you're ready."
      );

      props.actionDialogOpen({
        title: `Payment Failed`,
        message: `Your payment has failed`,
        positive: "Ok",
        type: "Alert",
      });
    }
  }, []);

  const handleStartPayment = async () => {
    if (props.auth.isAuthorized) {
      const { firstName, lastName, userEmail } = jwt.decode(
        localStorage.getItem("jwtToken")
      );

      const dataForLS = {
        productId: productId,
        packageId: packageId,
        merchantId: productDetails["merchant"]["merchantId"],
      };

      localStorage.setItem(
        "currentProductAtCheckout",
        JSON.stringify(dataForLS)
      );

      const stripe = await stripePromise;

      const data = {
        amount: subTotal,
        gig_name: productDetails["productName"],
        name: `${firstName} ${lastName}`,
        email: userEmail,
        referrer: `${window.location.protocol}//${window.location.hostname}${window.location.port ? ':' + window.location.port : ''}`,
        // referrer: "https://onor.world",
        gig_image_url: productDetails["productIconLink"],
      };

      const response = await Axios.post(API_MAKE_PAYMENT, data);

      const session = response.data;

      console.log("STRIPE_SESSION");
      console.log(session);

      try {
        const result = await stripe.redirectToCheckout({
          sessionId: session.id,
        });

        if (result.error) {
          // If `redirectToCheckout` fails due to a browser or network

          // error, display the localized error message to your customer

          // using `result.error.message`.
          console.log("STRIPE_REDIRECT_FAILED");
        }
      } catch (e) {
        console.log(e);
      }
    }
  };

  const handleGetProductList = async () => {
    try {
      const prodResult = await Axios.get(API_FETCH_SINGLE_GIG + "" + productId);
      if (!isUndefined(prodResult) && !isUndefined(prodResult.data)) {
        setProductDetails(prodResult.data.gig);
        if (!isUndefined(prodResult.data.gig.onorPackages)) {
          prodResult.data.gig.onorPackages.map((object, index) => {
            if (object.packageId == packageId) {
              setPackageDetails({
                ...object,
              });
            }
          });
        }
      }
    } catch (e) {
      console.log(e);
    }
    // paymentSuccessState && alert(paymentSuccessState) //localStorage.removeItem("currentProductAtCheckout")
    // props.actionStopProgress()
  };

  const handleOrder = async (paymentStatus) => {
    const prod = JSON.parse(localStorage.getItem("currentProductAtCheckout"));
    console.log("PROD");
    console.log(prod);
    const data = {
      buyer_id: String(jwt.decode(localStorage.getItem("jwtToken"))["userId"]),
      seller_id: String(prod["merchantId"]),
      gig_id: String(prod["productId"]),
      package_id: String(prod["packageId"]),
      status: "Pending",
      payment_status: paymentStatus,
    };
    console.log("ORDER");
    console.log(data);
    try {
      const makeOrder = await Axios.post(API_MAKE_ORDER, data);
      openLayer();
      setPaymentSuccessState(true);
    } catch (e) {
      console.log(e);
      paymentFailedDialog();
      // localStorage.removeItem("currentProductAtCheckout")
    }
  };

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
          <br />
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
      <Row style={{ visibility: layer.isPaymentFailed }}>
        <Row className={"centered"}>
          <Col xs={12}>
            <h3 className={"mr-3"}>Payment Failed</h3>
          </Col>
        </Row>
        <Row className={"mt-5 centered"}>
          <Col xs={12} className={"d-flex align-self-center"}>
            <img
              style={{
                width: "100px",
                height: "100px",
              }}
              alt="avatar"
              src={DangerLogo}
            />
            <br />
          </Col>
        </Row>
        <Row className={"mt-5 centered"}>
          <Col xs={12}>
            <Button
              className={"onor_btn w-75 d-flex align-self-center"}
              style={{ marginTop: "12em" }}
              onClick={(e) => paymentRetry()}
            >
              Try again
            </Button>
          </Col>
          <Col xs={12}></Col>
        </Row>
      </Row>
      <Container className={layer.cls}>
        <Row>
          <Col className="mycol" lg={8}>
            <Row>
              <Col className={"mt-3"}>
                <h5 className={"onor_span_color"}>Payment options</h5>
              </Col>
            </Row>
            <div
              className="mt-lg-1"
              style={{
                borderBottom: "1px solid black",
              }}
            ></div>
            <Row className="mt-5 ml-3">
              <Col className="mycol" xs={12} md={4}>
                <FormControl component="fieldset">
                  <FormLabel component="legend">
                    Choose Payment Method
                  </FormLabel>
                  <RadioGroup
                    aria-label="method"
                    name="method"
                    value={radio}
                    onChange={handleChangeRadio}
                  >
                    <FormControlLabel
                      value="Credit Card"
                      control={<Radio />}
                      label="Credit Card"
                    />
                    <FormControlLabel
                      value="Debit Card"
                      control={<Radio />}
                      label="Debit Card"
                    />
                    <FormControlLabel
                      value="PayPal"
                      control={<Radio />}
                      label="PayPal"
                    />
                    {/* <FormControlLabel
                      value="ONOR Coins"
                      control={<Radio />}
                      label="ONOR Coins"
                    /> */}
                  </RadioGroup>
                </FormControl>
              </Col>
              {/* <Col className="mycol" xs={12} md={8}>
                <Card>
                  <Card.Body>
                    <Row>
                      <Col className="mycol" sm={12} md={4} xl={4}>
                        <p>Total Coins You've</p>
                        <div className="mycol">
                          <Form.Control
                            as={"input"}
                            placeholder={"Total Coins"}
                          ></Form.Control>
                        </div>
                      </Col>
                      <Col className="mycol" sm={12} md={4} xl={4}>
                        <p>Coins you want to spend</p>
                        <div className="mycol">
                          <Form.Control
                            as={"input"}
                            placeholder={"Coins to Spend"}
                          ></Form.Control>
                        </div>
                      </Col>
                      <Col className="mycol" sm={12} md={4} xl={4}>
                        <p>Coins you want to spend</p>
                        <div className="mycol">
                          <Form.Control
                            as={"input"}
                            placeholder={"Wallet Balance"}
                          ></Form.Control>
                        </div>
                      </Col>
                    </Row>
                  </Card.Body>
                </Card>
              </Col> */}
            </Row>
          </Col>
          <Col className="mycol" lg={4}>
            <Card>
              <Card.Body>
                <Row>
                  <Col className="mycol d-flex justify-content-between">
                    <img
                      style={{ height: "5em", width: "5em" }}
                      alt="image"
                      src={productDetails.productIconLink}
                    />
                    <h6 className="mycol mx-2">{productDetails.productName}</h6>
                  </Col>
                </Row>
                <div
                  className="my-4"
                  style={{
                    borderBottom: "1px solid grey",
                  }}
                ></div>
                <Row className="mt-lg-4">
                  <Col className="mycol d-flex justify-content-between">
                    <p>{productDetails.productName}</p>
                    <p>${subTotal}</p>
                  </Col>
                </Row>
                <Row>
                  <Col className="mycol">
                    {/* <div className="mycol d-flex my-2">
                      <CheckLogo
                        style={{
                          color: "green",
                        }}
                        className="mycol"
                      />
                      <p className="mycol mx-2">Design Customization</p>
                    </div>
                    <div className="mycol d-flex my-2">
                      <CheckLogo
                        style={{
                          color: "green",
                        }}
                        className="mycol"
                      />
                      <p className="mycol mx-2">Content Upload</p>
                    </div>
                    <div className="mycol d-flex my-2">
                      <CheckLogo
                        style={{
                          color: "green",
                        }}
                        className="mycol"
                      />
                      <p className="mycol mx-2">Responsive Design</p>
                    </div>
                    <div className="mycol d-flex my-2">
                      <CheckLogo
                        style={{
                          color: "green",
                        }}
                        className="mycol"
                      />
                      <p className="mycol mx-2">Unlimited Revision</p>
                    </div> */}
                  </Col>
                </Row>
                <Row>
                  <Col className="mycol mt-3">
                    <Form.Label>Promo Code</Form.Label>
                    <Form.Control type="text" placeholder="Enter Promo code" />
                  </Col>
                </Row>
                <Row className="mt-lg-4">
                  <Col className="mycol d-flex justify-content-between">
                    <p>Total</p>
                    <p>${subTotal}</p>
                  </Col>
                </Row>
                <Row className="mt-lg-2">
                  <Col className="mycol d-flex justify-content-between">
                    <p>Validity {deliveryTime} days</p>
                  </Col>
                </Row>
                <Row>
                  <Col className="mycol d-flex justify-content-left" xs={6}>
                    <Button
                      className="btn btn-dark"
                      style={{ fontSize: '.8em', padding: '5px 30px', borderRadius: '7px', position: 'relative', bottom: '1px' }}
                      variant=""
                      onClick={(e) =>
                        props.history.push(
                          "/" +
                          isMobile +
                          "buyer/order/details/" +
                          productId +
                          "/" +
                          packageId +
                          "/"
                        )
                      }
                    >
                      Back
                    </Button>
                  </Col>
                  <Col className="mycol d-flex justify-content-right" xs={6}>
                    <Button
                      className="btn btn-primary"
                      style={{ fontSize: '.8em', padding: '5px 30px', borderRadius: '7px', position: 'relative', bottom: '1px' }}
                      variant=""
                      onClick={(e) => handleStartPayment()}
                    >
                      Confirm and Pay
                    </Button>
                  </Col>

                  <Col className="mycol d-none justify-content-right" xs={6}>
                    <Button
                      className="btn btn-dark"
                      variant=""
                      onClick={(e) => paymentFailedDialog()}
                    >
                      Show payment failed (demo)
                    </Button>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
    ProductReviewReducer: state.ProductReviewReducer,

  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actionDialogOpen: (payload) => dispatch(action_dialog_open(payload)),
    actionDialogClose: () => dispatch(action_dialog_close()),
    actionStartProgress: (payload) => dispatch(action_progress_start(payload)),
    actionStopProgress: () => dispatch(action_progress_stop()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BuyerCheckoutPage);
