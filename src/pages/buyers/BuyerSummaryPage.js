import React, { createRef, Fragment, useEffect, useRef, useState } from "react";
import "./BuyerSummaryPage.scss";
import dummyImage from "../../svg/man.svg";
import { useLocation } from "react-router-dom";
import {
  API_FETCH_SINGLE_GIG,
  ADD_CHAT_HEAD_TO_DB,
  WEB_ENDPOINT,
  FETCH_SINGLE_ORDER_DETAILS,
  READ_CHAT_HEAD_FROM_DB,
} from "../../utils/API_ENDPOINTS";
import { connect } from "react-redux";
import { Avatar, makeStyles } from "@material-ui/core";
import Carousel from "react-bootstrap/Carousel";
import { Container, Row, Col, Button } from "react-bootstrap";
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import RefreshLogo from "@material-ui/icons/Cached";
import TimeLogo from "@material-ui/icons/AccessTime";
import ChatLogo from "../../svg/chat.svg";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Grid from "@material-ui/core/Grid";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import TextField from "@material-ui/core/TextField";
import Fab from "@material-ui/core/Fab";
import SendIcon from "@material-ui/icons/Send";
import Axios from "axios";
import AttachmentIcon from "@material-ui/icons/Attachment";
import { isEmpty, isFunction, isNull, isUndefined, result } from "lodash";
import { withFirebase } from "../../firebase";
import jwt from "jsonwebtoken";
import { action_append_gig_review } from "../../redux/actions/ProductReviewAction";
import { action_dialog_open } from "../../redux/actions/dialogAction";
import {
  action_progress_start,
  action_progress_stop,
} from "../../redux/actions/progressAction";
import { usePromiseTracker, trackPromise } from "react-promise-tracker";
import Loader from "react-loader-spinner";
import CheckLogo from "@material-ui/icons/Check";
import * as qs from "query-string";
import { AttachFileOutlined } from '@material-ui/icons'
import Message from '../chat/Message/index'

import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Slide from "@material-ui/core/Slide";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Linkyfy from "react-linkify";

import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';
import { TextsmsRounded } from "@material-ui/icons";

const componentDecorator = (href, text, key) => (
  <a href={href} key={key} target="_blank" rel="noopener noreferrer">
    {text}
  </a>
);

function sleep(milliseconds) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}

const useStyles = makeStyles((theme) => ({
  form: {
    display: "flex",
    flexDirection: "column",
    margin: "auto",
    width: "fit-content",
  },
  formControl: {
    marginTop: theme.spacing(2),
    minWidth: 120,
  },
  formControlLabel: {
    marginTop: theme.spacing(1),
  },
  appBar: {
    position: "relative",
    background: "#fa6331",
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
  table: {
    minWidth: 650,
  },
  chatSection: {
    width: "70%",
    height: "70%",
  },
  headBG: {
    backgroundColor: "#fa6331",
  },
  borderRight500: {
    borderRight: "1px solid #e0e0e0",
  },
  messageArea: {
    height: "55vh",
    overflowY: "auto",
  },
  root: {
    flexGrow: 1,
    boxShadow: "none",
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
  indicator: {
    backgroundColor: '#FB592E',
  },
}));

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    'aria-controls': `scrollable-auto-tabpanel-${index}`,
  };
}

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

