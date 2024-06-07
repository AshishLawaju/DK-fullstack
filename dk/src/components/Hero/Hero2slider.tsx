import albea from "./images/ALBEA.png";
import arisit from "./images/ARISIT.png";
import auro from "./images/AURORA.png";
import cordis from "./images/CORDIS.png";
import ebfec from "./images/EBFEC.png";
import imile from "./images/IMILE.png";
import shein from "./images/SHIEN.png";
import xailient from "./images/xailient.png";
import newcrops from "./images/newscorp.png";
import Image from "next/image";
const Hero2slider = () => {
  const brandList = [
    albea,
    cordis,
    auro,
    shein,
    imile,
    ebfec,
    arisit,
    /* xailient,
    newcrops, */
  ];
  return (
    <section className="bg-[#f7f7f7]  sm:pb-14 lg:pb-16 sm:py-8x ">

      <h3 className="text-2xl font-semibold lg:text-3xl text-center mt-[62px] ">Our Valuable Clients</h3>
      <div className="container flex flex-wrap gap-1 sm:gap-2 lg:mt-[62px]x  py-8 justify-center">
        {brandList.map((brand) => (
          <div key={brand.src} className="h-[80px] w-[230px] rounded-md bg-white flex items-center justify-center">
            <Image alt="brand" src={brand} className="object-cover  h-full w-[130px] "></Image>
          </div>
        ))}
         <div className="h-[80px] w-[230px] rounded-md bg-white flex items-center justify-center">
            <Image alt="brand" src={xailient.src} className="object-contain  h-full w-[130px] " width={130} height={80}></Image>
          </div>
          <div  className="h-[80px] w-[230px] rounded-md bg-white flex items-center justify-center"  >
            <Image alt="brand" src={newcrops.src} className="object-contain  h-full w-[130px] "  width={130} height={80} ></Image>
          </div>
      </div>
    </section>
  );
};

export default Hero2slider;
