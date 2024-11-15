import React from "react";

import HTML from "../assets/images/html.png";
import CSS from "../assets/images/css.png";
import JavaScript from "../assets/images/javascript.png";
import ReactImg from "../assets/images/react.png";
// import Node from "../assets/images/node.png";
import FireBase from "../assets/images/firebase.png";
import GitHub from "../assets/images/github.png";
import Tailwind from "../assets/images/tailwind.png";
import Nextjs from "../assets/images/nextjs.png"


const Skills = () => {
  return (
    <div name="skills" className="bg-[#000000] text-gray-300 w-full h-screen">
      {/* Container*/}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full mt-[-50px]">
        <div>
          <p className=" font-bold inline border-b-4 border-pink-600 text-4xl">
            Skills
          </p>
          <p className="py-4 ">These are the technologies i've worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={HTML} alt="HTML icon" />
            <p className="my-4">HTML</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={CSS} alt="HTML icon" />
            <p className="my-4">CSS</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={JavaScript} alt="HTML icon" />
            <p className="my-4">JAVASCRIPT</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={ReactImg} alt="HTML icon" />
            <p className="my-4">REACT</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Nextjs} alt="HTML icon" />
            <p className="my-4">NEXT</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={GitHub} alt="HTML icon" />
            <p className="my-4">GITHUB</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={FireBase} alt="HTML icon" />
            <p className="my-4">FIREBASE</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Tailwind} alt="HTML icon" />
            <p className="my-4">TAILWIND</p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Skills;
