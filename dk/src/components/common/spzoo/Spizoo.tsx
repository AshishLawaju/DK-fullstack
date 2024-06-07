"use client";
import Image from "next/image";
import { FaArrowRightLong, FaPlay } from "react-icons/fa6";
import Slider from "react-slick";
import union from "./assets/Union.png";
import pattern1 from "./assets/pattern.png";
import { url } from "inspector";
import spizo1 from "./assets/spizo1.png";

import delivery1 from "./assets/delivery1.jpg";
import delivery2 from "./assets/delivery2.jpg";
import delivery3 from "./assets/delivery3.jpg";
import Link from "next/link";
import "./spizoocss.css"
// import Router from "next/router";
const Spzoo = () => {
  let settings = {
    // dots: true,
    infinite: true,

    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 3000,
    arrows: false,
  };
  return (
    <section className="bg-[#f7f7f7] py-8 sm:py-14 lg:py-16">
      <div className="container flex gap-12 items-center">
        <div className="flex-1">
          <h3 className="font-semibold  text-2xl lg:text-3xl">
            Dk Solutions  Sp.zo.o
          </h3>
          <p className="mt-2 lg:mt-4">
            DK Solutions specializes in providing skilled professionals to top <br className="max-lg:hidden" />
            companies, offering tailored manpower solutions that empower success <br className="max-lg:hidden" />
            and enhance workforce with excellence and reliability on a global
            scale.
          </p>
          <p className="font-semibold mt-2 sm:mt-4 lg:mt-8">
            We provide services tailored to clients with business needs.
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2  sm:gap-4 lg:gap-8 mt-3 sm:mt-6 ">
            <div  className="flex gap-3 items-center w-full sm:w-[290px] rounded-3xl shadow-lg px-4  py-[10px] h-[58px]">
              <div className="h-[38px] w-[38px] bg-blue rounded-full  flex items-center justify-center ">
                <FaPlay className=" text-white h-[18px] w-[18px ]" />
              </div>
              Clothing
            </div>
            <div  className="flex gap-3 items-center w-full sm:w-[290px] rounded-3xl shadow-lg  px-4 py-[10px] h-[58px]">
              <div className="h-[38px] w-[38px] bg-[#05d6e3] rounded-full  flex items-center justify-center ">
                <FaPlay className=" text-white h-[18px] w-[18px ]" />
              </div>
              Delivery Partners
            </div>
            <div  className="flex gap-3 items-center w-full sm:w-[290px] rounded-3xl shadow-lg  px-4 py-[10px] h-[58px]">
              <div className="h-[38px] w-[38px] bg-[#f09e00] rounded-full  flex items-center justify-center ">
                <FaPlay className=" text-white h-[18px] w-[18px]" />
              </div>
              Packaging Services
            </div>
            <div  className="flex gap-3 items-center w-full sm:w-[290px] rounded-3xl shadow-lg  px-4 py-[10px] h-[58px]">
              <div className="h-[38px] w-[38px] bg-[#07E06b] rounded-full  flex items-center justify-center ">
                <FaPlay className=" text-white h-[18px] w-[18px ]" />
              </div>
              Cleaning Services
            </div>
          </div>
         <Link href={"/contact"}>
          <button
            type="button"
            className="btn bg-blue text-white flex items-center gap-2 rounded-lg  mt-6 sm:mt-10 lg:mt-14 "
            >
            Contact Us <FaArrowRightLong />
          </button>
            </Link>
        </div>
        <div
          className={`flex-1 max-w-[40%] h-[563px] max-sm:hidden  z-20  relative  overflow-hidden`}
        >
          <div
            className="absolute z-20 w-full left-0 top-0 h-full scale-x-100   ]"
            style={{
              backgroundImage: `url(${pattern1.src})`,
            }}
          ></div>
          <Slider {...settings}>
            <div className="w-full ">
              <Image
                alt="img"
                src={delivery1}
                className=" w-full "
                height={550}
              ></Image>
            </div>
            <div className="w-full ">
              <Image
                alt="img"
                src={delivery2}
                className="w-full"
                height={550}
              ></Image>
            </div>
            <div className="w-full ">
              <Image
                alt="img"
                src={delivery3}
                className="w-full"
                height={550}
              ></Image>
            </div>
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Spzoo;
