import React, { useRef, useEffect, useState, createRef, Fragment } from "react";
import { connect } from "react-redux";
import { withFirebase } from "../../firebase";
import jwt from "jsonwebtoken";
import { action_dialog_open } from "../../redux/actions/dialogAction";
import {
  action_progress_start,
  action_progress_stop,
} from "../../redux/actions/progressAction";
import { ListItemText, Grid, Fab, Button } from "@material-ui/core";
import { action_rating_dialog_start } from "../../redux/actions/RatingAction";
import Axios from "axios";
import { Col, Container, Row } from "react-bootstrap";
import "./MessagesPage.scss";
import ConversationSearch from "./ConversationSearch/index";
import ConversationListItem from "./ConversationListItem/index";
import onorLogo from "../../images/onorlogo.png";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Message from "./Message";
import Composer from "./Compose/index";
import { Height } from "@material-ui/icons";
import _, { isUndefined, isNull, isEmpty, isFunction } from "lodash";
import Skeleton from "./Skeletons/index.jsx";
import {
  API_APPROVE_ORDER,
  API_CANCEL_ORDER,
  READ_CHAT_HEAD_FROM_DB,
} from "../../utils/API_ENDPOINTS";
import dummyImage from "../../images/dummyUser.png";
import ImageDialog from "./ImageDialog";

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

