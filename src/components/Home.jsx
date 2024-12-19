import React from "react";
import {
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import Github from "../assets/images/GitHub.svg";
import Linkedin from "../assets/images/linkedin.svg"


const Home = () => {
  return (
    <div name="home" className=" w-full  bg-[#000000] md:min-h-[60vh] pt-40" >
      {/*Container*/}
      < div className="max-w-[1000px] mx-auto px-8 flex flex-col lg:justify-normal md:justify-center items-center sm:justify-center ">
        
        <h1 className="text-xl md:text-8xl sm:text-3xl font-bold text-[#ffffff] whitespace-nowrap animate-title ">
          Inyene Etoedia
        </h1>
        <h2 className="text-lg sm:text-lg md:text:2xl font-semibold text-[#ffffff] animate-fadeIn my-4">
          Mobile Engineer
        </h2>
        <p className="text-[#8892b0] pb-4 max-w-[700px] animate-fadeIn justify-center">
          Hi, I’m a skilled Frontend Developer with a passion for developing
          great user experiences through innovative designs and code. Proficient
          in HTML, CSS, Javascript, and Reactjs, with a proven record of
          delivering world-class projects for a maximum and optimised online
          presence high-quality projects.
        </p>
        
        <div className="flex gap-5 my-5 md:mt-8 justify-center items-center w-full text-gray-300">
        <a className="  text-zinc-400 transition duration-300 hover:text-orange-strong "
              href="https://www.linkedin.com/in/damilolaadediran/" target="blank"> <FaLinkedin size={20}/> </a>
        <a className=" text-gray-300 transition duration-300 hover:text-orange-strong"
              href="https://www.linkedin.com/in/damilolaadediran/" target="blank"> <img src={Github} alt="github" className="w-6 "/></a>
        <a className=" text-gray-300"
              href="https://www.linkedin.com/in/damilolaadediran/" target="blank"> <img src={Linkedin} alt="github" className="w-6"/></a>
        
      </div>
        
      </div>
     
      
    </div>
  );
};

export default Home;
