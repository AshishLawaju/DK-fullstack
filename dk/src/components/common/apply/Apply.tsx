import React, { useRef, useState } from "react";
import { FaArrowRightLong, FaCheck } from "react-icons/fa6";
import apply from "./assets/apply.png";
import Slider from "react-slick";
import Image from "next/image";
import cleaning1 from "./assets/cleaning1.jpg";
import cleaning2 from "./assets/cleaning2.jpg";
import cleaning3 from "./assets/cleaning3.jpg";
import Link from "next/link";
import "./dot.css";
const Apply = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const slider = useRef();
  const settings = {
    dots: true,
    infinite: true,

    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 4000,
    appendDots: (dots: any) => (
      <div style={{}} className="">
        <ul style={{}} className=" z-20 absolute left-[44%]">
          <div className="">{dots}</div>
        </ul>
      </div>
    ),
    customPaging: (i: any) => (
      <div
        style={{}}
        className={`h-[6px] bg-[#f7f7f7] ${
          currentIndex == i ? "w-5 -translate-x-2  transition-all " : "w-[6px] "
        }  duration-300 rounded-full`}
        /*  className={` h-2 rounded-full ${
          currentIndex == i
            ? "bg-blue sm:hidden w-5 transition-all duration-300 "
            : "bg-[#c6c1c1] sm:hidden  border-[#d3c7c7] w-2"
        } `} */
      >
        {/* {i + 1} */}
      </div>
    ),
  };
  return (
    <section className="bg-dark-background">
      <div className="container text-white flex py-8 sm:py-14 lg:py-16 ">
        <div className="flex-1 max-lg:hidden">
          <Slider
            ref={slider}
            {...settings}
            className=" h-[560px] w-[500px]"
            afterChange={(newIndex) => {
              setCurrentIndex(newIndex);
            }}
          >
            <Image
              src={cleaning1}
              className="rounded-lg md:w-[300px] lg:h-[560px] object-cover"
              alt="apply"
            ></Image>
            <Image
              src={cleaning2}
              className="rounded-lg  md:w-[300px] h-[560px] object-cover"
              alt="apply"
            ></Image>
            <Image
              src={cleaning3}
              className="rounded-lg md:w-[300px] h-[560px] object-cover"
              alt="apply"
            ></Image>
          </Slider>
        </div>
        <div className="flex-1 flex flex-col justify-center ">
          <h3 className="text-blue font-semibold text-[22px]">
            Gateway to Global Careers
          </h3>
          <h4 className="font-semibold text-2xl sm:text-3xl mt-4  flex flex-col gap-3">
            <span className="">
              Apply From Anywhere, <br />
            </span>

            <span className=" ">Achieve Everywhere!</span>
          </h4>
          <div className="text-[#d9d9d9] mt-4 font-medium">
            <p>
              Explore international job opportunities and unlock your potential
              in Poland and Hungary, a vibrant destination for global success.
            </p>
            <p className="mt-4">
              {" "}
              We connect talented professionals from around the world to
              limitless opportunities, making us the gateway to your career
              achievements.
            </p>
          </div>

          <div className="mt-6 flex flex-col gap-[10px]">
            <p className="flex items-center gap-2">
              <FaCheck /> Easy Process
            </p>
            <p className="flex items-center gap-2">
              <FaCheck /> Cultural Diversity
            </p>
            <p className="flex items-center gap-2">
              <FaCheck /> Quality of Work Environment
            </p>
          </div>
          <div className="mt-4 sm:mt-8 lg:mt-10">
            <Link href={"/contact"}>
              <button
                className="flex items-center btn  bg-blue  rounded-lg gap-[10px] btnHover  font-medium lg:h-[48px] "
                type="button"
              >
                Apply Now <FaArrowRightLong />{" "}
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Apply;
