import Image from "next/image";
import dipendra from "./assets/dipendra.png";
import recruitment from "./assets/recruitment.png";

import recruitment2 from "./assets/recruitment2.png";
import { FaCheck } from "react-icons/fa6";
const Recruitment = () => {
  const rlist = [
    "Shein - Delivery Services, Manpower",
    "Aurora Logistics- Manpower, Picking , Putway, Spider",
    "Albea - Machine Operator, Production Helpers",
    "Mat Daina - CNC Operator, Grinder Worker, Welders",
  ];
  return (
    <div className="bg-dark-background max-sm:h-[677px]s py-8 sm:py-14 flex   items-center  lg:py-16 lg:pb-36">
      <div className="container   sm:py-14 lg:py-16 flex gap-4 lg:gap-16 flex-col-reverse lg:flex-row ">
        <div className="flex-1  h-full relative">
          <div className="flex gap-4 ">
            <div className="lg:absolute right-0  -top-14 max-lg:hidden">
              <Image   src={recruitment} alt="recruitment"></Image>
            </div>
            <div className="absolute left-0 top-14 max-lg:hidden">
              <Image src={recruitment2} alt="recruitment" />
            </div>

            <div className="w-[478px] p-5 bg-white rounded-md text-xs font-semibold  lg:absolute z-10 flex flex-col gap-4 right-0 top-[340px]">
              <p className="">
                Welcome to DK Recruitment, where we specialize in delivering
                top-tier professional staff to elevate your company&apos;s
                performance. <br />Let us empower your success with our skilled
                manpower solutions.
              </p>

              <div className="flex gap-3 items-center">
                <Image src={dipendra} alt="CEO"></Image>
                <div>
                  <h2 className="uppercase text-slate-400 text-base">
                    dipendra khatri
                  </h2>
                  <p className="text-blue font-light ">CE0 / FOUNDER</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-white flex-1 flex gap-4 flex-col lg:mt-6">
          <h1  className="text-xl md:text-2xl lg:text-3xl font-semibold">DK Recruitment</h1>

          <p className=" text-[16px] font-light">
            DK Recruitment specializes in providing skilled professionals to top
            companies, empowering success with skilled hands. Our tailored
            manpower solutions have supported industry leaders like Shein,
            Albea, Mat Daina, and Aurora Logistics. With a focus on excellence,
            reliability, and personalized service, we are committed to enhancing
            your workforce with the best talent available.
          </p>
          <p className=" text-[14px] sm:mt-2">
            We help our clients with expert professionals.
          </p>

          <div className="text-white-s sm:mt-2 text-[12px] sm:text-[14px] font-light ">
            {rlist.map((el) => (
              <div  key={el} className="flex items-center gap-2 mb-1 sm:mb-[10px] ">
                <FaCheck /> <p key={el}> {el} </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recruitment;
