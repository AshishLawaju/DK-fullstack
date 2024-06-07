import Image from "next/image";
import "./herokocss.css"
import hero1 from "./images/hero1.png";
import hero2 from "./images/hero2.png";
import hero3 from "./images/hero3.png";
import Slider from "react-slick";
import heroFooter from "./images/heroFooter.png";
const HeroDK = () => {
    let settings = {
        // dots: true,
        arrows:false,
        infinite: true,
        speed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4300,
        pauseOnHover: false,
      };
  return (
    <section className="max-w-[100vw] bg-[#f7f7f7] max-lg:bg-dark-background  ">
    <div className="relative ">
      <Slider {...settings} className="" >
        <div className="w-full h-[50vh] sm:h-[80vh] ">
          <div className=" flex items-center justify-center absolute  z-50   w-[100vw] ">
            <div    className=" text-white container mt-[30%] sm:mt-[18%] flex flex-col items-center gap-4 justify-center   font-bold text-center">
              <h1 data-aos="fade-up" className="text-xl sm:text-2xl lg:text-4xl tracking-wider">
                {/* Empowering Your Success <br /> with Skilled Hands <br /> */}
                Empowering Your Success <br /> with Skilled Hands <br />
              </h1>
              <p data-aos="fade-up"  data-aos-delay="300" className="lg:w-[50%] text-sm font-extralight  text-slate-100 tracking-wider leading-5">
                Your trusted partner in connecting skilled professionals with
                rewarding career opportunities across Poland.
              </p>
            </div>
          </div>
          <Image
            src={hero1}
            alt="dk reuritment"
            className="object-cover w-full h-full   "
          ></Image>
        </div>
        <div className="w-full h-[50vh] sm:h-[80vh] ">
        <div className="  flex items-center justify-center absolute  z-50   w-[100vw]">
            <div className=" text-white container mt-[30%] sm:mt-[18%] flex flex-col items-center gap-4 justify-center   font-bold text-center">
              <h1  data-aos-delay="300" data-aos="fade-up" className="text-xl sm:text-2xl lg:text-4xl tracking-wider  ">
                {/* Empowering Your Success <br /> with Skilled Hands <br /> */}
                Unlocking Opportunities, <br />Empowering Careers.
              </h1>
              <p className="lg:w-[50%] text-sm font-extralight  text-slate-100 tracking-wider leading-5">
              Your trusted partner in connecting skilled professionals to drive your business forward
              </p>
            </div>
          </div>
          <Image
            src={hero2}
            alt="dk reuritment"
            className=" w-full h-full object-cover "
          ></Image>
        </div>


        <div className="w-full h-[50vh] sm:h-[80vh] ">
        <div className="  flex items-center justify-center absolute  z-50   w-[100vw]">
            <div className=" text-white container mt-[30%] sm:mt-[18%] flex flex-col items-center gap-4 justify-center   font-bold text-center">
              <h1  data-aos-delay="300" data-aos="fade-up" className="text-xl sm:text-2xl lg:text-4xl tracking-wider  ">
                {/* Empowering Your Success <br /> with Skilled Hands <br /> */}
                Connecting Talent with Opportunity <br />  for  a Brighter Future
              </h1>
              <p className="lg:w-[50%] text-sm font-extralight  text-slate-100 tracking-wider leading-5">
              Your reliable partner in matching skilled professionals with fulfilling career paths in Poland.
              </p>
            </div>
          </div>
          <Image
            src={hero3}
            alt="dk reuritment"
            className=" w-full h-full object-cover "
          ></Image>
        </div>
    
      </Slider>

      <div className=" max-lg:hidden absolute -bottom-1 w-full z-20">
        <Image
          src={heroFooter}
          alt="dk rucirtment clean "
          className="w-full"
        ></Image>
      </div>

     
    </div>
  </section>
  )
}

export default HeroDK