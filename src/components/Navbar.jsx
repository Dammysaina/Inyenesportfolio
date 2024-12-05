import React, { useState } from "react";
import {
  FaBars,
  FaTimes,
  // FaGithub,
  // FaLinkedin,
} from "react-icons/fa";
// import { HiOutlineMail } from "react-icons/hi";
// import { BsFillPersonLinesFill } from "react-icons/bs";
import Logo from "../assets/images/dalogo.png";
import { Link } from "react-scroll";
import { HiArrowNarrowRight } from "react-icons/hi";
import User from "../assets/images/user.png"

const Navbar = () => {
  const [Nav, setNav] = useState(false);
  const handleClick = () => setNav(!Nav);
  return (
    <div className="fixed w-full bg-[#000000] text-gray-300 animate-fade-in transition-all duration-300 z-50 ">
      <div className=" bg-black relative top-[20px] px-5">
        {/* <div> */}
          <div className="flex items-center justify-between h-16 border border-[#1a1a1a] px-5">
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
      <div onClick={handleClick} className="md:hidden block z-10">
        {!Nav ? <FaBars className="bg-[#e3e5e9]" /> : <FaTimes className="bg-[#e3e5e9]" />}
      </div>
      {/* Mobile Menu */}
      <ul
        className={
          !Nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#000000] flex flex-col justify-center items-center"
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
      {/* <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-500">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://www.linkedin.com/in/damilolaadediran/" target="blank"
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://github.com/Dammysaina" target="blank"
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#1d2f27]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="mailto:dammyadediran94@gmail.com" target="blank"
            >
              Mail <HiOutlineMail size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://drive.google.com/file/d/1JcF86BXRNXY5ypWg5qXr23PpfFVxhBn_/view?usp=sharing" target="blank"
            >
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div> */}
    </div>
  );
};

export default Navbar;
