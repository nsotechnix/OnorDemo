import React, { Fragment, useState, useEffect } from "react";
import { withUserAgent } from "react-useragent";
import "./TopHeader.scss";
import { useLocation } from "react-router-dom";
import CardHeader from "@material-ui/core/CardHeader";
import Popover from "@material-ui/core/Popover";
import Button from "@material-ui/core/Button";
import Avatar from "@material-ui/core/Avatar";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import jwt from "jsonwebtoken";
import { withFirebase } from "../firebase";
import {
  action_sign_out,
  action_sign_out_seller,
  thunk_seller_sign_in,
} from "../redux/actions/authActions";
import { action_sign_up_as_seller } from "../redux/actions/authActions";
import { action_dialog_open } from "../redux/actions/dialogAction";
import MyDialog from "./MyDialog";
import OnorLogo from "../images/onorlogo.png";
import clsx from "clsx";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InfoIcon from "@material-ui/icons/Info";
import { fade, makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import Badge from "@material-ui/core/Badge";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MailIcon from "@material-ui/icons/Mail";
import NotificationsIcon from "@material-ui/icons/Notifications";
import MoreIcon from "@material-ui/icons/MoreVert";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import HomeIcon from "@material-ui/icons/Home";
import SupervisedUserCircleIcon from "@material-ui/icons/SupervisedUserCircle";
import MessageIcon from "@material-ui/icons/Message";
import BookIcon from "@material-ui/icons/Book";
import ProgressBar from "./ProgressBar"
import RatingModal from "../components/RatingComponent";
import {
  action_progress_start,
  action_progress_stop,
} from "../redux/actions/progressAction";
import {
  action_clear_gig_search,
  action_start_gig_search,
} from "../redux/actions/searchActions";
import { isUndefined, isNull, isFunction, isEmpty } from "lodash";
import Axios from "axios";
import { API_GIG_SEARCH } from "../utils/API_ENDPOINTS";
import FreeConsultation from "../images/free-consultation.png";
import NavComponent from '../pages/homepage/Nav.js'
import { Container } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: "block",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.black, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.black, 0.25),
      transition: "ease-in-out, width .35s ease-in-out",
      width: "55%",
    },
    //   marginRight: theme.spacing(5),
    //   marginLeft: '4em',
    width: "50%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(5),
      width: "50%",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  list: {
    width: 300,
  },
  fullList: {
    width: "auto",
  },
  inline: {
    display: "inline",
  },
}));

