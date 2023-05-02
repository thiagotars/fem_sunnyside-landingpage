import {
  instagram,
  facebook,
  logo,
  pinterest,
  twitter,
  hamburger,
  arrowDown,
  favicon,
  imageEmily,
  imageJennie,
  imageThomas,
} from "../assets/";

import {
  mobileCone,
  mobileGraphicDesign,
  mobileHeader,
  mobileMilkBottles,
  mobileOrange,
  mobilePhotography,
  mobileStandOut,
  mobileSugarCubes,
  mobileTransform,
} from "../assets/mobile/";

import {
  desktopCone,
  desktopGraphicDesign,
  desktopHeader,
  desktopMilkBottles,
  desktopOrange,
  desktopPhotography,
  desktopStandOut,
  desktopSugarCubes,
  desktopTransform,
} from "../assets/desktop/";

export const features = [
  {
    title: "Transform your brand",
    description:
      "We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you.",
    desktopImg: "bg-transform-desktop",
    mobileImg: mobileTransform,
    color: "bg-yellow",
  },
  {
    title: "Stand out to the right audience",
    description:
      "Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places",
    desktopImg: "bg-standout-desktop",
    mobileImg: mobileStandOut,
    color: "bg-red",
  },
];

export const services = [
  {
    title: "Graphic design",
    description:
      "Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential client’s attention.",
    desktopImg: "bg-graphic-design",
    mobileImg: mobileGraphicDesign,
    textColor: "text-dark-desaturated-cyan",
  },
  {
    title: "Photography",
    description:
      "Increase your credibility by getting the most stunning, high-quality photos that improve your business image.",
    desktopImg: "bg-photography",
    mobileImg: mobilePhotography,
    textColor: "text-dark-blue",
  },
];

export const testimonials = [
  {
    name: "Emily R.",
    quote:
      "We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.",
    jobTitle: "Marketing Director",
    img: imageEmily,
  },
  {
    name: "Thomas S.",
    quote:
      "Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience.",
    jobTitle: "Chief Operating Officer",
    img: imageThomas,
  },
  {
    name: "Jennie F.",
    quote:
      "Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!",
    jobTitle: "Business Owner",
    img: imageJennie,
  },
];

export const projects = [
  {
    name: "Milk Bottles",
    img: desktopMilkBottles,
  },
  {
    name: "Orange",
    img: desktopOrange,
  },
  {
    name: "Cone",
    img: desktopCone,
  },
  {
    name: "Sugar Cubes",
    img: desktopSugarCubes,
  },
];
