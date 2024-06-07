"use client";
import React from "react";
import Slider from "react-slick";
import testi from "./assets/testi.png";
import { FaArrowLeftLong, FaArrowRightLong, FaStar } from "react-icons/fa6";
import Image from "next/image";
import { TbTestPipe } from "react-icons/tb";
import testo2 from "./assets/testo2.jpeg"
import testi11 from "./assets/testi11.jpg"
import testi12 from "./assets/testi12.jpg"
import testi13 from "./assets/testi13.jpg"
import testi14 from "./assets/testi14.jpg"
import testi15 from "./assets/testi15.jpg"
import testi16 from "./assets/testi16.jpg"
const Testimonials = () => {
  const testimonialsList = [
    {
      name: "Joe Christensen",
      description:
        "Great job, I will definitely be ordering again! LookScout is worth much more than I paid.  I would like to personally thank you.",
      rating: 4,
      photo: testi15,
    },
    {
      name: "Emily Johnson",
      description:
        "DK Solutions polished our brand's presentation with quality packaging. We're thrilled with the results.",
      rating: 5,
      photo: testi16,
    },
    {
      name: "John Smith",
      description:
        "DK Solutions' efficient delivery team significantly boosted our satisfaction. Highly recommend for reliable services.",
      rating: 5,
      photo: testi11,
    },
    {
      name: "Mateusz Kowalski",
      description:
        "DK Solutions' spotless cleaning services exceeded our expectations. Standout professionalism in the industry.",
      rating: 5,
      photo: testi12,
    },
    {
      name: "Anna Nowak",
      description:
        "DK Solutions provided exceptional manpower solutions, ensuring our success within deadlines. Outstanding service!",
      rating: 5,
      photo: testi14,
    },
  ];
  function SampleNextArrow(props: any) {
    const { className, style, onClick } = props;
    return (
      <div
        className={` max-lg:hidden  w-[40px] h-[40px] absolute bottom-20  left-16 border-2  cursor-pointer text-blue  border-blue   flex items-center justify-center rounded-full hover:bg-blue hover:text-white`}
        style={{}}
        onClick={onClick}
      >
        <FaArrowRightLong className=" " />
      </div>
    );
  }

  function SamplePrevArrow(props: any) {
    const { className, style, onClick } = props;
    return (
      <div
        className={`z-10 max-lg:hidden  w-[40px] h-[40px] absolute bottom-20 left-4  border-2  cursor-pointer text-blue  border-blue  flex items-center justify-center rounded-full hover:bg-blue hover:text-white`}
        style={{}}
        onClick={onClick}
      >
        <FaArrowLeftLong className=" " />
      </div>
    );
  }

  let settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />, 
  };
  return (
    <section className="bg-[#f7f7f7]">
      <div className="container py-4 sm:py-14 lg:py-16 ">
        <h2 className="text-2xl text-center sm:hidden mt-8 font-medium">Testimonials</h2>
        <Slider {...settings} className="container">
          {testimonialsList.map((testo) => (
            <div key={testo.name}>
              <div className="flex">
                <div className="flex-1 flex flex-col gap-y-3 sm:gap-y-12 ">
                  <div className="mt-3 flex gap-2">
                    {[...Array(testo.rating)].map((index) => (
                      <FaStar
                        key={`rate ${index}`}
                        className="text-[#FFAE43]"
                      />
                    ))}
                  </div>
                  <p className="font-semibold text-base lg:text-2xl text-start ">{testo.description}</p>
                  <p className="text-start">{testo.name}</p>
                </div>

                <div className="max-sm:hidden h-[385px] w-[355px] flex-1 flex justify-end">
                  <Image
                    src={testo.photo}
                    alt="profile"
                    height={385}
                    width={355}
                    className="object-cover"
                  ></Image>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Testimonials;