let TopHeader = (props) => {
  // alert(props.ua.md.ua)

  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const [navOpener, setnavOpener] = React.useState(false);
  const [notificationsOfOrdersList, setNotificationsOfOrdersList] = useState(
    []
  );
  const [isPopoverOpened, setIsPopoverOpened] = useState(false);

  const [searchedTerm, setSearchedTerm] = useState("");

  const handleOpenPopover = () => {
    setIsPopoverOpened(true);
  };
  const handleClosePopover = () => {
    setIsPopoverOpened(false);
    setNotificationsOfOrdersList([]);
  };
  const popoverOpenId = Boolean(isPopoverOpened);
  const popoverId = popoverOpenId ? "simple-popover" : undefined;

  const [notificationCount, setNotificationCount] = useState(0);

  const [hideTheDrawer, setHideTheDrawer] = React.useState(false);

  const db = props.firebase.firestore;

  const autoHider = () => {
    setnavOpener(false)
    setAnchorEl(null)
    setHideTheDrawer(true)
  }
  const location = useLocation()
  if (location.pathname.match("/mobile/")) {
    if (location.pathname.match("/mobile/") && hideTheDrawer === false) {
      autoHider()
    } else if (!location.pathname.match("/mobile/") && hideTheDrawer) {
      setHideTheDrawer(false)
    }
  } else {
    if (hideTheDrawer) {
      setHideTheDrawer(false)
    }
  }
  // if (location.pathname == '/') {
  //   if (location.pathname == '/' && hideTheDrawer === false) {
  //     autoHider();
  //   } else if (!location.pathname == '/' && hideTheDrawer) {
  //     setHideTheDrawer(false)
  //   }
  // }
  // if (location.pathname !== '/' && !location.pathname.match("/mobile/") && hideTheDrawer) {
  //   setHideTheDrawer(false)
  // }

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const toggleDrawer = (open) => (event) => {
    setnavOpener(open);
  };

  const handleGigSearch = async () => {
    if (!isEmpty(searchedTerm)) {
      try {
        let currData = {
          search_terms: searchedTerm,
        };
        props.history.push("/#search");
        props.actionStartProgress();
        const searchedResult = await Axios.post(API_GIG_SEARCH, currData);
        // console.log(searchedResult)
        if (!isUndefined(searchedResult.data)) {
          props.actionGigSearch(searchedResult.data.filtered_products);
        }
        props.actionStopProgress();
      } catch (e) {
        console.log(e);
      }
    } else {
      props.history.push("/#search");
      props.actionClearSearch();
    }
  };

  const handleRefreshOrderNotification = () => {
    if (props.auth.isAuthorized) {
      let unsubscribe;
      const orderNotificationRef = db.collection("orderNotification");
      if (props.auth.isAlsoSeller) {
        const { merchantId } = jwt.decode(
          localStorage.getItem("sellerJwtToken")
        );

        unsubscribe = orderNotificationRef
          .where("owner_id", "==", merchantId)
          .onSnapshot((snapshot) => {
            let tempChanges = snapshot.docs.map((doc) => {
              let {
                order_id,
                gig_name,
                order_status,
                payment_status,
                customer_name,
              } = doc.data();
              if (isUndefined(doc.data()["isRejectedByUser"])) {
                return {
                  id: doc.id,
                  status: order_status,
                  notification: `The order status for ${gig_name} and for user ${customer_name} with order id ${order_id} is ${order_status}. The payment status is ${payment_status}`,
                };
              } else {
                if (doc.data()["isRejectedByUser"])
                  return {
                    id: doc.id,
                    status: order_status,
                    notification: `User ${customer_name} has rejected your order for ${gig_name} with order id ${order_id}. Now the order status is ${order_status}.`,
                  };
              }
            });

            setNotificationsOfOrdersList(tempChanges.reverse());
          });
      } else {
        const { userId } = jwt.decode(localStorage.getItem("jwtToken"));
        unsubscribe = orderNotificationRef
          .where("customer_id", "==", userId)
          .onSnapshot((snapshot) => {
            let tempChanges = snapshot.docs.map((doc) => {
              let {
                order_id,
                gig_name,
                order_status,
                payment_status,
                owner_name,
              } = doc.data();
              return {
                id: doc.id,
                status: order_status,
                notification: `Your current order status for ${gig_name} and for merchant ${owner_name} with order id ${order_id} is ${order_status}. The payment status is ${payment_status}`,
              };
            });
            setNotificationsOfOrdersList(tempChanges.reverse());
          });
      }
      return unsubscribe;
    }
  };

  const handleGetAllOrderNotification = async () => {
    if (props.auth.isAuthorized) {
      const orderNotificationRef = db.collection("orderNotification");
      if (props.auth.isAlsoSeller) {
        const { merchantId } = jwt.decode(
          localStorage.getItem("sellerJwtToken")
        );

        let orderNotificationList = await orderNotificationRef
          .where("owner_id", "==", merchantId)
          .get();

        orderNotificationList = orderNotificationList.docs.map((doc) => {
          let {
            order_id,
            gig_name,
            order_status,
            payment_status,
            customer_name,
          } = doc.data();
          return {
            id: doc.id,
            status: order_status,
            notification: `The order status for ${gig_name} and for user ${customer_name} with order id ${order_id} is ${order_status}. The payment status is ${payment_status}`,
          };
        });
        setNotificationsOfOrdersList(orderNotificationList);
      } else {
        const { userId } = jwt.decode(localStorage.getItem("jwtToken"));
        let orderNotificationList = await orderNotificationRef
          .where("customer_id", "==", userId)
          .get();

        orderNotificationList = orderNotificationList.docs.map((doc) => {
          let {
            order_id,
            gig_name,
            order_status,
            payment_status,
            owner_name,
          } = doc.data();
          return {
            id: doc.id,
            status: order_status,
            notification: `Your current order status for ${gig_name} and for merchant ${owner_name} with order id ${order_id} is ${order_status}. The payment status is ${payment_status}`,
          };
        });
        setNotificationsOfOrdersList(orderNotificationList);
      }
    }
  };

  useEffect(() => {
    handleGetAllOrderNotification();
    let unsubscribe = handleRefreshOrderNotification();
    return () => {
      if (isFunction(unsubscribe)) {
        unsubscribe();
      }
    };
  }, []);

  const handleSignInAsSeller = async () => {
    // props.actionSignOutAsSeller()

    // console.log("handleSignInAsSeller called");

    try {
      if (props.auth.isAuthorized) {
        // console.log("buyer is authorized");
        const { userEmail, userPassword } = jwt.decode(
          localStorage.getItem("jwtToken")
        );
        const payload = {
          email: userEmail,
          password: userPassword,
        };
        props.actionStartProgress({
          isOpen: 1,
        });
        const result = await props.thunkActionSignInAsSeller(payload);
        props.actionDialogOpen({
          title: `Success`,
          message: `You've successfully switched to seller`,
          positive: "Ok",
          type: "Alert",
        });
        props.history.push("/");
        localStorage.setItem("sellerJwtToken", result.data.token);
        props.signUpAsSeller();
        props.progressStop();

        props.history.push("/");
      }
    } catch (e) {
      props.actionStopProgress({
        isOpen: false,
      });
      if (
        !isUndefined(e) &&
        !isUndefined(e.response) &&
        !isUndefined(e.response.status)
      ) {
        if (e.response.status === 404) {
          // props.actionDialogOpen({
          //   title: `You are not registered`,
          //   message: `You are not registered as merchant. Please register yourself`,
          //   positive: "Ok",
          //   type: "Alert",
          // });
          props.history.push("/seller/");
        }
      }
    }
  }

  // hiding the menu icon for the drawer
  const [ifShowmenuIcon, setIfShowmenuIcon] = React.useState(true);
  if (location.pathname.match("/signup") && ifShowmenuIcon) {
    setIfShowmenuIcon(false);
  } else if (!location.pathname.match("/signup") && !ifShowmenuIcon) {
    setIfShowmenuIcon(true);
  }

  const handleSignOut = (e) => {
    // e.preventDefault();
    handleMenuClose();
    props.actionSignOut();
    // console.log("state after action sign out");
    // console.log({ ...props.auth });
    // return {
    //   isAuthorized: false,
    //   isAlsoSeller: false
    // };
    localStorage.removeItem("sellerJwtToken");
    localStorage.removeItem("jwtToken");
    localStorage.removeItem("seller_profile_data");
    localStorage.removeItem("seller_profile_data_2");
    localStorage.removeItem("gig_assignment_data");
    props.actionDialogOpen({
      title: "Logged out",
      message: "You are successfully logged out.",
      positive: "Close",
    });
    props.history.push("/signin/");
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      className={"topHeaderDrawer"}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <RatingModal />
      {/* {console.log("top header isAuthorized")}
      {console.log(props.auth.isAuthorized)}
      {console.log(jwt.decode(localStorage.getItem("jwtToken")))} */}
      {props.auth.isAuthorized ? (
        <React.Fragment>
          <Link to="/">
            <MenuItem>
              Hello {jwt.decode(localStorage.getItem("jwtToken"))["firstName"]}
            </MenuItem>
          </Link>
          {props.auth.isAlsoSeller ? (
            <Fragment>
              <Link to={"/seller/gigs/"}>
                <MenuItem onClick={handleMenuClose}>Manage Sessions</MenuItem>
              </Link>
              <Link to={"/seller/receivedOrders/"}>
                <MenuItem onClick={handleMenuClose}>Received Orders</MenuItem>
              </Link>
            </Fragment>
          ) : (
            <Fragment>
              <Link to={"/buyer/orders/"}>
                <MenuItem onClick={handleMenuClose}>Manage Orders</MenuItem>
              </Link>
              <Link to={"/user/requests/"}>
                <MenuItem onClick={handleMenuClose}>Manage Requests</MenuItem>
              </Link>
            </Fragment>
          )}
          <Link to={"/user/preferences/"}>
            <MenuItem onClick={handleMenuClose}>Preferences</MenuItem>
          </Link>
          <Link to={"/user/buyer/edit/"}>
            <MenuItem onClick={handleMenuClose}>Edit Profile</MenuItem>
          </Link>
          <Link to={"/seller/create/summary"}>
            <MenuItem onClick={handleMenuClose}>Post a Session</MenuItem>
          </Link>
          {/* <Link to={"/user/coins/"}>
            <MenuItem onClick={handleMenuClose}>Buy Onor Coins</MenuItem>
          </Link> */}
          <Link to={"/user/password/"}>
            <MenuItem onClick={handleMenuClose}>Change Password</MenuItem>
          </Link>
          <Link>
            <MenuItem onClick={(handleMenuClose, handleSignOut)}>
              Sign out
            </MenuItem>
          </Link>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <Link to={"/signin/"}>
            <MenuItem
              containerElement={<Link to="/profile" />}
              onClick={handleMenuClose}
            >
              Login
            </MenuItem>
          </Link>
          <Link to={"/signup/"}>
            <MenuItem onClick={handleMenuClose}>Signup</MenuItem>
          </Link>
        </React.Fragment>
      )}
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      {props.auth.isAuthorized ? (
        <React.Fragment>
          <MenuItem
            onClick={(e) => {
              props.history.push("/messages/");
            }}
          >
            <IconButton aria-label="show 4 new mails" color="inherit">
              <Badge color="secondary">
                {/* badgeContent={4} */}
                <MailIcon />
              </Badge>
            </IconButton>
            <p>Messages</p>
          </MenuItem>
          <MenuItem
            aria-describedby={popoverId}
            variant="contained"
            onClick={handleOpenPopover}
          >
            <IconButton aria-label="show 11 new notifications" color="inherit">
              <Badge color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <p>Notifications</p>
          </MenuItem>
          <MenuItem onClick={handleProfileMenuOpen}>
            <IconButton
              aria-label="account of current user"
              aria-controls="primary-search-account-menu"
              aria-haspopup="true"
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
            <p>Profile</p>
          </MenuItem>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <Link to={"/signup/"}>
            <MenuItem onClick={handleMenuClose}>
              <IconButton aria-label="show 4 new mails" color="inherit">
                <AccountCircle />
              </IconButton>
              <p>Signup</p>
            </MenuItem>
          </Link>
          <Link to={"/signin/"}>
            <MenuItem onClick={handleMenuClose}>
              <IconButton
                aria-label="show 11 new notifications"
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <p>Login</p>
            </MenuItem>
          </Link>
        </React.Fragment>
      )}
    </Menu>
  );

  const list = () => (
    <div className={clsx(classes.list, "left")} role="presentation">
      <List>
        {props.auth.isAuthorized &&
          !isNull(localStorage.getItem("jwtToken")) ? (
          <CardHeader
            avatar={
              <Avatar
                aria-label="recipe"
                src={""}
                className={classes.avatar}
              ></Avatar>
            }
            // action={
            //   <IconButton>
            //     <MoreVertIcon onClick={handleProfileMenuOpen} />
            //   </IconButton>
            // }
            title={
              "Hi, " + jwt.decode(localStorage.getItem("jwtToken"))["firstName"]
            }
            subheader={
              jwt.decode(localStorage.getItem("jwtToken"))["userEmail"]
            }
          />
        ) : (
          <CardHeader
            avatar={
              <Avatar aria-label="recipe" className={classes.avatar}></Avatar>
            }
            title="Hi, Guest"
            subheader=""
          />
        )}
      </List>
      <Divider />
      <List onClick={toggleDrawer(false)} onKeyDown={toggleDrawer(false)}>
        <ListItem button key={"1"} onClick={(e) => props.history.push("/")}>
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText primary={"Home"} />
        </ListItem>
        {props.auth.isAuthorized && props.auth.isAlsoSeller && (
          <ListItem
            onClick={(e) => {
              props.history.push("/");
              props.actionSignOutAsSeller();
              props.actionDialogOpen({
                title: `Success`,
                message: `You've successfully switched to Buyer`,
                positive: "Ok",
                type: "Alert",
              });
              props.history.push("/");
            }}
            button
            key={"2"}
          >
            <ListItemIcon>
              <SupervisedUserCircleIcon />
            </ListItemIcon>
            <ListItemText primary={"Switch to Buyer"} />
          </ListItem>
        )}
        {props.auth.isAuthorized && !props.auth.isAlsoSeller && (
          <ListItem
            onClick={(e) => {
              handleSignInAsSeller();
            }}
            button
            key={"2"}
          >
            <ListItemIcon>
              <SupervisedUserCircleIcon />
            </ListItemIcon>
            <ListItemText primary={"Switch to Seller"} />
          </ListItem>
        )}
        {/* <ListItem
          button
          key={"3"}
          onClick={(e) => props.history.push("#pricing")}
        >
          <ListItemIcon>
            <TimelineIcon />
          </ListItemIcon>
          <ListItemText primary={"Wall"} />
        </ListItem> */}
        {/* <ListItem
          button
          key={"4"}
          onClick={(e) => props.history.push("#features")}
        >
          <ListItemIcon>
            <ForumIcon />
          </ListItemIcon>
          <ListItemText primary={"Communities"} />
        </ListItem> */}
        {/* <ListItem
          button
          key={"5"}
          onClick={(e) => props.history.push("/dashboard")}
        >
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText primary={"Dashboard"} />
        </ListItem> */}
        <ListItem
          button
          key={"6"}
          onClick={(e) => props.history.push("/messages")}
        >
          <ListItemIcon>
            <MessageIcon />
          </ListItemIcon>
          <ListItemText primary={"Message"} />
        </ListItem>
        <ListItem
          button
          key={"7"}
          onClick={(e) => props.history.push("/user/buyer/edit/")}
        >
          {/* /user/profile/ */}
          <ListItemIcon>
            <AccountCircleIcon />
          </ListItemIcon>
          <ListItemText primary={"Profile"} />
        </ListItem>
        {!props.auth.isAlsoSeller && props.auth.isAuthorized ? (
          <React.Fragment>
            <ListItem
              button
              key={"8"}
              onClick={(e) => props.history.push("/buyer/orders/")}
            >
              <ListItemIcon>
                <BookIcon />
              </ListItemIcon>
              <ListItemText primary={"Manage Orders"} />
            </ListItem>
            <ListItem
              button
              key={"9"}
              onClick={(e) => props.history.push("/user/requests/")}
            >
              <ListItemIcon>
                <BookIcon />
              </ListItemIcon>
              <ListItemText primary={"Manage Requests"} />
            </ListItem>
          </React.Fragment>
        ) : null}
        {props.auth.isAlsoSeller && props.auth.isAuthorized ? (
          <React.Fragment>
            <ListItem
              button
              key={"8"}
              onClick={(e) => props.history.push("/seller/gigs/")}
            >
              <ListItemIcon>
                <BookIcon />
              </ListItemIcon>
              <ListItemText primary={"Manage Sessions"} />
            </ListItem>
            <ListItem
              button
              key={"9"}
              onClick={(e) => props.history.push("/seller/receivedOrders/")}
            >
              <ListItemIcon>
                <BookIcon />
              </ListItemIcon>
              <ListItemText primary={"Received Orders"} />
            </ListItem>
          </React.Fragment>
        ) : null}
        <ListItem
          button
          key={"10"}
          onClick={(e) => props.history.push("/about/")}
        >
          <ListItemIcon>
            <InfoIcon />
          </ListItemIcon>
          <ListItemText primary={"About Onor"} />
        </ListItem>
      </List>
      {/* <button onClick={(e) => autoHider()}>Click me</button> */}
    </div>
  );

  return (
    <>
      {props.progress.isOpen && (
        <ProgressBar title={"Hang on! We're processing..."} />
      )}
      {props.dialog.isOpen && <MyDialog />}
      {!hideTheDrawer && <div className={'glowing'}>
        <NavComponent />
      </div>}
    </>
    // <div className={classes.grow}>
    //   {props.progress.isOpen && (
    //     <ProgressBar title={"Hang on! We're processing..."} />
    //   )}
    //   {!hideTheDrawer ? (
    //     <React.Fragment>
    //       {props.dialog.isOpen && <MyDialog />}
    //       <AppBar
    //         position="static"
    //         style={{ backgroundColor: "#fff", color: "black" }}
    //       >
    //         <Toolbar>
    //           {ifShowmenuIcon ? (
    //             <IconButton
    //               edge="start"
    //               className={classes.menuButton}
    //               aria-label="open drawer"
    //               onClick={toggleDrawer(true)}
    //             >
    //               <MenuIcon />
    //             </IconButton>
    //           ) : null}
    //           <Drawer
    //             anchor={"left"}
    //             open={navOpener}
    //             onClose={toggleDrawer(false)}
    //           >
    //             {list()}
    //           </Drawer>
    //           <Typography className={classes.title} variant="h6" noWrap>
    //             <Link to={"/"}>
    //               <img
    //                 className={"pb-1"}
    //                 style={{ width: "60px", marginRight: "1em" }}
    //                 src={OnorLogo}
    //                 alt="onorlogo"
    //               />
    //             </Link>
    //           </Typography>
    //           {props.auth.isAuthorized ? (
    //             <div className={classes.search}>
    //               <div className={classes.searchIcon}>
    //                 <SearchIcon />
    //               </div>
    //               <InputBase
    //                 value={searchedTerm}
    //                 onChange={(e) => setSearchedTerm(e.target.value)}
    //                 placeholder="Search…"
    //                 classes={{
    //                   root: classes.inputRoot,
    //                   input: classes.inputInput,
    //                 }}
    //                 inputProps={{ "aria-label": "search" }}
    //                 onKeyPress={(e) => {
    //                   // if (e.key === "Enter") {
    //                   //   handleGigSearch();
    //                   // }
    //                   if (e.key === "Enter") {
    //                     // handleGigSearch()
    //                     e.target.value !== '' && props.history.push('/search/' + e.target.value)
    //                   }
    //                 }}
    //               />
    //             </div>
    //           ) : (
    //             ""
    //           )}
    //           {/*  */}
    //           <div className="ml-auto">
    //             <div className={classes.sectionDesktop}>
    //               <img
    //                 src={FreeConsultation}
    //                 alt={"image"}
    //                 className={"img-responsive "}
    //                 style={{
    //                   height: "60px",
    //                   width: "150px",
    //                   cursor: "pointer",
    //                 }}
    //                 onClick={(e) => {
    //                   window.open('https://calendly.com/onorservices-calendar/consult-a-makeup-maestro', '_blank')
    //                 }}
    //               />
    //               {props.auth.isAuthorized ? (
    //                 <React.Fragment>
    //                   <IconButton
    //                     aria-label="show 4 new messages"
    //                     onClick={(e) => {
    //                       props.history.push("/messages/");
    //                     }}
    //                     color="inherit"
    //                   >
    //                     <Badge color="secondary">
    //                       <MailIcon className="icon_style" />
    //                     </Badge>
    //                   </IconButton>
    //                   <IconButton
    //                     aria-label="show 17 new orders"
    //                     color="inherit"
    //                     onClick={(e) => {
    //                       // props.auth.isAlsoSeller ? props.history.push('/seller/receivedOrders/') : null
    //                     }}
    //                   >
    //                     <Badge
    //                       badgeContent={notificationsOfOrdersList.length}
    //                       color="secondary"
    //                     >
    //                       <Button
    //                         aria-describedby={popoverId}
    //                         variant="contained"
    //                         onClick={handleOpenPopover}
    //                       >
    //                         <NotificationsIcon
    //                           className="icon_style"
    //                           onClick={(e) => {
    //                             // setNotificationsOfOrdersList([])
    //                           }}
    //                         />
    //                       </Button>
    //                     </Badge>
    //                     <Popover
    //                       id={popoverId}
    //                       open={isPopoverOpened}
    //                       anchorEl={isPopoverOpened}
    //                       onClose={handleClosePopover}
    //                       style={{ height: "40%", marginTop: "3em" }}
    //                       anchorOrigin={{
    //                         vertical: "top",
    //                         horizontal: "right",
    //                       }}
    //                       transformOrigin={{
    //                         vertical: "top",
    //                         horizontal: "right",
    //                       }}
    //                     >
    //                       {notificationsOfOrdersList.length == 0 && (
    //                         <ListItemText
    //                           style={{ margin: "1em", width: "15em" }}
    //                           primary={"Horray!"}
    //                           secondary={
    //                             <React.Fragment>
    //                               <span style={{ wordWrap: "break-word" }}>
    //                                 {"All caught up"}
    //                               </span>
    //                             </React.Fragment>
    //                           }
    //                         />
    //                       )}
    //                       {notificationsOfOrdersList.map((obj, idx) => {
    //                         return (
    //                           <Fragment>
    //                             <ListItemText
    //                               style={{ margin: "1em", width: "15em" }}
    //                               primary={`Order is ${obj["status"]}`}
    //                               secondary={
    //                                 <React.Fragment>
    //                                   <span style={{ wordWrap: "break-word" }}>
    //                                     {obj.notification}
    //                                   </span>
    //                                 </React.Fragment>
    //                               }
    //                             />
    //                             <Divider />
    //                           </Fragment>
    //                         );
    //                       })}
    //                     </Popover>
    //                   </IconButton>
    //                   <IconButton
    //                     edge="end"
    //                     aria-label="account of current user"
    //                     aria-controls={menuId}
    //                     aria-haspopup="true"
    //                     onClick={handleProfileMenuOpen}
    //                     color="inherit"
    //                   >
    //                     <AccountCircle className="icon_style" />
    //                   </IconButton>
    //                 </React.Fragment>
    //               ) : (
    //                 <React.Fragment>
    //                   <Link to={"/signin/"}>
    //                     <Button className="onor_outline_title_btn px-1 mx-1">
    //                       <span class="onor_outline_title_btn_label">
    //                         Login
    //                       </span>
    //                     </Button>
    //                   </Link>
    //                   <Link to={"/signup/"}>
    //                     <Button className="onor_outline_title_btn px-1 mx-1">
    //                       <span class="onor_outline_title_btn_label">
    //                         Signup
    //                       </span>
    //                     </Button>
    //                   </Link>
    //                   {/* <IconButton
    //                     edge="end"
    //                     aria-label="account of current user"
    //                     aria-controls={menuId}
    //                     aria-haspopup="true"
    //                     onClick={handleProfileMenuOpen}
    //                     color="inherit"
    //                   >
    //                     <AccountCircle />
    //                   </IconButton> */}
    //                 </React.Fragment>
    //               )}
    //             </div>
    //             <div className={classes.sectionMobile}>
    //               <IconButton
    //                 aria-label="show more"
    //                 aria-controls={mobileMenuId}
    //                 aria-haspopup="true"
    //                 onClick={handleMobileMenuOpen}
    //                 color="inherit"
    //               >
    //                 <MoreIcon />
    //               </IconButton>
    //             </div>
    //           </div>
    //         </Toolbar>
    //       </AppBar>
    //       {renderMobileMenu}
    //       {renderMenu}
    //     </React.Fragment>
    //   ) : null}
    // </div>
  );
};

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
    dialog: state.dialog,
    progress: state.progress,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signUpAsSeller: () => dispatch(action_sign_up_as_seller()),
    actionSignOut: () => dispatch(action_sign_out()),
    actionDialogOpen: (payload) => dispatch(action_dialog_open(payload)),
    actionSignOutAsSeller: () => dispatch(action_sign_out_seller()),
    thunkActionSignInAsSeller: (payload) =>
      dispatch(thunk_seller_sign_in(payload)),
    actionStartProgress: (payload) => dispatch(action_progress_start(payload)),
    actionStopProgress: (payload) => dispatch(action_progress_stop(payload)),
    actionGigSearch: (payload) => dispatch(action_start_gig_search(payload)),
    actionClearSearch: () => dispatch(action_clear_gig_search()),
  };
};
TopHeader = withUserAgent(TopHeader);
// TopHeader= connect(mapStateToProps, mapDispatchToProps)(TopHeader);
TopHeader = withFirebase(TopHeader);
export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(TopHeader)
);
