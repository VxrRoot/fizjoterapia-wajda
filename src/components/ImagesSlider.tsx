"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import "slick-carousel/slick/slick.css";

const ImagesSlider = () => {
  const settings = {
    infinite: true,
    speed: 1000,
    autoplaySpeed: 10000,
    slidesToShow: 1,
    autoplay: true,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 720,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div>
      <Slider {...settings} className="">
        <Image />
      </Slider>
    </div>
  );
};

export default ImagesSlider;
