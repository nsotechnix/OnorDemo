import React, { Fragment, useEffect, useRef, useState } from "react";
import { connect } from 'react-redux'
import { useLocation } from "react-router-dom";
import {
  API_FETCH_SINGLE_GIG,
  API_ROOT_DUMMY,
  WEB_ENDPOINT,
} from "../utils/API_ENDPOINTS";
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
import "./ChatDialog.scss";
import { makeStyles } from "@material-ui/core/styles";
import jwt from "jsonwebtoken";
import { isFunction, isUndefined, isNull } from "lodash";
import { withFirebase } from "../firebase"
import { action_close_chat_dialog } from "../redux/actions/chatActions";
import { auth } from "firebase";



const useStyles = makeStyles((theme) => ({
  form: {
    display: 'flex',
    flexDirection: 'column',
    margin: 'auto',
    width: 'fit-content',
  },
  formControl: {
    marginTop: theme.spacing(2),
    minWidth: 120,
  },
  formControlLabel: {
    marginTop: theme.spacing(1),
  },
  appBar: {
    position: 'relative',
    background: '#fa6331'
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  }, table: {
    minWidth: 650,
  },
  chatSection: {
    width: '70%',
    height: '70%'
  },
  headBG: {
    backgroundColor: '#fa6331'
  },
  borderRight500: {
    borderRight: '1px solid #e0e0e0'
  },
  messageArea: {
    height: '55vh',
    overflowY: 'auto'
  }
}))

