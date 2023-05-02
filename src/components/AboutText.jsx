import React from "react";

const aboutText = (props) => {
  return (
    <div
      className={`w-full md:w-1/2 ${props.style} items-center md:items-start`}
    >
      <h2 className="text-2xl font-black font-fraunces text-[2.5em] leading-tight text-very-dark-desaturated-blue text-center md:text-start">
        {props.title}
      </h2>
      <p className="pt-8 pb-11 leading-[1.875em] text-dark-grayish-blue text-center md:text-start">
        {props.description}
      </p>
      <div className="group relative px-2 w-[8.125rem] cursor-pointer">
        <a
          className="absolute z-20 bottom-[-1.25rem] font-fraunces text-[1em] "
          href="#"
        >
          LEARN MORE
        </a>
        <div
          className={`absolute z-10 left-0 bottom-[-1.25rem] w-full h-[0.625rem] rounded-full opacity-40 ${props.buttonColor} group-hover:opacity-100 transition duration-100`}
        ></div>
      </div>
    </div>
  );
};

export default aboutText;
