import React, { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import Axios from "axios";
import { API_FETCH_ORDERS, API_CANCEL_ORDER, API_COMPLETE_ORDER } from "../../utils/API_ENDPOINTS";
import { action_dialog_open } from "../../redux/actions/dialogAction";
import {
  action_progress_start,
  action_progress_stop,
} from "../../redux/actions/progressAction";
import jwt from "jsonwebtoken";
import { isUndefined } from "lodash";
import { usePromiseTracker, trackPromise } from "react-promise-tracker";
import Loader from "react-loader-spinner";
import ChatLogo from "../../svg/chat.svg";
import {
  action_open_chat_dialog,
  action_close_chat_dialog,
} from "../../redux/actions/chatActions";
import ChatDialog from "../../components/ChatDialog";
import "./ManageOrders.scss";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: "70%",
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: "inline",
  },
  rootSearch: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    width: 800,
    border: "1px solid #fa6331",
  },
  iconButton: {
    padding: 10,
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
}));

const ManageOrders = (props) => {
  const { promiseInProgress } = usePromiseTracker();
  if (!props.auth.isAuthorized) {
    props.actionDialogOpen({
      title: "Please login or signup to continue",
      positive: "Ok",
      type: "Alert",
    });
    props.history.push("/signin");
  }
  props.actionStartProgress();
  const [myOrders, setMyOrders] = useState([]);
  useEffect(() => {
    handleFetchMyOrders();
  }, []);
  const handleFetchMyOrders = async () => {
    try {
      const res = await trackPromise(
        Axios.get(
          API_FETCH_ORDERS +
          jwt.decode(localStorage.getItem("jwtToken"))["userId"]
        )
      );
      res.data.orderHistory.reverse();
      setMyOrders(res.data.orderHistory);
    } catch (e) {
      console.log("An error occured");
    }
  };
  props.progressStop();
  const [cancelBtn, setCancelBtn] = useState({
    text: "Cancel",
    disabled: false,
  });

  const [completeBtn, setCompleteBtn] = useState({
    text: "Accept",
    disabled: false,
  });

  const [reviewBtn, setReviewBtn] = useState({
    text: "Review",
    disabled: false,
  });

  const handleOpenChatDialog = (currentOrder) => {
    console.log(currentOrder);
    props.openChatDialog(currentOrder);
  };

  const cancelOrder = async (e, orderId) => {
    if (window.confirm("Are you sure want to cancel this order?")) {
      if (orderId !== "" || !isUndefined(orderId)) {
        try {
          const isCancelled = await trackPromise(
            Axios.post(API_CANCEL_ORDER + orderId)
          );
          setCancelBtn({
            text: "Cancelling",
            disabled: true,
          });
          handleFetchMyOrders()
          props.actionDialogOpen({
            title: "Order Cancelled",
            positive: "Ok",
            type: "Alert",
          });
        } catch (e) {
          console.log("Error cancelling order: " + e);
        }
        setCancelBtn({
          text: "Cancel",
          disabled: false,
        });
      } else {
        alert("Something went wrong, please try again later");
      }
    }
  };

  const reviewOrder = async (e, orderId) => {
    if (window.confirm("Are you sure want to send for review this order?")) {
      if (orderId !== "" || !isUndefined(orderId)) {
        try {
          const isCancelled = await trackPromise(
            Axios.post(API_CANCEL_ORDER + orderId)
          );
          setCancelBtn({
            text: "Cancelling",
            disabled: true,
          });
          handleFetchMyOrders()
          props.actionDialogOpen({
            title: "Success",
            positive: "Ok",
            type: "Alert",
          });
        } catch (e) {
          console.log("Error cancelling order: " + e);
        }
        setCancelBtn({
          text: "Cancel",
          disabled: false,
        });
      } else {
        alert("Something went wrong, please try again later");
      }
    }
  };



  const completeOrder = async (e, orderId) => {
    if (window.confirm('Are you sure want to complete this order?')) {
      if (orderId !== '' || !isUndefined(orderId)) {
        try {
          setCompleteBtn({
            text: 'Processing...',
            disabled: true
          })
          const isCompleted = await trackPromise(Axios.post(API_COMPLETE_ORDER + orderId))
          handleFetchMyOrders()
          props.actionDialogOpen({
            title: "Order Completed",
            positive: "Ok",
            type: "Alert",
          })
        } catch (e) {
          console.log('Error completing order: ' + e)
        }
        setCompleteBtn({
          text: 'Complete',
          disabled: false
        })
      } else {
        alert('Something went wrong, please try again later')
      }
    }
  }

  const location = useLocation();
  //console.log(location.pathname.match("/mobile/") == "/mobile/");
  const classes = useStyles();
  return (
    <React.Fragment>
      <h4 className={"onor_span_color d-flex justify-content-center my-4"}>
        My Orders
      </h4>
      <Row>
        <Col sm={12} className={"d-flex justify-content-center"}>
          <Paper component="form" className={classes.rootSearch}>
            <InputBase
              className={classes.input}
              placeholder="Search Order"
              inputProps={{ "aria-label": "search order" }}
            />
            <IconButton
              type="submit"
              className={classes.iconButton}
              aria-label="search"
            >
              <SearchIcon />
            </IconButton>
          </Paper>
        </Col>
        {promiseInProgress && (
          <div
            style={{
              width: "100%",
              height: "100",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Loader type="ThreeDots" color="#fa6331" height="100" width="100" />
          </div>
        )}
        <Col sm={12} className={"d-flex justify-content-center"}>
          {props.chatDialog && <ChatDialog />}
          <List className={classes.root}>
            {myOrders.map((obj, index) => {
              console.log({ ...obj.product });
              return (
                !promiseInProgress && (
                  <React.Fragment>
                    <div className="order-card my-4 py-2 px-2 mx-2">
                      <div className="order_col_1">
                        <ListItem alignItems="flex-start">
                          <ListItemAvatar
                            style={{ cursor: "pointer" }}
                            onClick={(e) =>
                              props.history.push(
                                "/buyer/order/summary/" +
                                obj.product.productId +
                                "/?orderId=" +
                                obj.orderId
                              )
                            }
                          >
                            <Avatar
                              alt="product"
                              src={obj.product.productIconLink}
                            />
                          </ListItemAvatar>
                          <ListItemText
                            className={"mt-3"}
                            style={{ cursor: "pointer" }}
                            primary={obj.product.productName}
                            onClick={(e) =>
                              props.history.push(
                                "/buyer/order/summary/" +
                                obj.product.productId +
                                "/?orderId=" +
                                obj.orderId
                              )
                            }
                            secondary={
                              <React.Fragment>
                                <Typography
                                  component="span"
                                  variant="body2"
                                  className={classes.inline}
                                  color="textPrimary"
                                >
                                  {obj.merchant.firstName +
                                    " " +
                                    obj.merchant.lastName}
                                </Typography>
                                <br />
                                {" — " +
                                  obj.product.productDescription.slice(0, 30) +
                                  "…"}
                              </React.Fragment>
                            }
                          />
                        </ListItem>
                      </div>
                      <div className="order_col_2">
                        <span
                          className={"float-right"}
                          style={{ fontSize: "small" }}
                        >
                          {new Date(obj.createDate).toLocaleString()}
                        </span>
                        {obj.status !== "cancelled" &&
                          !(location.pathname.match("/mobile/") == "/mobile/") ? (
                            <div
                              className="d-flex my-1"
                              style={{ cursor: "pointer" }}
                              onClick={() => {
                                // handleOpenChatDialog(obj)
                                props.history.push("/messages/");
                              }}
                            >
                              <img
                                className="mycol mx-2"
                                style={{
                                  width: "20px",
                                  height: "20px",
                                }}
                                alt="chatlogo"
                                src={ChatLogo}
                              />
                              <h6 className="mycol">Chat</h6>
                            </div>
                          ) : null}
                        <span className={"float-left"}>
                          Order Status: {obj.status.replace(/[0-9]/g, '')}
                        </span>
                        {obj.status !== "completed" &&
                          obj.status !== "cancelled" &&
                          obj.status !== "delivered" &&
                          <button
                            onClick={(e) => {
                              cancelOrder(e, obj.orderId);
                            }}
                            className={
                              "btn onor_outline_title_btn btn-xs float-right px-5 py-1 my-2"
                            }
                            disabled={cancelBtn.disabled}
                          >
                            {cancelBtn.text}
                          </button>
                        }
                        {
                          obj.status == 'delivered' &&
                          <>
                            <button
                              onClick={(e) => {
                                completeOrder(e, obj.orderId);
                              }}
                              className={
                                "btn onor_outline_title_btn btn-xs float-right px-5 py-1 my-2"
                              }
                              disabled={completeBtn.disabled}
                            >
                              {completeBtn.text}
                            </button>
                            <button
                              onClick={(e) => {
                                reviewOrder(e, obj.orderId);
                              }}
                              className={
                                "btn onor_outline_title_btn btn-xs float-right px-5 py-1 my-2"
                              }
                              disabled={reviewBtn.disabled}
                            >
                              {reviewBtn.text}
                            </button>
                          </>
                        }
                      </div>

                      <Divider variant="inset" component="li" />
                    </div>
                  </React.Fragment>
                )
              );
            })}
          </List>
        </Col>
      </Row>
      <Row className={"mt-2"}>
        <Col sm={12} className="d-flex justify-content-center">
          <IconButton
            style={{ outline: 'none' }}
            aria-label="delete"
            className={classes.margin}
            size="large"
          >
            <ArrowDownwardIcon fontSize="inherit" />
          </IconButton>
        </Col>
      </Row>
    </React.Fragment>
  );
};
const mapStateToProps = (state) => {
  return {
    auth: state.auth,
    dialog: state.dialog,
    chatDialog: state.chatDialog,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actionDialogOpen: (payload) => dispatch(action_dialog_open(payload)),
    actionStartProgress: (payload) => dispatch(action_progress_start(payload)),
    progressStop: () => dispatch(action_progress_stop()),
    openChatDialog: (payload) => dispatch(action_open_chat_dialog(payload)),
    closeChatDialog: () => dispatch(action_close_chat_dialog()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ManageOrders);
