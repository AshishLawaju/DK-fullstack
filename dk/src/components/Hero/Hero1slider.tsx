import Image from "next/image";
import React from "react";
import albea from "./images/ALBEA.png";
import arisit from "./images/ARISIT.png";
import auro from "./images/AURORA.png";
import cordis from "./images/CORDIS.png";
import ebfec from "./images/EBFEC.png";
import imile from "./images/IMILE.png";
import shein from "./images/SHIEN.png";
import Slider from "react-slick";
import "./hero1.css"
const Hero1slider = () => {
  const settings1 = {
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 5000,
    cssEase: "linear",
    pauseOnHover: false,
    // fade: true,
    // variableWidth: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
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
    <div className="bg-[#F7F7F7] max-lg:hidden pb-12">
      
    <div className="lg:h-[20vh]x   container  overflow-hidden text-[18px] font-semibold flex justify-between  items-center  lg:gap-12">
      <div className=" text-sm max-lg:hidden lg:mt-6">
        Our Valuable <br />{" "}
        <span className="text-xl   lg:text-[30px]">Clients</span>
      </div>
      <div className="container  rounded-3xl max-sm:hidden    ">
        {/* <h2>Auto Play {"&"} Pause with buttons</h2> */}
        <Slider {...settings1} className="flex   items-center justify-center slick-listx  slick-slidex slick-currentx " >
          <div className="w-[80px] h-[80px] flex items-start  ">
            <Image
              src={albea}
              alt="albea"
              width={150}
              height={100}
              className="  pb-3 absolute -top-4 "
              ></Image>
          </div>

          <div className="w-[80px] h-[80px]   ">
            <Image
              src={arisit}
              alt="albea"
              width={150}
              height={100}
              className="  pb-3 absolute -top-4 "
              ></Image>
          </div>

          <div className="w-[80px] h-[80px]   ">
            <Image
              src={auro}
              alt="albea"
              width={120}
              height={80}
              className="  pb-3 absolute -top-2 "
              ></Image>
          </div>

          <div className="w-[80px] h-[80px]  ">
            <Image
              src={cordis}
              alt="albea"
              width={150}
              height={100}
              className="  pb-3 absolute -top-4 "
              ></Image>
          </div>

          <div className="w-[80px] h-[80px]   ">
            <Image
              src={ebfec}
              alt="albea"
              width={150}
              height={100}
              className="  pb-3 absolute -top-4 "
              ></Image>
          </div>

          <div className="w-[80px] h-[80px]  ">
            <Image
              src={imile}
              alt="albea"
              width={150}
              height={100}
              className="  pb-3 absolute -top-4 "
              ></Image>
          </div>
          {/* <div className="w-[80px] h-[80px]  border pb-3 absolute -top-4  border pb-3 absolute -top-4-blue ">
          <Image src={newscorp} alt="albea" width={150} height={100} ></Image>
        </div> */}
          <div className="w-[80px] h-[80px] ">
            <Image
              src={shein}
              alt="albea"
              width={150}
              height={100}
              className="  pb-3 absolute -top-4 "
              ></Image>
          </div>
          {/* <div className="w-[80px] h-[80px] border border-blue ">
          <Image src={xailient} alt="albea" width={150} height={100} ></Image>
        </div> */}
        </Slider>
      </div>
    </div>
        </div>
  );
};

export default Hero1slider;