let MessagesPage = (props) => {
  // consts
  const db = props.firebase.firestore;
  const storage = props.firebase.storage;
  const classes = useStyles();

  // usestates
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
  const [chatScreenLoader, setChatScreenLoader] = useState(false);
  const [searchText, setSearchText] = useState("");

  const [isSendingMessage, setIsSendingMessage] = useState(false);
  // useState ends

  // useRefs
  const bottomRef = useRef();
  const attachmentInput = useRef(null);
  const chatTextField = createRef();
  // useRef ends

  // useEffects

  useEffect(() => {
    handleGetAllChatHeads();
  }, []);

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

  useEffect(() => {
    let unsubscribe = refreshChatHead();
    return () => {
      if (isFunction(unsubscribe)) {
        unsubscribe();
      }
    };
  }, [isGroup]);

  // functions

  if (!props.auth.isAuthorized) {
    props.actionDialogOpen({
      title: "Please login or signup to continue",
      positive: "Ok",
      type: "Alert",
    });
    props.history.push("/signin");
  }

  const refreshChatHead = () => {
    if (props.auth.isAuthorized) {
      let unsubscribe = db.collection("chatInfo").onSnapshot((snapshot) => {
        handleGetAllChatHeads();
      });
      return unsubscribe;
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
    if (props.auth.isAuthorized) {
      setIsSendingMessage(true);
      chatTextField.current.value = "";
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
                let fileName = "";
                //       let messageType = 0;
                if (attachment) {
                  fileName = attachment.name;
                  let imageRef = storage
                    .ref()
                    .child(
                      `${productId}-${identifierId}-${merchantId}/${fileName}`
                    );
                  await imageRef.put(attachment);
                  firebaseUrl = await imageRef.getDownloadURL();
                  //       messageType = 1;
                  type = 1;
                }
                console.log("8-1");
                await chatRef.add({
                  content: message,
                  //gig_id: productId,
                  receiverId: identifierId.toString(),
                  senderId: merchantId.toString(),
                  creationTimestamp: currentTimestamp.toString(),
                  //filePath: firebaseUrl,
                  fileUrl: firebaseUrl,
                  filename: fileName,
                  //whoSender: merchantId,
                  //whoReciever: identifierId,
                  //order_id: order_id,
                  //order_status: order_status,
                  type: type.toString(),
                });
                setChatBody("");
                setAttachment();
                scrollToBottom();
              }
            }
          } catch (e) {
            console.log(e);
          }
        } else {
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
                let fileName = "";
                if (attachment) {
                  fileName = attachment.name;
                  let imageRef = storage
                    .ref()
                    .child(
                      `${productId}-${identifierId}-${merchantId}/${fileName}`
                    );
                  await imageRef.put(attachment);
                  firebaseUrl = await imageRef.getDownloadURL();
                  type = 1;
                  //messageType = 1;
                }
                await chatRef.add({
                  content: message,
                  //gig_id: productId,
                  receiverId: identifierId.toString(),
                  senderId: merchantId.toString(),
                  creationTimestamp: currentTimestamp.toString(),
                  //filePath: firebaseUrl,
                  fileUrl: firebaseUrl,
                  filename: fileName,
                  //whoSender: merchantId,
                  //whoReciever: identifierId,
                  type: type.toString(),
                });
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
                let fileName = "";
                if (attachment) {
                  let fileName = attachment.name;
                  let imageRef = storage
                    .ref()
                    .child(
                      `${productId}-${userId}-${identifierId}/${fileName}`
                    );
                  await imageRef.put(attachment);
                  firebaseUrl = await imageRef.getDownloadURL();
                  type = 1;
                  //messageType = 1;
                }

                await chatRef.add({
                  content: message,
                  //gig_id: productId,
                  receiverId: identifierId.toString(),
                  senderId: userId.toString(),
                  creationTimestamp: currentTimestamp.toString(),
                  //filePath: firebaseUrl,
                  fileUrl: firebaseUrl,
                  filename: fileName,
                  //whoSender: userId,
                  //whoReciever: identifierId,
                  //order_id,
                  //order_status,
                  type: type.toString(),
                });
                setChatBody("");
                setAttachment();
                scrollToBottom();
              }
            }
          } catch (e) {
            console.log(e);
          }
        } else {
          try {
            let dataBundle = {
              product_id: parseInt(productId),
              user_id: parseInt(userId),
            };
            let currResult = await Axios.post(
              READ_CHAT_HEAD_FROM_DB,
              dataBundle
            );
            if (!isNull(currResult["data"]["chatHead"])) {
              if (currResult["data"]["chatHead"]["orderId"] === 0) {
                let identifierTS = currResult["data"]["chatHead"]["timestamp"];
                let messageCollectionDocId = `${productId}-${userId}-${identifierTS}`;
                let chatRef = db
                  .collection("messages")
                  .doc(messageCollectionDocId)
                  .collection(messageCollectionDocId);
                let firebaseUrl = "";
                let fileName = "";
                //let messageType = 0;
                if (attachment) {
                  fileName = attachment.name;
                  let imageRef = storage
                    .ref()
                    .child(
                      `${productId}-${userId}-${identifierId}/${fileName}`
                    );
                  await imageRef.put(attachment);
                  firebaseUrl = await imageRef.getDownloadURL();
                  type = 1;
                  //messageType = 1;
                }
                await chatRef.add({
                  content: message,
                  //gig_id: productId,
                  receiverId: identifierId.toString(),
                  senderId: userId.toString(),
                  creationTimestamp: currentTimestamp.toString(),
                  //filePath: firebaseUrl,
                  fileUrl: firebaseUrl,
                  filename: fileName,
                  //whoSender: userId,
                  //whoReciever: identifierId,
                  type: type.toString(),
                });
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

      setIsSendingMessage(false);
    }
  };

  const scrollToBottom = () => {
    bottomRef.current.scrollIntoView({
      behavior: "smooth",
      block: "end",
      inline: "nearest",
    });
  };

  useEffect(() => {
    scrollToBottom();
  }, [props.children]);

  const toBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });

  const fetchBase64Image = async (file) => {
    const f = await toBase64(file);
    props.setViewAttachment(f);
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
        {/* {console.log("6-1")}
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
                </Grid> */}

        {!isUndefined(currChatData["gig_id"]) && (
          <Composer
            chatBody={chatBody}
            setChatBody={setChatBody}
            chatTextField={chatTextField}
            currChatData={currChatData}
            attachment={attachment}
            handleSendChatMessage={handleSendChatMessage}
            attachmentInput={attachmentInput}
            setAttachment={setAttachment}
            setOpenImageDialog={setOpenImageDialog}
            setViewAttachment={setViewAttachment}
            isSendingMessage={isSendingMessage}
          />
        )}
      </Grid>
    );
  };

  return (
    <>
      <Container className={"my-5"} style={{ minHeight: "480px" }}>
        <Row>
          <Col
            md={5}
            sm={12}
            className={
              "mt-2 main-columns peopleFromMessages main-container mr-md-5"
            }
          >
            <ConversationSearch
              chatHead={chatHead}
              setFilterChatHead={setFilterChatHead}
              setSearchText={setSearchText}
            />
            <div className={"scrollerDiv peopleFromMessages"}>
              {_.isEmpty(filterChatHead) && searchText === "" && (
                <>
                  <Skeleton />
                </>
              )}
              {_.isEmpty(filterChatHead) && searchText !== "" && (
                <center>No results found...</center>
              )}
              {props.auth.isAlsoSeller
                ? filterChatHead.map((data, idx) => {
                    if (
                      currChatData.id == data.id &&
                      currChatData["order_status"] != data["order_status"]
                    ) {
                      setCurrChatData(data);
                    }
                    return (
                      <>
                        <ConversationListItem
                          key={idx}
                          data={{
                            photo: data["customer_image"],
                            name: data["customer_name"],
                            statusColor: "orange",
                            status:
                              _.isUndefined(data["order_status"]) ||
                              _.isNull(data["order_status"])
                                ? "Preorder"
                                : data["order_status"],
                            isActive: data.id == currChatData.id,
                            data: data,
                            refreshChat: refreshChat,
                            setCurrChatData: setCurrChatData,
                            isSeller: true,
                          }}
                        />
                      </>
                    );
                  })
                : filterChatHead.map((data, idx) => {
                    if (
                      currChatData.id == data.id &&
                      currChatData["order_status"] != data["order_status"]
                    ) {
                      setCurrChatData(data);
                    }
                    return (
                      <>
                        <ConversationListItem
                          key={idx}
                          data={{
                            photo: data["owner_image"],
                            name: data["owner_name"],
                            statusColor: "orange",
                            status:
                              _.isUndefined(data["order_status"]) ||
                              _.isNull(data["order_status"])
                                ? "Preorder"
                                : data["order_status"],
                            isActive: data.id == currChatData.id,
                            isSeller: false,
                            data: data,
                            setCurrChatData: setCurrChatData,
                            setChatList: setChatList,
                          }}
                        />
                      </>
                    );
                  })}
            </div>
          </Col>
          <Col
            md={6}
            sm={12}
            className={
              "mt-2 main-columns peopleFromMessages main-container px-2"
            }
            style={{ overflowX: "hidden" }}
          >
            <div className="message-list">
              <div
                className="message-list-container"
                ref={bottomRef}
                style={{ minHeight: "480px" }}
              >
                {props.auth.isAuthorized &&
                  !isUndefined(currChatData["gig_id"]) && (
                    <h6
                      className={
                        "text-muted order-status sticky-top bg-white mt- p-1"
                      }
                    >
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
                    </h6>
                  )}

                {
                  // !isUndefined(currChatData["gig_id"]) && isEmpty(currChatData) && <Skeleton />
                }

                {isUndefined(currChatData["gig_id"]) && (
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
                        <h6 style={{ height: "50%" }}>
                          to start a conversation select a chat
                        </h6>
                      </Col>
                    </Row>
                  </>
                )}
                {isEmpty(chatList) && !isUndefined(currChatData["gig_id"]) && (
                  <Skeleton />
                )}
                {console.log("CHATLIST")}
                {console.log(currChatData)}
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
                      var isMine =
                        chat["senderId"] ===
                        jwt
                          .decode(localStorage.getItem("sellerJwtToken"))
                          ["merchantId"].toString();
                    } else {
                      const { userId } = jwt.decode(
                        localStorage.getItem("jwtToken")
                      );
                      const { senderId } = chat;
                      uId = userId;
                      sId = senderId;
                      var isMine =
                        chat["senderId"] ===
                        jwt
                          .decode(localStorage.getItem("jwtToken"))
                          ["userId"].toString();
                    }
                    var profileChat = "";
                    if (isMine && props.auth.isAlsoSeller) {
                      profileChat = jwt.decode(
                        localStorage.getItem("sellerJwtToken")
                      )["avatar"];
                    } else if (isMine && !props.auth.isAlsoSeller) {
                      profileChat = !isUndefined(
                        jwt.decode(localStorage.getItem("jwtToken"))["avatar"]
                      )
                        ? jwt.decode(localStorage.getItem("jwtToken"))["avatar"]
                        : dummyImage;
                    } else if (!isMine) {
                      profileChat =
                        currChatData["customer_image"] === undefined
                          ? dummyImage
                          : currChatData["customer_image"];
                    }
                  }
                  return (
                    <>
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
                              const { gig_id, customer_id, owner_id } =
                                currChatData;
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
                                  const { gig_id, customer_id, owner_id } =
                                    currChatData;

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
                      <Message
                        key={idx}
                        isMine={isMine}
                        startsSequence={true}
                        endsSequence={true}
                        showTimestamp={parseInt(messageTime)}
                        isThereAnyImage={
                          //filePath
                          !isUndefined(chat["fileUrl"]) &&
                          chat["fileUrl"] !== "" && (
                            <img
                              style={{
                                // width: "400px",
                                borderRadius: "20px",
                              }}
                              className={"img-fluid my-2"}
                              alt={"image"}
                              src={chat["fileUrl"]}
                            />
                          )
                        }
                        data={{
                          message: chat["content"],
                          photo: profileChat,
                        }}
                      />
                    </>
                  );
                })}
              </div>
              {!isUndefined(currChatData["gig_id"]) && (
                <Composer
                  chatBody={chatBody}
                  setChatBody={setChatBody}
                  chatTextField={chatTextField}
                  currChatData={currChatData}
                  attachment={attachment}
                  handleSendChatMessage={handleSendChatMessage}
                  attachmentInput={attachmentInput}
                  setAttachment={setAttachment}
                  setOpenImageDialog={setOpenImageDialog}
                  setViewAttachment={setViewAttachment}
                  isSendingMessage={isSendingMessage}
                />
              )}
            </div>
          </Col>
        </Row>
      </Container>
      <ImageDialog
        openImageDialog={openImageDialog}
        chatBody={chatBody}
        currChatData={currChatData}
        attachment={attachment}
        handleSendChatMessage={handleSendChatMessage}
        setOpenImageDialog={setOpenImageDialog}
        setAttachment={setAttachment}
        viewAttachment={viewAttachment}
        chatTextField={chatTextField}
        setChatBody={setChatBody}
      />
    </>
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
