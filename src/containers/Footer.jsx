import React from "react";
import {
  FaFacebookSquare,
  FaInstagram,
  FaTwitter,
  FaPinterest,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="flex flex-col items-center py-[4.375rem] w-full bg-footer-background text-footer-text">
      <h2 className="text-4xl font-black text-footer-logo">sunnyside</h2>
      <ul className="flex pt-10 pb-20 gap-14 ">
        <li>
          <a className="transition duration-200 hover:text-white" href="#about">
            About
          </a>
        </li>
        <li>
          <a
            className="transition duration-200 hover:text-white"
            href="#services"
          >
            Services
          </a>
        </li>
        <li>
          <a
            className="transition duration-200 hover:text-white"
            href="#projects"
          >
            Projects
          </a>
        </li>
      </ul>
      <ul className="flex gap-7">
        <li>
          <a href="#">
            <FaFacebookSquare className="transition duration-200 text-2xl hover:fill-white" />
          </a>
        </li>
        <li>
          <a href="#">
            <FaInstagram className="transition duration-200 text-2xl hover:fill-white" />
          </a>
        </li>
        <li>
          <a href="#">
            <FaTwitter className="transition duration-200 text-2xl hover:fill-white" />
          </a>
        </li>
        <li>
          <a href="#">
            <FaPinterest className="transition duration-200 text-2xl hover:fill-white" />
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
