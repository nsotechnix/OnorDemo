import React, { Fragment, useState } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'
import BreadCrumbNav from '../../components/BreadCrumbNav'
import './SellerPricing.scss'
import SellerPrivateGigPublishDialog from './dialogs/SellerPrivateGigPublishDialog'
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css'
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import illustration from '../../images/illustration.jpg'

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
      width: '100%',
      backgroundColor: theme.palette.background.paper,
      color: 'red'
    },
}))

let SellerPricing = (props) => {

    const [open, setOpen]= useState(false)

    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const from_jsx = (
        <Fragment>
            {open && <SellerPrivateGigPublishDialog setOpen={setOpen} isOpen={open}/>}
            <Row className={'mt-2'}>
                <Col>
                    <h4 className={'onor_span_color'}>Standard</h4>
                    <Row className={'mt-3'}>
                        <Col sm={6}>
                            <label>Name your Package</label>
                            <input type={"text"} className={"form-control"} placeholder={"Name your Package"} />
                        </Col>
                        <Col sm={6}>
                            <label>Describe your Package</label>
                            <textarea className="form-control" placeholder={'Describe your Package'}></textarea>
                        </Col>
                    </Row>
                    <Row className={'mt-3'}>
                        <Col sm={6}>
                            <label>Delivery Time</label>
                            <select className={"form-control"}>
                                <option value="" selected disabled>Delivery Time</option>
                                <option value="7">1 Week</option>
                                <option value="14">2 Weeks</option>
                                <option value="21">3 Weeks</option>
                                <option value="28">4 Weeks</option>
                            </select>
                        </Col>
                        <Col sm={6}>
                            <label>Revisions</label>
                            <select className={"form-control"}>
                                <option value="" selected disabled>Select</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </select>
                        </Col>
                    </Row>
                    <Row className={'mt-3'}>
                        <Col sm={6}>
                            <label>Pricing</label>
                            <input type={"number"} className={"form-control"} placeholder={"5 - 955"} />
                        </Col>
                        <Col sm={6}>
                            <label>Words Included</label>
                            <input type={"number"} className={"form-control"} placeholder={"Words Included"} />
                        </Col>
                    </Row>
                    <Row className={'mt-3'}>
                        <Col sm={6}>
                            <label>Add extra service</label>
                            <input type={"text"} className={"form-control"} placeholder={"Type here"} />
                        </Col>
                    </Row>
                    <Row className={'mt-3'}>
                        <Col sm={6} className={'d-flex justify-content-end'}>
                            <Button variant={'primary'} className={'onor_btn'}>ADD</Button>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row className={'mb-5'}>
                <Col md={4} className="mycol d-flex justify-content-center">
                    <h6 className="mycol onor_span_color">Publish as</h6>
                </Col>
                <Col md={4} className="mycol d-flex justify-content-between">
                    <Button onClick={e => {
                        setOpen(true)
                    }} className="mycol btn-sm onor_btn mx-4">Private</Button>
                    <Button as={Link} to={"/seller/create/verify"} className="mycol onor_btn mx-4">Public</Button>
                </Col>
                <Col md={4} className="mycol d-flex justify-content-end">
                    <Button onClick={e => {
                        props.history.push("/seller/create/summary")
                    }} className={'onor_secondery_btn'}>Back</Button>
                </Col>
            </Row>
        </Fragment>
    )

    return (
        <Fragment>
            <Container>
                <Row>
                    <Col>
                        <BreadCrumbNav
                            account={false}
                            summary={true}
                        />
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
    )
}
SellerPricing= withRouter(SellerPricing)
export default connect()(SellerPricing)
