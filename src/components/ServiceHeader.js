import React, { useState } from "react";
import "./ServiceHeader.scss";
import GridImg1 from "../images/GridImg1.png";
import GridImg2 from "../images/GridImg2.png";
import GridImg3 from "../images/GridImg3.png";
import GridImg4 from "../images/GridImg4.png";
import Button from "react-bootstrap/Button";
import { Link, withRouter } from "react-router-dom";
import { Col, Row } from "react-bootstrap";
import SearchIcon from '@material-ui/icons/Search'

function ServiceHeader(props) {
  const [searchedTerm, setSearchedTerm] = useState("")
  return (
    <div className="service_parent mt-3">
      {/* <div>
            <div className="service_text vertical">Featured Sessions</div>
          </div> */}
      {/* <img className="service_img" src={GridImg} alt="services"></img> */}
      {/* <Row className={'service_img'}>
        <Row>
          <Col xs={6}>
            <img className="img-responsive pl-2 r-shadow" style={{ width: '90%', height: '70%' }} src={GridImg1} alt="services"></img>
            <center><h3>Full-Face Makeup</h3></center>
          </Col>
          <Col xs={6}>
            <img className="img-responsive pr-2 lb-shadow" style={{ width: '90%', height: '70%' }} src={GridImg2} alt="services"></img>
            <center><h3>Makeup kit Reco</h3></center>
          </Col>
        </Row>
        <Row>
          <Col xs={6}>
            <img className="img-responsive pl-2 tr-shadow rb-shadow" style={{ width: '90%', height: '70%' }} src={GridImg3} alt="services"></img>
            <center><h3>Smoky Eyes</h3></center>
          </Col>
          <Col xs={6}>
            <img className="img-responsive pr-2 tl-shadow" style={{ width: '90%', height: '70%' }} src={GridImg4} alt="services"></img>
            <center><h3>Lips</h3></center>
          </Col>
        </Row>
      </Row> */}
      <Row className={'mt-lg-5 mt-2 d-flex justify-content-center'}>
        <Col sm={8}>
          <div className="service_add m-0">
            {props.isRequest === 1 ? (
              <div className="service_body glowing">
                <div className="service_text" style={{ letterSpacing: '2px' }}>
                  Do you have any custom requirement?
              </div>
                <div className="service_text" style={{ letterSpacing: '2px' }}>We are here to help...</div>
                <Button
                  className="btn btn-primary mt-4"
                  style={{ fontSize: '.8em', padding: '11px 40px', marginRight: '1em', borderRadius: '7px' }}
                  onClick={e => props.history.push("/buyer/postrequest")}
                >
                  Post a Request
            </Button>
              </div>
            ) : (
              <div className="service_body">
                <div className="service_text" style={{ letterSpacing: '2px' }}>
                  Want to enter the world of freelancing?
            </div>
                <div className="service_text" style={{ letterSpacing: '2px' }}>We are here to help...</div>
                <Button
                  className="btn btn-primary mt-4"
                  style={{ fontSize: '.8em', padding: '11px 40px', marginRight: '1em', borderRadius: '7px' }}
                  onClick={e => props.history.push("/seller/create/summary")}
                >
                  Post a Session
            </Button>
              </div>
            )}
          </div>
        </Col>
        <Col sm={8}>
          <Row className={'mt-4 d-flex justify-content-center'}>
            <Col xs={9}>
              <div className="input-group">
                <div className="input-group-prepend">
                  <button className="btn btn-outline-secondary" type="button" style={{ border: '1px solid lightgrey', borderRight: '1px solid white' }}><SearchIcon /></button>
                </div>
                <input
                  type="text"
                  className="form-control input-lg p-4 rounded"
                  placeholder="Find real-time services"
                  aria-label=""
                  aria-describedby="basic-addon1"
                  value={searchedTerm}
                  fullWidth
                  onChange={(e) => setSearchedTerm(e.target.value)}
                  onKeyPress={(e) => {
                    if (e.key === "Enter") {
                      // handleGigSearch()
                      e.target.value !== '' && props.history.push('/search/' + e.target.value)
                    }
                  }} />
              </div>
            </Col>
            <Col xs={3} className={'d-flex justify-content-end pl-1'}>
              <button
                onClick={(e) => {
                  // handleGigSearch()
                  searchedTerm !== '' && props.history.push('/search/' + searchedTerm)
                }}
                className={'btn btn-primary btn-sm searchBtn'} style={{ fontSize: '1em', marginRight: '1em', borderRadius: '7px' }}>Search</button>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
}

export default withRouter(ServiceHeader);
