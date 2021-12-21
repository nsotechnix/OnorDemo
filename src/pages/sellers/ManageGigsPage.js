import React, { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
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
import "./ManageGigsPage.scss";
import Axios from "axios";
import { action_dialog_open } from "../../redux/actions/dialogAction";
import {
  action_progress_start,
  action_progress_stop,
} from "../../redux/actions/progressAction";
import { MERCHANT_GIGS_LIST } from "../../utils/API_ENDPOINTS";
import jwt from "jsonwebtoken";
import { usePromiseTracker, trackPromise } from "react-promise-tracker";
import Loader from "react-loader-spinner";

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

const ManageGigsPage = (props) => {
  const { promiseInProgress } = usePromiseTracker();
  if (!props.auth.isAuthorized) {
    props.actionDialogOpen({
      title: "Please login or signup to continue",
      positive: "Ok",
      type: "Alert",
    });
    props.history.push("/signin");
  }
  const [myGigs, setmyGigs] = useState([]);
  useEffect(() => {
    handleFetchmyGigs();
  }, []);
  const { merchantId } = jwt.decode(localStorage.getItem("sellerJwtToken"));
  const handleFetchmyGigs = async () => {
    try {
      const res = await trackPromise(
        Axios.get(MERCHANT_GIGS_LIST + merchantId)
      );
      res.data.product_list_of_merchant.reverse();
      setmyGigs(res.data.product_list_of_merchant);
    } catch (e) {
      console.log("An error occured");
    }
  };
  console.log(myGigs);
  const classes = useStyles();
  return (
    <React.Fragment>
      <h4 className={"onor_span_color d-flex justify-content-center my-4"}>
        Manage Session
      </h4>
      <Row>
        <Col sm={12} className={"d-flex justify-content-center"}>
          <Paper component="form" className={classes.rootSearch}>
            <InputBase
              className={classes.input}
              placeholder="Search Request"
              inputProps={{ "aria-label": "search request" }}
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
          <List className={classes.root}>
            {myGigs.map((obj, index) => {
              return (
                !promiseInProgress && (
                  <React.Fragment>
                    <div className="gig-card my-4 py-2 px-2 mx-2">
                      <div className="order_col_1">
                        <ListItem
                          role="button"
                          alignItems="flex-start"
                          as={Link}
                        >
                          <ListItemAvatar>
                            <Avatar alt="img" src={obj.productIconLink} />
                          </ListItemAvatar>
                          <ListItemText
                            primary={obj.productName}
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
                                {" — " +
                                  obj.productDescription.slice(0, 30) +
                                  "…"}
                              </React.Fragment>
                            }
                          />
                        </ListItem>
                      </div>
                      <div className="order_col_2">
                        <span style={{ fontSize: "small" }}>
                          {new Date(obj.createDate).toLocaleString()}
                        </span>
                        {/* <span className={'float-left mt-2'}>Order Status: {obj.status}</span> */}
                        <button
                          onClick={(e) => {
                            props.history.push(
                              "/seller/gigs/edit/summary/" + obj.productId
                            );
                          }}
                          className={
                            "btn onor_outline_title_btn btn-xs float-right px-5 py-1 my-2"
                          }
                        >
                          {"Edit"}
                        </button>
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
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actionDialogOpen: (payload) => dispatch(action_dialog_open(payload)),
    actionStartProgress: (payload) => dispatch(action_progress_start(payload)),
    progressStop: () => dispatch(action_progress_stop()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ManageGigsPage);
