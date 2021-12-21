import React from "react";
import "./Banner.scss";

import { Carousel, CarouselItem } from "react-bootstrap";
//import Image1 from "../assets/HomePageImage_1.jpg";
//import Image2 from "../assets/HomePageImage_2.jpg";
//import Image3 from "../assets/HomePageImage_3.jpg";
import BannerImg from "../assets/banner.png";

const Banner = () => {
  return (
    <Carousel itemClass="carousel-item-padding-40-px" className="p-1">
      <Carousel.Item style={{ background: "grey" }}>
        <img
          style={{ margin: "auto" }}
          className="d-block w-100"
          src={BannerImg}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item style={{ background: "grey" }}>
        <img
          style={{ margin: "auto" }}
          className="d-block w-100"
          src={BannerImg}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item style={{ background: "grey" }}>
        <img
          style={{ margin: "auto" }}
          className="d-block w-100"
          src={BannerImg}
          alt="First slide"
        />
      </Carousel.Item>
      {/* <Carousel.Item style={{ background: "grey" }}>
        <img
          style={{ margin: "auto" }}
          className="d-block w-25"
          src={Image2}
          //"https://picsum.photos/1200/500"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption> 
      </Carousel.Item>
      <Carousel.Item style={{ background: "grey" }}>
        <img
          style={{ margin: "auto" }}
          className="d-block w-50"
          src={Image3}
          //"https://picsum.photos/1200/500"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption> 
      </Carousel.Item> */}
    </Carousel>
  );
};

export default Banner;
