import React, { useState, useEffect } from "react";
import { FiGithub } from "react-icons/fi";
import { SlSocialLinkedin } from "react-icons/sl";
import { RiTwitterXLine } from "react-icons/ri";
import Logo from "../assets/images/dalogo.png";
import { Link } from "react-scroll";
import { TbMailCode } from "react-icons/tb";
import { IoDocumentAttachOutline, IoPersonOutline } from "react-icons/io5";
import { GoProjectSymlink } from "react-icons/go";

const Navbar = () => {
  const [Nav, setNav] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const handleClick = () => setNav(!Nav);

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.6 } // 60% of the section should be visible
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="w-full  text-gray-300 animate-fadeIn transition-all duration-300 z-50">
      <div className="  relative top-[20px] px-5">
        {/* <div> */}
        <div className="flex items-center bg-black justify-between h-16 border border-[#1a1a1a] px-5">
          <Link to="home" smooth={true} duration={500}>
            <img
              src={Logo}
              alt="Logoimage"
              style={{ width: "40px" }}
              className="cursor-pointer"
            />
          </Link>
          {/* menu*/}
          {/* <div className="flex items-center gap-4"> */}
          <ul className="hidden md:flex items-center gap-4">
            <li
              className={`${
                activeSection === "about" ? "text-orange-500" : ""
              }`}
            >
              <Link
                to="about"
                smooth={true}
                duration={500}
                className="flex items-center gap-4"
              >
                <IoPersonOutline size={20} />
                About
              </Link>{" "}
            </li>
            <li
              className={`${activeSection === "work" ? "text-orange-500" : ""}`}
            >
              <Link
                to="work"
                smooth={true}
                duration={500}
                className="flex items-center gap-4"
              >
                <GoProjectSymlink size={20} />
                Projects
              </Link>{" "}
            </li>
            <li
              className={`${
                activeSection === "contact" ? "text-orange-500" : ""
              }`}
            >
              <Link
                to="contact"
                smooth={true}
                duration={500}
                className="flex items-center gap-5"
              >
                <TbMailCode size={20} />
                Contact
              </Link>{" "}
            </li>
          </ul>
          <div className="hidden md:block">
            <a
              href="https://docs.google.com/document/d/17lSwoddQ_Q6ueDXgsw8nHGdzUqIHweuI2v7pf9BrN64/edit?usp=drive_link"
              target="_blank"
              rel="noreferrer"
            >
              <button className="group bg-orange-600 text-black px-6 py-3 my-2 flex items-center hover:bg-zinc-500">
                Résumé
                <span>
                  <IoDocumentAttachOutline className="ml-3" />
                </span>
              </button>
            </a>
          </div>
          {/* </div> */}
          {/* Hamburger */}
      <div
        onClick={handleClick}
        className="md:hidden z-50 flex flex-col justify-center w-10 h-10 cursor-pointer relative "
      >
        <span
          className={`block w-8 h-1 bg-gray-300 transition-transform duration-300 ${
            Nav ? "rotate-45 translate-y-2.5" : ""
          }`}
        ></span>
        <span
          className={`block w-6 h-1 bg-gray-300 my-1 transition-opacity duration-300 ${
            Nav ? "opacity-0" : ""
          }`}
        ></span>
        <span
          className={`block w-8 h-1 bg-gray-300 transition-transform duration-300 ${
            Nav ? "-rotate-45 -translate-y-2.5" : ""
          }`}
        ></span>
      </div>
        </div>
        {/* </div> */}
      </div>

      
      {/* Mobile Menu */}
      <ul
        className={`${!Nav ? "hidden" : "absolute"}
           top-32 left-0 w-full h-screen bg-[black] flex flex-col justify-left z-40 gap-8 px-4`}
      >
        {/* <img
          src={Logo}
          alt="Logo"
          style={{ width: "60px" }}
          className="mb-8"
        /> */}
        <li className={`${activeSection === "about" ? "text-orange-500" : ""}`}>
          <Link
            to="about"
            smooth={true}
            duration={500}
            className="flex items-center gap-4"
          >
            <IoPersonOutline size={20} />
            About
          </Link>{" "}
        </li>
        <li className={`${activeSection === "work" ? "text-orange-500" : ""}`}>
          <Link
            to="work"
            smooth={true}
            duration={500}
            className="flex items-center gap-4"
          >
            <GoProjectSymlink size={20} />
            Projects
          </Link>{" "}
        </li>
        <li
          className={`${activeSection === "contact" ? "text-orange-500" : ""}`}
        >
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="flex items-center gap-5"
          >
            <TbMailCode size={20} />
            Contact
          </Link>{" "}
        </li>
        <a
          href="https://docs.google.com/document/d/17lSwoddQ_Q6ueDXgsw8nHGdzUqIHweuI2v7pf9BrN64/edit?usp=drive_link"
          target="_blank"
          rel="noreferrer"
        >
          <button className="group bg-orange-600 text-black px-10 py-2 my-4 flex items-center hover:bg-zinc-500">
            Résumé
            <span>
              <IoDocumentAttachOutline className="ml-3" />
            </span>
          </button>
        </a>
        <div className="flex gap-5 my-5 md:mt-8 justify-center items-center w-full text-gray-300">
          <a
            className="  text-zinc-400 transition duration-300 hover:text-orange-strong animation-pop"
            href="https://github.com/DevSynthx"
            target="_blank"
            rel="noreferrer"
            style={{ animationDelay: "0.3s" }}
          >
            {" "}
            <FiGithub size={25} />{" "}
          </a>
          <a
            className=" text-zinc-400 transition duration-300 hover:text-orange-strong animation-pop"
            href="https://www.linkedin.com/in/inyene-etoedia/"
            target="_blank"
            rel="noreferrer"
            style={{ animationDelay: "0.6s" }}
          >
            {" "}
            <SlSocialLinkedin size={25} />
          </a>
          <a
            className=" text-zinc-400 transition duration-300 hover:text-orange-strong animation-pop"
            href="https://x.com/Etoedia"
            target="_blank"
            rel="noreferrer"
            style={{ animationDelay: "0.9s" }}
          >
            {" "}
            <RiTwitterXLine size={25} />
          </a>
        </div>
      </ul>
      {/*Social Menu */}
    </div>
  );
};

export default Navbar;
