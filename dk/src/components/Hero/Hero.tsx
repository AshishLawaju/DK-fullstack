"use client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Image, { StaticImageData } from "next/image";
import bg from "./images/heroo.jpg";
import albea from "./images/ALBEA.png";
import arisit from "./images/ARISIT.png";
import auro from "./images/AURORA.png";
import cordis from "./images/CORDIS.png";
import ebfec from "./images/EBFEC.png";
import imile from "./images/IMILE.png";
import shein from "./images/SHIEN.png";
import newscorp from "./images/newscorp.png";
import xailient from "./images/xailient.png";
import { Settings } from "@ant-design/react-slick";
import { defaultOverrides } from "next/dist/server/require-hook";

import hero1 from "./images/hero1.png";
import Script from "next/script";
import { useRef } from "react";
import Hero1slider from "./Hero1slider";
type HeroItem = {
  title: string;
  subtitle: string;
};
export type heroType = {
  photo: StaticImageData;
  // heroList: HeroItem[];
  heroList: {};
};

const Hero = ({ photo, heroList }: heroType) => {
  var settings: Settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: false,
  };

  const logoList = [albea, cordis, ebfec, imile, auro, shein];

  return (
    <>
      {/* <Slider {...settings}>
        <div>
          <h3>1</h3>
        </div>
      </Slider> */}

      <section className={`  w-full  lg:h-[100vh]x     `}>
        <div
          className="w-full h-[50vh] lg:h-[80vh] md:heroClip  bg-center bg-cover "
          style={{
            backgroundImage: `url(${photo.src})`,
          }}
        >
          <div className="w-full  lg:h-[70vh] flex items-center justify-center">
            <Slider {...settings} className=" w-full h-[50vh] lg:h-[70vh] ">
              {Array.isArray(heroList)
                ? heroList.map((data) => (
                    <div
                      key={data.title}
                      className=" h-[70vh] flex items-center justify-center  "
                    >
                      <div className="lg:w-[40%] text-white container mt-[40%] sm:mt-[18%] flex flex-col items-center gap-4 justify-center   font-bold text-center">
                        <h1 className="text-xl sm:text-2xl lg:text-4xl tracking-wider">
                          {/* Empowering Your Success <br /> with Skilled Hands <br /> */}
                          {data.title}
                        </h1>
                        <p className="lg:w-[80%] text-sm font-extralight  text-slate-100 tracking-wider leading-5">
                          {data.subtile}
                        </p>
                      </div>
                    </div>
                  ))
                : ""}
            </Slider>
          </div>
        </div>

       
      </section>
    </>
  );
};

export default Hero;