let ChatDialog = (props) => {

  console.log(props.chatDialog.payload)

  //firebase
  const db = props.firebase.firestore;
  const storage = props.firebase.storage;

  //hooks
  const classes = useStyles();
  const location = useLocation()
  const [fullWidth, setFullWidth] = useState(true);
  const [chatList, setChatList] = useState([])
  const [chatBody, setChatBody] = useState("")
  const [attachment, setAttachment] = useState()
  const [maxWidth, setMaxWidth] = React.useState('xs');
  const { chatOpen, payload } = props.chatDialog;
  let productDetails;
  let orderDetails;
  if (!isUndefined(payload)) {
    orderDetails = payload
    productDetails = payload["product"]
  }



  const messagesEndRef = useRef(null)
  const chatTextField = useRef(null)
  //end hooks



  //functions
  const refreshAllChat = async (orderDetails) => {
    let unsubscribe;
    if (!isUndefined(orderDetails)) {
      if (props.auth.isAuthorized) {
        const { product: productDetails, orderId, status: orderStatus } = orderDetails
        const { productId, merchant, productName } = productDetails
        const { merchantId,
          firstName: mFirstName,
          lastName: mLastName,
          avatar: mAvatar } = merchant
        const currentTimestamp = Date.now()
        const { userId,
          firstName: userFirstName,
          lastName: userLastName,
          avatar: userAvatar } = jwt.decode(localStorage.getItem("jwtToken"))

        const chatCollectionRef = db.collection("messages")
          .doc(`${productId}-${userId}`)
          .collection(`${productId}-${userId}`)

        if (props.auth.isAlsoSeller) {

        } else {

          unsubscribe = chatCollectionRef
            .where("senderId", "==", userId)
            .where("chatType", "==", "post")
            .where("order_id", "==", orderId)
            .onSnapshot(querySnapshot => {
              handleGetAllChatMessage(orderDetails)
            })
        }
      } else {
        console.log("user not logged in")
      }
    } else {
      console.log("order details undefined")
    }
    return unsubscribe
  }

  const scrollToBottom = () => {
    if (!isNull(messagesEndRef.current))
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' })

  }

  const handleGetAllChatMessage = async (orderDetails) => {
    if (!isUndefined(orderDetails)) {
      if (props.auth.isAuthorized) {

        const { userId } = jwt.decode(localStorage.getItem("jwtToken"))
        const { orderId, product } = orderDetails
        const { productId } = product


        if (props.auth.isAlsoSeller) {

        } else {

          try {
            const fsChatList = await db.collection("messages")
              .doc(`${productId}-${userId}`)
              .collection(`${productId}-${userId}`)
              .where("senderId", "==", userId)
              .where("order_id", "==", orderId)
              .where("chatType", "==", "post")
              .get()

            const tempChatList = fsChatList.docs.map(doc => {
              return {
                id: doc.id,
                ...doc.data()
              }
            })
            console.log("CHAT_LIST")
            console.log(tempChatList)
            setChatList(tempChatList)
            scrollToBottom()
          } catch (e) {
            console.log(e)
          }
        }
      }
    }
  }

  const handleChatClose = () => { };

  const handleSendChatMessage = async (orderDetails, message, type) => {

    if (props.auth.isAuthorized) {
      if (!isUndefined(orderDetails)) {

        const { product: productDetails, orderId, status: orderStatus, paymentStatus } = orderDetails
        const { productId, merchant, productName } = productDetails
        const { merchantId,
          firstName: mFirstName,
          lastName: mLastName,
          avatar: mAvatar } = merchant
        const currentTimestamp = Date.now()
        const { userId,
          firstName: userFirstName,
          lastName: userLastName,
          avatar: userAvatar } = jwt.decode(localStorage.getItem("jwtToken"))

        if (props.auth.isAlsoSeller) {

        } else {
          const tempCollectionRef = db.collection("chatInfo").doc(`${productId}-${userId}`)
          const tempOrderDocumentRef = db.collection("chatInfo").doc(`${productId}-${userId}-${orderId}`)

          const chatCollectionRef = db.collection("messages")
            .doc(`${productId}-${userId}`)
            .collection(`${productId}-${userId}`)

          try {
            const tempDoc = await tempCollectionRef
              .get()
            if (!tempDoc.exist) {
              // await tempCollectionRef.set({
              //   customer_id: userId,
              //   customer_image: userAvatar,
              //   customer_name: userFirstName + " " + userLastName,
              //   gig_id: productId,
              //   gig_name: productName,
              //   owner_id: merchantId,
              //   owner_name: mFirstName + " " + mLastName,
              //   owner_avatar: mAvatar,
              // })

              await tempOrderDocumentRef.set({
                customer_id: userId,
                customer_image: userAvatar,
                customer_name: userFirstName + " " + userLastName,
                gig_id: productId,
                gig_name: productName,
                owner_id: merchantId,
                owner_name: mFirstName + " " + mLastName,
                owner_avatar: mAvatar,
                order_id: orderId,
                order_status: orderStatus,
              })

            } else {
              await tempOrderDocumentRef.set({
                customer_id: userId,
                customer_image: userAvatar,
                customer_name: userFirstName + " " + userLastName,
                gig_id: productId,
                gig_name: productName,
                owner_id: merchantId,
                owner_name: mFirstName + " " + mLastName,
                owner_avatar: mAvatar,
                order_id: orderId,
                order_status: orderStatus,
              })
            }

            let tempChatBody;
            if (attachment) {
              let filename = `${currentTimestamp}.jpg`
              let imageRef = storage.ref().child(`${productId}-${userId}-${merchantId}/${filename}`)
              await imageRef.put(attachment)
              const firebaseUrl = await imageRef.getDownloadURL()
              tempChatBody = {
                content: message,
                gig_id: productId,
                receiverId: merchantId,
                senderId: userId,
                timestamp: currentTimestamp,
                filePath: firebaseUrl,
                type: 1,
                order_id: orderId,
                order_status: orderStatus,
                chatType: "post"
              }
            } else {
              tempChatBody = {
                content: message,
                gig_id: productId,
                receiverId: merchantId,
                senderId: userId,
                timestamp: currentTimestamp,
                type: 0,
                filePath: null,
                order_id: orderId,
                order_status: orderStatus,
                chatType: "post"
              }
            }

            if (!isUndefined(tempChatBody)) {
              await chatCollectionRef
                .doc(`${currentTimestamp}`)
                .set(tempChatBody)

              setChatBody("")
              scrollToBottom()
            } else {
              console.log("chat body is undefined")
            }

          } catch (e) {
            console.log(e)
          }
        }
      }
    }
  }
  //end functions

  //useEffects
  useEffect(() => {
    if (!isUndefined(orderDetails)) {
      console.log("CHAT_LISTENER_ATTACHED")
      console.log(orderDetails)
      const unsubscribe = refreshAllChat(orderDetails)
      return () => {
        if (isFunction(unsubscribe)) {
          console.log("CHAT_LISTENER_DETACHED")
          unsubscribe()
        }
      }

    }
  }, [orderDetails])
  //End useEffects

  return (
    <Fragment>
      <Dialog
        fullWidth={fullWidth}
        maxWidth={maxWidth}
        open={chatOpen}
        onClose={handleChatClose}
        aria-labelledby="max-width-dialog-title"
      >
        {
          !isUndefined(productDetails) && <Fragment>
            <DialogContentText>
              <div className="d-flex">
                <img
                  className={"img-responsive img-rounded"}
                  style={{
                    width: "35px",
                    height: "55px",
                  }}
                  alt="avatar"
                  src={productDetails["merchant"]["avatar"]}
                />
                <DialogTitle id="scroll-dialog-title">{`${productDetails["merchant"]["firstName"]} ${productDetails["merchant"]["lastName"]}`}</DialogTitle>
                <DialogContent>
                  {productDetails["productDescription"]}
                </DialogContent>
                <div style={{ cursor: "pointer" }}
                  onClick={e => {
                    props.closeChatDialog()
                  }}>
                  Close
                </div>
              </div>
              <Grid item xs={12}>
                <List className={classes.messageArea}>
                  <ListItem key={1}>
                    <Grid container>
                      <Grid item xs={12}>
                        <ListItemText
                          align="left"
                          primary="This chat is related to product link"
                        ></ListItemText>
                      </Grid>
                      <Grid item xs={12}>
                        <ListItemText
                          align="left"
                          secondary={`${WEB_ENDPOINT}${location.pathname}`}
                        ></ListItemText>
                      </Grid>
                    </Grid>
                  </ListItem>
                  {chatList.map((chat, idx) => {
                    if (props.auth.isAuthorized) {
                      var alignSet;
                      var messageTime = chat["timestamp"];
                      var date = new Date(messageTime * 1000);
                      let colorBox;

                      if (
                        chat["senderId"] ===
                        jwt.decode(localStorage.getItem("jwtToken"))["userId"]
                      ) {
                        alignSet = "left";
                        colorBox = "green";
                      } else {
                        alignSet = "right";
                        colorBox = "red";
                      }

                      return (
                        <ListItem key={idx + 2}>
                          <Grid container>
                            <div
                              style={{
                                border: `1px solid ${colorBox}`,
                                padding: "10px",
                                borderRadius: "8px",
                              }}
                            >
                              <Grid item xs={12}>
                                {chat["filePath"] !== null && (
                                  <img
                                    alt="image"
                                    style={{
                                      width: "250px",
                                    }}
                                    src={chat["filePath"]}
                                  />
                                )}
                                <ListItemText
                                  align={alignSet}
                                  primary={chat["content"]}
                                ></ListItemText>
                              </Grid>
                              <Grid item xs={12}>
                                <ListItemText
                                  align={alignSet}
                                  secondary={
                                    date.getHours() +
                                    ":" +
                                    date.getMinutes() +
                                    ":" +
                                    date.getSeconds()
                                  }
                                ></ListItemText>
                              </Grid>
                            </div>
                          </Grid>
                        </ListItem>
                      );
                    }
                  })}
                  <div ref={messagesEndRef} />
                </List>

                <Grid container className={"mt-1"}>
                  <Grid item xs={1}></Grid>
                  <Grid item xs={2}>
                    <input
                      type="file"
                      onChange={(e) => setAttachment(e.target.files[0])}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      value={chatBody}
                      onChange={(e) => setChatBody(e.target.value)}
                      ref={chatTextField}
                      id="outlined-basic-email"
                      label="Type Something"
                      fullWidth
                    />
                  </Grid>
                  <Grid xs={2}>
                    <Fab
                      onClick={() => handleSendChatMessage(orderDetails, chatBody, 0)}
                      color="primary"
                      style={{ background: "#fa6331" }}
                      aria-label="add"
                    >
                      <SendIcon />
                    </Fab>
                  </Grid>
                  <Grid item xs={1}></Grid>
                </Grid>
              </Grid>
            </DialogContentText>
          </Fragment>
        }

      </Dialog>
    </Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
    chatDialog: state.chatDialog
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    closeChatDialog: () => dispatch(action_close_chat_dialog())
  }
};
ChatDialog = withFirebase(ChatDialog);
export default connect(mapStateToProps, mapDispatchToProps)(ChatDialog);
