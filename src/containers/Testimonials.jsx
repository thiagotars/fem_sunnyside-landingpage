import React from "react";
import { testimonials } from "../constants/data.js";

const Testimonials = () => {
  const testimonialElements = testimonials.map((testimonial, index) => {
    return (
      <li
        key={index}
        className={`flex flex-col w-[21.875rem] text-dark-grayish-blue text-center mb-16 ${
          index == 1 && "mx-[1.875rem]"
        }`}
      >
        <div className="flex justify-center items-center">
          <img
            className="w-[4.5rem] h-[4.5rem] rounded-full"
            src={testimonial.img}
            alt="testimonial-image"
          />
        </div>
        <p className="pt-8 pb-8 md:pt-14 md:pb-16 text-lg">
          {testimonial.quote}
        </p>
        <div>
          <h2 className="font-fraunces text-lg font-black text-very-dark-desaturated-blue">
            {testimonial.name}
          </h2>
          <p className="text-sm">{testimonial.jobTitle}</p>
        </div>
      </li>
    );
  });

  return (
    <section className="flex flex-col items-center p-5 pt-40 w-full">
      <h1 className="uppercase tracking-[0.275em] font-fraunces text-[1.313em] text-grayish-blue">
        Client Testimonials
      </h1>
      <ul className="flex flex-wrap justify-around py-20">
        {testimonialElements}
      </ul>
    </section>
  );
};

export default Testimonials;
