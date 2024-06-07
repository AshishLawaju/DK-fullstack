"use client";
import React, { useEffect, useRef } from "react";

import LightGallery from "lightgallery/react";

// import styles
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
// import plugins if you need
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";

// @ts-ignore
import fjGallery from "justifiedGallery";
import { LightGallery as ILightGallery } from "lightgallery/lightgallery";
import { InitDetail } from "lightgallery/lg-events";
import Script from "next/script";
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
import Gallary from "./Gallary";
import Spzoo from "../../components/common/spzoo/Spizoo";
import Footer2 from "../../components/common/footer/Footer2";
const ServicePage = () => {
//change for bulid

  return (
    <section className="bg-[#f7f7f7]">
      <div className="py-16">
        <Spzoo />
        <Gallary />
      </div>
      <Footer2/>
    </section>
  );
};

export default ServicePage;
