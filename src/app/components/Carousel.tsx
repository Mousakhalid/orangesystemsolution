"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import SwiperCore, { Autoplay } from "swiper";
import Image from "next/image";
const Carousel = () => {
  return (
    <div>
      <Swiper
        className="flex flex-col"
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
      >
        <SwiperSlide>{Slide()}</SwiperSlide>
        <SwiperSlide>{Slide()}</SwiperSlide>
        <SwiperSlide>{Slide()}</SwiperSlide>
        <SwiperSlide>{Slide()}</SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Carousel;

function Slide() {
  return (
    <div>
      <Image
        src={"/images/about.jpg"}
        alt="Carousel"
        width={240}
        height={200}
      />
      <div>
        <h1>We are industry leaders</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
          quidem soluta at nam. Consequatur accusantium fugiat eaque beatae
          minus! Porro exercitationem amet fugiat id. Quidem quos laborum nemo
          maiores alias?
        </p>
      </div>
    </div>
  );
}
