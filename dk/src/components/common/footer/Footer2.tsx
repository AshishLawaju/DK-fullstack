import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";

const Footer2 = () => {
  return (
    <section className="bg-blue  py-16">
      <div className="container px-3  sm:px-10 py-8 bg-white rounded-lg flex items-center justify-between flex-col lg:flex-row">
        <div>

        <h2 className="text-xl sm:text-2xl lg:text-[32px] lg:leading-relaxed font-semibold">
          Empowering Your Workforce, <br />
          Enriching Your Success
        </h2>
        <p className="max-lg:text-sm max-sm:text-xs  mt-1 lg:mt-3">
          Empowering industries with tailored talent solutions, we bridge
          expertise to your needs, <br />
          ensuring seamless integration of skilled manpower for your
          company&apos;s success
        </p>
        </div>

        <div className="max-sm:w-full">
          <Link href={"/contact"}>
            <button className="max-lg:mt-4 lg:h-[48px]  max-sm:text-sm bg-blue btn flex  items-center gap-[10px] text-white rounded-lg  whitespace-nowrap">Contact Us <FaArrowRightLong /></button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Footer2;
