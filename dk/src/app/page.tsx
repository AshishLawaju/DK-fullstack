"use client";
// libs/lenis.js

/* export * from "lenis/react";
import Lenis from "lenis"; */
// import { ReactLenis, useLenis } from 'libs/lenis'

import React, { useEffect, useRef, useState } from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import discover1 from "./assets/discover1.jpg";
import discover2 from "./assets/discover2.png";
import discover3 from "./assets/discover3.png";
import icon1 from "./assets/icons/icon1.png";
import icon2 from "./assets/icons/icon2.png";
import icon3 from "./assets/icons/icon3.png";
import icon4 from "./assets/icons/icon4.png";
import nepal from "./assets/nepal.jpg";
import india from "./assets/india.jpg";
import poland from "./assets/poland.jpg";
import hungary from "./assets/hungary.jpg";

import Gallary from "./services/Gallary";
import hero1 from "./assets/hero1.png";
import { blogData, heroData1 } from "./constant/constant";
import AOS from "aos";
import "aos/dist/aos.css";
import Script from "next/script";

import p1 from "./careers/assets/p1.jpg";
import p2 from "./careers/assets/p2.avif";
import p3 from "./careers/assets/p3.jpg";
import p4 from "./careers/assets/p4.jpg";
import p5 from "./careers/assets/p5.avif";
import p6 from "./careers/assets/p6.jpg";
import p7 from "./careers/assets/p7.jpg";
import p8 from "./careers/assets/p8.jpg";
import Lenis from "lenis";
import Hero from "../components/Hero/Hero";
import Hero1slider from "../components/Hero/Hero1slider";
import Recruitment from "../components/common/recruitment/Recruitment";
import Spzoo from "../components/common/spzoo/Spizoo";
import Apply from "../components/common/apply/Apply";
import BlogCard from "../components/common/blog/BlogCard";
import Footer2 from "../components/common/footer/Footer2";
import { useRouter } from "next/navigation";
import DKhero from "../components/Hero/DKhero";
import Expert from "../components/common/expert/Expert";
import HeroDK from "../components/Hero/HeroDK";
const Home = () => {
  const router = useRouter();

  useEffect(() => {
    AOS.init();
  }, []);

  /*   useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []); */

  /* scroll */

  return (
    <main>
      {/* <Hero photo={hero1} heroList={heroData1} />
      
      */}
      {/* <DKhero/> */}
      <HeroDK />

      <Hero1slider />

      <Recruitment />

      <Expert />

      {
        <section className="bg-dark-background py-8 md:py-14 lg:py-20 lg:pt-24 ">
          <div className="container flex gap-24">
            <div className="max-lg:hidden h-[467px]  w-[311px]  relative flex flex-col items-end">
              <Image
                src={discover1}
                alt="discover"
                height={284}
                width={197}
                className="rounded-lg"
              ></Image>
              <Image
                src={discover2}
                alt="discover"
                height={127}
                width={178}
                className="absolute left-0 bottom-[28%]"
              ></Image>
              <Image
                src={discover3}
                alt="discover"
                height={154}
                width={255}
              ></Image>
            </div>

            <div className="text-white flex  flex-col justify-center gap-6  sm:gap-12">
              <div className="font-semibold text-xl md:text-2xl lg:text-3xl  ">
                <h3>
                  Discover what Dk Recruitment <br />{" "}
                </h3>
                <h3 className="sm:mt-2">brings to your Team / Company.</h3>
              </div>

              <div className=" grid grid-cols-1 sm:grid-cols-2  font-medium  gap-4 sm:gap-8 sm:text-sm">
                <div className="flex gap-4 items-center p-5 bg-[#1e2b44] rounded-lg ">
                  <div className="   w-[80px]  md:w-auto ">
                    <Image src={icon1} alt="icon" className=""></Image>
                  </div>
                  Connecting Top Companies with <br className="max-sm:hidden" />{" "}
                  Exceptional Talent
                </div>
                <div className="flex gap-4 items-center p-5 bg-[#1e2b44] rounded-lg">
                  <Image src={icon2} alt="icon"></Image>
                  Tailored Staffing <br /> Solutions
                </div>
                <div className="flex gap-4 items-center p-5 bg-[#1e2b44] rounded-lg">
                  <Image src={icon3} alt="icon"></Image>
                  Extensive Talent Pool
                </div>
                <div className="flex gap-4 items-center p-5 bg-[#1e2b44] rounded-lg">
                  <Image src={icon4} alt="icon"></Image>
                  Streamlined Recruitment Process
                </div>
              </div>
            </div>
          </div>
        </section>
      }

      {
        <section className="bg-light-background py-8 sm:py-14 lg:py-16 overflow-x-hidden">
          <div className="container grid grid-cols-1 lg:grid-cols-3 ">
            <div className="flex justify-between flex-col ">
              <div>
                <h3 className="text-2xl lg:text-4xl font-semibold">
                  We are expanding <br />
                  <span className="text-4xl lg:text-7xl font-bold">
                    Globally
                  </span>
                </h3>
                <p className="text-[#828282] mt-1 lg:mt-4 mr-10">
                  Expanding globally, empowering top{" "}
                  <br className="max-sm:hidden" /> clients with skilled
                  professionals, and <br className="max-sm:hidden" /> connecting
                  clients worldwide with <br className="max-sm:hidden" />
                  innovative solutions.
                </p>
              </div>

              <div
                className="lg:w-[389px] max-lg:mt-4 w-full h-[237px] bg-center rounded-lg px-5 py-3 flex items-end text-white bg-cover "
                style={{
                  backgroundImage: `url(${poland.src})`,
                }}
              >
                Poland
              </div>
            </div>
            <div
              className="lg:w-[389px] lg:h-[500px] h-[237px]  bg-center rounded-lg px-5 py-3 flex items-end text-white bg-cover max-lg:mt-3"
              style={{
                backgroundImage: `url(${hungary.src})`,
              }}
            >
              Hungary
            </div>
            <div className="flex flex-col justify-between max-lg:gap-1 max-lg:mt-3">
              <div
                className="lg:w-[389px] w-full h-[250px] bg-center rounded-lg px-5 py-3 flex items-end text-white bg-cover"
                style={{
                  backgroundImage: `url(${india.src})`,
                }}
              >
                India
              </div>
              <div
                className="lg:w-[389px] h-[242px] bg-center rounded-lg px-5 py-3 flex items-end text-white bg-cover"
                style={{
                  backgroundImage: `url(${nepal.src})`,
                }}
              >
                Nepal
              </div>
            </div>
          </div>
        </section>
      }

      <Spzoo />
      <Apply />

      {/* gallary */}

      <section className="bg-[#f7f7f7] py-16">
        <div className="container">
          <h3 className="font-semibold  text-3xl      text-center ">
            Meet our A-TEAM
          </h3>
          <Gallary />
          <div className=" flex justify-center w-full max-lg:hidden">
            <button
              onClick={() => router.push("/services")}
              className=" btn btnHover bg-blue text-white rounded-lg flex items-center gap-3 hover:bg-dark-background hover:text-white"
            >
              View More <FaArrowRightLong />
            </button>
          </div>
        </div>
      </section>

      {/* blog */}

      <section className="bg-[#f7f7f7] lg:py-16 pb-12">
        <div className="container">
          <div className="flex items-center lg:flex-row  flex-col justify-between">
            <h3 className="text-2xl lg:text-[32px] font-semibold sm:leading-relaxed">
              Stay updated with <br className="max-sm:hidden" />
              our latest blog post
            </h3>

            <p className="text-[#828282] text-sm sm:text-base font-light">
              Discover the latest country updates, company news and events on
              our Blog!
            </p>
          </div>

          <div>
            {/*  <BlogCard />
            <BlogCard />
            <BlogCard /> */}
            <div className="mt-8 grid  grid-cols-1 place-items-center sm:grid-cols-2 lg:grid-cols-3 gap-4 max-sm:gap-12">
              {blogData.map((blog, index) => {
                if (index > 2) {
                  return;
                } else {
                  return (
                    <BlogCard
                      key={blog.title}
                      title={blog.title}
                      photo={blog.photo}
                      id={blog.id}
                      description1={blog.description1}
                      date=""
                      author=""
                      description2={[]}
                    />
                  );
                }
              })}
            </div>
          </div>
        </div>
      </section>
      <Footer2 />
    </main>
  );
};

export default Home;
