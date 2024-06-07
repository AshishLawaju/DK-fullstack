"use client"
import Image from "next/image";
import mainlogo from "../../../../public/mainlogo.png";
import Link from "next/link";
import { FaFacebook, FaGoogle, FaInstagram, FaTiktok } from "react-icons/fa6";
import { usePathname } from "next/navigation";
const Footer1 = () => {
  const navLink = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "About",
      link: "/about",
    },
    {
      name: "Careers",
      link: "/careers",
    },
    {
      name: "Services",
      link: "/services",
    },

    {
      name: "Blog",
      link: "/blog",
    },
    {
      name: "Contact",
      link: "/contact",
    },
  ];
  const pathname = usePathname();
  // console.log({ pathname });

  const pathna = pathname.split("/");
  return (
    <footer className="bg-dark-background text-[#f7f7f7]">
      <div className="py-8 sm:py14 lg:py-20 container flex flex-col gap-10 sm:gap-20 ">
        <div className=" flex flex-col lg:flex-row items-center justify-between gap-6">
          <Image alt="" src={mainlogo} width={200} height={40}></Image>
          <div className=" flex flex-col max-sm:hidden sm:flex-row sm:gap-12">
            {/*  <Link href={"/"}   className={`   ${"/" + pathna[1] == link ? "activeNav" : ""}`}> Home </Link>
            <Link href={"/about"}> About </Link>
            <Link href={"/careers"}> Careers </Link>
            <Link href={"/services"}> Services </Link>
            <Link href={"/blog"}>Blog </Link>
            <Link href={"/contact"}> Contact </Link> */}

            {navLink.map(({ link, name }) => {
              // const isActive = pathname.startsWith(link);
              // const isActive = pathname.(link);

              return (
                <div className="relative navbarx" key={name + link}>
                  <Link
                    href={link}
                    // className={`${pathname == link ? "text-blue" : ""}`}
                    className={`   ${
                      "/" + pathna[1] == link ? "activeNav" : ""
                    }`}
                  >
                    {name}
                  </Link>
                </div>
              );
            })}
          </div>

          <div className="flex items-center gap-7 text-[20px]">
            <FaFacebook />
            <FaGoogle />
            <FaTiktok />
            <FaInstagram />
          </div>
        </div>

        <div className=" flex   sm:flex-row flex-col  justify-between w-full border-t border-[#f7f7f7] pt-5">
          <p className="block ">
            &copy; 2024 DK Recruitment | All Rights Reserved.
          </p>
          <p className=" flex gap-14 justify-between">
            <span>Privacy Policy</span>
            <span>Terms & Conditions</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer1;
