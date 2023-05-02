import React from "react";
import Header from "../components/Header";
import { arrowDown } from "../assets";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative w-full h-[50rem] flex justify-center items-center bg-hero-image bg-cover bg-no-repeat bg-bottom"
    >
      <div className="absolute top-0 flex flex-col items-center text-center w-full px-5">
        <Header />
        <h1 className="pt-[4.375rem] pb-[5.75rem] max-w-[43rem] md:max-w-[50rem] font-fraunces font-black text-[2.125em] sm:text-[3.4em] text-white tracking-[11px] leading-tight uppercase">
          We are creatives
        </h1>
        <div className="h-[7.375rem]">
          <img className="h-full slide-top" src={arrowDown} alt="arrow-down" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
