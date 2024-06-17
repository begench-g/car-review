import React from "react";
import Layout from "./layout";
import classes from "./style.module.scss";
import HeroImg from "../../../public/bmw-5-series-pair-carousel-1920x774px.jpg";
import Image from "next/image";
import BreadCrumb from "../BreadCrumb/BreadCrumb";

const Hero = () => {
  return (
    <>
      <Layout />
      <BreadCrumb />
      <div className={classes.hero}>
        <div className={classes.page_heading}>
          <h1>Car Reviews: We Drive It Like It Is</h1>
          <p>Get our honest, in-depth take on all the latest vehicles</p>
        </div>
        <div className={classes.hero_picture_container}>
          <div className={classes.page_heading_picture}>
            <Image
              src={HeroImg}
              alt="hero_image"
              width={0}
              height={0}
              sizes="100vh"
              style={{ width: "100%", height: "100%" }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
