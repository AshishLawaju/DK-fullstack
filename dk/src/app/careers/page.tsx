"use client";

import visamain from "./assets/visamain.png";
import visa1 from "./assets/visa1.png";
import visa2 from "./assets/visa2.png";
import Image from "next/image";
import p1 from "./assets/p1.jpg";
import p2 from "./assets/p2.avif";
import p3 from "./assets/p3.jpg";
import p4 from "./assets/p4.jpg";
import p5 from "./assets/p5.avif";
import p6 from "./assets/p6.jpg";
import p7 from "./assets/p7.jpg";
import p8 from "./assets/p8.jpg";
import Apply from "../../components/common/apply/Apply";
import Footer2 from "../../components/common/footer/Footer2";
const CareersPage = () => {
  const professionalList = [
    {
      photo: p2,
      title: "CNC Machine Operator",
    },
    {
      photo: p3,
      title: "Grinder",
    },
    {
      photo: p4,
      title: "Production Helper",
    },
    {
      photo: p1,
      title: "Delivery Van",
    },
    {
      photo: p5,
      title: "Packager",
    },
    {
      photo: p6,
      title: "Salesman",
    },
    {
      photo: p7,
      title: "Cleaner",
    },
    {
      photo: p8,
      title: "Driver",
    },
  ];
  return (
    <main>
      <section className="bg-light-background pt-20 pb-7 sm:py-20 lg:py-[126px]">
        <div className="container flex flex-col gap-5">
          <p className="text-2xl font-semibold">
            Expert Professionals, <br />
            Exceptional Results
          </p>

          <hr className="w-full border" />
          <div className=" grid  grid-cols-1 gap-y-4 sm:grid-cols-2 place-items-center  lg:grid-cols-4 sm:gap-y-8  sm:gap-x-4 lg:gap-2">
            {professionalList.map((el) => (
              <div
                key={el.title}
                className="w-full sm:w-[290px] h-[294px]  rounded-3xl  overflow-hidden relative cursor-pointer"
              >
                <Image
                  src={el.photo}
                  alt=""
                  className="object-cover h-full "
                ></Image>

                <div className="h-full w-full absolute z-10 bg-gradient-to-t from-black/70 to-black/0 top-0 left-0 text-white text-start flex items-end p-8  ">
                  {el.title}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Apply />

      <section className="bg-light-background py-8 sm:py-14 lg:py-16">
        <div className="container">
          <h1 className="font-semibold text-2xl sm:text-3xl text-center">
            DK Recruitment
          </h1>
          <p className="mt-3">
            If you aspire to secure an overseas job, DK Recruitment can serve as
            your gateway to the company of your dreams. As talent gravitates
            towards countries with developed economies, Poland has emerged as an
            appealing destination for skilled professionals. To find the ideal
            candidates, businesses must partner with a reputable and experienced
            recruitment agency in Poland. DK Recruitment, with its knowledgeable
            and skilled staff, excels in swiftly connecting businesses with the
            right talent.
          </p>
          <p className="mt-3">
            With increasing opportunities and demand for qualified professionals
            in Poland, our recruitment agency acts as a vital link between
            employers and job seekers, simplifying the hiring process and
            ensuring successful placements. Benefit from our extensive
            experience, strategic locations, and unique services to propel your
            business forward with DK Recruitment, the top recruitment agency in
            Poland.
          </p>
          <Image
            src={visamain}
            alt=" recruitment agency in Poland"
            height={600}
            className="my-10"
          ></Image>
          <div>
            <h3 className="font-semibold text-xl sm:text-[22px]">
              Poland streamlines its residence and work permit application
              processes
            </h3>
            <p className="mt-3">
              The long-awaited amendment to the Polish Act on Foreigners will
              come into effect from 29 January 2022. The aim of the new
              regulations is to make it easier for foreigners to obtain
              residence and work permits in Poland. Here are the main changes
              you need to know about.
            </p>
          </div>

          <div className="mt-10">
            <h3 className="font-semibold text-xl sm:text-[22px]">
              Application procedures
            </h3>
            <p className="mt-3">
              Following the amendment, applicants for temporary residence and
              work permits will no longer be required to prove that:
            </p>
            <ul className="mt-3 list-disc flex flex-col ml-6 ">
              <li>
                They have a source of stable and regular income, sufficient to
                support themselves and dependent family members,
              </li>
              <li>
                They have a place of residence in Poland (i.e. proof of
                accommodation such as rental contract).
              </li>
            </ul>
            <p className="mt-10">
              All temporary residence and work permit applications will have to
              be processed and decided within 60 days of receipt of complete
              documentation. Applications submitted before 1 January 2022 that
              have not been determined yet may be reviewed under an expedited
              procedure.
            </p>
          </div>

          <div className="mt-10  grid grid-cols-1 lg:grid-cols-2 max-lg:gap-4 ">
            <div className="flex flex-col gap-4">
              <div className="lg:h-[300px] ">
                <Image
                  alt="visa Poland"
                  src={visa2}
                  height={300}
                  className="object-cover"
                ></Image>
              </div>
              <h2 className="text-[22px] font-semibold">
                Conditions of employment
              </h2>
              <p>
                Additionally, the new regulations will introduce a requirement
                that a foreigner’s monthly remuneration cannot be lower than the
                minimum wage in Poland, regardless of the person’s working time
                or the type of contract. It is also worth noting that foreign
                employees will no longer be required to apply for new work
                permits if:
              </p>
              <ul className="list-disc ml-6">
                <li>
                  Their job title changes but the scope of duties remains the
                  same o
                </li>
                <li>
                  {" "}
                  If they work longer hours while receiving proportionally
                  higher pay.{" "}
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-3 ">
              <div className="sm:h-[300px]">
                <Image alt="visa Nepal" src={visa1} height={300}></Image>
              </div>
              <h2 className="text-xl max-sm:mt-3 sm:text-[22px] font-semibold ">
                Foreign Employment Intent Declaration
              </h2>
              <p>
                Under the new amendment, citizens of Armenia, Belarus, Georgia,
                Moldova, Russia or Ukraine will be able to work in Poland on the
                basis of a “Declaration of intent to employ a foreigner”
                (Oświadczenie o zamiarze powierzenia wykonywania pracy
                cudzoziemcowi) for a maximum of 24 months. It is a significant
                change considering that until now the document could only be
                issued for a period not exceeding 6 months within 12 subsequent
                months. For more detailed information on the amendment, please
                visit the website of the Polish Office for Foreigners.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer2 />
    </main>
  );
};

export default CareersPage;
