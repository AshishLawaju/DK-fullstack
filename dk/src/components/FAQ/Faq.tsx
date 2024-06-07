"use client";
import Image from "next/image";

import faq1 from "./assets/faq1.png";
import faq2 from "./assets/faq2.png";
import faq3 from "./assets/faq3.png";
import { FaMinus, FaPlus } from "react-icons/fa6";
import { useState } from "react";
const Faq = () => {
  const faqList = [
    {
      id: 1,
      title: "How to submit your Documents?",
      description:
        "Simply scan and email your documents to our dedicated submission email address provided, ensuring a swift and hassle-free process",
    },

    {
      id: 2,
      title: "Know Rules & Regulations",
      description:
        "For Information on rules and regulations, kindly refer to the official Government of Poland website at https://www.gov.pl/",
    },

    {
      id: 3,
      title: "How to get Embassy Datas?",
      description:
        "Please consult the official embassy website or contact their dedicated appointment booking system for detailed instructions and available options.",
    },

    {
      id: 4,
      title: "How to Flight Tickets?",
      description:
        "Simply provide your travel details to our team at DK Travel Services, and we'll take care of securing the best flight options tailored to your needs.",
    },

    {
      id: 5,
      title: "How can DK Recruitment help?",
      description:
        "DK specializes in matching qualified candidates with the right job opportunities, offering personalized guidance and support throughout the hiring process.",
    },
    {
      id: 6,
      title: "What are the jobs available?",
      description:
        "For an updated list of available jobs, please visit our Jobs section page. We regularly update the page with new job opportunities to match your needs.",
    },
  ];

  const [showAns, setShowAns] = useState(-1);
  return (
    <section className="bg-[#f7f7f7] max-sm:pt-4  max-sm:pb-12" >
      <div className="container  py-4 sm:py-28 ">
        <div className="flex">
          <div className="flex-1">
            <h3 className="font-medium text-xl sm:text-2xl lg:text-3xl">
              Frequently Asked Questions
            </h3>
            <p className="mt-2   max-sm:text-[14px] sm:mt-4 ">
              Poland&apos;s job market ally, empowering seekers with expertise
              and comprehensive support for a successful career journey.
            </p>

            <div className="flex flex-col gap-6 mt-6 sm:mt-12    ">
              {faqList.map((faq, index) => (
                <div
                  key={faq.title}
                  className="border-b pb-3 sm:pb-6   "
                  onClick={() => {
                    if(index==showAns){

                      setShowAns(-1);
                    }
                    else{

                      setShowAns(index);
                    }



                    
                  }}
                >
                  <div className="flex justify-between cursor-pointer ">
                    <p className="text-base sm:text-[18px]">{faq.title}</p>
                    {index == showAns ? <FaMinus /> : <FaPlus />}
                  </div>
                  <div
                    className={`${
                      showAns == index
                        ? " transition-all ease-in-out duration-500 overflow-auto  opacity-100 translate-x-1 "
                        : "h-0 overflow-hidden opacity-0"
                    } `}
                  >
                    <p className=" text-[#828282] max-sm:text-sm mt-1 sm:mt-3 ">
                      {faq.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex-1 relative flex flex-col items-end max-lg:hidden ">
            <div className="w-[332px] h-[410px]">
              <Image alt="faq" src={faq1} width={332} height={410}></Image>
            </div>
            <div className="w-[243px] h-[215px] absolute top-[40%] right-[35%]">
              <Image alt="faq" src={faq2} width={243} height={215}></Image>
            </div>
            <div className="w-[385px] h-[234px] overflow-hidden ">
              <Image
                alt="faq"
                src={faq3}
                width={385}
                height={234}
                className=""
              ></Image>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
