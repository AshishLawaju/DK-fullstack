"use client";
import React, { useEffect, useRef } from "react";

// @ts-ignore

/*  */
import "photoswipe/dist/photoswipe.css";

import { Gallery, Item } from "react-photoswipe-gallery";

import L1 from "./assets/L1.png";
import L2 from "./assets/L2.png";
import t1 from "./assets/t1.png";
import t2 from "./assets/t2.png";
import t3 from "./assets/t3.png";
import t4 from "./assets/t4.png";
import b1 from "./assets/b1.png";
import b2 from "./assets/b2.png";
import b3 from "./assets/b3.png";
import b4 from "./assets/b4.png";
import Image from "next/image";
const Gallary = () => {
  const inlineContainerRef = useRef(null);

  return (
    <section className="bg-[#f7f7f7]">
      <div className=" lg:py-12 container">
        {/* gallary section */}
        <div
          ref={inlineContainerRef}
          id="inline-gallery-container"
          className="inline-gallery-container"
        ></div>
        {/* <LightGallery speed={500} plugins={[lgThumbnail, lgZoom]}>
            <div id="basicExample2" className="justified-gallery">
              <a href="path/to/image1.jpg">
                <Image alt="caption for image 1" src={s2} />
              </a>
              <a href="path/to/image2.jpg" title="Just in a dream Place">
                <Image alt="caption for image 2" src={s4} />
              </a>
              ...
            </div>
  
            <Image src={s1} alt="service image"></Image>
            <Image src={s1} alt="service image"></Image>
            <Image src={s1} alt="service image"></Image>
            <Image src={s1} alt="service image"></Image>
            <Image src={s1} alt="service image"></Image>
          </LightGallery> */}

        <br />
        <Gallery>
          <div  className="grid  grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
            <div  className="grid-rows-2">
              <Item
                original={L1.src}
                thumbnail={L1.src}
                width="390"
                height="512"
              >
                {({ ref, open }) => (
                  <>
                    <Image
                      alt="g"
                      ref={ref}
                      onClick={open}
                      src={L1}
                      width={390}
                      height={512}
                      className="h-[512px]"
                    />
                  </>
                )}
              </Item>
            </div>

            <div  className="grid-rows-2 flex flex-col gap-2 ">
              <Item
                original={t1.src}
                thumbnail={t1.src}
                width="390"
                height="253"
              >
                {({ ref, open }) => (
                  <>
                    <Image
                      alt="g"
                      ref={ref}
                      onClick={open}
                      src={t1}
                      width={390}
                      height={253}
                      className="h-[253px]"
                    />
                  </>
                )}
              </Item>
              <Item
                original={t2.src}
                thumbnail={t2.src}
                width="390"
                height="253"
              >
                {({ ref, open }) => (
                  <>
                    <Image
                      alt="g"
                      ref={ref}
                      onClick={open}
                      src={t2}
                      width={390}
                      height={253}
                      className="h-[253px]"
                    />
                  </>
                )}
              </Item>
            </div>
            <div  className=" grid-rows-2 flex flex-col gap-2">
              <Item
                original={t3.src}
                thumbnail={t3.src}
                width="390"
                height="253"
              >
                {({ ref, open }) => (
                  <>
                    <Image
                      alt="g"
                      ref={ref}
                      onClick={open}
                      src={t3}
                      width={390}
                      height={253}
                      className="h-[253px]"
                    />
                  </>
                )}
              </Item>
              <Item
                original={t4.src}
                thumbnail={t4.src}
                width="390"
                height="253"
              >
                {({ ref, open }) => (
                  <>
                    <Image
                      alt="g"
                      ref={ref}
                      onClick={open}
                      src={t4}
                      width={390}
                      height={253}
                      className="h-[253px]"
                    />
                  </>
                )}
              </Item>
            </div>
            <div  className="grid-rows-2 flex flex-col gap-2">
              <Item
                original={b1.src}
                thumbnail={b1.src}
                width="390"
                height="253"
              >
                {({ ref, open }) => (
                  <>
                    <Image
                      alt="g"
                      ref={ref}
                      onClick={open}
                      src={b1}
                      width={390}
                      height={253}
                      className="h-[253px]"
                    />
                  </>
                )}
              </Item>
              <Item
                original={b3.src}
                thumbnail={b3.src}
                width="390"
                height="253"
              >
                {({ ref, open }) => (
                  <>
                    <Image
                      alt="g"
                      ref={ref}
                      onClick={open}
                      src={b3}
                      width={390}
                      height={253}
                      className="h-[253px]"
                    />
                  </>
                )}
              </Item>
            </div>
            <div  className="grid-rows-2  ">
              <div className="flex flex-col gap-2" >
                <Item
                  original={b2.src}
                  thumbnail={b2.src}
                  width="390"
                  height="253"
                >
                  {({ ref, open }) => (
                    <>
                      <Image
                        alt="g"
                        ref={ref}
                        onClick={open}
                        src={b2}
                        width={390}
                        height={253}
                        className="h-[253px]"
                      />
                    </>
                  )}
                </Item>
                <Item
                  original={b4.src}
                  thumbnail={b4.src}
                  width="390"
                  height="253"
                >
                  {({ ref, open }) => (
                    <>
                      <Image
                        alt="g"
                        ref={ref}
                        onClick={open}
                        src={b4}
                        width={390}
                        height={253}
                        className="h-[253px]"
                      />
                    </>
                  )}
                </Item>
              </div>
            </div>

            <div  className="grid-rows-2">
              <Item
                original={L2.src}
                thumbnail={L2.src}
                width="390"
                height="512"
              >
                {({ ref, open }) => (
                  <>
                    <Image
                      alt="g"
                      ref={ref}
                      onClick={open}
                      src={L2}
                      width={390}
                      height={512}
                      className="h-[512px]"
                    />
                  </>
                )}
              </Item>
            </div>
          </div>
        </Gallery>

        {/* 
  
  <div className="flex flex-col">
                <div className="flex">
                  <Item
                    original={s2.src}
                    thumbnail={s2.src}
                    width="390"
                    height="253"
                  >
                    {({ ref, open }) => (
                      <Image
                        alt="g"
                        ref={ref}
                        onClick={open}
                        src={s2}
                        width="390"
                        height="253"
                      />
                    )}
                  </Item>
                  <Item
                    original={s3.src}
                    thumbnail={s3.src}
                    width="390"
                    height="253"
                  >
                    {({ ref, open }) => (
                      <Image
                        alt="g"
                        ref={ref}
                        onClick={open}
                        src={s2}
                        width="390"
                        height="253"
                      />
                    )}
                  </Item>
                </div>
                <Item
                  original={s3.src}
                  thumbnail={s3.src}
                  width="390"
                  height="512"
                >
                  {({ ref, open }) => (
                    <Image
                      alt="g"
                      ref={ref}
                      onClick={open}
                      src={s3}
                      width="390"
                      height="512"
                    />
                  )}
                </Item>
              </div>
  */}
        <div></div>
      </div>
    </section>
  );
};

export default Gallary;
