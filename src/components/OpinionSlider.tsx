"use client";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const opinions = [
  {
    id: 1,
    author: "Dorota",
    title: "Podopieczna",
    text: ',,Serdecznie polecam Panią Patrycję. Trafnie zdiagnozowała problem, a także odpowiednio dobrała działania. Po zaledwie trzech wizytach odczułam znaczną poprawę. Do tej pory ból nie wrócił!"',
  },
  {
    id: 2,
    author: "Wiktor",
    title: "Podopieczny",
    text: ',,Świetna atmosfera i profesjonalne podejście do klienta. Pani Patrycja posiada potężną wiedzę i doskonale wie jak ją użyć, aby po pierwszej wizycie były widoczne efekty, wiążące się z ogromnym zadowoleniem klienta. Szczerze polecam i zachęcam do zapisów!"',
  },
];

const OpinionSlider = () => {
  const [paddingLeft, setPaddingLeft] = useState(0);

  useEffect(() => {
    function onResize() {
      if (window.innerWidth > 1520) {
        if (window.innerWidth > 1920) {
          setPaddingLeft(200);
        } else {
          setPaddingLeft((window.innerWidth - 1520) / 2);
        }
      } else {
        setPaddingLeft(0);
      }
    }

    window.addEventListener("resize", onResize);
    onResize();
    return () => window.removeEventListener("resize", onResize);
  }, []);

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
    <div
      className={`max-w-[1920px] mx-auto relative`}
      style={{ paddingLeft: `${paddingLeft}px` }}
    >
      <div className="slider-container">
        <div style={{}}>
          <Slider
            {...settings}
            className="[&_.slick-track]:flex [&_.slick-track]:gap-10 cursor-pointer"
          >
            {opinions.map(({ text, id, author, title }, idx) => {
              return (
                <div key={`${idx}-${id}`} className="">
                  <p className="lg:text-5xl text-2xl syne leading-normal mb-8 font-light text-white">
                    {text}
                    <span className="lg:text-5xl text-3xl italic ">
                      - {author}
                    </span>
                  </p>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default OpinionSlider;