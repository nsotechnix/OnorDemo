import React, { createRef, Fragment, useEffect, useRef, useState } from "react";
import { Link, Route, withRouter } from "react-router-dom";
import onorLogo from "../images/onorlogo.png";
import { connect } from "react-redux";
import { withFirebase } from "../firebase";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./MessagesPage.scss";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import AttachmentIcon from "@material-ui/icons/Attachment";
import ListItemText from "@material-ui/core/ListItemText";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Slide from "@material-ui/core/Slide";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Avatar from "@material-ui/core/Avatar";
import Fab from "@material-ui/core/Fab";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import SendIcon from "@material-ui/icons/Send";
import { isUndefined, isEmpty, isFunction, set, isNull } from "lodash";
import jwt from "jsonwebtoken";
import { action_dialog_open } from "../redux/actions/dialogAction";
import {
  action_progress_start,
  action_progress_stop,
} from "../redux/actions/progressAction";
import { action_rating_dialog_start } from "../redux/actions/RatingAction";
import Axios from "axios";
import {
  API_APPROVE_ORDER,
  API_CANCEL_ORDER,
  READ_CHAT_HEAD_FROM_DB,
} from "../utils/API_ENDPOINTS";

import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Linkyfy from "react-linkify";
import TopHeader from "../components/TopHeader";

