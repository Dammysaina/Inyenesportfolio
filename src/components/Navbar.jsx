import React, { useState } from "react";
import {
  FaBars,
  FaTimes,
 
} from "react-icons/fa";
import Logo from "../assets/images/dalogo.png";
import { Link } from "react-scroll";
import { HiArrowNarrowRight } from "react-icons/hi";
import User from "../assets/images/user.png"

const Navbar = () => {
  const [Nav, setNav] = useState(false);
  const handleClick = () => {
    setNav(!Nav);
  } 
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
            <div className="flex items-center gap-4">
              <ul className="hidden md:flex">
                <li >
                  <Link to="about" smooth={true} duration={500} className="flex items-center gap-4">
                  <img src={User} className="w-6"
                    alt="usericon"/>
                    About
                  </Link>{" "}
                </li>
                <li>
                  <Link to="work" smooth={true} duration={500}>
                    Projects
                  </Link>{" "}
                </li>
                <li>
                  <Link to="contact" smooth={true} duration={500}>
                    Contact
                  </Link>{" "}
                </li>
              </ul>
              <div className="hidden md:block">
                <a href="https://docs.google.com/document/d/17lSwoddQ_Q6ueDXgsw8nHGdzUqIHweuI2v7pf9BrN64/edit?usp=drive_link" target="_blank" rel="noreferrer">
                  <button className="group bg-orange-600 text-black px-6 py-3 my-2 flex items-center hover:bg-zinc-500" >
                    Résumé
                    <span className="group-hover:rotate-90 duration-300">
                      <HiArrowNarrowRight className="ml-3" />
                    </span>
                  </button>
                </a>
              </div>
            </div>
          </div>
        {/* </div> */}
      </div>

      {/* Hamburger */}
      <div onClick={handleClick} className="md:hidden z-50 block  cursor-pointer relative -top-4 left-[22rem]">
        {!Nav ? <FaBars className="w-10" /> : <FaTimes className="" />}
      </div>
      {/* Mobile Menu */}
      <ul
        className={ `${!Nav
          ? "hidden"
          : "absolute"}
           top-16 left-0 w-full h-screen bg-[black] flex flex-col justify-center items-center z-40`
        }
      >
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="work" smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>
      {/*Social Menu */}
       
    </div>
  );
};

export default Navbar;
