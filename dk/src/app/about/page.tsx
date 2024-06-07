import Image from "next/image";
import ceoImage from "./assets/ceo.png";
import { FaRecycle } from "react-icons/fa6";
import { IoShareSocialOutline } from "react-icons/io5";
import { PiTargetBold } from "react-icons/pi";
import touch1 from "./assets/touch1.png";
import touch2 from "./assets/touch2.png";
import touch3 from "./assets/touch3.png";
import noob from "./assets/noob.png";
import hero2 from "./assets/hero2.png";
import { heroData1 } from "../constant/constant";
import Link from "next/link";
import Hero from "../../components/Hero/Hero";
import Hero2slider from "../../components/Hero/Hero2slider";
import Recruitment from "../../components/common/recruitment/Recruitment";
import Testimonials from "../../components/testomonial/Testimonials";
import Faq from "../../components/FAQ/Faq";
import Footer2 from "../../components/common/footer/Footer2";
import DKhero from "../../components/Hero/DKhero";
const page = () => {
  return (
    <main className="bg-[#f7f7f7]">
      {/* <Hero heroList={heroData1} photo={hero2} /> */}


      {/* hero 2 */}

      <DKhero/>
      <Hero2slider />
      <Recruitment />

      {/* message from our CEO */}

      <section className="bg-dark-background text-[#efefef]">
        <div className="container flex pb-8 lg:py-16 items-center  w-full ">
          <div className="flex-1 w-[530px] ">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold">
              Message from our CEO
            </h2>
            <div className="flex flex-col gap-2 max-sm:gap-6 mt-6 font-light max-sm:text-sm">
              <p className="max-sm:text-sm">
                Greetings, I am Deependra Khatri, CEO of DK Recruitment, <br className="max-lg:hidden" />
                specializing in top-tier manpower services. Founded in 2012 in <br className="max-lg:hidden" />
                Qatar, we offer services such as cleaning, bike delivery, security,<br className="max-lg:hidden" />
                 and more. In Nepal, we established Partava Hospitality, catering to <br className="max-lg:hidden" />
                leading startup enterprises like  Foodmandu and Bhojdeals.<br className="max-lg:hidden" />
                
              </p>
              <p>
                We are known for our commitment to excellence, delivering <br className="max-lg:hidden" />
                reliable and high-quality service to our clients. Our manpower is <br className="max-lg:hidden" />
                 carefully selected and trained to ensure the highest standards.  <br className="max-lg:hidden" />
                 What sets us apart is our personalized approach,  attention to <br className="max-lg:hidden" />
                 detail, and unwavering commitment to custome satisfaction.
              </p>
              <p>
                At DK Recruitment, we redefine the standards of manpower <br className="max-lg:hidden" />
                services through innovation, reliability, and customer-centric <br className="max-lg:hidden" />
                solutions. Our goal is to exceed expectations and provide <br className="max-lg:hidden" />
                unmatched value to our clients. We appreciate the trust you have <br className="max-lg:hidden" />
                placed in us and look forward to achieving success and
                prosperity <br className="max-lg:hidden" /> together.
              </p>
              <p>
                Warm regards, <br /> Deependra Khatri <br />
                CEO, DK Recruitment
              </p>
            </div>
          </div>
          <div className="w-[100px] lg:w-[440px] lg:h-[570px] flex-1 lg:flex justify-end max-lg:hidden ">
            <Image src={ceoImage} alt="CEO" width={440} height={570}></Image>
          </div>
        </div>
      </section>

      {/* three card */}
      <section className="bg-[#f7f7f7] py-16">
        <div className="container max-lg:gap-3 grid grid-cols-1 place-content-center sm:grid-cols-2 lg:grid-cols-3  w-full">
          <div className="px-10 py-10 lg:py-16 bg-white shadow-lg  ">
            <div className="bg-blue rounded-full  w-[70px] h-[70px] flex items-center justify-center text-3xl text-white">
              <FaRecycle />
            </div>
            <h3 className="text-[22px] font-semibold mt-3 sm:mt-8 text-blue">
              Easy Process
            </h3>
            <p className="lg:w-[330px] mt-3">
              DK Recruitment offers a seamless and hassle-free job recruitment
              process, connecting employers with qualified candidates
              effortlessly.
            </p>
          </div>
          <div className="px-10 py-10 lg:py-16 bg-blue text-white">
            <div className="bg-white rounded-full  w-[70px] h-[70px] flex items-center justify-center text-3xl text-white">
              <IoShareSocialOutline className="text-blue" />
            </div>
            <h3 className="text-[22px] font-semibold mt-3 sm:mt-8 ">
              Cultural Diversity
            </h3>
            <p className="lg:w-[330px] mt-3">
              DK Recruitment embraces cultural diversity in job recruitment,
              fostering an inclusive workplace where perspectives are valued and
              celebrated.
            </p>
          </div>
          <div className="px-10 py-10 lg:py-16 bg-white shadow-lg">
            <div className="bg-blue rounded-full   w-[70px] h-[70px] flex items-center justify-center text-3xl text-white">
              <PiTargetBold />
            </div>
            <h3 className="text-[22px] font-semibold mt-3 sm:mt-8 text-blue lg:whitespace-nowrap">
              Quality of Work Environment
            </h3>
            <p className="lg:w-[330px] mt-3 ">
              DK Recruitment strives to create a high-quality work environment,
              growth and to attract and retain top talent in the job recruitment
              industry.
            </p>
          </div>
        </div>
      </section>
      {/* 
      <Hierarchy /> */}

      <div className="bg-light-background py-16">

        <h3 className="text-center text-3xl font-semibold z-20">The Core of Our Team</h3>
        <p className="text-[#828282] text-center mt-3">DK Recruitment&apos;s Core Team consists of experienced professionals who specialize in connecting top talent with <br className="max-lg:hidden" /> exceptional job opportunities, ensuring a seamless and successful recruitment process.</p>
      <div className="flex items-center justify-center py-16 max-lg:hidden relative unselectable ">

        <div className="relative  mt-10">


        <div className=" w-full h-full absolute top-12  "></div>
        <Image alt="DK recuirement" src={noob} className="w-[100vw] h-full container "></Image>
        </div>
      </div>

      </div>
      {/* get in touch */}

      <section className="bg-dark-background">
        <div className="container py-8 sm:py-14 lg:py-16  text-white flex flex-col lg:flex-row gap-8 lg:gap-[125px] ">
          <div className="flex-1 lg:w:191px]">
            <div className="font-semibold text-xl sm:text-2xl lg:text-[32px] ">
              Get in Touch: Contact Us <br /> <p className="lg:mt-[30px]">
                for Manpower Solutions
                </p> 
            </div>
            <p className="mt-2 max-sm:text-sm text-[#d9d9d9] lg:mt-4">
              Streamline your Workforce: Reach Out to Our Experts for
              Comprehensive Manpower Solutions and efficiently Connect with Our
              Manpower Experts for Your Workforce Needs.
            </p>
            <Link href={"/contact"}>
              <button
                type="button"
                className="btn max-sm:text-sm bg-blue btnHover h-[48px]  font-med sm:font-medium text-white rounded-lg mt-8 lg:mt-16"
              >
                Connect with us
              </button>
            </Link>
          </div>
          <div className="max-sm:hidden flex-1 flex justify-center lg:justify-between gap-2 ">
            <div className="flex flex-col justify-between max-sm:gap-4 ">
              <div className=" w-full sm:w-[289px] h-[162px]">
                <Image
                  alt="touch"
                  src={touch1}
                  height={158}
                  width={298}
                ></Image>
              </div>

              <div className="w-full sm:w-[289px] h-[160px] ">
                <Image
                  alt="touch"
                  src={touch2}
                  // height={158}
                  width={298}
                  className=" h-full "
                ></Image>
              </div>
            </div>
            <div className="w-[298px] h-[322px] max-sm:hidden">
              <Image
                alt="touch"
                src={touch3}
                height={328}
                width={298}
                className="h-full"
              ></Image>
            </div>
          </div>
        </div>
      </section>

      <Testimonials />

      <Faq />
      <Footer2 />
    </main>
  );
};

export default page;
