import React from "react";
import { features } from "../constants/data.js";
import AboutText from "../components/AboutText";

const Features = () => {
  const styles = {
    textLeft:
      "flex flex-col justify-center px-5 py-[3.125rem] xs:py-[5.625rem] sm:px-[4.375rem] md:pl-[10.313rem] md:pr-[6.875rem]",
    textRight:
      "flex flex-col justify-center px-5 py-[3.125rem] xs:py-[5.625rem] sm:px-[4.375rem] md:pl-[6.875rem] md:pr-[10.313rem]",
  };

  const featureElements = features.map((feature, index) => {
    return (
      <article
        id="about"
        key={index}
        className={`flex ${
          index % 2 === 0
            ? "flex-col-reverse md:flex-row"
            : "flex-col-reverse md:flex-row-reverse"
        } w-full h-screen md:h-[37.5rem]`}
      >
        <AboutText
          title={feature.title}
          description={feature.description}
          index={index}
          style={`${index % 2 === 0 ? styles.textLeft : styles.textRight}`}
          buttonColor={feature.color}
        />
        <div
          className={`flex flex-1 w-full md:w-[50%] ${feature.desktopImg} bg-cover md:bg-cover bg-center`}
        ></div>
      </article>
    );
  });
  return <section className="w-full">{featureElements}</section>;
};

export default Features;
