import React, { Fragment, useLayoutEffect } from "react";
import {
  HashRouter as Router,
  Redirect,
  Route,
  Switch,
  useLocation,
} from "react-router-dom";
import TopHeader from "../components/TopHeader";
// import Footer from "../components/Footer"
import Dashboard from "../pages/Dashboard";
import AuthPage from "../pages/AuthPage";
import { connect } from "react-redux";
import LandingPage from "../pages/LandingPage";
import Homepage from "../pages/Homepage";
import WhyOnor from "../pages/WhyOnor";
import SellerAccountCreatePage from "../pages/sellers/SellerAccountCreatePage";
import SwitchToSeller from "../pages/SwitchToSeller";
import SellerRouter from "./SellerRouter";
import BuyerRouter from "./BuyerRouter";
import BuyerPostRequest from "../pages/buyers/BuyerPostRequest";
import BuyerSummaryPage from "../pages/buyers/BuyerSummaryPage";
import BuyerOrderDetails from "../pages/buyers/BuyerOrderDetails";
import BuyerCheckoutPage from "../pages/buyers/BuyerCheckoutPage";
import MessagesPage from "../pages/MessagesPage";
import ManageOrders from "../pages/buyers/ManageOrders";
import BuyersPreferencesPage from "../pages/preferences/PreferencesPage";
import ChangePassword from "../pages/preferences/ChangePassword";
import TermsOfService from "../pages/preferences/TermsOfService";
import PrivacyAndPolicy from "../pages/preferences/PrivacyAndPolicy";
import ManageRequests from "../pages/buyers/ManageRequests";
import BuyOnorCoins from "../pages/coins/BuyOnorCoins";
import BuyOnorCoinsCheckout from "../pages/coins/BuyOnorCoinsCheckout";
import IndividualRequestPage from "../pages/buyers/requests/IndividualRequestPage";
import BuyerEditProfilePage from "../pages/profile/BuyerEditProfilePage";
import SellerEditProfilePage from "../pages/profile/SellerEditProfilePage";
import ViewProfilePage from "../pages/profile/ViewProfilePage";
import AboutPage from "../pages/About";
import TestimonialsPage from "../pages/Testimonials";
import NewsAndHacks from "../pages/NewsAndHacks";
import HotTaskList from "../pages/tasks/HotTaskList";
import LogoutComponent from "../components/LogoutComponent";
import CodeOfConduct from "../pages/preferences/CodeOfConduct";
import ContactPage from "../pages/ContactPage";
import SearchPage from "../pages/SearchPage.js";
import SellerPublicProfile from "../pages/sellers/public_profile/Profile.jsx";
// gigs
import popularGigsList from "../pages/gigs/popularGigsList";
import Search from "../pages/Search";
import TempMessagesPage from "../pages/chat/MessagesPage";
import ScrollRestoration from "react-scroll-restoration";

