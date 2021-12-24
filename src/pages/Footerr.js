import { Container, Row, Col } from "react-bootstrap";
import React from "react";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { AiOutlineMail } from "react-icons/ai";
import { IoCallOutline, IoLocationOutline } from "react-icons/io5";
import { GoMail } from "react-icons/go";
import Logo from "../images/onorlogo_white.png";
import "./Footerr.css";

function Footerr() {
  return (
    <Container fluid className="footer_conatiner">
      <Row>
        <Col md={1}>
          <img className="footer_2_logo" src={Logo} />
        </Col>
        <Col className="link_column" style={{ marginTop: "35px" }} md={9}>
          <p className="footer_link">About us</p>
          <p className="footer_link">Review</p>
          <p className="footer_link">Hacks & Tips</p>
          <p className="footer_link">Contact Us</p>
        </Col>
        <Col md={2}>
          <FaFacebookF className="social_icons" />
          <FaTwitter className="social_icons" />
          <FaInstagram className="social_icons" />
        </Col>
        <Col style={{ display: "flex", marginTop: "20px" }} md={12}>
          <IoCallOutline className="footer_icon" />{" "}
          <p className="footer_icon_text">(240) 883-7445</p>
          <AiOutlineMail className="footer_icon" />{" "}
          <p className="footer_icon_text"> info@onor.world </p>
          <IoLocationOutline className="footer_icon" />{" "}
          <p className="footer_icon_text"> Arlington, VA , USA</p>
        </Col>
      </Row>
      <Row>
        <Col style={{ display: "flex", marginTop: "20px" }} md={12}>
          <FaFacebookF className="social_icons_mobile" />
          <FaTwitter className="social_icons_mobile" />
          <FaInstagram className="social_icons_mobile" />
        </Col>
        <Col style={{ display: "flex", marginBottom: "40px" }} md={10}>
          <p className="footer_text">Privacy Policy </p>
          <p className="footer_text"> Terms & Conditions</p>
          <p className="footer_text"> Conduct & Dispute resolution</p>
        </Col>

        <Col md={2}>
          <p className="footer_text_rights">
            &copy;2021 ONOR |All Rights Reserved
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default Footerr;
