import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/effect-coverflow/effect-coverflow.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";
import SliderImageOne from "../images/1_color.png";
import SliderImageTwo from "../images/2_color.png";
import SliderImageThree from "../images/3_color.png";
import SliderImageFour from "../images/4_color.png";
import SliderImageFive from "../images/5_color.png";
import SliderImageSix from "../images/6_color.png";
import SliderImageSeven from "../images/7_color.png";
import SliderImageEight from "../images/8_color.png";
import SliderImageNine from "../images/9_color.png";
import "./CarousalSlide.scss";
import SwiperCore, {
  EffectCoverflow,
  Pagination,
  Navigation,
} from "swiper/core";

SwiperCore.use([EffectCoverflow, Pagination, Navigation]);

export default function Slider() {
  return (
    <div className="containerSlider">
      <Swiper
        navigation={false}
        effect={"coverflow"}
        centeredSlides={true}
        slidesPerView={window.innerWidth < 768 ? 3 : "auto"}
        loop={true}
        coverflowEffect={{
          rotate: 0,
          stretch: 5,
          depth: 120,
          modifier: 1.5,
          slideShadows: false,
        }}
        pagination={{
          clickable: true,
        }}
        className="mySwiper"
      >
        <SwiperSlide className="swiper_card">
          <img src={SliderImageOne} className="rotate-imageone" />
        </SwiperSlide>
        <SwiperSlide className="swiper_card">
          <img src={SliderImageTwo} className="rotate-imagetwo" />
        </SwiperSlide>
        <SwiperSlide className="swiper_card">
          <img src={SliderImageThree} className="rotate-imagethree" />
        </SwiperSlide>
        <SwiperSlide className="swiper_card">
          <img src={SliderImageFour} className="rotate-imagefour" />
        </SwiperSlide>
        <SwiperSlide className="swiper_card">
          <img src={SliderImageFive} className="rotate-imagefive" />
        </SwiperSlide>
        <SwiperSlide className="swiper_card">
          <img src={SliderImageSix} className="rotate-imagesix" />
        </SwiperSlide>
        <SwiperSlide className="swiper_card">
          <img src={SliderImageSeven} className="rotate-imageseven" />
        </SwiperSlide>
        <SwiperSlide className="swiper_card">
          <img src={SliderImageEight} className="rotate-imageeight" />
        </SwiperSlide>
        <SwiperSlide className="swiper_card">
          <img src={SliderImageNine} className="rotate-imagenine" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