let RootRouter = (props) => {
  // useLayoutEffect(() => {
  //   window.scrollTo(0, 0)
  // }, [])

  return (
    <Fragment>
      <Router onUpdate={{ block: "start", behavior: "smooth" }}>
        <ScrollRestoration />
        <TopHeader />
        <Switch>
          <Route exact path={"/"} component={Homepage} />
          <Route exact path={"/why-onor"} component={WhyOnor} />
          <Route
            exact
            path={"/dashboard"}
            render={(routeProps) => {
              return (
                <Fragment>
                  {props.auth.isAuthorized ? (
                    <Dashboard {...routeProps} />
                  ) : (
                    <Redirect
                      to={{
                        pathname: "/signin",
                        state: {
                          from: props.location,
                        },
                      }}
                    />
                  )}
                </Fragment>
              );
            }}
          />
          <Route
            exact
            path={"/signin"}
            render={(props) => {
              return (
                <AuthPage {...props} signupPage={false} signinPage={true} />
              );
            }}
          />
          <Route
            exact
            path={"/signup"}
            render={(props) => {
              return (
                <AuthPage {...props} signupPage={true} signinPage={false} />
              );
            }}
          />
          <Route
            exact
            path={"/buyer/postrequest"}
            component={BuyerPostRequest}
          />
          <Route
            exact
            path={"/user/preferences"}
            component={BuyersPreferencesPage}
          />
          <Route exect path={"/user/terms"} component={TermsOfService} />
          <Route exect path={"/user/privacy"} component={PrivacyAndPolicy} />
          <Route exact path={"/user/password"} component={ChangePassword} />
          <Route exact path={"/search/:searchTerm"} component={SearchPage} />
          <Route
            exact
            path={"/buyer/order/summary/:productId"}
            component={BuyerSummaryPage}
          />
          <Route
            exact
            path={"/buyer/order/details/:productId/:packageId"}
            component={BuyerOrderDetails}
          />
          <Route
            exact
            path={"/buyer/order/checkout/"}
            component={BuyerCheckoutPage}
          />
          <Route exact path={"/messages"} component={MessagesPage} />
          <Route exact path={"/user/requests"} component={ManageRequests} />
          <Route exact path={"/user/coins/"} component={BuyOnorCoins} />
          <Route exact path={"/buyer/orders"} component={ManageOrders} />
          <Route
            exact
            path={"/user/buycoins/"}
            component={BuyOnorCoinsCheckout}
          />
          <Route
            exact
            path={"/user/buyer/edit/"}
            component={BuyerEditProfilePage}
          />
          <Route
            exact
            path={"/user/seller/edit/"}
            component={SellerEditProfilePage}
          />
          <Route exact path={"/user/profile/"} component={ViewProfilePage} />
          <Route exect path={"/about/"} component={AboutPage} />
          <Route exect path={"/testimonials"} component={TestimonialsPage} />
          <Route exect path={"/news-and-hacks"} component={NewsAndHacks} />
          <Route exect path={"/search/:keyword"} component={Search} />

          {/* gigs */}
          <Route exect path={"/gigs/popular/"} component={popularGigsList} />
          <Route exect path={"/tasks/hot/"} component={HotTaskList} />
          {/* mobile */}
          <Route
            exact
            path={"/mobile/buyer/order/summary/:productId"}
            component={BuyerSummaryPage}
          />
          <Route
            exact
            path={"/mobile/buyer/order/details/:productId/:packageId"}
            component={BuyerOrderDetails}
          />
          <Route exact path={"/mobile/buyer/orders"} component={ManageOrders} />
          <Route
            exact
            path={"/mobile/buyer/order/checkout/"}
            component={BuyerCheckoutPage}
          />
          <Route
            exact
            path={"/mobile/user/buyer/edit/"}
            component={BuyerEditProfilePage}
          />
          <Route
            exact
            path={"/mobile/user/seller/edit/"}
            component={SellerEditProfilePage}
          />
          <Route
            exact
            path={"/mobile/buyer/postrequest"}
            component={BuyerPostRequest}
          />
          <Route
            exact
            path={"/mobile/user/requests"}
            component={ManageRequests}
          />
          <Route exact path={"/mobile/logout"} component={LogoutComponent} />
          <Route
            exact
            path={"/mobile/conduct-and-dispute-resolution"}
            component={CodeOfConduct}
          />
          <Route exect path={"/mobile/user/terms"} component={TermsOfService} />
          <Route
            exect
            path={"/mobile/user/privacy"}
            component={PrivacyAndPolicy}
          />

          <Route
            exact
            path={"/mobile/signin"}
            render={(props) => {
              return (
                <AuthPage {...props} signupPage={false} signinPage={true} />
              );
            }}
          />
          <Route
            exact
            path={"/mobile/signup"}
            render={(props) => {
              return (
                <AuthPage {...props} signupPage={true} signinPage={false} />
              );
            }}
          />

          <Route exect path={"/mobile/contact"} component={ContactPage} />

          <Route
            exact
            path={"/mobile/conduct-and-dispute-resolution"}
            component={CodeOfConduct}
          />

          {/* mobile routers end */}
          <Route
            exact
            path={"/conduct-and-dispute-resolution"}
            component={CodeOfConduct}
          />
          <Route
            exect
            path={"/public/seller/:sellerId"}
            component={SellerPublicProfile}
          />
          <Route exect path={"/contact"} component={ContactPage} />

          <Route exect path={"/messages2"} component={TempMessagesPage} />
          <SellerRouter />
          <BuyerRouter />
        </Switch>
        {/* <div style={{ marginTop: '15vh' }}>
        <Footer />
      </div> */}
      </Router>
    </Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};
export default connect(mapStateToProps)(RootRouter);
