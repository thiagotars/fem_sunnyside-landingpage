import React from "react";
import { services } from "../constants/data.js";

const Services = () => {
  return (
    <section id="services" className="flex flex-col md:flex-row w-full">
      {services.map((service, index) => {
        return (
          <div
            key={index}
            className={`relative flex justify-center ${service.desktopImg} bg-cover bg-center w-full md:w-1/2 h-[37.5rem]`}
          >
            <div
              className={`absolute bottom-[3.5rem] ${service.textColor} text-center max-w-[21.25rem]`}
            >
              <h2
                className={`font-fraunces font-black text-[1.75em] mb-[1.875rem]`}
              >
                {service.title}
              </h2>
              <p className={`leading-[1.65em]`}>{service.description}</p>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default Services;
