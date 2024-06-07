"use client";
import Image from "next/image";
import mainlogo from "../../../public/mainlogo.png";
import Link from "next/link";
// import { useRouter } from "next/router";
import { usePathname } from "next/navigation";
import { RxHamburgerMenu } from "react-icons/rx";
import { useCallback, useEffect, useRef, useState } from "react";
import { ImCross } from "react-icons/im";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { uri } from "../../app/constant/constant";
import { setUser } from "../../redux/slices/userSlice";

import { useRouter } from "next/navigation";
import Lenis from "lenis";
import { IoRemoveOutline } from "react-icons/io5";

const Navbar = () => {
  const router = useRouter();
  const user = useSelector((state: any) => state.user);
  const dispatch = useDispatch();
  useEffect(() => {
    const lenis = new Lenis();

    /*     lenis.on("scroll", (e: any) => {
      console.log(e);
    });
 */
    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Clean up on component unmount
    return () => {
      // Remove event listener or any cleanup if necessary
    };
  }, []);
  const elementRef = useRef(null);

		useEffect(() => {
        function handler(event) {
            if (!elementRef.current?.contains(event.target)) {
                setOpenMenu(true)
                
            }
        }
        window.addEventListener('click', handler) 
				return () => window.removeEventListener('click', handler)
    }, []) 
		

  const fetchAccessToken = useCallback(async () => {
    try {
      const res = await axios.get(`${uri}/getNewAccessToken`, {
        withCredentials: true,
      });
      dispatch(setUser(res.data?.token));
    } catch (error) {
      if (error.response.status == 401 || error.response.status === 500) {
        router.push("/login");
      }
    }
  }, [dispatch, router]);

  useEffect(() => {
    if (!user) {
      fetchAccessToken();
    }
  }, [user, fetchAccessToken]);

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

  // const router = useRouter();
  const pathname = usePathname();
  // console.log({ pathname });

  const pathna = pathname.split("/");
  // console.log(pathna[1]);

  const [openMenu, setOpenMenu] = useState(true);

  const variants = {
    closed: {
      scale: 0,
      x: 200,
      y: -350,
      transition: {
        delay: 0.1,
        type: "spring",
        stiffness: 500,
        damping: 40,
        duration: 0.4,
      },
    },
    open: {
      scale: 1,
      x: 0,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40,
        duration: 0.4, // Duration for the open state
      },
    },
  };


  return (
    <nav className=" relative">
      <div className="max-fornav:hidden bg-black/30 flex justify-between  px-10 py-5 rounded-md fixed top-[25px]  w-[80%] left-[10%] backdrop-blur-md z-50">
        <div>
          <Link href={"/"}>
            <Image
              src={mainlogo}
              alt="DK Recruitment"
              /* width={200}
            height={40} */
            ></Image>
          </Link>
        </div>

        <div className="text-white flex items-center relative   gap-12">
          {/*    <Link href={"/"}> Home </Link>
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
                  className={`   ${"/" + pathna[1] == link ? "activeNav" : ""}`}
                >
                  {name}
                </Link>
              </div>
            );
          })}
        </div>
      </div>

      <div
        
        className="fornav:hidden w-full  fixed py-5 bg-dark-background z-50 shadow-xl"
      >
        <div className="container flex items-center justify-between">
          <div className="w-[140px]">
            <Link href={"/"}>
              <Image
                src={mainlogo}
                alt="DK Recruitment"
                className="w-full cursor-pointer"
              ></Image>
            </Link>
          </div>

          <div className="relative" >
            <div 
              className={`text-white  flex flex-col gap-1 z-20 transition-transform duration-300  ${
                !openMenu ? " scale-0" : " absolute right-0"
              }     `}
              onClick={() => setOpenMenu((pre) => !pre)}

              ref={elementRef}
            >
              {/*  <IoRemoveOutline className=""/>
  <IoRemoveOutline/>
  <IoRemoveOutline/> */}

              <svg height="24" width="30">
                <line
                  x1="0"
                  y1="3"
                  x2="30"
                  y2="3"
                  style={{ stroke: "white", strokeWidth: 2 }}
                  className={`transition-transform duration-300 ${
                    !openMenu ? "rotate-45 translate-y-6" : ""
                  }`}
                />
                <line
                  x1="0"
                  y1="12"
                  x2="30"
                  y2="12"
                  style={{ stroke: "white", strokeWidth: 2 }}
                  className={`transition-opacity duration-300 ${
                    !openMenu ? "opacity-0" : ""
                  }`}
                />
                <line
                  x1="0"
                  y1="21"
                  x2="30"
                  y2="21"
                  style={{ stroke: "white", strokeWidth: 2 }}
                  className={`transition-transform duration-300 ${
                    !openMenu ? "-rotate-45 -translate-y-6" : ""
                  }`}
                />
              </svg>
            </div>

            <div
              className={`text-white  flex flex-col gap-1 z-20 transition-transform duration-300  ${
                !openMenu ? "absolute right-2 top-0" : " scale-0"
              }     `}
              onClick={() => setOpenMenu((pre) => !pre)}
            >
              <svg height="26" width="26">
                <line
                  x1="0"
                  y1="0"
                  x2="26"
                  y2="26"
                  style={{ stroke: "white", strokeWidth: 2 }}
                  className={`transition-transform duration-300 ${
                    !openMenu ? "" : "hidden scale-0"
                  }`}
                />
                <line
                  x1="26"
                  y1="0"
                  x2="0"
                  y2="26"
                  style={{ stroke: "white", strokeWidth: 2 }}
                  className={`transition-transform duration-300 ${
                    !openMenu ? "" : "hidden scale-0"
                  }`}
                />
              </svg>
            </div>
          </div>

          {/*     {openMenu ? (
            <RxHamburgerMenu
              className="text-white  text-[22px] cursor-pointer z-20  border"
              onClick={() => setOpenMenu((pre) => !pre)}
            />
          ) : (
            <ImCross
              className="text-white cursor-pointer z-20 border"
              onClick={() => setOpenMenu((pre) => !pre)}
            />
          )} */}
          {/* !openMenu &&  */}
          {
            <motion.div
              variants={variants}
              initial="closed"
              animate={!openMenu ? "open" : "closed"}
              /* initial={{ scale: 0, x: 200, y: -350 }}
              animate={{ scale: 1, x: 0, y: 0 }}
                         transition={{
                ease: "linear",
                duration: 0.4,
               
              }} */
              className="absolute   lg:hidden top-0 right-0  flex flex-col overflow-hidden  w-[75vw] sm:w-[50vw] h-[100vh]  items-center justify-center gap-6 text-white "
            >
              <div
                className={`bg-dark-background  relativex -top-[10%]  flex flex-col w-full ${
                  openMenu ? "h-0" : "h-[99999px]   "
                } items-center justify-center gap-6 transition-all ease-in-out `}
              >
                {navLink.map(({ link, name }) => {
                  // const isActive = pathname.startsWith(link);
                  // const isActive = pathname.(link)

                  return (
                    <div
                      // data-aos="zoom-out-left"
                      // data-aos-duration={`300`}
                      className={`${
                        openMenu
                          ? "hidden transition-all delay-300 duration-300"
                          : ""
                      } relative navbarx `}
                      key={name + link}
                      onClick={() => setOpenMenu((pre) => !pre)}
                    >
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
            </motion.div>
          }
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
