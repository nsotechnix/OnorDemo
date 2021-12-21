import React from 'react'
import { withRouter } from "react-router-dom";
import Axios from "axios";


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
          handleFetchMyOrders();
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

function OrderComponent(props) {
    return (
        <React.Fragment>
            <ListItem alignItems="flex-start">
                <ListItemAvatar
                style={{ cursor: "pointer" }}
                onClick={(e) =>
                    props.history.push(
                    "/buyer/order/summary/" +
                    props.productId +
                    "/?orderId="+props.orderId
                    )
                }
                >
                <Avatar
                    alt="product"
                    src={props.productIconLink}
                />
                </ListItemAvatar>
                <ListItemText
                className={"mt-3"}
                style={{ cursor: 'pointer' }}
                primary={props.productName}
                onClick={(e) =>
                    props.history.push(
                    "/buyer/order/summary/" +
                    props.productId +
                    "/?orderId="+props.orderId
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
                        {props.merchantFirstName +
                        " " +
                        props.merchantLastName}
                    </Typography>
                    <br />
                    {" — " +
                        props.productDescription.slice(0, 30) +
                        "…"}
                    <span className={"float-right"}>
                        {new Date(props.createDate).toLocaleString()}
                    </span>
                    </React.Fragment>
                }
                />
            </ListItem>
                    <React.Fragment>
                      {props.status !== "cancelled" ? (
                        <Col
                          className="mycol d-flex justify-content-end"
                          style={{ cursor: "pointer" }}
                          onClick={() => {
                            // handleOpenChatDialog(obj)
                            props.history.push('/messages/')
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
                        </Col>
                      ) : null}
                      <span className={"float-left mt-2"}>
                        Order Status: {obj.status}
                      </span>
                      {props.status !== "completed" &&
                        props.status !== "cancelled" ? (
                          <button
                            onClick={(e) => {
                              cancelOrder(e, props.orderId);
                            }}
                            className={"btn btn-danger btn-xs float-right"}
                            disabled={cancelBtn.disabled}
                          >
                            {cancelBtn.text}
                          </button>
                        ) : null}
                    </React.Fragment>
                    <Divider variant="inset" component="li" />
                  </React.Fragment>
    )
}

export default withRouter(OrderComponent)
