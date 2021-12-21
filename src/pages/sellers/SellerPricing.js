import React, { Fragment, useState, useEffect } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { connect } from "react-redux";
import Axios from "axios";
import { Link, withRouter } from "react-router-dom";
import BreadCrumbNav from "../../components/BreadCrumbNav";
import "./SellerPricing.scss";
import SellerPrivateGigPublishDialog from "./dialogs/SellerPrivateGigPublishDialog";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { ArrowBack, ArrowForward } from "@material-ui/icons";
import { isUndefined } from "lodash";
import {
  action_dialog_close,
  action_dialog_open,
} from "../../redux/actions/dialogAction";
import {
  action_progress_start,
  action_progress_stop,
} from "../../redux/actions/progressAction";
import {
  action_append_post_a_gig_data,
  action_steps_of_post_a_gig,
} from "../../redux/actions/postAGigActions";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import AddCircleOutlineIcon from "@material-ui/icons/Add";
import _ from "lodash";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-force-tabpanel-${index}`}
      aria-labelledby={`scrollable-force-tab-${index}`}
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

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "100%",
    backgroundColor: theme.palette.background.paper,
    color: "red",
  },
  tabsPanel: {
    width: "60%",
  },
}));

let SellerPricing = (props) => {
  const allPackages = ["basic", "basic_onor", "standard", "premium"];
  const allPackagesCamelCase = ["Basic", "BasicOnor", "Standard", "Premium"];

  useEffect(() => {
    if (localStorage.getItem("gig_package_onor_data_basic")) {
      const onorPackageDataBasic = JSON.parse(
        localStorage.getItem("gig_package_onor_data_basic")
      );
      setPackageNameBasic(onorPackageDataBasic.package_name);
      setPackageDescriptionBasic(onorPackageDataBasic.package_description);
      setDeliveryTimeBasic(onorPackageDataBasic.delivery_time);
      setPriceBasic(onorPackageDataBasic.package_price);
      setOnorCoinBasic(onorPackageDataBasic.onor_coin);
      setRevisionBasic(onorPackageDataBasic.revisions);
      setExtraServiceBasic(onorPackageDataBasic.services);
      setIsCompletedBasic(onorPackageDataBasic.isCompleted);
    }
    if (localStorage.getItem("gig_package_onor_data_basic_onor")) {
      const onorPackageDataBasicOnor = JSON.parse(
        localStorage.getItem("gig_package_onor_data_basic_onor")
      );
      setPackageNameBasicOnor(onorPackageDataBasicOnor.package_name);
      setPackageDescriptionBasicOnor(
        onorPackageDataBasicOnor.package_description
      );
      setDeliveryTimeBasicOnor(onorPackageDataBasicOnor.delivery_time);
      setPriceBasicOnor(onorPackageDataBasicOnor.package_price);
      setOnorCoinBasicOnor(onorPackageDataBasicOnor.onor_coin);
      setRevisionBasicOnor(onorPackageDataBasicOnor.revisions);
      setExtraServiceBasicOnor(onorPackageDataBasicOnor.services);
      setIsCompletedBasicOnor(onorPackageDataBasicOnor.isCompleted);
    }
    if (localStorage.getItem("gig_package_onor_data_standard")) {
      const onorPackageDataStandard = JSON.parse(
        localStorage.getItem("gig_package_onor_data_standard")
      );
      setPackageNameStandard(onorPackageDataStandard.package_name);
      setPackageDescriptionStandard(
        onorPackageDataStandard.package_description
      );
      setDeliveryTimeStandard(onorPackageDataStandard.delivery_time);
      setPriceStandard(onorPackageDataStandard.package_price);
      setOnorCoinStandard(onorPackageDataStandard.onor_coin);
      setRevisionStandard(onorPackageDataStandard.revisions);
      setExtraServiceStandard(onorPackageDataStandard.services);
      setIsCompletedStandard(onorPackageDataStandard.isCompleted);
    }
    if (localStorage.getItem("gig_package_onor_data_premium")) {
      const onorPackageDataPremium = JSON.parse(
        localStorage.getItem("gig_package_onor_data_premium")
      );
      setPackageNamePremium(onorPackageDataPremium.package_name);
      setPackageDescriptionPremium(onorPackageDataPremium.package_description);
      setDeliveryTimePremium(onorPackageDataPremium.delivery_time);
      setPricePremium(onorPackageDataPremium.package_price);
      setOnorCoinPremium(onorPackageDataPremium.onor_coin);
      setRevisionPremium(onorPackageDataPremium.revisions);
      setExtraServicePremium(onorPackageDataPremium.services);
      setIsCompletedPremium(onorPackageDataPremium.isCompleted);
    }
  }, []);

  const [isCompletedBasic, setIsCompletedBasic] = useState(false);
  const [isCompletedBasicOnor, setIsCompletedBasicOnor] = useState(false);
  const [isCompletedStandard, setIsCompletedStandard] = useState(false);
  const [isCompletedPremium, setIsCompletedPremium] = useState(false);

  const [errorsBasic, setErrorsBasic] = useState({});
  const [errorsBasicOnor, setErrorsBasicOnor] = useState({});
  const [errorsStandard, setErrorsStandard] = useState({});
  const [errorsPremium, setErrorsPremium] = useState({});
  // basic package state
  const [packageNameBasic, setPackageNameBasic] = useState("");
  const [packageDescriptionBasic, setPackageDescriptionBasic] = useState("");
  const [deliveryTimeBasic, setDeliveryTimeBasic] = useState(0);
  const [revisionBasic, setRevisionBasic] = useState(0);
  const [priceBasic, setPriceBasic] = useState("");
  const [onorCoinBasic, setOnorCoinBasic] = useState("0.00");
  const [extraServiceBasic, setExtraServiceBasic] = useState([
    { serviceName: "", isApplicable: "" },
  ]);

  const handleChangeServiceBasic = (e, index) => {
    const { name, value } = e.target;
    const list = [...extraServiceBasic];
    list[index][name] = value;
    setExtraServiceBasic(list);
  };

  const handleRemoveServiceBasic = (index) => {
    let list = [...extraServiceBasic];
    list.splice(index, 1);
    setExtraServiceBasic(list);
  };

  const handleAddServiceBasic = () => {
    if (
      extraServiceBasic[extraServiceBasic.length - 1].serviceName !== "" &&
      extraServiceBasic[extraServiceBasic.length - 1].isApplicable !== ""
    ) {
      setExtraServiceBasic([
        ...extraServiceBasic,
        { serviceName: "", isApplicable: "" },
      ]);
    }
  };
  // basic onor package state
  const [packageNameBasicOnor, setPackageNameBasicOnor] = useState("");
  const [
    packageDescriptionBasicOnor,
    setPackageDescriptionBasicOnor,
  ] = useState("");
  const [deliveryTimeBasicOnor, setDeliveryTimeBasicOnor] = useState(0);
  const [revisionBasicOnor, setRevisionBasicOnor] = useState(0);
  const [priceBasicOnor, setPriceBasicOnor] = useState("");
  const [onorCoinBasicOnor, setOnorCoinBasicOnor] = useState(0.0);
  const [extraServiceBasicOnor, setExtraServiceBasicOnor] = useState([
    { serviceName: "", isApplicable: "" },
  ]);

  const handleChangeServiceBasicOnor = (e, index) => {
    const { name, value } = e.target;
    const list = [...extraServiceBasicOnor];
    list[index][name] = value;
    setExtraServiceBasicOnor(list);
  };

  const handleRemoveServiceBasicOnor = (index) => {
    let list = [...extraServiceBasicOnor];
    list.splice(index, 1);
    setExtraServiceBasicOnor(list);
  };

  const handleAddServiceBasicOnor = () => {
    if (
      extraServiceBasicOnor[extraServiceBasicOnor.length - 1].serviceName !==
        "" &&
      extraServiceBasicOnor[extraServiceBasicOnor.length - 1].isApplicable !==
        ""
    ) {
      setExtraServiceBasicOnor([
        ...extraServiceBasicOnor,
        { serviceName: "", isApplicable: "" },
      ]);
    }
  };

  // standard package state
  const [packageNameStandard, setPackageNameStandard] = useState("");
  const [packageDescriptionStandard, setPackageDescriptionStandard] = useState(
    ""
  );
  const [deliveryTimeStandard, setDeliveryTimeStandard] = useState(0);
  const [revisionStandard, setRevisionStandard] = useState(0);
  const [priceStandard, setPriceStandard] = useState("");
  const [onorCoinStandard, setOnorCoinStandard] = useState(0.0);
  const [extraServiceStandard, setExtraServiceStandard] = useState([
    { serviceName: "", isApplicable: "" },
  ]);

  const handleChangeServiceStandard = (e, index) => {
    const { name, value } = e.target;
    const list = [...extraServiceStandard];
    list[index][name] = value;
    setExtraServiceStandard(list);
  };

  const handleRemoveServiceStandard = (index) => {
    let list = [...extraServiceStandard];
    list.splice(index, 1);
    setExtraServiceStandard(list);
  };

  const handleAddServiceStandard = () => {
    if (
      extraServiceStandard[extraServiceStandard.length - 1].serviceName !==
        "" &&
      extraServiceStandard[extraServiceStandard.length - 1].isApplicable !== ""
    ) {
      setExtraServiceStandard([
        ...extraServiceStandard,
        { serviceName: "", isApplicable: "" },
      ]);
    }
  };

  // premium package state
  const [packageNamePremium, setPackageNamePremium] = useState("");
  const [packageDescriptionPremium, setPackageDescriptionPremium] = useState(
    ""
  );
  const [deliveryTimePremium, setDeliveryTimePremium] = useState(0);
  const [revisionPremium, setRevisionPremium] = useState(0);
  const [pricePremium, setPricePremium] = useState("");
  const [onorCoinPremium, setOnorCoinPremium] = useState(0.0);
  const [extraServicePremium, setExtraServicePremium] = useState([
    { serviceName: "", isApplicable: "" },
  ]);

  const handleChangeServicePremium = (e, index) => {
    const { name, value } = e.target;
    const list = [...extraServicePremium];
    list[index][name] = value;
    setExtraServicePremium(list);
  };

  const handleRemoveServicePremium = (index) => {
    let list = [...extraServicePremium];
    list.splice(index, 1);
    setExtraServicePremium(list);
  };

  const handleAddServicePremium = () => {
    if (
      extraServicePremium[extraServicePremium.length - 1].serviceName !== "" &&
      extraServicePremium[extraServicePremium.length - 1].isApplicable !== ""
    ) {
      setExtraServicePremium([
        ...extraServicePremium,
        { serviceName: "", isApplicable: "" },
      ]);
    }
  };

  const [open, setOpen] = useState(false);

  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
    // save data to localStorage
    localStorage.setItem(
      "gig_package_onor_data_basic",
      JSON.stringify({
        package_name: packageNameBasic,
        package_description: packageDescriptionBasic,
        delivery_time: Number(deliveryTimeBasic),
        package_price: priceBasic,
        onor_coin: onorCoinBasic,
        revisions: Number(revisionBasic),
        services: [...extraServiceBasic],
        isCompleted: isCompletedBasic,
      })
    );

    localStorage.setItem(
      "gig_package_onor_data_basic_onor",
      JSON.stringify({
        package_name: packageNameBasicOnor,
        package_description: packageDescriptionBasicOnor,
        delivery_time: Number(deliveryTimeBasicOnor),
        package_price: priceBasicOnor,
        onor_coin: onorCoinBasicOnor,
        revisions: Number(revisionBasicOnor),
        services: [...extraServiceBasicOnor],
        isCompleted: isCompletedBasicOnor,
      })
    );

    localStorage.setItem(
      "gig_package_onor_data_standard",
      JSON.stringify({
        package_name: packageNameStandard,
        package_description: packageDescriptionStandard,
        delivery_time: Number(deliveryTimeStandard),
        package_price: priceStandard,
        onor_coin: onorCoinStandard,
        revisions: Number(revisionStandard),
        services: [...extraServiceStandard],
        isCompleted: isCompletedStandard,
      })
    );

    localStorage.setItem(
      "gig_package_onor_data_premium",
      JSON.stringify({
        package_name: packageNamePremium,
        package_description: packageDescriptionPremium,
        delivery_time: Number(deliveryTimePremium),
        package_price: pricePremium,
        onor_coin: onorCoinPremium,
        revisions: Number(revisionPremium),
        services: [...extraServicePremium],
        isCompleted: isCompletedPremium,
      })
    );
  };

  const backToPageOne = () => {
    if (!isUndefined(props.postAGig)) {
      console.log("STEP: " + props.postAGig.steps);
      if (props.postAGig.steps === 1) {
        props.history.push("/seller/create/summary");
      }
    }
  };

  useEffect(() => {
    backToPageOne();
  }, [props.postAGig]);

  const validator = () => {
    // basic

    console.log(_.size(extraServiceBasicOnor));
    let packageNameBasicError = "";
    let packageDescriptionBasicError = "";
    let deliveryTimeBasicError = "";
    let revisionBasicError = "";
    let priceBasicError = "";
    let onorCoinBasicError = "";
    let extraServiceBasicError = -1;
    if (packageNameBasic == "") {
      packageNameBasicError = "Package name is required";
    }
    if (packageDescriptionBasic == "") {
      packageDescriptionBasicError = "Package Description is required";
    }
    if (deliveryTimeBasic == "") {
      deliveryTimeBasicError = "Please specify a delivery time";
    }
    if (revisionBasic == "") {
      revisionBasicError = "Please specify the number of revisions";
    }
    if (priceBasic == "") {
      priceBasicError = "Price is required";
    }
    if (onorCoinBasic == "") {
      onorCoinBasicError = "";
    }
    const basicPackageExtraServicesValidator = () => {
      extraServiceBasic.map((key, index) => {
        if (key.serviceName == "" || key.isApplicable == "") {
          extraServiceBasicError = index;
          return true;
        }
      });
    };
    basicPackageExtraServicesValidator();
    if (
      packageNameBasicError ||
      packageDescriptionBasicError ||
      deliveryTimeBasicError ||
      revisionBasicError ||
      priceBasicError ||
      extraServiceBasicError > -1
    ) {
      setErrorsBasic({
        packageNameBasicError,
        packageDescriptionBasicError,
        deliveryTimeBasicError,
        revisionBasicError,
        priceBasicError,
        onorCoinBasicError,
        extraServiceBasicError,
      });
      handleChange("", 0);
      return false;
    } else {
      console.log("VALIDATION PASS BASIC");
      setIsCompletedBasic(true);
    }

    // basic onor
    if (
      packageNameBasicOnor ||
      packageDescriptionBasicOnor ||
      deliveryTimeBasicOnor ||
      revisionBasicOnor ||
      priceBasicOnor ||
      extraServiceBasicOnor[0].serviceName ||
      extraServiceBasicOnor[0].isApplicable
    ) {
      let packageNameBasicOnorError = "";
      let packageDescriptionBasicOnorError = "";
      let deliveryTimeBasicOnorError = "";
      let revisionBasicOnorError = "";
      let priceBasicOnorError = "";
      let onorCoinBasicOnorError = "";
      let extraServiceBasicOnorError = -1;
      if (packageNameBasicOnor == "") {
        packageNameBasicOnorError = "Package name is required";
      }
      if (packageDescriptionBasicOnor == "") {
        packageDescriptionBasicOnorError = "Package Description is required";
      }
      if (deliveryTimeBasicOnor == "") {
        deliveryTimeBasicOnorError = "Please specify a delivery time";
      }
      if (revisionBasicOnor == "") {
        revisionBasicOnorError = "Please specify the number of revisions";
      }
      if (priceBasicOnor == "") {
        priceBasicOnorError = "Price is required";
      }
      if (onorCoinBasicOnor == "") {
        onorCoinBasicOnorError = "";
      }
      const basicOnorPackageExtraServicesValidator = () => {
        extraServiceBasicOnor.map((key, index) => {
          if (key.serviceName == "" || key.isApplicable == "") {
            extraServiceBasicOnorError = index;
            return true;
          }
        });
      };
      basicOnorPackageExtraServicesValidator();
      if (
        packageNameBasicOnorError ||
        packageDescriptionBasicOnorError ||
        deliveryTimeBasicOnorError ||
        revisionBasicOnorError ||
        priceBasicOnorError ||
        extraServiceBasicOnorError > -1
      ) {
        setErrorsBasicOnor({
          packageNameBasicOnorError,
          packageDescriptionBasicOnorError,
          deliveryTimeBasicOnorError,
          revisionBasicOnorError,
          priceBasicOnorError,
          onorCoinBasicOnorError,
          extraServiceBasicOnorError:
            extraServiceBasicOnorError == -1 ? 0 : extraServiceBasicOnorError,
        });
        handleChange("", 1);
        return false;
      } else {
        console.log("VALIDATION PASS BASIC ONOR");
        setIsCompletedBasicOnor(true);
      }
    }

    // standard package
    if (
      packageNameStandard ||
      packageDescriptionStandard ||
      deliveryTimeStandard ||
      revisionStandard ||
      priceStandard ||
      extraServiceStandard[0].serviceName ||
      extraServiceStandard[0].isApplicable
    ) {
      let packageNameStandardError = "";
      let packageDescriptionStandardError = "";
      let deliveryTimeStandardError = "";
      let revisionStandardError = "";
      let priceStandardError = "";
      let onorCoinStandardError = "";
      let extraServiceStandardError = -1;
      if (packageNameStandard == "") {
        packageNameStandardError = "Package name is required";
      }
      if (packageDescriptionStandard == "") {
        packageDescriptionStandardError = "Package Description is required";
      }
      if (deliveryTimeStandard == "") {
        deliveryTimeStandardError = "Please specify a delivery time";
      }
      if (revisionStandard == "") {
        revisionStandardError = "Please specify the number of revisions";
      }
      if (priceStandard == "") {
        priceStandardError = "Price is required";
      }
      if (onorCoinStandard == "") {
        onorCoinStandardError = "";
      }
      const standardPackageExtraServicesValidator = () => {
        extraServiceStandard.map((key, index) => {
          if (key.serviceName == "" || key.isApplicable == "") {
            extraServiceStandardError = index;
            return true;
          }
        });
      };
      standardPackageExtraServicesValidator();
      if (
        packageNameStandardError ||
        packageDescriptionStandardError ||
        deliveryTimeStandardError ||
        revisionStandardError ||
        priceStandardError ||
        extraServiceStandardError > -1
      ) {
        setErrorsStandard({
          packageNameStandardError,
          packageDescriptionStandardError,
          deliveryTimeStandardError,
          revisionStandardError,
          priceStandardError,
          onorCoinStandardError,
          extraServiceStandardError:
            extraServiceStandardError == -1 ? 0 : extraServiceStandardError,
        });
        handleChange("", 2);
        return false;
      } else {
        setIsCompletedStandard(true);
        let standardData = JSON.parse(
          localStorage.getItem("gig_package_onor_data_standard")
        );
        localStorage.setItem(
          "gig_package_onor_data_standard",
          JSON.stringify({
            ...standardData,
            isCompleted: true,
          })
        );
      }
    }

    // premium
    if (
      packageNamePremium ||
      packageDescriptionPremium ||
      deliveryTimePremium ||
      revisionPremium ||
      pricePremium ||
      extraServicePremium[0].serviceName ||
      extraServicePremium[0].isApplicable
    ) {
      let packageNamePremiumError = "";
      let packageDescriptionPremiumError = "";
      let deliveryTimePremiumError = "";
      let revisionPremiumError = "";
      let pricePremiumError = "";
      let onorCoinPremiumError = "";
      let extraServicePremiumError = -1;
      if (packageNamePremium == "") {
        packageNamePremiumError = "Package name is required";
      }
      if (packageDescriptionPremium == "") {
        packageDescriptionPremiumError = "Package Description is required";
      }
      if (deliveryTimePremium == "") {
        deliveryTimePremiumError = "Please specify a delivery time";
      }
      if (revisionPremium == "") {
        revisionPremiumError = "Please specify the number of revisions";
      }
      if (pricePremium == "") {
        pricePremiumError = "Price is required";
      }
      if (onorCoinPremium == "") {
        onorCoinPremiumError = "";
      }
      const premiumPackageExtraServicesValidator = () => {
        extraServicePremium.map((key, index) => {
          if (key.serviceName == "" || key.isApplicable == "") {
            extraServicePremiumError = index;
            return true;
          }
        });
      };
      premiumPackageExtraServicesValidator();
      if (
        packageNamePremiumError ||
        packageDescriptionPremiumError ||
        deliveryTimePremiumError ||
        revisionPremiumError ||
        pricePremiumError ||
        extraServicePremiumError > -1
      ) {
        setErrorsPremium({
          packageNamePremiumError,
          packageDescriptionPremiumError,
          deliveryTimePremiumError,
          revisionPremiumError,
          pricePremiumError,
          onorCoinPremiumError,
          extraServicePremiumError:
            extraServicePremiumError == -1 ? 0 : extraServicePremiumError,
        });
        handleChange("", 3);
        return false;
      } else {
        console.log("VALIDATION PASS PREMIUM");
        setIsCompletedPremium(true);
      }
    }

    return true;
  };

  const handlePostPublicGig = async (isPrivate) => {
    if (validator()) {
      handleChange(value);
      props.appendPostAGigData({
        ...props.postAGig,
        isPrivate,
      });
      props.actionAddSteps({
        steps: 3,
      });
      props.actionStartProgress({
        isOpen: true,
      });
      props.history.push("/seller/create/verify");
      props.actionStopProgress();
    }
  };

  const from_jsx = (
    <Fragment>
      {open && (
        <SellerPrivateGigPublishDialog setOpen={setOpen} isOpen={open} />
      )}
      <Row className={"mt-2 mainDiv"}>
        <Col xs={12}>
          <Row>
            <Col
              xs={11}
              md={12}
              className={
                "d-flex align-items-center d-flex jutify-content-center"
              }
            >
              <ArrowBack
                style={{ cursor: "pointer" }}
                onClick={(e) => handleChange(this, value > 0 ? value - 1 : 0)}
              />
              <AppBar
                style={{ width: "100%" }}
                className={""}
                position="static"
                color="default"
              >
                <Tabs
                  value={value}
                  onChange={handleChange}
                  // variant="scrollable"
                  // scrollButtons="on"
                  indicatorColor="primary"
                  textColor="primary"
                  aria-label=""
                >
                  <Tab
                    className={classes.tabsPanel}
                    style={{ color: "#fa6331" }}
                    label="Basic"
                  />
                  <Tab
                    className={classes.tabsPanel}
                    style={{ color: "#fa6331" }}
                    label="Basic ONOR"
                  />
                  <Tab
                    className={classes.tabsPanel}
                    style={{ color: "#fa6331" }}
                    label="Standard"
                  />
                  <Tab
                    className={classes.tabsPanel}
                    style={{ color: "#fa6331" }}
                    label="Premium"
                  />
                </Tabs>
              </AppBar>
              <ArrowForward
                style={{ cursor: "pointer" }}
                onClick={(e) => handleChange(this, value < 3 ? value + 1 : 3)}
              />
            </Col>
          </Row>
          <TabPanel value={value} index={0}>
            <h4 className={"onor_span_color"}>Basic</h4>
            <Row className={"mt-3"}>
              <Col xs={3}>
                <label>Name your Package</label>
              </Col>
              <Col xs={9}>
                <input
                  onChange={(e) => {
                    setPackageNameBasic(e.target.value);
                    setErrorsBasic({});
                  }}
                  type={"text"}
                  value={packageNameBasic}
                  style={
                    errorsBasic.packageNameBasicError
                      ? { border: "1px solid red", boxShadow: "0 0 4px red" }
                      : null
                  }
                  className={"form-control"}
                  placeholder={"Name your Package"}
                />
                <span className={"text-danger"}>
                  {errorsBasic.packageNameBasicError}
                </span>
              </Col>
            </Row>
            <Row className={"mt-3"}>
              <Col xs={3}>
                <label>Describe your Package</label>
              </Col>
              <Col xs={9}>
                <textarea
                  onChange={(e) => {
                    setPackageDescriptionBasic(e.target.value);
                    setErrorsBasic({});
                  }}
                  className="form-control"
                  value={packageDescriptionBasic}
                  style={
                    errorsBasic.packageDescriptionBasicError
                      ? { border: "1px solid red", boxShadow: "0 0 4px red" }
                      : null
                  }
                  placeholder={"Describe your Package"}
                />
                <span className={"text-danger"}>
                  {errorsBasic.packageDescriptionBasicError}
                </span>
              </Col>
            </Row>
            <Row className={"mt-3"}>
              <Col xs={3}>
                <label>Delivery Time</label>
              </Col>
              <Col xs={9}>
                <select
                  onChange={(e) => {
                    setDeliveryTimeBasic(e.target.value);
                    setErrorsBasic({});
                  }}
                  className={"form-control"}
                  style={
                    errorsBasic.deliveryTimeBasicError
                      ? { border: "1px solid red", boxShadow: "0 0 4px red" }
                      : null
                  }
                >
                  <option value="" selected disabled>
                    --delivery time--
                  </option>
                  <option
                    value="7"
                    selected={deliveryTimeBasic == 7 ? "selected" : ""}
                  >
                    1 Week
                  </option>
                  <option
                    value="14"
                    selected={deliveryTimeBasic == 14 ? "selected" : ""}
                  >
                    2 Weeks
                  </option>
                  <option
                    value="21"
                    selected={deliveryTimeBasic == 21 ? "selected" : ""}
                  >
                    3 Weeks
                  </option>
                  <option
                    value="28"
                    selected={deliveryTimeBasic == 28 ? "selected" : ""}
                  >
                    4 Weeks
                  </option>
                </select>
                <span className={"text-danger"}>
                  {errorsBasic.deliveryTimeBasicError}
                </span>
              </Col>
            </Row>
            <Row className={"mt-3"}>
              <Col xs={3}>
                <label>Revisions</label>
              </Col>
              <Col xs={9}>
                <select
                  onChange={(e) => {
                    setRevisionBasic(e.target.value);
                    setErrorsBasic({});
                  }}
                  className={"form-control"}
                  style={
                    errorsBasic.revisionBasicError
                      ? { border: "1px solid red", boxShadow: "0 0 4px red" }
                      : null
                  }
                >
                  <option value="" selected disabled>
                    --select--
                  </option>
                  <option
                    value="1"
                    selected={revisionBasic == 1 ? "selected" : ""}
                  >
                    1
                  </option>
                  <option
                    value="2"
                    selected={revisionBasic == 2 ? "selected" : ""}
                  >
                    2
                  </option>
                  <option
                    value="3"
                    selected={revisionBasic == 3 ? "selected" : ""}
                  >
                    3
                  </option>
                  <option
                    value="4"
                    selected={revisionBasic == 4 ? "selected" : ""}
                  >
                    4
                  </option>
                  <option
                    value="5"
                    selected={revisionBasic == 5 ? "selected" : ""}
                  >
                    5
                  </option>
                </select>
                <span className={"text-danger"}>
                  {errorsBasic.revisionBasicError}
                </span>
              </Col>
            </Row>
            <Row className={"mt-3"}>
              <Col xs={3}>
                <label>Pricing</label>
              </Col>
              <Col xs={9}>
                <input
                  onChange={(e) => {
                    if (!isNaN(e.target.value) && e.target.value > 0) {
                      setPriceBasic(e.target.value);
                    } else {
                      setPriceBasic("");
                    }
                    setErrorsBasic({});
                  }}
                  value={priceBasic}
                  style={
                    errorsBasic.priceBasicError
                      ? { border: "1px solid red", boxShadow: "0 0 4px red" }
                      : null
                  }
                  type={"number"}
                  className={"form-control"}
                  placeholder={"Enter price"}
                  min="1"
                  step="1"
                />
                <span className={"text-danger"}>
                  {errorsBasic.priceBasicError}
                </span>
              </Col>
            </Row>
            {extraServiceBasic.map((value, index) => {
              return (
                <Row className={index === 0 ? "mt-3" : "mt-1"}>
                  <Col xs={3}>
                    {index == 0 && <label>Add extra service</label>}
                  </Col>
                  <Col xs={5}>
                    <input
                      type={"text"}
                      onChange={(e) => {
                        handleChangeServiceBasic(e, index);
                        setErrorsBasic({});
                      }}
                      value={value.serviceName}
                      className={"form-control"}
                      name={"serviceName"}
                      style={
                        errorsBasic.extraServiceBasicError == index
                          ? {
                              border: "1px solid red",
                              boxShadow: "0 0 4px red",
                            }
                          : null
                      }
                      placeholder={"Service"}
                    />
                  </Col>
                  <Col xs={3}>
                    <select
                      className={"form-control"}
                      onChange={(e) => {
                        handleChangeServiceBasic(e, index);
                        setErrorsBasic({});
                      }}
                      name={"isApplicable"}
                      style={
                        errorsBasic.extraServiceBasicError == index
                          ? {
                              border: "1px solid red",
                              boxShadow: "0 0 4px red",
                            }
                          : null
                      }
                    >
                      <option value="" selected disabled>
                        --select--
                      </option>
                      <option
                        selected={value.isApplicable == "true"}
                        value="true"
                      >
                        Applicable
                      </option>
                      <option
                        selected={value.isApplicable == "false"}
                        value="false"
                      >
                        Not Applicable
                      </option>
                    </select>
                  </Col>
                  <Col xs={1} className={"d-flex align-items-center"}>
                    {extraServiceBasic.length !== 1 && (
                      <HighlightOffIcon
                        onClick={(e) => handleRemoveServiceBasic(index)}
                        style={{ cursor: "pointer" }}
                      />
                    )}
                    {extraServiceBasic.length - 1 == index && (
                      <AddCircleOutlineIcon
                        onClick={(e) => handleAddServiceBasic()}
                        className={"mr-2"}
                        style={{ cursor: "pointer" }}
                      />
                    )}
                  </Col>
                </Row>
              );
            })}
          </TabPanel>
          <TabPanel value={value} index={1}>
            <h4 className={"onor_span_color"}>Basic ONOR</h4>
            <Row className={"mt-3"}>
              <Col xs={3}>
                <label>Name your Package</label>
              </Col>
              <Col xs={9}>
                <input
                  onChange={(e) => {
                    setPackageNameBasicOnor(e.target.value);
                    setErrorsBasicOnor({});
                  }}
                  type={"text"}
                  value={packageNameBasicOnor}
                  style={
                    errorsBasicOnor.packageNameBasicOnorError
                      ? { border: "1px solid red", boxShadow: "0 0 4px red" }
                      : null
                  }
                  className={"form-control"}
                  placeholder={"Name your Package"}
                />
                <span className={"text-danger"}>
                  {errorsBasicOnor.packageNameBasicOnorError}
                </span>
              </Col>
            </Row>
            <Row className={"mt-3"}>
              <Col xs={3}>
                <label>Describe your Package</label>
              </Col>
              <Col xs={9}>
                <textarea
                  onChange={(e) => {
                    setPackageDescriptionBasicOnor(e.target.value);
                    setErrorsBasicOnor({});
                  }}
                  className="form-control"
                  style={
                    errorsBasicOnor.packageDescriptionBasicOnorError
                      ? { border: "1px solid red", boxShadow: "0 0 4px red" }
                      : null
                  }
                  value={packageDescriptionBasicOnor}
                  placeholder={"Describe your Package"}
                />
                <span className={"text-danger"}>
                  {errorsBasicOnor.packageDescriptionBasicOnorError}
                </span>
              </Col>
            </Row>
            <Row className={"mt-3"}>
              <Col xs={3}>
                <label>Delivery Time</label>
              </Col>
              <Col xs={9}>
                <select
                  onChange={(e) => {
                    setDeliveryTimeBasicOnor(e.target.value);
                    setErrorsBasicOnor({});
                  }}
                  style={
                    errorsBasicOnor.deliveryTimeBasicOnorError
                      ? { border: "1px solid red", boxShadow: "0 0 4px red" }
                      : null
                  }
                  className={"form-control"}
                >
                  <option value="" selected disabled>
                    --delivery time--
                  </option>
                  <option
                    value="7"
                    selected={deliveryTimeBasicOnor == 7 ? "selected" : ""}
                  >
                    1 Week
                  </option>
                  <option
                    value="14"
                    selected={deliveryTimeBasicOnor == 14 ? "selected" : ""}
                  >
                    2 Weeks
                  </option>
                  <option
                    value="21"
                    selected={deliveryTimeBasicOnor == 21 ? "selected" : ""}
                  >
                    3 Weeks
                  </option>
                  <option
                    value="28"
                    selected={deliveryTimeBasicOnor == 28 ? "selected" : ""}
                  >
                    4 Weeks
                  </option>
                </select>
                <span className={"text-danger"}>
                  {errorsBasicOnor.deliveryTimeBasicOnorError}
                </span>
              </Col>
            </Row>
            <Row className={"mt-3"}>
              <Col xs={3}>
                <label>Revisions</label>
              </Col>
              <Col xs={9}>
                <select
                  onChange={(e) => {
                    setRevisionBasicOnor(e.target.value);
                    setErrorsBasicOnor({});
                  }}
                  className={"form-control"}
                  style={
                    errorsBasicOnor.revisionBasicOnorError
                      ? { border: "1px solid red", boxShadow: "0 0 4px red" }
                      : null
                  }
                >
                  <option value="" selected disabled>
                    --select--
                  </option>
                  <option
                    value="1"
                    selected={revisionBasicOnor == 1 ? "selected" : ""}
                  >
                    1
                  </option>
                  <option
                    value="2"
                    selected={revisionBasicOnor == 2 ? "selected" : ""}
                  >
                    2
                  </option>
                  <option
                    value="3"
                    selected={revisionBasicOnor == 3 ? "selected" : ""}
                  >
                    3
                  </option>
                  <option
                    value="4"
                    selected={revisionBasicOnor == 4 ? "selected" : ""}
                  >
                    4
                  </option>
                  <option
                    value="5"
                    selected={revisionBasicOnor == 5 ? "selected" : ""}
                  >
                    5
                  </option>
                  <span className={"text-danger"}>
                    {errorsBasicOnor.revisionBasicOnorError}
                  </span>
                </select>
              </Col>
            </Row>
            <Row className={"mt-3"}>
              <Col xs={3}>
                <label>Pricing</label>
              </Col>
              <Col xs={9}>
                <input
                  onChange={(e) => {
                    if (!isNaN(e.target.value) && e.target.value > 0) {
                      setPriceBasicOnor(e.target.value);
                    } else {
                      setPriceBasicOnor("");
                    }
                    setErrorsBasicOnor({});
                  }}
                  style={
                    errorsBasicOnor.priceBasicOnorError
                      ? { border: "1px solid red", boxShadow: "0 0 4px red" }
                      : null
                  }
                  value={priceBasicOnor}
                  type={"number"}
                  className={"form-control"}
                  placeholder={"Enter price"}
                  min="1"
                  step="1"
                />
                <span className={"text-danger"}>
                  {errorsBasicOnor.priceBasicOnorError}
                </span>
              </Col>
            </Row>
            {extraServiceBasicOnor.map((value, index) => {
              return (
                <Row className={"mt-3"}>
                  <Col xs={3}>
                    <label>Add extra service</label>
                  </Col>
                  <Col xs={5}>
                    <input
                      type={"text"}
                      style={
                        errorsBasicOnor.extraServiceBasicOnorError == index
                          ? {
                              border: "1px solid red",
                              boxShadow: "0 0 4px red",
                            }
                          : null
                      }
                      onChange={(e) => {
                        handleChangeServiceBasicOnor(e, index);
                        setErrorsBasicOnor({});
                      }}
                      value={value.serviceName}
                      className={"form-control"}
                      name={"serviceName"}
                      placeholder={"Service"}
                    />
                  </Col>
                  <Col xs={3}>
                    <select
                      className={"form-control"}
                      onChange={(e) => {
                        handleChangeServiceBasicOnor(e, index);
                        setErrorsBasicOnor({});
                      }}
                      name={"isApplicable"}
                      style={
                        errorsBasicOnor.extraServiceBasicOnorError == index
                          ? {
                              border: "1px solid red",
                              boxShadow: "0 0 4px red",
                            }
                          : null
                      }
                    >
                      <option value="" selected disabled>
                        --select--
                      </option>
                      <option
                        selected={value.isApplicable == "true"}
                        value="true"
                      >
                        Applicable
                      </option>
                      <option
                        selected={value.isApplicable == "false"}
                        value="false"
                      >
                        Not Applicable
                      </option>
                    </select>
                  </Col>
                  <Col xs={1} className={"d-flex align-items-center"}>
                    {extraServiceBasicOnor.length !== 1 && (
                      <HighlightOffIcon
                        onClick={(e) => handleRemoveServiceBasicOnor(index)}
                        style={{ cursor: "pointer" }}
                      />
                    )}
                    {extraServiceBasicOnor.length - 1 == index && (
                      <AddCircleOutlineIcon
                        onClick={(e) => handleAddServiceBasicOnor()}
                        className={"mr-2"}
                        style={{ cursor: "pointer" }}
                      />
                    )}
                  </Col>
                </Row>
              );
            })}
          </TabPanel>
          <TabPanel value={value} index={2}>
            <h4 className={"onor_span_color"}>Standard</h4>
            <Row className={"mt-3"}>
              <Col xs={3}>
                <label>Name your Package</label>
              </Col>
              <Col xs={9}>
                <input
                  onChange={(e) => {
                    setPackageNameStandard(e.target.value);
                    setErrorsStandard({});
                  }}
                  type={"text"}
                  style={
                    errorsStandard.packageNameStandardError
                      ? { border: "1px solid red", boxShadow: "0 0 4px red" }
                      : null
                  }
                  value={packageNameStandard}
                  className={"form-control"}
                  placeholder={"Name your Package"}
                />
                <span className={"text-danger"}>
                  {errorsStandard.packageNameStandardError}
                </span>
              </Col>
            </Row>
            <Row className={"mt-3"}>
              <Col xs={3}>
                <label>Describe your Package</label>
              </Col>
              <Col xs={9}>
                <textarea
                  onChange={(e) => {
                    setPackageDescriptionStandard(e.target.value);
                    setErrorsStandard({});
                  }}
                  className="form-control"
                  style={
                    errorsStandard.packageDescriptionStandardError
                      ? { border: "1px solid red", boxShadow: "0 0 4px red" }
                      : null
                  }
                  value={packageDescriptionStandard}
                  placeholder={"Describe your Package"}
                />
                <span className={"text-danger"}>
                  {errorsStandard.packageDescriptionStandardError}
                </span>
              </Col>
            </Row>
            <Row className={"mt-3"}>
              <Col xs={3}>
                <label>Delivery Time</label>
              </Col>
              <Col xs={9}>
                <select
                  onChange={(e) => {
                    setDeliveryTimeStandard(e.target.value);
                    setErrorsStandard({});
                  }}
                  className={"form-control"}
                  style={
                    errorsStandard.deliveryTimeStandardError
                      ? { border: "1px solid red", boxShadow: "0 0 4px red" }
                      : null
                  }
                >
                  <option value="" selected disabled>
                    --delivery time--
                  </option>
                  <option
                    value="7"
                    selected={deliveryTimeStandard == 7 ? "selected" : ""}
                  >
                    1 Week
                  </option>
                  <option
                    value="14"
                    selected={deliveryTimeStandard == 14 ? "selected" : ""}
                  >
                    2 Weeks
                  </option>
                  <option
                    value="21"
                    selected={deliveryTimeStandard == 21 ? "selected" : ""}
                  >
                    3 Weeks
                  </option>
                  <option
                    value="28"
                    selected={deliveryTimeStandard == 28 ? "selected" : ""}
                  >
                    4 Weeks
                  </option>
                </select>
                <span className={"text-danger"}>
                  {errorsStandard.deliveryTimeStandardError}
                </span>
              </Col>
            </Row>
            <Row className={"mt-3"}>
              <Col xs={3}>
                <label>Revisions</label>
              </Col>
              <Col xs={9}>
                <select
                  onChange={(e) => {
                    setRevisionStandard(e.target.value);
                    setErrorsStandard({});
                  }}
                  className={"form-control"}
                  style={
                    errorsStandard.revisionStandardError
                      ? { border: "1px solid red", boxShadow: "0 0 4px red" }
                      : null
                  }
                >
                  <option value="" selected disabled>
                    --select--
                  </option>
                  <option
                    value="1"
                    selected={revisionStandard == 1 ? "selected" : ""}
                  >
                    1
                  </option>
                  <option
                    value="2"
                    selected={revisionStandard == 2 ? "selected" : ""}
                  >
                    2
                  </option>
                  <option
                    value="3"
                    selected={revisionStandard == 3 ? "selected" : ""}
                  >
                    3
                  </option>
                  <option
                    value="4"
                    selected={revisionStandard == 4 ? "selected" : ""}
                  >
                    4
                  </option>
                  <option
                    value="5"
                    selected={revisionStandard == 5 ? "selected" : ""}
                  >
                    5
                  </option>
                </select>
                <span className={"text-danger"}>
                  {errorsStandard.revisionStandardError}
                </span>
              </Col>
            </Row>
            <Row className={"mt-3"}>
              <Col xs={3}>
                <label>Pricing</label>
              </Col>
              <Col xs={9}>
                <input
                  onChange={(e) => {
                    if (!isNaN(e.target.value) && e.target.value > 0) {
                      setPriceStandard(e.target.value);
                    } else {
                      setPriceStandard("");
                    }
                    setErrorsStandard({});
                  }}
                  style={
                    errorsStandard.priceStandardError
                      ? { border: "1px solid red", boxShadow: "0 0 4px red" }
                      : null
                  }
                  value={priceStandard}
                  type={"number"}
                  className={"form-control"}
                  placeholder={"Enter price"}
                  min="1"
                  step="1"
                />
                <span className={"text-danger"}>
                  {errorsStandard.priceStandardError}
                </span>
              </Col>
            </Row>
            {extraServiceStandard.map((value, index) => {
              return (
                <Row className={"mt-3"}>
                  <Col xs={3}>
                    <label>Add extra service</label>
                  </Col>
                  <Col xs={5}>
                    <input
                      type={"text"}
                      style={
                        errorsStandard.extraServiceStandardError == index
                          ? {
                              border: "1px solid red",
                              boxShadow: "0 0 4px red",
                            }
                          : null
                      }
                      onChange={(e) => {
                        handleChangeServiceStandard(e, index);
                        setErrorsStandard({});
                      }}
                      value={value.serviceName}
                      className={"form-control"}
                      name={"serviceName"}
                      placeholder={"Service"}
                    />
                  </Col>
                  <Col xs={3}>
                    <select
                      className={"form-control"}
                      onChange={(e) => {
                        handleChangeServiceStandard(e, index);
                        setErrorsStandard({});
                      }}
                      name={"isApplicable"}
                      style={
                        errorsStandard.extraServiceStandardError == index
                          ? {
                              border: "1px solid red",
                              boxShadow: "0 0 4px red",
                            }
                          : null
                      }
                    >
                      <option value="" selected disabled>
                        --select--
                      </option>
                      <option
                        selected={value.isApplicable == "true"}
                        value="true"
                      >
                        Applicable
                      </option>
                      <option
                        selected={value.isApplicable == "false"}
                        value="false"
                      >
                        Not Applicable
                      </option>
                    </select>
                  </Col>
                  <Col xs={1} className={"d-flex align-items-center"}>
                    {extraServiceStandard.length !== 1 && (
                      <HighlightOffIcon
                        onClick={(e) => handleRemoveServiceStandard(index)}
                        style={{ cursor: "pointer" }}
                      />
                    )}
                    {extraServiceStandard.length - 1 == index && (
                      <AddCircleOutlineIcon
                        onClick={(e) => handleAddServiceStandard()}
                        className={"mr-2"}
                        style={{ cursor: "pointer" }}
                      />
                    )}
                  </Col>
                </Row>
              );
            })}
          </TabPanel>
          <TabPanel value={value} index={3}>
            <h4 className={"onor_span_color"}>Premium</h4>
            <Row className={"mt-3"}>
              <Col xs={3}>
                <label>Name your Package</label>
              </Col>
              <Col xs={9}>
                <input
                  onChange={(e) => {
                    setPackageNamePremium(e.target.value);
                    setErrorsPremium({});
                  }}
                  type={"text"}
                  style={
                    errorsPremium.packageNamePremiumError
                      ? { border: "1px solid red", boxShadow: "0 0 4px red" }
                      : null
                  }
                  value={packageNamePremium}
                  className={"form-control"}
                  placeholder={"Name your Package"}
                />
                <span className={"text-danger"}>
                  {errorsPremium.packageNamePremiumError}
                </span>
              </Col>
            </Row>
            <Row className={"mt-3"}>
              <Col xs={3}>
                <label>Describe your Package</label>
              </Col>
              <Col xs={9}>
                <textarea
                  onChange={(e) => {
                    setPackageDescriptionPremium(e.target.value);
                    setErrorsPremium({});
                  }}
                  className="form-control"
                  style={
                    errorsPremium.packageDescriptionPremiumError
                      ? { border: "1px solid red", boxShadow: "0 0 4px red" }
                      : null
                  }
                  value={packageDescriptionPremium}
                  placeholder={"Describe your Package"}
                />
                <span className={"text-danger"}>
                  {errorsPremium.packageDescriptionPremiumError}
                </span>
              </Col>
            </Row>
            <Row className={"mt-3"}>
              <Col xs={3}>
                <label>Delivery Time</label>
              </Col>
              <Col xs={9}>
                <select
                  onChange={(e) => {
                    setDeliveryTimePremium(e.target.value);
                    setErrorsPremium({});
                  }}
                  className={"form-control"}
                  style={
                    errorsPremium.deliveryTimePremiumError
                      ? { border: "1px solid red", boxShadow: "0 0 4px red" }
                      : null
                  }
                >
                  <option value="" selected disabled>
                    --delivery time--
                  </option>
                  <option
                    value="7"
                    selected={deliveryTimePremium == 7 ? "selected" : ""}
                  >
                    1 Week
                  </option>
                  <option
                    value="14"
                    selected={deliveryTimePremium == 14 ? "selected" : ""}
                  >
                    2 Weeks
                  </option>
                  <option
                    value="21"
                    selected={deliveryTimePremium == 21 ? "selected" : ""}
                  >
                    3 Weeks
                  </option>
                  <option
                    value="28"
                    selected={deliveryTimePremium == 28 ? "selected" : ""}
                  >
                    4 Weeks
                  </option>
                </select>
                <span className={"text-danger"}>
                  {errorsPremium.deliveryTimePremiumError}
                </span>
              </Col>
            </Row>
            <Row className={"mt-3"}>
              <Col xs={3}>
                <label>Revisions</label>
              </Col>
              <Col xs={9}>
                <select
                  onChange={(e) => {
                    setRevisionPremium(e.target.value);
                    setErrorsPremium({});
                  }}
                  className={"form-control"}
                  style={
                    errorsPremium.revisionPremiumError
                      ? { border: "1px solid red", boxShadow: "0 0 4px red" }
                      : null
                  }
                >
                  <option value="" selected disabled>
                    --select--
                  </option>
                  <option
                    value="1"
                    selected={revisionPremium == 1 ? "selected" : ""}
                  >
                    1
                  </option>
                  <option
                    value="2"
                    selected={revisionPremium == 2 ? "selected" : ""}
                  >
                    2
                  </option>
                  <option
                    value="3"
                    selected={revisionPremium == 3 ? "selected" : ""}
                  >
                    3
                  </option>
                  <option
                    value="4"
                    selected={revisionPremium == 4 ? "selected" : ""}
                  >
                    4
                  </option>
                  <option
                    value="5"
                    selected={revisionPremium == 5 ? "selected" : ""}
                  >
                    5
                  </option>
                </select>
                <span className={"text-danger"}>
                  {errorsPremium.revisionPremiumError}
                </span>
              </Col>
            </Row>
            <Row className={"mt-3"}>
              <Col xs={3}>
                <label>Pricing</label>
              </Col>
              <Col xs={9}>
                <input
                  onChange={(e) => {
                    if (!isNaN(e.target.value) && e.target.value > 0) {
                      setPricePremium(e.target.value);
                    } else {
                      setPricePremium("");
                    }
                    setErrorsPremium({});
                  }}
                  style={
                    errorsPremium.pricePremiumError
                      ? { border: "1px solid red", boxShadow: "0 0 4px red" }
                      : null
                  }
                  value={pricePremium}
                  type={"number"}
                  className={"form-control"}
                  placeholder={"Enter price"}
                  min="1"
                  step="1"
                />
                <span className={"text-danger"}>
                  {errorsPremium.pricePremiumError}
                </span>
              </Col>
            </Row>
            {extraServicePremium.map((value, index) => {
              return (
                <Row className={"mt-3"}>
                  <Col xs={3}>
                    <label>Add extra service</label>
                  </Col>
                  <Col xs={5}>
                    <input
                      type={"text"}
                      onChange={(e) => {
                        handleChangeServicePremium(e, index);
                        setErrorsPremium({});
                      }}
                      style={
                        errorsPremium.extraServicePremiumError == index
                          ? {
                              border: "1px solid red",
                              boxShadow: "0 0 4px red",
                            }
                          : null
                      }
                      value={value.serviceName}
                      className={"form-control"}
                      name={"serviceName"}
                      placeholder={"Service"}
                    />
                  </Col>
                  <Col xs={3}>
                    <select
                      className={"form-control"}
                      onChange={(e) => {
                        handleChangeServicePremium(e, index);
                        setErrorsPremium({});
                      }}
                      name={"isApplicable"}
                      style={
                        errorsPremium.extraServicePremiumError == index
                          ? {
                              border: "1px solid red",
                              boxShadow: "0 0 4px red",
                            }
                          : null
                      }
                    >
                      <option value="" selected disabled>
                        --select--
                      </option>
                      <option
                        selected={value.isApplicable == "true"}
                        value="true"
                      >
                        Applicable
                      </option>
                      <option
                        selected={value.isApplicable == "false"}
                        value="false"
                      >
                        Not Applicable
                      </option>
                    </select>
                  </Col>
                  <Col xs={1} className={"d-flex align-items-center"}>
                    {extraServicePremium.length !== 1 && (
                      <HighlightOffIcon
                        onClick={(e) => handleRemoveServicePremium(index)}
                        style={{ cursor: "pointer" }}
                      />
                    )}
                    {extraServicePremium.length - 1 == index && (
                      <AddCircleOutlineIcon
                        onClick={(e) => handleAddServicePremium()}
                        className={"mr-2"}
                        style={{ cursor: "pointer" }}
                      />
                    )}
                  </Col>
                </Row>
              );
            })}
          </TabPanel>
        </Col>
        {/* <Col xs={1} className={'d-flex align-items-center'}>
                    <button type="button" class="btn"><ArrowForward /></button>
                </Col> */}
      </Row>
      <Row className={"mb-5"}>
        <Col md={4} sm={12} className="mycol d-flex justify-content-center">
          <h6 className="pb-3 mycol onor_span_color">Publish as</h6>
        </Col>
        <Col md={8} sm={12} className="mycol d-flex justify-content-between">
          <Button
            onClick={(e) => {
              props.history.push("/seller/create/summary");
            }}
            className={"mycol onor_secondery_btn px-sm-3 px-3 px-md-4 px-lg-5"}
          >
            Back
          </Button>
          <Button
            onClick={(e) => {
              // setOpen(true)
              handlePostPublicGig(true);
            }}
            className="mycol btn-sm onor_btn px-sm-3 px-3 px-md-4 px-lg-5"
          >
            Private
          </Button>
          <Button
            onClick={() => handlePostPublicGig(false)}
            // as={Link} to={"/seller/create/verify"}
            className="mycol onor_btn px-sm-3 px-3 px-md-4 px-lg-5"
          >
            Public
          </Button>
        </Col>
      </Row>
    </Fragment>
  );

  return (
    <Fragment>
      <Container>
        <Row>
          <Col>
            <BreadCrumbNav account={false} summary={true} />
          </Col>
        </Row>
        <Row className="mt-2 mb-2">
          <Col sm={6} className="">
            <h4 className={"header_h4"}>Packages</h4>
          </Col>
        </Row>
        {from_jsx}
      </Container>
    </Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    postAGig: state.postAGig,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actionDialogOpen: (payload) => dispatch(action_dialog_open(payload)),
    actionDialogClose: () => dispatch(action_dialog_close()),
    actionStartProgress: (payload) => dispatch(action_progress_start(payload)),
    actionStopProgress: () => dispatch(action_progress_stop()),
    appendPostAGigData: (payload) =>
      dispatch(action_append_post_a_gig_data(payload)),
    actionAddSteps: (payload) => dispatch(action_steps_of_post_a_gig(payload)),
  };
};

SellerPricing = withRouter(SellerPricing);
export default connect(mapStateToProps, mapDispatchToProps)(SellerPricing);