let BuyerSummaryPage = (props) => {

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  }

  const { promiseInProgress } = usePromiseTracker();
  // console.log("BUYERSUMMARY")
  // console.log({ ...props })
  const onButtonClick = (event) => {
    event.stopPropagation();
    event.preventDefault();
    inputFile.current.click();
    // console.log(event.target.files[0])
  };
  const inputFile = useRef(null);

  const location = useLocation();
  let isMobile = "";
  if (location.pathname.match("/mobile/")) {
    isMobile = "mobile/";
  } else {
    isMobile = "";
  }

  const db = props.firebase.firestore;
  const storage = props.firebase.storage;

  let productId = props.match.params.productId;
  if (productId === null) {
    props.history.push("/");
  }
  const [productDetails, setProductDetails] = React.useState({ product: null });

  const chatTextField = createRef();
  const messagesEndRef = useRef(null);

  const [chatBody, setChatBody] = useState("");
  const [chatList, setChatList] = useState([]);
  const [attachment, setAttachment] = useState();

  const scrollToBottom = () => {
    if (!isNull(messagesEndRef.current))
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const parsed = qs.parse(location.search);
  const [orderStatus, setOrderStatus] = useState("");
  useEffect(() => {
    if (parsed.orderId) {
      getOrderDetails(parsed.orderId);
    }
    handleGetProductList();
  }, []);

  const getOrderDetails = async (orderId) => {
    console.log("FINDING ORDER DETAILS");
    const orderDetails = await Axios.get(FETCH_SINGLE_ORDER_DETAILS + orderId);
    if (orderDetails.data.order.status) {
      setOrderStatus(orderDetails.data.order.status);
    }
  };

  const [openImageDialog, setOpenImageDialog] = React.useState(false);
  const [viewAttachment, setViewAttachment] = useState("");

  const handleCloseImageDialog = () => {
    setOpenImageDialog(false);
    setAttachment(undefined);
  };

  //load chat when page loads for first time

  const refreshChat = async () => {
    // console.log("REFRESHCHAT")
    let unsubscribe;

    if (props.auth.isAuthorized) {
      const { userId } = jwt.decode(localStorage.getItem("jwtToken"));
      const { productId, merchant } = productDetails;
      if (!isUndefined(merchant)) {
        // console.log("REFRESHCHAT")
        const { merchantId } = merchant;

        let dataBundle = {
          product_id: productId,
          user_id: userId,
        };
        let currResult = await Axios.post(READ_CHAT_HEAD_FROM_DB, dataBundle);
        if (!isNull(currResult["data"])) {
          //PREORDER CHAT IS ALREADY THERE, RETRIEVE
          if (
            !isNull(currResult["data"]["chatHead"]) &&
            (currResult["data"]["chatHead"]["orderId"] === 0 ||
              isUndefined(currResult["data"]["chatHead"]["orderId"]))
          ) {
            let identifierTS = currResult["data"]["chatHead"]["timestamp"];

            let messageCollectionDocId = `${productId}-${userId}-${identifierTS}`;
            console.log(messageCollectionDocId);
            // let chatRef = db
            //   .collection("messages")
            //   .doc(messageCollectionDocId)
            //   .collection(messageCollectionDocId);
            unsubscribe = db
              .collection("messages")
              .doc(messageCollectionDocId)
              .collection(messageCollectionDocId)
              .onSnapshot((querySnapshot) => {
                handleGetAllChatMessage(messageCollectionDocId);
              });
          }
        }

        // unsubscribe = db
        //   .collection("messages")
        //   .doc(`${productId}-${userId}`)
        //   .collection(`${productId}-${userId}`)
        //   .where("receiverId", "==", merchantId)
        //   .onSnapshot((querySnapshot) => {
        //     // console.log("REFRESHCHAT_RESULT")

        //     handleGetAllChatMessage();
        //     // const tempChat = querySnapshot.forEach(doc => {
        //     //     console.log(doc.id)
        //     //     console.log(doc.data()["content"])
        //     //     setChatList([
        //     //         ...chatList,
        //     //         {
        //     //             id: doc.id,
        //     //             ...doc.data()
        //     //         }
        //     //     ])
        //     // })

        //     // console.log(tempChat)

        //     // if (!isUndefined(tempChat)) {
        //     //     setChatList(tempChat)
        //     // }

        //     // console.log("REFRESHCHAT_RESULT")
        //     // console.log(doc)
        //     // if (doc.exists) {
        //     //     if (isUndefined(doc.data())) {
        //     //         if (doc.data()["receiverId"] === merchantId) {
        //     //             console.log("SNAPSHOT")
        //     //             console.log(doc.data())
        //     //             setChatList([
        //     //                 ...chatList,
        //     //                 {
        //     //                     id: doc.id,
        //     //                     ...doc.data()
        //     //                 }
        //     //             ])
        //     //         }
        //     //     }
        //     // }
        //   });
      }
    }

    return unsubscribe;
  };

  useEffect(() => {
    console.log("CHAT_REFRESH_PRODUCT_MERCHANT_CHANGE");

    //handleGetAllChatMessage();
    const unsubscribe = refreshChat();

    return () => {
      if (isFunction(unsubscribe)) {
        unsubscribe();
      }
    };
  }, [productDetails["merchant"]]);

  useEffect(() => {
    console.log("CHAT_REFRESH_NORMAL");
    const unsubscribe = refreshChat();
    return () => {
      if (isFunction(unsubscribe)) unsubscribe();
    };
  }, []);

  const handleGetAllChatMessage = async (id) => {
    if (props.auth.isAuthorized) {
      //  const { userId } = jwt.decode(localStorage.getItem("jwtToken"));
      if (!isUndefined(productDetails["merchant"])) {
        //  const { productId, merchant } = productDetails;
        // const { merchantId } = merchant;

        try {
          const fsChatList = await db
            .collection("messages")
            .doc(id)
            .collection(id)
            .orderBy("creationTimestamp", "asc")
            //.where("receiverId", "==", merchantId)
            .get();

          console.log(fsChatList);
          const tempChatList = fsChatList.docs.map((doc) => {
            return {
              id: doc.id,
              ...doc.data(),
            };
          });
          console.log("CHATLIST");
          console.log(tempChatList);
          setChatList(tempChatList);
          scrollToBottom();
        } catch (e) {
          console.log(e);
        }
      }
    }
  };

  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      let reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      setAttachment(event.target.files[0]);
    }
  };

  const handleSendChatMessage = async (data) => {
    if (!isEmpty(data) || !isEmpty(chatBody) || !isUndefined(attachment)) {
      if (props.auth.isAuthorized) {
        let {
          userId,
          firstName: userFirstName,
          lastName: userLastName,
          avatar: userAvatar = null,
        } = jwt.decode(localStorage.getItem("jwtToken"));
        console.log("firstName: " + userFirstName);
        const { productId, productName, merchant } = productDetails;

        if (!isUndefined(merchant)) {
          let {
            firstName,
            lastName,
            avatar: merchantAvatar = null,
            merchantId,
          } = merchant;

          if (isUndefined(userAvatar) || isNull(userAvatar)) {
            userAvatar = "";
          }

          if (isUndefined(merchantAvatar) || isNull(merchantAvatar)) {
            merchantAvatar = "";
          }

          let identifierTS = null;
          let messageType = "";
          let firebaseUrl = "";
          const currentTimestamp = Date.now();

          //TODO: CHECK HOW MESSAGES WILL BE SENT
          try {
            let dataBundle = {
              product_id: productId,
              user_id: userId,
            };

            let currResult = await Axios.post(
              READ_CHAT_HEAD_FROM_DB,
              dataBundle
            );
            console.log("CHAT DATA FROM DB");
            console.log(currResult);
            if (!isNull(currResult["data"])) {
              //PREORDER CHAT IS ALREADY THERE, RETRIEVE
              if (
                !isNull(currResult["data"]["chatHead"]) &&
                currResult["data"]["chatHead"]["orderId"] === 0
              ) {
                identifierTS = currResult["data"]["chatHead"]["timestamp"];

                if (attachment) {
                  let fileName = attachment.name;
                  //let fileExtension = fileName.split(".").pop();
                  let imageRef = storage
                    .ref()
                    .child(`${productId}-${userId}-${merchantId}/${fileName}`);
                  try {
                    await imageRef.put(attachment);
                    firebaseUrl = await imageRef.getDownloadURL();
                    messageType = 1;
                  } catch (e) {
                    console.log(e);
                  }
                } else {
                  messageType = 0;
                }
                try {
                  let messageCollectionDocId = `${productId}-${userId}-${identifierTS}`;
                  console.log(messageCollectionDocId);
                  let chatRef = db
                    .collection("messages")
                    .doc(messageCollectionDocId)
                    .collection(messageCollectionDocId);
                  if (!isEmpty(data)) {
                    await chatRef.add({
                      content: data,
                      //gig_id: productId,
                      receiverId: merchantId.toString(),
                      senderId: userId.toString(),
                      creationTimestamp: currentTimestamp.toString(),
                      filePath: firebaseUrl,
                      //whoSender: userId,
                      //whoReciever: merchantId,
                      type: messageType.toString(),
                    });
                  } else {
                    await chatRef.add({
                      content: chatBody,
                      //gig_id: productId,
                      receiverId: merchantId.toString(),
                      senderId: userId.toString(),
                      creationTimestamp: currentTimestamp.toString(),
                      filePath: firebaseUrl,
                      //whoSender: userId,
                      //whoReciever: merchantId,
                      type: messageType.toString(),
                    });
                  }
                } catch (e) {
                  console.log(e);
                }
              } else {
                //THERE IS NO PREORDER CHAT, CREATE NEW
                //1. CREATE CHATHEAD IN MYSQL DB
                dataBundle = {
                  product_id: productId,
                  user_id: userId,
                  timestamp: currentTimestamp,
                };
                console.log("1-1");
                currResult = await Axios.post(ADD_CHAT_HEAD_TO_DB, dataBundle);
                console.log("CHAT DATA TO DB");
                console.log(currResult["data"]["chatHead"]);
                identifierTS = currResult["data"]["chatHead"]["timestamp"];

                let messageCollectionDocId = `${productId}-${userId}-${identifierTS}`;
                console.log("The ID is:" + messageCollectionDocId);

                try {
                  //2. CREATE CHAT HEAD IN FIRESTORE
                  let docRef = db
                    .collection("chatInfo")
                    .doc(messageCollectionDocId);

                  let currDoc = await docRef.get();

                  //HEAD DOESN'T EXIST, CREATE NEW
                  if (!currDoc.exists) {
                    await docRef.set({
                      chat_id: messageCollectionDocId,
                      customer_id: userId.toString(),
                      customer_image: userAvatar,
                      customer_name: userFirstName + " " + userLastName,
                      gig_id: productId.toString(),
                      gig_name: productName,
                      owner_id: merchantId.toString(),
                      owner_image: merchantAvatar,
                      owner_name: `${firstName} ${lastName}`,
                      acceptDelivery: null,
                      order_id: null,
                      order_status: null,
                      post_order: null,
                      payment_status: null,
                      pendingAccept: null,
                      lastUpdateTimestamp: null,
                    });
                  }

                  if (attachment) {
                    let fileName = attachment.name;
                    let imageRef = storage
                      .ref()
                      .child(
                        `${productId}-${userId}-${merchantId}/${fileName}`
                      );
                    try {
                      await imageRef.put(attachment);
                      firebaseUrl = await imageRef.getDownloadURL();
                      messageType = 1;
                    } catch (e) {
                      console.log(e);
                    }
                  } else {
                    messageType = 0;
                  }

                  try {
                    let messageCollectionDocId = `${productId}-${userId}-${currentTimestamp}`;
                    console.log(messageCollectionDocId);
                    let chatRef = db
                      .collection("messages")
                      .doc(messageCollectionDocId)
                      .collection(messageCollectionDocId);
                    console.info("CHATREF");
                    console.info(chatRef);
                    if (!isEmpty(data)) {
                      await chatRef.add({
                        content: data,
                        //gig_id: productId.toString(),
                        receiverId: merchantId.toString(),
                        senderId: userId.toString(),
                        creationTimestamp: currentTimestamp.toString(),
                        filePath: firebaseUrl,
                        //whoSender: userId,
                        //whoReciever: merchantId,
                        type: messageType.toString(),
                      });
                    } else {
                      await chatRef.add({
                        content: chatBody,
                        //gig_id: productId.toString(),
                        receiverId: merchantId.toString(),
                        senderId: userId.toString(),
                        creationTimestamp: currentTimestamp.toString(),
                        filePath: firebaseUrl,
                        //whoSender: userId,
                        //whoReciever: merchantId,
                        type: messageType.toString(),
                      });
                    }
                    refreshChat();
                  } catch (e) {
                    console.log(e);
                  }
                } catch (e) {
                  console.log(e);
                }
              }
            } else {
              //THERE IS NO PREORDER CHAT, CREATE NEW
              //1. CREATE CHATHEAD IN MYSQL DB
              dataBundle = {
                product_id: productId,
                user_id: userId,
              };
              console.log("1-2");
              currResult = await Axios.post(ADD_CHAT_HEAD_TO_DB, dataBundle);
              console.log("CHAT DATA TO DB");
              console.log(currResult);
              identifierTS = currResult["data"]["chatHead"]["timestamp"];

              let messageCollectionDocId = `${productId}-${userId}-${identifierTS}`;

              try {
                //2. CREATE CHAT HEAD IN FIRESTORE
                let docRef = db
                  .collection("chatInfo")
                  .doc(messageCollectionDocId);

                let currDoc = await docRef.get();
                //HEAD DONT EXISTS, CREATE NEW
                if (!currDoc.exists) {
                  await docRef.set({
                    chat_id: messageCollectionDocId,
                    customer_id: userId.toString(),
                    customer_image: userAvatar,
                    customer_name: userFirstName + userLastName,
                    gig_id: productId.toString(),
                    gig_name: productName,
                    owner_id: merchantId.toString(),
                    owner_image: merchantAvatar,
                    owner_name: `${firstName} ${lastName}`,
                    acceptDelivery: null,
                    order_id: null,
                    order_status: null,
                    post_order: null,
                    payment_status: null,
                    pendingAccept: null,
                    lastUpdateTimestamp: null,
                  });
                }

                if (attachment) {
                  let fileName = attachment.name;
                  let imageRef = storage
                    .ref()
                    .child(`${productId}-${userId}-${merchantId}/${fileName}`);
                  try {
                    await imageRef.put(attachment);
                    firebaseUrl = await imageRef.getDownloadURL();
                    messageType = 1;
                  } catch (e) {
                    console.log(e);
                  }
                } else {
                  messageType = 0;
                }

                //ADD THE CHAT

                try {
                  let messageCollectionDocId = `${productId}-${userId}-${currentTimestamp}`;
                  console.log(messageCollectionDocId);
                  let chatRef = db
                    .collection("messages")
                    .doc(messageCollectionDocId)
                    .collection(messageCollectionDocId);

                  await chatRef.add({
                    content: chatBody,
                    //gig_id: productId.toString(),
                    receiverId: merchantId.toString(),
                    senderId: userId.toString(),
                    creationTimestamp: currentTimestamp.toString(),
                    filePath: firebaseUrl,
                    //whoSender: userId,
                    //whoReciever: merchantId,
                    type: messageType.toString(),
                  });
                } catch (e) {
                  console.log(e);
                }
              } catch (e) {
                console.log(e);
              }
            }
          } catch (e) {
            console.log(e);
          }
        }
      }
      setChatBody("");
    }
  };

  const handleGetProductList = async () => {
    props.actionStartProgress();
    try {
      const prodResult = await trackPromise(
        Axios.get(API_FETCH_SINGLE_GIG + "" + productId)
      );
      if (!isUndefined(prodResult) && !isUndefined(prodResult.data)) {
        // console.log(prodResult.data.gig)
        let arr = prodResult.data.gig.onorPackages.sort(function (a, b) {
          return Number(a.packageId) - Number(b.packageId)
        })
        prodResult.data.gig.onorPackages = []
        prodResult.data.gig.onorPackages = arr
        setProductDetails(prodResult.data.gig);
      }
    } catch (e) {
      console.log(e);
    }
    props.progressStop();
  };
  console.log(productDetails);

  if (!isUndefined(productDetails["merchant"])) {
    // console.log(productDetails["merchant"]["avatar"])
  }

  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => () => {
    if (!props.auth.isAuthorized) {
      props.actionDialogOpen({
        title: "Please login or signup to continue",
        positive: "Ok",
        type: "Alert",
      });
      props.history.push("/signin");
    } else {
      setOpen(true);
    }
  };

  const handleClose = () => {
    setOpen(false);
  };
  const [maxWidth, setMaxWidth] = React.useState("xs");
  const [fullWidth, setFullWidth] = React.useState(true);

  const handleReview = (packageId, gigId) => {
    props.appendProductDetails({
      packageId,
      gigId,
    });
    props.history.push(
      "/" + isMobile + "buyer/order/details/" + gigId + "/" + packageId + "/"
    );
  };

  const toBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });

  const fetchBase64Image = async (file) => {
    const f = await toBase64(file);
    setViewAttachment(f);
  };

  const AllPackages = ["Basic", "Basic Onor", "Standard", "Premium"];
  return (
    <Fragment>
      {
        // promiseInProgress && props.actionStartProgress()
      }
      {/* {
                !promiseInProgress && props.progressStop()
            } */}
      {
        !isUndefined(productDetails.onorPackages) && <Container>
          <Row className={'my-5 py-5'}>
            <Col xs={12} md={12} lg={5}>
              <Row>
                <Col xs={3} md={3} lg={5} className={'d-flex align-items-center'}>
                  <img
                    className="img-responsive crsr seller-image"
                    style={{ borderRadius: '50%' }}
                    alt="avatar"
                    onClick={
                      e => props.history.push('/public/seller/' + productDetails["merchant"]["merchantId"])
                    }
                    src={
                      productDetails["merchant"]["avatar"]
                        ? productDetails["merchant"]["avatar"]
                        : dummyImage
                    }
                  />
                </Col>
                <Col xs={4} md={3} lg={7} style={{ lineHeight: '80%' }} className={'seller-information'}>
                  <p className={'bolder crsr seller_user_name'}
                    onClick={
                      e => props.history.push('/public/seller/' + productDetails["merchant"]["merchantId"])
                    }>
                      {/* {productDetails["merchant"]["firstName"] +
                      " " +
                      productDetails["merchant"]["lastName"]}{" "} */}
                      {(productDetails["merchant"]["firstName"] + " " + productDetails["merchant"]["lastName"]).substr(0, 20)}
                      {(productDetails["merchant"]["firstName"] + " " + productDetails["merchant"]["lastName"]).length >=20 ? "..." : null}
                      </p>
                  <p
                    className={'crsr seller_level'}
                    style={{
                      color: "gray",
                    }}
                  >Level 2 Seller</p>
                  <button
                    onClick={handleClickOpen()}
                    className={'btn btn-primary btn-sm chatBtn'}
                    style={{ borderRadius: '7px' }}
                  ><TextsmsRounded fontSize={'small'} />&ensp;Chat</button>
                </Col>
                {/* </Row>
              <Row> */}
                <Col xs={5} md={6} lg={12} className="d-flex justify-content-center my-3 py-2">
                  <img className="my-3 mb-sm-3 mainImage img-responsive w-100 h-100" src={productDetails.productIconLink} alt={productDetails.productName} />
                </Col>
              </Row>
            </Col>
            <Col xs={12} md={12} lg={{ span: 6, offset: 1 }} className={'packagesList px-4'}>
              <div className={classes.root}>
                <AppBar position="static" color="default" elevation={0} className="mt-3">
                  <Tabs
                    value={value}
                    onChange={handleChange}
                    indicatorColor="primary"
                    textColor="inherit"
                    classes={{
                      indicator: classes.indicator
                    }}
                    aria-label=""
                  >
                    {
                      productDetails.onorPackages.map((object, index) => {
                        return (
                          <Tab label={AllPackages[index]} {...a11yProps(index)} />
                        )
                      })
                    }
                  </Tabs>
                </AppBar>

                {productDetails.onorPackages.map((object, index) => {
                  return (
                    <TabPanel
                      eventKey={index + 1}
                      value={value} index={index}
                    >
                      <Row className="">
                        <Col sm={12}>
                          <h4 className={'bolder'}>{object.name.replace("package", "")}</h4>
                          <h5 className={'mt-2 bolder onor_span_color'}>${object.price}</h5>
                        </Col>
                        <Col className="mt-2" sm={12}>
                          <h6>{object.description}</h6>
                        </Col>
                      </Row>

                      <Row className="mt-2">
                        <Col className="d-flex justify-content-start" sm={4}>
                          <TimeLogo
                            style={{
                              color: "orangered",
                            }}
                          />&nbsp;
                          <p>Validity {object.deliveryTime} days</p>
                        </Col>
                        <Col className="d-flex justify-content-start" sm={6}>
                          <RefreshLogo
                            style={{
                              color: "orangered",
                            }}
                          />&nbsp;
                          <p>
                            {object.revisions} Reschedule
                                    {object.revisions !== 1 ? "s" : ""} Allowed
                          </p>
                        </Col>
                      </Row>

                      <Row className="mt-2">
                        <Col className="d-flex justify-content-center" sm={12}>
                          <Button
                            onClick={(e) =>
                              handleReview(object.packageId, productId)
                            }
                            className="btn btn-primary bolder"
                            style={{ fontSize: '.8em', padding: '5px 30px', borderRadius: '7px', position: 'relative', bottom: '1px' }}
                          >Continue (${object.price})</Button>
                        </Col>
                      </Row>
                    </TabPanel>
                  );
                })}
              </div>
            </Col>
          </Row>
        </Container>
      }

      <div>
        {!isUndefined(productDetails["merchant"]) ? (
          <Dialog
            fullWidth={fullWidth}
            maxWidth={maxWidth}
            open={open}
            onClose={handleClose}
            aria-labelledby="max-width-dialog-title"
            style={{ borderRadius: '30px' }}
          >
            <DialogContentText className={"p-2"}>
              <div className="d-flex pb-3 d-inline" style={{ borderBottom: '1px solid grey' }}>
                <img
                  className={"img-responsive rounded-circle mt-2 mx-2"}
                  style={{
                    width: "60px",
                    height: "60px",
                  }}
                  alt="avatar"
                  src={
                    productDetails["merchant"]["avatar"]
                      ? productDetails["merchant"]["avatar"]
                      : dummyImage
                  }
                />
                <p id="scroll-dialog-title" className="h4 bolder">{`${productDetails["merchant"]["firstName"]} ${productDetails["merchant"]["lastName"]}`}</p>
                <span className={'ml-2'}>This chat is related to product link</span>
              </div>
              {parsed.orderId && (
                <DialogContent>Order Status: {orderStatus}</DialogContent>
              )}
              <Grid item xs={12}>
                <List className={classes.messageArea}>
                  <ListItem key={1}>
                    <Grid container>
                      <Grid item xs={12} className={'peopleFromMessages'}>
                        <Row
                          style={{
                            cursor: "pointer",
                            background: "#f2f2f2"
                          }}
                        >
                          <Col sm={4}>
                            <img
                              style={{
                                width: "100px",
                                height: "100px",
                                padding: "8px",
                                borderRadius: "20px"
                              }}
                              src={`${productDetails["productIconLink"]}`}
                              alt="session_image"
                            />
                          </Col>
                          <Col sm={8}>
                            <div
                              style={{
                                marginTop: "10px",
                              }}
                            >
                              <h6>{`Session Title: ${productDetails["productName"]}`}</h6>
                              <p
                                style={{
                                  fontSize: "10px",
                                }}
                              >{`${WEB_ENDPOINT}${location.pathname}`}</p>
                            </div>
                          </Col>
                        </Row>
                      </Grid>
                    </Grid>
                  </ListItem>
                  {chatList.map((chat, idx) => {
                    if (props.auth.isAuthorized) {
                      var messageTime = chat["creationTimestamp"];
                      var uId, sId;

                      if (props.auth.isAlsoSeller) {
                        const { merchantId } = jwt.decode(
                          localStorage.getItem("sellerJwtToken")
                        );
                        const { senderId } = chat;
                        uId = merchantId;
                        sId = senderId;
                        var isMine = chat["senderId"] === jwt.decode(localStorage.getItem("jwtToken"))["userId"].toString()
                      } else {
                        const { userId } = jwt.decode(
                          localStorage.getItem("jwtToken")
                        );
                        const { senderId } = chat;
                        uId = userId;
                        sId = senderId;
                        var isMine = chat["senderId"] === jwt.decode(localStorage.getItem("jwtToken"))["userId"].toString()
                      }
                      var profileChat = ''
                      if (isMine && props.auth.isAlsoSeller) {
                        profileChat = jwt.decode(localStorage.getItem("sellerJwtToken"))["avatar"]
                      } else if (isMine && !props.auth.isAlsoSeller) {
                        profileChat = !isUndefined(jwt.decode(localStorage.getItem("jwtToken"))["avatar"]) ? jwt.decode(localStorage.getItem("jwtToken"))["avatar"] : dummyImage
                      } else if (!isMine) {
                        profileChat = chat["customer_image"] === undefined ? dummyImage : chat["customer_image"]
                      }

                      return (
                        <Message
                          key={idx}
                          isMine={isMine}
                          startsSequence={true}
                          endsSequence={true}
                          showTimestamp={parseInt(messageTime)}
                          isThereAnyImage={!isUndefined(chat["filePath"]) &&
                            chat["filePath"] !== "" && (
                              <img
                                style={{
                                  // width: "400px",
                                  borderRadius: '20px'
                                }}
                                className={'img-fluid my-2'}
                                alt={"image"}
                                src={chat["filePath"]}
                              />
                            )}
                          data={{
                            message: chat["content"],
                            photo: profileChat
                          }}
                        />
                      );
                    }
                  })}
                  <div ref={messagesEndRef} />
                </List>

                <Grid container className={"mt-1 d-flex justify-content-start"}>
                  <Grid item xs={1} className={"d-flex align-items-center"}>
                    <input
                      type="file"
                      id="file"
                      accept={"image/*"}
                      ref={inputFile}
                      onChange={(e) => {
                        onImageChange(e);
                        fetchBase64Image(e.target.files[0]);
                        setOpenImageDialog(true);
                      }}
                      className={"d-none"}
                    />
                    <AttachFileOutlined
                      onClick={onButtonClick}
                      className={'attachment'}
                      style={{ cursor: "pointer" }}
                    />
                  </Grid>
                  <Grid item xs={8}>
                    <input
                      type="text"
                      value={chatBody}
                      onChange={(e) => setChatBody(e.target.value)}
                      className="compose-input"
                      ref={chatTextField}
                      placeholder="Type Something"
                      onKeyPress={(e) =>
                        e.key == "Enter" && handleSendChatMessage("")
                      }
                      autoComplete={"off"}
                    />
                  </Grid>
                  <Grid xs={1}>
                    <Fab
                      className="ml-3"
                      onClick={() => handleSendChatMessage("")}
                      color="primary"
                      style={{ background: "#fa6331" }}
                      aria-label="add"
                    >
                      <SendIcon />
                    </Fab>
                  </Grid>
                </Grid>
              </Grid>
            </DialogContentText>
          </Dialog>
        ) : null}

        {/* image send dialog */}
        <Dialog
          fullScreen
          open={openImageDialog}
          onClose={handleCloseImageDialog}
          TransitionComponent={Transition}
        >
          <AppBar className={classes.appBar}>
            <Toolbar>
              <IconButton
                edge="start"
                color="inherit"
                onClick={handleCloseImageDialog}
                aria-label="close"
              >
                <CloseIcon />
              </IconButton>
              <Typography variant="h6" className={classes.title}>
                Selected Image
              </Typography>
              <Button
                autoFocus
                color="inherit"
                onClick={() => {
                  if (!isEmpty(chatBody) || !isUndefined(attachment)) {
                    if (props.auth.isAuthorized) {
                      const { gig_id, customer_id, owner_id } = chatList;
                      if (props.auth.isAlsoSeller) {
                        handleSendChatMessage(customer_id, gig_id, chatBody);
                      } else {
                        handleSendChatMessage(owner_id, gig_id, chatBody);
                      }
                      handleCloseImageDialog();
                    }
                  }
                }}
              >
                Send
              </Button>
            </Toolbar>
          </AppBar>
          <>
            <Row>
              <Col
                sm={12}
                className={
                  "d-flex justify-content-center align-items-center mt-5 pt-5"
                }
              >
                <img
                  className={"img-responsive"}
                  style={{ height: "110px", width: "200px" }}
                  src={viewAttachment}
                  alt={""}
                />
              </Col>
              <Col
                sm={12}
                className={
                  "d-flex justify-content-center align-items-center mt-5 pt-5"
                }
              >
                <TextField
                  style={{ height: "110px", width: "200px" }}
                  id=""
                  variant="outlined"
                  value={chatBody}
                  autoComplete={"off"}
                  color={"secondary"}
                  onChange={(e) => setChatBody(e.target.value)}
                  onKeyPress={(e) => {
                    if (e.key === "Enter") {
                      if (!isEmpty(chatBody) || !isUndefined(attachment)) {
                        if (props.auth.isAuthorized) {
                          const { gig_id, customer_id, owner_id } = chatList;
                          if (props.auth.isAlsoSeller) {
                            handleSendChatMessage(
                              customer_id,
                              gig_id,
                              chatBody
                            );
                          } else {
                            handleSendChatMessage(owner_id, gig_id, chatBody);
                          }
                        }
                      }
                      handleCloseImageDialog();
                    }
                  }}
                  ref={chatTextField}
                  label="Type Something"
                  fullWidth
                />
              </Col>
            </Row>
          </>
        </Dialog>
        {/* image send dialog ends */}
      </div>
    </Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
    productReducer: state.productReducer,
    dialog: state.dialog,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actionDialogOpen: (payload) => dispatch(action_dialog_open(payload)),
    actionStartProgress: (payload) => dispatch(action_progress_start(payload)),
    progressStop: () => dispatch(action_progress_stop()),
    appendProductDetails: (payload) =>
      dispatch(action_append_gig_review(payload)),
  };
};

BuyerSummaryPage = connect(
  mapStateToProps,
  mapDispatchToProps
)(BuyerSummaryPage);
export default withFirebase(BuyerSummaryPage);
