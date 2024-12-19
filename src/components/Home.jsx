import React from "react";
import { FiGithub } from "react-icons/fi";
import { SlSocialLinkedin } from "react-icons/sl";
import { RiTwitterXLine } from "react-icons/ri";

const Home = () => {
  return (
    <div name="home" className=" w-full  bg-[#000000] md:min-h-[60vh] pt-28">
      {/*Container*/}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col lg:justify-normal md:justify-center items-center sm:justify-center ">
        <h1 className="text-xl md:text-7xl sm:text-3xl font-bold text-[#ffffff] whitespace-nowrap animate-title ">
          Inyene Etoedia
        </h1>
        <h2 className="text-lg sm:text-lg md:text:5xl font-normal text-[#ffffff] animate-fadeIn my-4">
          Mobile Engineer
        </h2>
        <p className="text-zinc-400 pb-4 max-w-[700px] animate-fadeIn text-center">
          Hi, I’m a skilled Frontend Developer with a passion for developing
          great user experiences through innovative designs and code. Proficient
          in HTML, CSS, Javascript, and Reactjs, with a proven record of
          delivering world-class projects for a maximum and optimised online
          presence high-quality projects.
        </p>

        <div className="flex gap-5 my-5 md:mt-8 justify-center items-center w-full text-gray-300">
          <a
            className="  text-zinc-400 transition duration-300 hover:text-orange-strong "
            href="https://github.com/DevSynthx"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            <FiGithub size={25} />{" "}
          </a>
          <a
            className=" text-zinc-400 transition duration-300 hover:text-orange-strong"
            href="https://www.linkedin.com/in/inyene-etoedia/"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            <SlSocialLinkedin size={25} />
          </a>
          <a
            className=" text-zinc-400 transition duration-300 hover:text-orange-strong"
            href="https://x.com/Etoedia"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            <RiTwitterXLine size={25} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