const componentDecorator = (href, text, key) => (
  <a href={href} key={key} target="_blank" rel="noopener noreferrer">
    {text}
  </a>
);

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
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
    width: "100%",
    height: "90%",
  },
  headBG: {
    backgroundColor: "#fa6331",
  },
  borderRight500: {
    borderRight: "1px solid #e0e0e0",
  },
  messageArea: {
    height: "70vh",
    overflowY: "auto",
  },
  bubbleContainer: {
    width: "100%",
    display: "flex", //new added flex so we can put div at left and right side
    //check style.css for left and right classnaeme based on your data
  },
  bubble: {
    margin: "5px",
    padding: "10px",
    display: "inline-block",
  },
  activeChat: {
    backgroundColor: "#fa6331",
    // color: 'white',
    fontWeight: "bolder",
    borderRadius: "5px 5px 0 5px",
  },
  listColorRed: {
    color: "red",
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

let MessagesPage = (props) => {
  if (!props.auth.isAuthorized) {
    props.actionDialogOpen({
      title: "Please login or signup to continue",
      positive: "Ok",
      type: "Alert",
    });
    props.history.push("/signin");
  }

  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [chatBody, setChatBody] = useState("");
  const [chatList, setChatList] = useState([]);
  const [chatHead, setChatHead] = useState([]);
  const [filterChatHead, setFilterChatHead] = useState([]);
  const [currChatData, setCurrChatData] = useState({});
  const [attachment, setAttachment] = useState();
  const [isGroup, setIsGroup] = useState(false);
  const [isChatLocked, setIsChatLocked] = useState(false);
  const [uniqueProducts, setUniqueProducts] = useState();
  const [accordianExpand, setAccordianExpand] = useState({});
  const [acceptDelivery, setAcceptDelivery] = useState(false);
  const [openImageDialog, setOpenImageDialog] = React.useState(false);
  const [viewAttachment, setViewAttachment] = useState("");

  const handleCloseImageDialog = () => {
    setOpenImageDialog(false);
    setAttachment(undefined);
  };

  // loaders
  const [chatScreenLoader, setChatScreenLoader] = useState(false);

  const attachmentInput = useRef(null);

  const db = props.firebase.firestore;
  const storage = props.firebase.storage;

  if (!open) {
    setOpen(true);
  }
  const handleClose = () => {
    setOpen(false);
  };

  const chatTextField = createRef();
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    if (!isNull(messagesEndRef.current)) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleCustomerOpenPendingChat = async () => {
    if (props.auth.isAuthorized) {
      if (props.auth.isAlsoSeller) {
      } else {
        const { gig_id, customer_id, order_id } = currChatData;
        console.log(currChatData);
        try {
          await db
            .collection("chatInfo")
            //.doc(`${gig_id}-${customer_id}-${order_id}`)
            .doc(currChatData["id"])
            .update({
              pendingAccept: true,
            });
          setIsChatLocked(false);
        } catch (e) {
          console.log(e);
        }
      }
    }
  };

  const handleCustomerOrderAcceptRequest = async () => {
    if (props.auth.isAuthorized) {
      if (props.auth.isAlsoSeller) {
        try {
          props.actionStartProgress("Please wait. Accepting order");
          const currRes = await Axios.post(
            API_APPROVE_ORDER + currChatData["order_id"]
          );
          console.log(currRes);
          props.progressStop();
          props.actionDialogOpen({
            title: "Order Accepted",
            message: `Order for order id ${currChatData["order_id"]} has been accepted`,
            positive: "Ok",
            negative: "Close",
            type: "Alert",
          });
        } catch (e) {
          console.log(e);
        }
      }
    }
  };

  const onAttachmentButtonClick = (e) => {
    e.stopPropagation();
    e.preventDefault();
    attachmentInput.current.click();
  };

  const handleCustomerOrderCancelRequest = async () => {
    if (props.auth.isAuthorized) {
      if (props.auth.isAlsoSeller) {
        try {
          props.actionStartProgress("Please wait, Cancelling order");
          const currRes = await Axios.post(
            API_CANCEL_ORDER + currChatData["order_id"]
          );
          console.log(currRes);
          props.progressStop();
          props.actionDialogOpen({
            title: "Order cancelled",
            message: `Order for order id ${currChatData["order_id"]} has been cancelled`,
            positive: "Ok",
            negative: "Close",
            type: "Alert",
          });
        } catch (e) {
          console.log(e);
        }
      }
    }
  };

  const handleGetChatGroupByProduct = async () => {
    if (props.auth.isAuthorized) {
      const { userId } = jwt.decode(localStorage.getItem("jwtToken"));
      try {
        const onSnapshot = await db
          .collection("chatInfo")
          .where("customer_id", "==", userId.toString())
          .get();

        console.log("CHAT_GROUP_FIREBASE");

        let productSet = new Set();
        let productList = [];
        onSnapshot.docs.map((doc) => {
          const { gig_id, gig_name } = doc.data();
          if (!productSet.has(gig_id)) {
            productSet.add(gig_id);
            productList.push({
              gig_id,
              gig_name,
            });
          }
        });
        console.log("PRODUCT_SET");
        console.log(productSet);
        setUniqueProducts(productList);
      } catch (e) {
        console.log(e);
      }
    }
  };

  useEffect(() => {
    // console.log("use effect is called")
    console.log("USE_EFFECT_INITIAL_IS_CALLED");
    handleGetAllChatHeads();
    handleGetChatGroupByProduct();
  }, []);

  useEffect(() => {
    handleGetChatGroupByProduct();
    let unsubscribe = refreshChatHead();
    return () => {
      if (isFunction(unsubscribe)) {
        unsubscribe();
      }
    };
  }, [isGroup]);

  const refreshChatHead = () => {
    if (props.auth.isAuthorized) {
      let unsubscribe = db.collection("chatInfo").onSnapshot((snapshot) => {
        handleGetAllChatHeads();
      });
      return unsubscribe;
    }
  };

  const refreshChat = async (productId, userId, merchantId) => {
    console.log("REFRESH");
    console.log(currChatData);
    let unsubscribe;
    if (props.auth.isAuthorized) {
      console.log("1-4");
      if (props.auth.isAlsoSeller) {
        console.log("1-8");
        if (
          !isUndefined(currChatData["order_id"]) &&
          !isNull(currChatData["order_id"])
        ) {
          console.log("1-1");
          const { gig_id, customer_id, owner_id, order_id } = currChatData;
          console.log(gig_id);
          console.log(customer_id);
          console.log(order_id);
          console.log(productId);
          console.log(userId);
          try {
            let dataBundle = {
              product_id: parseInt(gig_id),
              user_id: parseInt(customer_id),
              orderId: parseInt(order_id),
            };
            let currResult = await Axios.post(
              READ_CHAT_HEAD_FROM_DB,
              dataBundle
            );
            console.log("15-1");
            if (!isNull(currResult["data"]["chatHead"])) {
              console.log(currResult["data"]["chatHead"]);
              console.log("2-1");
              if (currResult["data"]["chatHead"]["orderId"] !== 0) {
                console.log("2-2");
                let identifierTS = currResult["data"]["chatHead"]["timestamp"];
                let messageCollectionDocId = `${productId}-${userId}-${identifierTS}`;

                console.log(`LISTENER_ATTACHED ${messageCollectionDocId}`);
                unsubscribe = db
                  .collection("messages")
                  .doc(messageCollectionDocId)
                  .collection(messageCollectionDocId)
                  //.where("senderId", "==", userId.tos)
                  .onSnapshot((querySnapshot) => {
                    console.log("CHAT_IS_REFRESHED_BY_FIREBASE_MERCHANT_SIDE");
                    console.log("CURRENT_CHAT_HEAD_AT_REFRESH");
                    console.log("12-3");
                    // console.log(currChatData)
                    console.log(querySnapshot);
                    handleGetAllChatMessage(userId, productId, identifierTS);
                  });
              }
            }
          } catch (e) {
            console.log(e);
          }
        } else {
          console.log("1-9");
          const { gig_id, customer_id, owner_id } = currChatData;
          console.log(gig_id);
          console.log(customer_id);
          //console.log(order_id);
          try {
            let dataBundle = {
              product_id: parseInt(gig_id),
              user_id: parseInt(customer_id),
            };
            let currResult = await Axios.post(
              READ_CHAT_HEAD_FROM_DB,
              dataBundle
            );
            console.log("15-2");
            console.log(currResult);
            if (!isNull(currResult["data"]["chatHead"])) {
              if (currResult["data"]["chatHead"]["orderId"] === 0) {
                let identifierTS = currResult["data"]["chatHead"]["timestamp"];
                let messageCollectionDocId = `${productId}-${userId}-${identifierTS}`;
                unsubscribe = db
                  .collection("messages")
                  .doc(messageCollectionDocId)
                  .collection(messageCollectionDocId)
                  //       .where("receiverId", "==", merchantId)
                  .onSnapshot((querySnapshot) => {
                    console.log("CHAT_IS_REFRESHED_BY_FIREBASE_CUSTOMER_SIDE");
                    console.log("CURRENT_CHAT_HEAD_AT_REFRESH");
                    console.log("12-4");
                    // console.log(currChatData)
                    querySnapshot.docs.map((doc) => {
                      console.log(doc.data());
                    });
                    handleGetAllChatMessage(
                      customer_id,
                      productId,
                      identifierTS
                    );
                  });
              }
            }
          } catch (e) {
            console.log(e);
          }
        }
      } else {
        console.log("1-2");
        const { gig_id, customer_id, owner_id } = currChatData;
        console.log(gig_id);
        console.log(customer_id);
        //console.log(order_id);

        try {
          let dataBundle = {};
          if (
            !isUndefined(currChatData["order_id"]) &&
            !isNull(currChatData["order_id"])
          ) {
            dataBundle = {
              product_id: parseInt(gig_id),
              user_id: parseInt(customer_id),
              orderId: parseInt(currChatData["order_id"]),
            };
          } else {
            dataBundle = {
              product_id: parseInt(gig_id),
              user_id: parseInt(customer_id),
            };
          }

          let currResult = await Axios.post(READ_CHAT_HEAD_FROM_DB, dataBundle);
          console.log("15-");
          console.log("RESRES");
          console.log(currResult);
          if (!isNull(currResult["data"]["chatHead"])) {
            //if (currResult["data"]["chatHead"]["orderId"] === 0) {
            let identifierTS = currResult["data"]["chatHead"]["timestamp"];
            let messageCollectionDocId = `${productId}-${userId}-${identifierTS}`;
            unsubscribe = db
              .collection("messages")
              .doc(messageCollectionDocId)
              .collection(messageCollectionDocId)
              //.where("receiverId", "==", merchantId)
              .onSnapshot((querySnapshot) => {
                console.log("CHAT_IS_REFRESHED_BY_FIREBASE_CUSTOMER_SIDE");
                console.log("CURRENT_CHAT_HEAD_AT_REFRESH");
                console.log("12-1");
                // console.log(currChatData)
                querySnapshot.docs.map((doc) => {
                  console.log(doc.data());
                });
                handleGetAllChatMessage(customer_id, productId, identifierTS);
              });
            //}
          }
        } catch (e) {
          console.log(e);
        }
      }
      return unsubscribe;
    }
    console.log("1-5");
  };

  useEffect(() => {
    console.log("CURRENT_CHAT_HEAD_AT_REFRESH");
    console.log("12-2");
    console.log(currChatData);
    let unsubscribe;
    setChatScreenLoader(true);
    if (!isEmpty(currChatData)) {
      if (props.auth.isAuthorized) {
        const { gig_id, customer_id, owner_id } = currChatData;
        console.log("15-2");
        unsubscribe = refreshChat(gig_id, customer_id, owner_id);
      }
    }
    setChatScreenLoader(false);

    return () => {
      if (isFunction(unsubscribe)) {
        unsubscribe();
      }
    };
  }, [currChatData]);

  const handleGetAllChatHeads = async (productId) => {
    if (props.auth.isAuthorized) {
      if (props.auth.isAlsoSeller) {
        const { merchantId } = jwt.decode(
          localStorage.getItem("sellerJwtToken")
        );
        console.log("MERCHANT_ID: " + merchantId);
        try {
          const fsChatList = await db
            .collection("chatInfo")
            .where("owner_id", "==", merchantId.toString())
            .get();

          console.log(fsChatList);
          const tempChatList = fsChatList.docs.map((doc) => {
            return {
              id: doc.id,
              ...doc.data(),
            };
          });
          console.log("ALL_CHAT_HEAD");
          console.log(tempChatList);
          setChatHead(tempChatList);
          setFilterChatHead(tempChatList.reverse());
        } catch (e) {
          console.log(e);
        }
      } else {
        const { userId } = jwt.decode(localStorage.getItem("jwtToken"));
        if (isGroup) {
          try {
            const fsChatList = await db
              .collection("chatInfo")
              .where("customer_id", "==", userId.toString())
              .where("gig_id", "==", productId.toString())
              .get();

            console.log(fsChatList);
            const tempChatList = fsChatList.docs.map((doc) => {
              return {
                id: doc.id,
                ...doc.data(),
              };
            });
            console.log("ALL_CHAT_HEAD");
            console.log(tempChatList);
            setChatHead(tempChatList);
            setFilterChatHead(tempChatList.reverse());
          } catch (e) {
            console.log(e);
          }
        } else {
          try {
            const fsChatList = await db
              .collection("chatInfo")
              .where("customer_id", "==", userId.toString())
              .get();
            console.log("HEADHEAD");
            console.log(fsChatList);
            const tempChatList = fsChatList.docs.map((doc) => {
              return {
                id: doc.id,
                ...doc.data(),
              };
            });
            console.log("ALL_CHAT_HEAD");
            console.log(tempChatList);
            setChatHead(tempChatList);
            setFilterChatHead(tempChatList.reverse());
          } catch (e) {
            console.log(e);
          }
        }
      }
      //}
    }
  };

  const handleCustomerRejectDelivery = async () => {
    if (props.auth.isAuthorized) {
      if (props.auth.isAlsoSeller) {
      } else {
        props.actionStartProgress("Please wait. Rejecting delivery");
        try {
          const currRes = await Axios.post(
            API_APPROVE_ORDER + currChatData["order_id"]
          );
          console.log(currRes);
          props.progressStop();
          props.actionDialogOpen({
            title: "Order Rejected",
            message: `Delivery for for order id ${currChatData["order_id"]} has been rejected`,
            positive: "Ok",
            negative: "Close",
            type: "Alert",
          });
          await db.collection("orderNotification").update({
            ...currChatData,
            isRejectedByUser: true,
          });
        } catch (e) {
          console.log(e);
        }
      }
    }
  };

  const handleCustomerAcceptDelivery = async () => {
    if (props.auth.isAuthorized) {
      if (props.auth.isAlsoSeller) {
      } else {
        const { gig_id, customer_id, order_id } = currChatData;
        props.actionStartProgress();
        await db
          .collection("chatInfo")
          .doc(`${gig_id}-${customer_id}-${order_id}`)
          .update({
            acceptDelivery: true,
          });

        setAcceptDelivery(true);
        props.progressStop();
        props.actionDialogOpen({
          title: "Delivery accepted",
          message: `You have accepted the delivery for order id ${currChatData["order_id"]} by seller ${currChatData["owner_name"]}`,
          positive: "Ok",
          negative: "Close",
          type: "Alert",
        });
      }
    }
  };

  const handleGetAllChatMessage = (identifierId, productId, identifierTS) => {
    if (!isUndefined(identifierId) && !isUndefined(productId)) {
      if (props.auth.isAuthorized) {
        console.log("CURRENT_CHAT_HEAD_AT_GET_MSG");
        console.log(currChatData);
        console.log("CHAT_LIST_CLEARED");
        const { userId } = jwt.decode(localStorage.getItem("jwtToken"));
        if (props.auth.isAlsoSeller) {
          console.log("MERCHANT_CHAT_SECTION");
          if (
            isUndefined(currChatData["order_id"]) ||
            isNull(currChatData["order_id"])
          ) {
            console.log(
              "ORDER_ID_MUST_BE_NULL_HERE: " + currChatData["order_id"]
            );
            let messageCollectionDocId = `${productId}-${identifierId}-${identifierTS}`;
            console.log(messageCollectionDocId);
            db.collection("messages")
              .doc(messageCollectionDocId)
              .collection(messageCollectionDocId)
              .orderBy("creationTimestamp", "asc")
              //.where("senderId", "==", identifierId)
              .get()
              .then((querySnapshot) => {
                const mTempChat = querySnapshot.docs.map((doc) => {
                  return {
                    id: doc.id,
                    ...doc.data(),
                  };
                });
                console.log("PRE_ORDER_CHAT");
                console.log(mTempChat);
                setChatList(mTempChat);
                scrollToBottom();
              })
              .catch((e) => console.log(e));
          } else {
            if (
              !isUndefined(currChatData["order_id"]) &&
              !isNull(currChatData["order_id"])
            ) {
              //seller lock chat
              if (
                !isUndefined(currChatData["pendingAccept"]) &&
                !isNull(currChatData["pendingAccept"])
              ) {
                if (currChatData["pendingAccept"]) {
                  setIsChatLocked(false);
                } else {
                  setIsChatLocked(true);
                }
              }
              let messageCollectionDocId = `${productId}-${identifierId}-${identifierTS}`;
              console.log("IIDD");
              console.log(messageCollectionDocId);
              console.log(currChatData["id"]);
              db.collection("messages")
                .doc(messageCollectionDocId)
                .collection(messageCollectionDocId)
                .orderBy("creationTimestamp", "asc")
                //.where("senderId", "==", identifierId)
                //.where("order_id", "==", currChatData["order_id"])
                .get()
                .then((querySnapshot) => {
                  const mTempChat = querySnapshot.docs.map((doc) => {
                    return {
                      id: doc.id,
                      ...doc.data(),
                    };
                  });
                  console.log("CHAT_ORDER_" + currChatData["order_id"]);
                  console.log(mTempChat);
                  setChatList(mTempChat);
                  scrollToBottom();
                })
                .catch((e) => console.log(e));
            }
          }
        } else {
          console.log("CUSTOMER_CHAT_SECTION");
          if (
            isUndefined(currChatData["order_id"]) ||
            isNull(currChatData["order_id"])
          ) {
            console.log(
              "ORDER_ID_MUST_BE_NULL_HERE: " + currChatData["order_id"]
            );

            let messageCollectionDocId = `${productId}-${userId}-${identifierTS}`;
            console.log(messageCollectionDocId);
            db.collection("messages")
              .doc(messageCollectionDocId)
              .collection(messageCollectionDocId)
              .orderBy("creationTimestamp", "asc")
              //.where("receiverId", "==", identifierId)
              .get()
              .then((querySnapshot) => {
                const tempChat = querySnapshot.docs.map((doc) => {
                  return {
                    id: doc.id,
                    ...doc.data(),
                  };
                });
                console.log("PRE_ORDER_CHAT");
                console.log(tempChat);
                setChatList(tempChat);
                scrollToBottom();
              });
          } else {
            if (
              !isUndefined(currChatData["order_id"]) &&
              !isNull(currChatData["order_id"])
            ) {
              //Buyer lock chat
              if (
                !isUndefined(currChatData["pendingAccept"]) &&
                !isNull(currChatData["pendingAccept"])
              ) {
                if (currChatData["pendingAccept"]) {
                  setIsChatLocked(false);
                } else {
                  setIsChatLocked(true);
                }
              }

              console.log("ORDER_ID_HERE: " + currChatData["order_id"]);
              let messageCollectionDocId = `${productId}-${identifierId}-${identifierTS}`;

              console.log("IID");
              console.log(messageCollectionDocId);
              console.log(currChatData["id"]);
              db.collection("messages")
                .doc(messageCollectionDocId)
                .collection(messageCollectionDocId)
                .orderBy("creationTimestamp", "asc")
                //.where("receiverId", "==", identifierId)
                //.where("order_id", "==", currChatData["order_id"])
                .get()
                .then((querySnapshot) => {
                  const tempChat = querySnapshot.docs.map((doc) => {
                    return {
                      id: doc.id,
                      ...doc.data(),
                    };
                  });
                  console.log("CHAT_ORDER_" + currChatData["order_id"]);
                  console.log(tempChat);
                  setChatList(tempChat);
                  scrollToBottom();
                });
            }
          }
        }
      }
    } else {
      console.log("merchantId or productId is invalid");
    }
  };

  const handleSendChatMessage = async (
    identifierId,
    productId,
    message,
    type = 0
  ) => {
    console.log("CURRENT_CHAT_HEAD_WHILE_SENDING_MESSAGE");
    console.log(currChatData);

    if (props.auth.isAuthorized) {
      const { userId } = jwt.decode(localStorage.getItem("jwtToken"));
      //
      const currentTimestamp = Date.now();
      if (props.auth.isAlsoSeller) {
        const { merchantId } = jwt.decode(
          localStorage.getItem("sellerJwtToken")
        );
        if (
          !isUndefined(currChatData["order_id"]) &&
          !isNull(currChatData["order_id"])
        ) {
          console.log("MERCHANT SEND TO POST ORDER CHAT");
          console.log("8-5");
          const { order_id, order_status } = currChatData;
          try {
            let dataBundle = {
              product_id: parseInt(productId),
              user_id: parseInt(currChatData["customer_id"]),
              orderId: parseInt(order_id),
            };
            let currResult = await Axios.post(
              READ_CHAT_HEAD_FROM_DB,
              dataBundle
            );
            console.log("15-");
            console.log(currChatData);
            console.log(currResult);
            if (!isNull(currResult["data"]["chatHead"])) {
              if (currResult["data"]["chatHead"]["orderId"] !== 0) {
                console.log("8-2");
                let identifierTS = currResult["data"]["chatHead"]["timestamp"];
                let messageCollectionDocId = `${productId}-${identifierId}-${identifierTS}`;
                let chatRef = db
                  .collection("messages")
                  .doc(messageCollectionDocId)
                  .collection(messageCollectionDocId);
                let firebaseUrl = "";
                //       let messageType = 0;
                if (attachment) {
                  let fileName = attachment.name;
                  let imageRef = storage
                    .ref()
                    .child(
                      `${productId}-${identifierId}-${merchantId}/${fileName}`
                    );
                  await imageRef.put(attachment);
                  firebaseUrl = await imageRef.getDownloadURL();
                  //       messageType = 1;
                }
                console.log("8-1");
                await chatRef.add({
                  content: message,
                  //gig_id: productId,
                  receiverId: identifierId.toString(),
                  senderId: merchantId.toString(),
                  creationTimestamp: currentTimestamp.toString(),
                  filePath: firebaseUrl,
                  //whoSender: merchantId,
                  //whoReciever: identifierId,
                  //order_id: order_id,
                  //order_status: order_status,
                  type: type.toString(),
                });
                console.log("chat added successfully");
                setChatBody("");
                setAttachment();
                scrollToBottom();
              }
            }
          } catch (e) {
            console.log(e);
          }
        } else {
          console.log("MERCHANT SEND TO PRE ORDER CHAT");
          console.log("8-3");
          try {
            let dataBundle = {
              product_id: parseInt(productId),
              user_id: parseInt(currChatData["customer_id"]),
              //userId,
            };
            let currResult = await Axios.post(
              READ_CHAT_HEAD_FROM_DB,
              dataBundle
            );
            console.log("15-5");
            console.log(currResult);
            if (!isNull(currResult["data"]["chatHead"])) {
              if (currResult["data"]["chatHead"]["orderId"] === 0) {
                let identifierTS = currResult["data"]["chatHead"]["timestamp"];
                let messageCollectionDocId = `${productId}-${identifierId}-${identifierTS}`;
                let chatRef = db
                  .collection("messages")
                  .doc(messageCollectionDocId)
                  .collection(messageCollectionDocId);
                let firebaseUrl = "";
                //let messageType = 0;
                if (attachment) {
                  let fileName = attachment.name;
                  let imageRef = storage
                    .ref()
                    .child(
                      `${productId}-${identifierId}-${merchantId}/${fileName}`
                    );
                  await imageRef.put(attachment);
                  firebaseUrl = await imageRef.getDownloadURL();
                  //messageType = 1;
                }
                await chatRef.add({
                  content: message,
                  //gig_id: productId,
                  receiverId: identifierId.toString(),
                  senderId: merchantId.toString(),
                  creationTimestamp: currentTimestamp.toString(),
                  filePath: firebaseUrl,
                  //whoSender: merchantId,
                  //whoReciever: identifierId,
                  type: type.toString(),
                });

                console.log("chat added successfully");
                setChatBody("");
                setAttachment();
                scrollToBottom();
              }
            }
          } catch (e) {
            console.log(e);
          }
        }
      } else {
        //CHECK FOR PREORDER OR POST ORDER CHAT
        if (
          !isUndefined(currChatData["order_id"]) &&
          !isNull(currChatData["order_id"])
        ) {
          console.log("USER SEND TO POST ORDER CHAT");
          const { order_id, order_status } = currChatData;
          try {
            let dataBundle = {
              product_id: parseInt(productId),
              user_id: parseInt(userId),
              orderId: parseInt(order_id),
            };
            let currResult = await Axios.post(
              READ_CHAT_HEAD_FROM_DB,
              dataBundle
            );
            console.log("15-6");
            if (!isNull(currResult["data"]["chatHead"])) {
              if (currResult["data"]["chatHead"]["orderId"] !== 0) {
                let identifierTS = currResult["data"]["chatHead"]["timestamp"];
                let messageCollectionDocId = `${productId}-${userId}-${identifierTS}`;
                let chatRef = db
                  .collection("messages")
                  .doc(messageCollectionDocId)
                  .collection(messageCollectionDocId);
                let firebaseUrl = "";
                //let messageType = 0;
                if (attachment) {
                  let fileName = attachment.name;
                  let imageRef = storage
                    .ref()
                    .child(
                      `${productId}-${userId}-${identifierId}/${fileName}`
                    );
                  await imageRef.put(attachment);
                  firebaseUrl = await imageRef.getDownloadURL();
                  //messageType = 1;
                }

                await chatRef.add({
                  content: message,
                  //gig_id: productId,
                  receiverId: identifierId.toString(),
                  senderId: userId.toString(),
                  creationTimestamp: currentTimestamp.toString(),
                  filePath: firebaseUrl,
                  //whoSender: userId,
                  //whoReciever: identifierId,
                  //order_id,
                  //order_status,
                  type: type.toString(),
                });

                console.log("chat added successfully");
                setChatBody("");
                setAttachment();
                scrollToBottom();
              }
            }
          } catch (e) {
            console.log(e);
          }
        } else {
          console.log("USER SEND TO PRE ORDER CHAT");
          console.log(type);

          try {
            let dataBundle = {
              product_id: parseInt(productId),
              user_id: parseInt(userId),
            };
            let currResult = await Axios.post(
              READ_CHAT_HEAD_FROM_DB,
              dataBundle
            );
            console.log("15-7");
            if (!isNull(currResult["data"]["chatHead"])) {
              if (currResult["data"]["chatHead"]["orderId"] === 0) {
                let identifierTS = currResult["data"]["chatHead"]["timestamp"];
                let messageCollectionDocId = `${productId}-${userId}-${identifierTS}`;
                let chatRef = db
                  .collection("messages")
                  .doc(messageCollectionDocId)
                  .collection(messageCollectionDocId);
                let firebaseUrl = "";
                //let messageType = 0;
                if (attachment) {
                  let fileName = attachment.name;
                  let imageRef = storage
                    .ref()
                    .child(
                      `${productId}-${userId}-${identifierId}/${fileName}`
                    );
                  await imageRef.put(attachment);
                  firebaseUrl = await imageRef.getDownloadURL();
                  //messageType = 1;
                }
                await chatRef.add({
                  content: message,
                  //gig_id: productId,
                  receiverId: identifierId.toString(),
                  senderId: userId.toString(),
                  creationTimestamp: currentTimestamp.toString(),
                  filePath: firebaseUrl,
                  //whoSender: userId,
                  //whoReciever: identifierId,
                  type: type.toString(),
                });

                console.log("chat added successfully");
                setChatBody("");
                setAttachment();
                scrollToBottom();
              }
            }
          } catch (e) {
            console.log(e);
          }
        }
      }
    }
  };

  const toBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });

  const fetchBase64Image = async (file) => {
    console.log("skjdfdfkgkjfhgjdhf");
    const f = await toBase64(file);
    setViewAttachment(f);
  };

  const handleShareExperience = () => {
    if (props.auth.isAuthorized) {
      if (props.auth.isAlsoSeller) {
        // console.log(currChatData)
        // props.actionShowRating(currChatData)
      } else {
        props.actionShowRating(currChatData);
      }
    }
  };

  const textAreaJsx = (payload) => {
    console.log("JSX");
    console.log(payload);
    const { sticker } = payload;
    return (
      <Grid
        container
        style={{
          padding: ".5em 2em .5em 2em",
          borderColor: "#fa6331",
          borderWidth: "2px",
        }}
      >
        {console.log("6-1")}
        <Grid item xs={2}>
          <input
            type="file"
            accept="image/*"
            className="d-none"
            ref={attachmentInput}
            onChange={(e) => {
              setAttachment(e.target.files[0]);
              fetchBase64Image(e.target.files[0]);
              setOpenImageDialog(true);
            }}
          />
          <AttachmentIcon
            onClick={onAttachmentButtonClick}
            style={{ cursor: "pointer" }}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
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
                    const { gig_id, customer_id, owner_id } = currChatData;
                    if (props.auth.isAlsoSeller) {
                      handleSendChatMessage(customer_id, gig_id, chatBody);
                    } else {
                      handleSendChatMessage(owner_id, gig_id, chatBody);
                    }
                  }
                }
              }
            }}
            ref={chatTextField}
            label="Type Something"
            fullWidth
          />
        </Grid>
        {!isUndefined(sticker) && !isEmpty(sticker) && (
          <Grid xs={2}>
            {console.log("6-2")}
            <Button
              variant={"primary"}
              onClick={(e) => {
                setAttachment();
                const { gig_id, customer_id, owner_id } = currChatData;
                if (props.auth.isAlsoSeller) {
                  handleSendChatMessage(
                    customer_id,
                    gig_id,
                    sticker["body"],
                    sticker["code"]
                  );
                } else {
                  handleSendChatMessage(
                    owner_id,
                    gig_id,
                    sticker["body"],
                    sticker["code"]
                  );
                }
              }}
            >
              {sticker["name"]}
            </Button>
          </Grid>
        )}
        <Grid xs={1} align="right">
          {console.log("6-3")}
          <Fab
            color="primary"
            style={{ background: "#fa6331" }}
            onClick={() => {
              if (!isEmpty(chatBody) || !isUndefined(attachment)) {
                if (props.auth.isAuthorized) {
                  const { gig_id, customer_id, owner_id } = currChatData;
                  if (props.auth.isAlsoSeller) {
                    handleSendChatMessage(customer_id, gig_id, chatBody);
                  } else {
                    handleSendChatMessage(owner_id, gig_id, chatBody);
                  }
                }
              }
            }}
            aria-label="add"
          >
            <SendIcon />
          </Fab>
        </Grid>
      </Grid>
    );
  };

  return (
    <div>
      {/* <Dialog
        className={"messagesPageDialog"}
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      > */}
      {/* <AppBar className={classes.appBar}>
          <Toolbar>
            <Typography variant="h6" className={classes.title}>
              My Messages
            </Typography>

            {!props.auth.isAlsoSeller && (
              <Button
                onClick={(e) => setIsGroup(!isGroup)}
                autoFocus
                color="inherit"
              >
                {isGroup ? "Single" : "Group"}
              </Button>
            )}
            <Button
              onClick={(e) => props.history.push("/")}
              autoFocus
              color="inherit"
            >
              Home
            </Button>
          </Toolbar>
        </AppBar> */}
      <div>
        <Grid container component={Paper} className={classes.chatSection}>
          <Grid
            item
            xs={12}
            sm={5}
            md={4}
            lg={3}
            className={classes.borderRight500}
          >
            <Grid item xs={12} style={{ padding: "10px 3px" }}>
              <TextField
                id="outlined-basic"
                label="Search"
                variant="outlined"
                color={"secondary"}
                onChange={(e) => {
                  console.log(e.target.value);
                  if (props.auth.isAuthorized) {
                    setFilterChatHead(
                      chatHead.filter(
                        (head) =>
                          String(head.owner_name)
                            .toLowerCase()
                            .indexOf(e.target.value.toLowerCase()) > -1
                      )
                    );
                    if (props.auth.isAlsoSeller) {
                      setFilterChatHead(
                        chatHead.filter(
                          (head) =>
                            String(head.customer_name)
                              .toLowerCase()
                              .indexOf(e.target.value.toLowerCase()) > -1
                        )
                      );
                    }
                  }
                }}
                fullWidth
              />
            </Grid>
            <Divider />
            <List
              className={"people peopleFromMessages scrollable"}
            // style={{ height: "auto", overflowY: "scroll" }}
            >
              {!isGroup && (
                <Fragment>
                  {props.auth.isAlsoSeller
                    ? filterChatHead.map((data, idx) => {
                      if (currChatData.id === data.id) {
                        console.log("DDDDAAA");
                        console.log(currChatData);
                        console.log(data);
                      }
                      if (
                        currChatData.id == data.id &&
                        currChatData["order_status"] != data["order_status"]
                      ) {
                        setCurrChatData(data);
                      }
                      console.log("CURRENT_CHAT_HEAD_OF_LIST");
                      console.log(filterChatHead);
                      console.log(data);
                      console.log("15-1");
                      return (
                        <>
                          <ListItem
                            className={"people-item"}
                            onClick={(e) => {
                              const { gig_id, customer_id, owner_id } = data;
                              refreshChat(gig_id, customer_id, owner_id);
                              setCurrChatData(data);
                            }}
                            // button
                            key={idx}
                            style={
                              data.id == currChatData.id
                                ? {
                                  color: "black",
                                  borderWidth: "2px 0px 2px 2px",
                                  borderRadius: "15px 0px 0px 15px",
                                  borderColor: "#fa6331",
                                }
                                : {
                                  borderWidth: "2px",
                                  backgroundColor: "rgba(0, 0, 0, 0.15)",
                                  marginRight: "10px",
                                  borderRadius: "15px 0px 0px 15px",
                                  borderColor: "#6d6de6",
                                }
                            }
                          >
                            <ListItemIcon>
                              <Avatar
                                alt={data["customer_name"]}
                                src={data["customer_image"]}
                              />
                            </ListItemIcon>
                            <ListItemText primary={data["customer_name"]}>
                              {data["customer_name"]}
                            </ListItemText>
                            {console.log("DATTT")}
                            {console.log(data)}
                            {(isUndefined(data["order_status"]) ||
                              isNull(data["order_status"])) && (
                                <>
                                  <ListItemText secondary="" align="right">
                                    <p
                                      style={{
                                        fontSize: "12px",
                                        color: "pink",
                                      }}
                                    >
                                      preorder
                                    </p>
                                  </ListItemText>
                                </>
                              )}
                            {!isUndefined(data["order_status"]) &&
                              !isNull(data["order_status"]) && (
                                <Fragment>
                                  {data["order_status"].toLowerCase() ===
                                    "pending" && (
                                      <ListItemText secondary="" align="right">
                                        <p
                                          style={{
                                            fontSize: "12px",
                                            color: "orange",
                                          }}
                                        >
                                          pending
                                        </p>
                                      </ListItemText>
                                    )}
                                  {data["order_status"].toLowerCase() ===
                                    "accepted" && (
                                      <ListItemText secondary="" align="right">
                                        <p
                                          style={{
                                            fontSize: "12px",
                                            color: "green",
                                          }}
                                        >
                                          accepted
                                        </p>
                                      </ListItemText>
                                    )}
                                  {data["order_status"].toLowerCase() ===
                                    "cancelled" && (
                                      <ListItemText align="right">
                                        <p
                                          style={{
                                            fontSize: "12px",
                                            color: "red",
                                          }}
                                        >
                                          cancelled
                                        </p>
                                      </ListItemText>
                                    )}
                                  {data["order_status"].toLowerCase() ===
                                    "completed" && (
                                      <ListItemText align="right">
                                        <p
                                          style={{
                                            fontSize: "12px",
                                            color: "blue",
                                          }}
                                        >
                                          completed
                                        </p>
                                      </ListItemText>
                                    )}
                                  <Divider />
                                </Fragment>
                              )}
                          </ListItem>
                          <Divider />
                        </>
                      );
                    })
                    : filterChatHead.map((data, idx) => {
                      if (currChatData.id === data.id) {
                        console.log("DDDDAAA");
                        console.log(currChatData);
                        console.log(data);
                      }
                      if (
                        currChatData.id == data.id &&
                        currChatData["order_status"] != data["order_status"]
                      ) {
                        setCurrChatData(data);
                      }
                      return (
                        <>
                          <ListItem
                            className={"people-item"}
                            onClick={(e) => {
                              setCurrChatData(data);
                            }}
                            //button
                            key={idx}
                            style={
                              data.id == currChatData.id
                                ? {
                                  color: "black",
                                  borderWidth: "2px 0px 2px 2px",
                                  borderRadius: "15px 0px 0px 15px",
                                  borderColor: "#fa6331",
                                }
                                : {
                                  borderWidth: "2px",
                                  backgroundColor: "rgba(0, 0, 0, 0.15)",
                                  marginRight: "10px",
                                  borderRadius: "15px 0px 0px 15px",
                                  borderColor: "#6d6de6",
                                }
                            }
                          >
                            <ListItemIcon>
                              <Avatar
                                alt={data["owner_name"]}
                                src={data["owner_image"]}
                              />
                            </ListItemIcon>
                            <ListItemText primary={data["owner_name"]}>
                              {data["owner_name"]}
                            </ListItemText>
                            {(isUndefined(data["order_status"]) ||
                              isNull(data["order_status"])) && (
                                <>
                                  <ListItemText secondary="" align="right">
                                    <p
                                      style={{
                                        fontSize: "12px",
                                        color: "lightblue",
                                      }}
                                    >
                                      preorder
                                    </p>
                                  </ListItemText>
                                </>
                              )}
                            {!isUndefined(data["order_status"]) &&
                              !isNull(data["order_status"]) && (
                                <Fragment>
                                  {data["order_status"].toLowerCase() ===
                                    "pending" && (
                                      <ListItemText secondary="" align="right">
                                        <p
                                          style={{
                                            fontSize: "12px",
                                            color: "darkorange",
                                          }}
                                        >
                                          pending
                                        </p>
                                      </ListItemText>
                                    )}
                                  {data["order_status"].toLowerCase() ===
                                    "accepted" && (
                                      <ListItemText secondary="" align="right">
                                        <p
                                          style={{
                                            fontSize: "12px",
                                            color: "green",
                                          }}
                                        >
                                          accepted
                                        </p>
                                      </ListItemText>
                                    )}
                                  {data["order_status"].toLowerCase() ===
                                    "cancelled" && (
                                      <ListItemText align="right">
                                        <p
                                          style={{
                                            fontSize: "12px",
                                            color: "red",
                                          }}
                                        >
                                          cancelled
                                        </p>
                                      </ListItemText>
                                    )}
                                  {data["order_status"].toLowerCase() ===
                                    "completed" && (
                                      <ListItemText align="right">
                                        <p
                                          style={{
                                            fontSize: "12px",
                                            color: "blue",
                                          }}
                                        >
                                          completed
                                        </p>
                                      </ListItemText>
                                    )}
                                </Fragment>
                              )}
                          </ListItem>
                          <Divider />
                        </>
                      );
                    })}
                </Fragment>
              )}
              {isGroup && (
                <Fragment>
                  <div className={classes.root}>
                    {uniqueProducts.map((prod, idx) => {
                      console.log("ACCORDIAN_EXPAND");
                      console.log(accordianExpand);
                      console.log(prod["gig_id"]);
                      console.log(accordianExpand[22]);
                      return (
                        <Accordion
                          onClick={() => {
                            setAccordianExpand({ [prod["gig_id"]]: true });
                          }}
                          onBlur={() =>
                            setAccordianExpand({ [prod["gig_id"]]: false })
                          }
                          expanded={
                            accordianExpand[prod["gig_id"]] === undefined
                              ? false
                              : true
                          }
                          key={prod["gig_id"]}
                        >
                          <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                            onClick={(e) =>
                              handleGetAllChatHeads(prod["gig_id"])
                            }
                          >
                            <Typography className={classes.heading}>
                              {prod["gig_name"]}
                            </Typography>
                          </AccordionSummary>
                          <AccordionDetails>
                            <List>
                              {filterChatHead.map((data, idx) => {
                                return (
                                  <ListItem
                                    onClick={(e) => {
                                      setCurrChatData(data);
                                    }}
                                    className={"people-item"}
                                    button
                                    key={idx}
                                  >
                                    <ListItemIcon>
                                      <Avatar
                                        alt={data["owner_name"]}
                                        src={data["owner_image"]}
                                      />
                                    </ListItemIcon>
                                    <ListItemText primary={data["owner_name"]}>
                                      {data["owner_name"]}
                                    </ListItemText>
                                    <ListItemText
                                      secondary="online"
                                      align="right"
                                    ></ListItemText>
                                  </ListItem>
                                );
                              })}
                            </List>
                          </AccordionDetails>
                        </Accordion>
                      );
                    })}
                  </div>
                </Fragment>
              )}
            </List>
          </Grid>
          <Grid
            item
            xs={12}
            sm={7}
            md={8}
            lg={9}
            style={
              isUndefined(currChatData["gig_id"]) == false
                ? {
                  borderColor: "#fa6331",
                  borderWidth: "2px",
                }
                : {}
            }
          >
            {!isEmpty(currChatData) && (
              <Fragment>
                <List>
                  {/* Buyer Chat Area */}
                  {props.auth.isAuthorized && !props.auth.isAlsoSeller && (
                    <ListItem button key={currChatData["owner_id"]}>
                      <ListItemIcon>
                        <Avatar
                          alt={currChatData["owner_name"]}
                          src={currChatData["owner_image"]}
                        />
                      </ListItemIcon>
                      <ListItemText primary={currChatData["owner_name"]}>
                        {currChatData["owner_name"]}
                      </ListItemText>
                      {isUndefined(currChatData["order_status"]) ||
                        isNull(currChatData["order_status"]) ? (
                        <ListItemText
                          secondary="Preorder Chat"
                          primary={""}
                          align="right"
                        ></ListItemText>
                      ) : (
                        <>
                          <ListItemText
                            primary={"Order #" + currChatData["order_id"]}
                            secondary={
                              "Order status: " + currChatData["order_status"]
                            }
                            align="right"
                          ></ListItemText>
                        </>
                      )}
                    </ListItem>
                  )}
                  {/* Seller Chat Area */}
                  {props.auth.isAuthorized && props.auth.isAlsoSeller && (
                    <ListItem button key={currChatData["customer_id"]}>
                      <ListItemIcon>
                        <Avatar
                          alt={currChatData["customer_name"]}
                          src={currChatData["customer_image"]}
                        />
                      </ListItemIcon>
                      <ListItemText primary={currChatData["customer_name"]}>
                        {currChatData["customer_name"]}
                      </ListItemText>
                      {isUndefined(currChatData["order_status"]) ||
                        isNull(currChatData["order_status"]) ? (
                        <ListItemText
                          secondary="Preorder Chat"
                          align="right"
                        ></ListItemText>
                      ) : (
                        <>
                          <ListItemText
                            primary={"Order #" + currChatData["order_id"]}
                            secondary={
                              "Order status: " + currChatData["order_status"]
                            }
                            align="right"
                          ></ListItemText>
                        </>
                      )}
                    </ListItem>
                  )}
                </List>
              </Fragment>
            )}
            {/* Chat Body List Area */}
            <List
              className={classes.messageArea}
              style={{ overflowY: "scroll" }}
              key={1}
            >
              {isUndefined(currChatData["gig_id"]) && (
                <>
                  {console.log("11-1")}
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
                        src={onorLogo}
                        alt={""}
                      />
                    </Col>
                  </Row>
                  <Row>
                    <Col
                      sm={12}
                      className={
                        "d-flex justify-content-center align-items-center mt-4 text-muted"
                      }
                    >
                      <h6 style={{ height: "100%" }}>
                        to start a conversation select a chat
                      </h6>
                    </Col>
                  </Row>
                </>
              )}
              {!isUndefined(currChatData["pendingAccept"]) &&
                !isNull(currChatData["pendingAccept"]) && (
                  <>
                    {console.log("11-2")}
                    {props.auth.isAuthorized &&
                      !props.auth.isAlsoSeller &&
                      currChatData["order_status"].toLowerCase() ===
                      "pending" &&
                      currChatData["pendingAccept"] === false && (
                        <>
                          <div
                            style={{
                              border: "2px solid blue",
                              margin: "2em",
                              padding: "1em",
                            }}
                          >
                            <div>
                              {`${currChatData["owner_name"]} with merchant id ${currChatData["owner_id"]} is requesting you to buy this session. Do you accept?`}
                            </div>
                            <div>
                              <Button
                                onClick={(e) => {
                                  //accept the pending request
                                  handleCustomerOpenPendingChat();
                                }}
                              >
                                Accept
                              </Button>
                              <Button
                                onClick={(e) => {
                                  //cancel order
                                  if (
                                    props.auth.isAuthorized &&
                                    !props.auth.isAlsoSeller
                                  ) {
                                    handleCustomerOrderCancelRequest();
                                  }
                                }}
                              >
                                Reject
                              </Button>
                            </div>
                          </div>
                        </>
                      )}
                    {props.auth.isAuthorized &&
                      props.auth.isAlsoSeller &&
                      currChatData["order_status"].toLowerCase() ===
                      "pending" &&
                      currChatData["pendingAccept"] === false && (
                        <>
                          {console.log("11-3")}
                          <div
                            style={{
                              border: "2px solid blue",
                              margin: "2em",
                              padding: "1em",
                            }}
                          >
                            {`You cannot chat yet as the buyer ${currChatData["customer_name"]} with customer id ${currChatData["customer_id"]} hasn't accepted your service.`}
                          </div>
                        </>
                      )}
                  </>
                )}
              {console.log("CHATLIST")}
              {console.log(chatList)}

              {chatList.map((chat, idx) => {
                if (props.auth.isAuthorized) {
                  let alignSet = "right";
                  let alignedBubble = "rightBubble";
                  var messageTime = chat["creationTimestamp"];
                  console.log(messageTime);
                  var t = new Date(parseInt(messageTime));
                  console.log(t);
                  var hours = t.getHours();
                  var minutes = "0" + t.getMinutes();
                  var seconds = "0" + t.getSeconds();
                  var formatted = hours + ":" + minutes.substr(-2);
                  var currAvatar = chat["customer_image"];
                  var uId, sId;

                  if (props.auth.isAlsoSeller) {
                    const { merchantId } = jwt.decode(
                      localStorage.getItem("sellerJwtToken")
                    );
                    const { senderId } = chat;
                    uId = merchantId;
                    sId = senderId;
                  } else {
                    const { userId } = jwt.decode(
                      localStorage.getItem("jwtToken")
                    );
                    const { senderId } = chat;
                    uId = userId;
                    sId = senderId;
                  }
                  console.log(chat);
                  console.log(
                    jwt.decode(localStorage.getItem("sellerJwtToken"))
                  );

                  if (!isUndefined(chat["senderId"])) {
                    {
                      /* Seller */
                    }
                    if (props.auth.isAlsoSeller) {
                      if (
                        chat["senderId"] ===
                        jwt
                          .decode(localStorage.getItem("sellerJwtToken"))
                        ["merchantId"].toString()
                      ) {
                        alignSet = "right";
                        alignedBubble = "rightBubble";
                      } else {
                        alignSet = "left";
                        alignedBubble = "leftBubble";
                      }
                    } else {
                      {
                        /* Buyer */
                      }
                      currAvatar = chat["owner_image"];
                      if (
                        chat["senderId"] ===
                        jwt
                          .decode(localStorage.getItem("jwtToken"))
                        ["userId"].toString()
                      ) {
                        alignSet = "right";
                        alignedBubble = "rightBubble";
                      } else {
                        alignSet = "left";
                        alignedBubble = "leftBubble";
                      }
                    }
                  }

                  return (
                    <div
                      className={`${classes.bubbleContainer} ${alignSet}`}
                      key={idx}
                    >
                      {alignSet === "left" ? (
                        <ListItemIcon>
                          <Avatar
                            alt="Alice"
                            style={{ marginTop: "1em" }}
                            src={currAvatar}
                          />
                        </ListItemIcon>
                      ) : null}
                      <div
                        key={1}
                        className={`${classes.bubble} ${alignedBubble}`}
                      >
                        {!isUndefined(chat["filePath"]) &&
                          chat["filePath"] !== "" && (
                            <img
                              style={{
                                width: "400px",
                              }}
                              alt={"image"}
                              src={chat["filePath"]}
                            />
                          )}

                        <div>
                          <Linkyfy componentDecorator={componentDecorator}>
                            {chat["content"]}
                          </Linkyfy>
                        </div>
                        {chat["type"] === "3" && !props.auth.isAlsoSeller && (
                          <div className={classes.button}>
                            <Button
                              onClick={(e) => {
                                props.history.push(
                                  `/buyer/order/summary/${currChatData["gig_id"]}`
                                );
                              }}
                            >
                              Accept
                            </Button>
                            <Button
                              onClick={(e) => {
                                const {
                                  gig_id,
                                  customer_id,
                                  owner_id,
                                } = currChatData;
                                if (props.auth.isAlsoSeller) {
                                } else {
                                  handleSendChatMessage(
                                    owner_id,
                                    gig_id,
                                    "Buyer rejected the request"
                                  );
                                }
                              }}
                            >
                              Reject
                            </Button>
                          </div>
                        )}
                        {
                          <Fragment>
                            {chat["type"] === "5" && props.auth.isAlsoSeller && (
                              <div className={classes.button}>
                                <Button
                                  onClick={(e) => {
                                    if (props.auth.isAlsoSeller)
                                      handleCustomerOrderAcceptRequest();
                                  }}
                                >
                                  Accept
                                </Button>
                                <Button
                                  onClick={(e) => {
                                    const {
                                      gig_id,
                                      customer_id,
                                      owner_id,
                                    } = currChatData;

                                    handleSendChatMessage(
                                      customer_id,
                                      gig_id,
                                      "Seller rejected the request"
                                    );
                                  }}
                                >
                                  Reject
                                </Button>
                              </div>
                            )}
                            {chat["type"] === "6" && !(sId == uId) && (
                              <div className={classes.button}>
                                <Button
                                  onClick={(e) => {
                                    // if (props.auth.isAlsoSeller) {
                                    //handleCustomerOrderCancelRequest();
                                    // } else {
                                    // }
                                  }}
                                >
                                  Accept
                                </Button>
                                <Button>Reject</Button>
                              </div>
                            )}
                            {chat["type"] === "7" && !props.auth.isAlsoSeller && (
                              <div className={classes.button}>
                                <Button
                                  onClick={(e) => {
                                    if (
                                      props.auth.isAuthorized &&
                                      !props.auth.isAlsoSeller
                                    ) {
                                      handleCustomerAcceptDelivery();
                                    }
                                  }}
                                >
                                  Accept
                                </Button>
                                <Button
                                  onClick={(e) => {
                                    if (
                                      props.auth.isAuthorized &&
                                      !props.auth.isAlsoSeller
                                    ) {
                                      handleCustomerRejectDelivery();
                                    }
                                  }}
                                >
                                  Reject
                                </Button>
                              </div>
                            )}

                            {chat["type"] === "8" && (
                              <div className={classes.button}>
                                <Button
                                  onClick={(e) => {
                                    if (
                                      props.auth.isAuthorized &&
                                      props.auth.isAlsoSeller
                                    ) {
                                    }
                                  }}
                                >
                                  Redo it again
                                </Button>
                                <Button>Raise complain</Button>
                              </div>
                            )}
                          </Fragment>
                        }
                        <span style={{ fontSize: "8pt", fontWeight: "normal" }}>
                          {formatted}
                        </span>
                      </div>
                      {alignSet === "right" ? (
                        <ListItemIcon>
                          <Avatar
                            alt="Alice"
                            style={{ marginTop: ".5em" }}
                            src={currAvatar}
                          />
                        </ListItemIcon>
                      ) : null}
                    </div>
                  );
                }
              })}
              {currChatData["acceptDelivery"] === true && (
                <div
                  style={{
                    padding: "25px",
                    margin: "40px",
                    marginTop: "60px",
                    border: "2px solid orange",
                    borderRadius: "5px",
                  }}
                >
                  <Button
                    onClick={(e) => {
                      handleShareExperience();
                    }}
                  >
                    Click here to share your experience
                  </Button>
                </div>
              )}
              <div ref={messagesEndRef} />
            </List>
            {/* Chat Body List Area Ends */}
            {/* Buyer chat text area */}
            {console.log("AUTH")}
            {console.log(props.auth)}
            {console.log("DATA")}
            {console.log(currChatData)}
            {props.auth.isAuthorized &&
              !props.auth.isAlsoSeller &&
              !isEmpty(currChatData) && (
                <Fragment>
                  {console.log("5-1")}
                  {/* For pre order chat */}
                  {isUndefined(currChatData["order_status"]) ||
                    isNull(currChatData["order_status"]) ? (
                    <Fragment>{textAreaJsx({})}</Fragment>
                  ) : (
                    <Fragment>
                      {console.log("5-2")}
                      {currChatData["order_status"].toLowerCase() ===
                        "pending" && (
                          <Fragment>
                            {!isChatLocked &&
                              textAreaJsx({
                                sticker: {
                                  name: "Ask To Accept",
                                  code: 5,
                                  body: `Buyer ${currChatData["customer_name"]} is asking you to accept the order. Do you want to accept?`,
                                },
                              })}
                          </Fragment>
                        )}
                      {currChatData["order_status"].toLowerCase() ===
                        "accepted" && (
                          <Fragment>
                            {textAreaJsx({
                              sticker: {
                                name: "Ask To Cancel",
                                code: 6,
                                body: `Buyer ${currChatData["customer_name"]} is requesting you to cancel the order. Do you agree?`,
                              },
                            })}
                          </Fragment>
                        )}
                      {currChatData["order_status"].toLowerCase() ===
                        "completed" && (
                          <Fragment>
                            {!currChatData["acceptDelivery"] &&
                              textAreaJsx({
                                sticker: {
                                  name: "Reject Delivery",
                                  code: 8,
                                  body: `Buyer ${currChatData["customer_name"]} has refused to accept your delivery. What do you want to do?`,
                                },
                              })}
                          </Fragment>
                        )}
                    </Fragment>
                  )}
                </Fragment>
              )}
            {/* Seller chat text area */}
            {props.auth.isAuthorized &&
              props.auth.isAlsoSeller &&
              !isEmpty(currChatData) && (
                <>
                  {/* For pre order chat */}
                  {console.log("5-3")}
                  {isUndefined(currChatData["order_status"]) ||
                    isNull(currChatData["order_status"]) ? (
                    <>
                      {textAreaJsx({
                        sticker: {
                          name: "Ask To Buy",
                          code: 3,
                          body: `Seller ${currChatData["owner_name"]} is asking you to buy the order. Would to like to proceed to checkout?`,
                        },
                      })}
                    </>
                  ) : (
                    <>
                      {currChatData["order_status"].toLowerCase() ===
                        "pending" && (
                          <>{!isChatLocked && textAreaJsx({ old: "new" })}</>
                        )}
                      {currChatData["order_status"].toLowerCase() ===
                        "accepted" && (
                          <Fragment>
                            {textAreaJsx({
                              sticker: {
                                name: "Ask To Cancel",
                                code: 6,
                                body: `Seller ${currChatData["owner_name"]} is asking to cancel the order from your side. Do you want to cancel the order?`,
                              },
                            })}
                          </Fragment>
                        )}
                      {currChatData["order_status"].toLowerCase() ===
                        "completed" &&
                        !currChatData["acceptDelivery"] && (
                          <>
                            {textAreaJsx({
                              sticker: {
                                name: "Ask to accept delivery",
                                code: 7,
                                body: `Seller ${currChatData["owner_name"]} is asking you to accept the delivery. Do you accept the delivery?`,
                              },
                            })}
                          </>
                        )}
                    </>
                  )}
                </>
              )}
          </Grid>
        </Grid>
        <div>
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
                        const { gig_id, customer_id, owner_id } = currChatData;
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
                            const {
                              gig_id,
                              customer_id,
                              owner_id,
                            } = currChatData;
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
      </div>
      {/* </Dialog> */}
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    actionDialogOpen: (payload) => dispatch(action_dialog_open(payload)),
    actionStartProgress: (payload) => dispatch(action_progress_start(payload)),
    progressStop: () => dispatch(action_progress_stop()),
    actionShowRating: (payload) =>
      dispatch(action_rating_dialog_start(payload)),
  };
};
MessagesPage = connect(mapStateToProps, mapDispatchToProps)(MessagesPage);
export default withFirebase(MessagesPage);
