"use client";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { useRef, useState } from "react";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import Slider from "react-slick";
import p1 from "../../../app/careers/assets/p1.jpg";
import p2 from "../../../app/careers/assets/p2.avif";
import p3 from "../../../app/careers/assets/p3.jpg";
import p4 from "../../../app/careers/assets/p4.jpg";
import p5 from "../../../app/careers/assets/p5.avif";
import p6 from "../../../app/careers/assets/p6.jpg";
import p7 from "../../../app/careers/assets/p7.jpg";
import p8 from "../../../app/careers/assets/p8.jpg";
import styles from "./ExpertSlider.module.css"; // Import CSS module

const Expert = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slider = useRef();
  const professionalList = [
    {
      photo: p2,
      title: "CNC Machine Operator",
    },
    {
      photo: p3,
      title: "Grinder",
    },
    {
      photo: p4,
      title: "Production Helper",
    },
    {
      photo: p1,
      title: "Delivery Van",
    },
    {
      photo: p5,
      title: "Packager",
    },
    {
      photo: p6,
      title: "Salesman",
    },
    {
      photo: p7,
      title: "Cleaner",
    },
    {
      photo: p8,
      title: "Driver",
    },
  ];

  function SampleNextArrow(props: any) {
    const { onClick } = props;
    return (
      <div
        className="max-sm:hidden w-[40px] h-[40px] absolute -top-20  left-[80%] lg:left-[78%] ta hover:translate-x-1 transition-all duration-300 border-2 cursor-pointer text-blue border-blue z-10 flex items-center justify-center rounded-full hover:bg-blue hover:text-white"
        onClick={onClick}
      >
        <FaArrowRightLong />
      </div>
    );
  }

  function SamplePrevArrow(props: any) {
    const { onClick } = props;
    return (
      <div
        className="max-sm:hidden w-[40px] h-[40px] absolute -top-20 left-[73%] lg:left-[74%] hover:-translate-x-1 transition-all duration-300 border-2 cursor-pointer text-blue border-blue z-10 flex items-center justify-center rounded-full hover:bg-blue hover:text-white"
        onClick={onClick}
      >
        <FaArrowLeftLong />
      </div>
    );
  }

  let settings3 = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    appendDots: (dots: any) => (
      <div className="sm:hidden">
        <ul>{dots}</ul>
      </div>
    ),
    customPaging: (i:any) => (
      <div
        className={`h-2 rounded-full ${
          currentIndex == i
            ? "bg-blue sm:hidden w-5 transition-all duration-300 -translate-x-1"
            : "bg-[#c6c1c1] sm:hidden border-[#d3c7c7] w-2"
        }`}
      ></div>
    ),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="ee bg-light-background py-6 md:py-14 lg:py-16 overflow-hidden ">
      <div className="flex flex-col gap-5">
        <p className="text-2xl container lg:text-[32px] font-semibold text-[#14213A]">
          Expert Professionals, <br />
          Exceptional Results
        </p>
        <hr className="w-full border container" />
        <div className="flex items-end w-full relative justify-end ee  max-sm:ml-3">
          <>
            <Slider
              {...settings3}
              ref={slider}
              afterChange={(newIndex) => {
                setCurrentIndex(newIndex);
              }}
              className={`${styles.slickSlider} flex md:gap-4    w-full -left-4 sm:left-[1%] lg:left-[8%] sm:absolute`}
            >
              {professionalList.map((el, index) => (
                <div
                  key={el.title + index}
                  className={`${styles.slickSlide} sm:w-[300px] w-[350px] h-[350px] rounded-3xl overflow-hidden relative cursor-pointer`}
                 /*  style={{
                    backgroundImage:`url(${p1.src})`
                  }} */
                >
                  <div className="relative h-full w-full rounded-3xl overflow-hidden">

                  <Image
                    src={el.photo}
                    alt=""
                    className="object-cover bg-center h-full "
                    ></Image>
                {  <div className="h-full w-full  absolute z-10 bg-gradient-to-t from-black/70 to-black/0 top-0 left-0 text-white text-start flex items-end p-8">
                    {el.title}
                  </div>}
                    </div>
                </div>
              ))}
            </Slider>
          </>
        </div>
      </div>
    </section>
  );
};

export default Expert;
