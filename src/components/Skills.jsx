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
    <div name="skills" className="bg-[#000000] text-gray-300 w-full  ">
      {/* Container*/}
      <div className=" mx-auto flex flex-col w-full h-full ">
        <div>
          <p className=" font-bold inline  text-xl">
            Technologies
          </p>
        </div>

        <div className="flex gap-4 flex-wrap text-center">
          <div className=" flex gap-1 items-center">
            <img className="w-4 " src={HTML} alt="HTML icon" />
            <p className="text-zinc-500 lg:text-xs sm:text-base">HTML</p>
          </div>
          <div className="flex gap-1 items-center">
            <img className="w-4 mx-auto" src={CSS} alt="HTML icon" />
            <p className="my-4 text-zinc-500 lg:text-xs sm:text-base">CSS</p>
          </div>
          <div className="flex gap-1 items-center">
            <img className="w-4 mx-auto" src={JavaScript} alt="HTML icon" />
            <p className="my-4 text-zinc-500 lg:text-xs sm:text-base">JAVASCRIPT</p>
          </div>
          <div className="flex gap-1 items-center">
            <img className="w-4 mx-auto" src={ReactImg} alt="HTML icon" />
            <p className="my-4 text-zinc-500 lg:text-xs sm:text-base">REACT</p>
          </div>
          <div className="flex gap-1 items-center">
            <img className="w-4 mx-auto" src={Nextjs} alt="HTML icon" />
            <p className="my-4 text-zinc-500 lg:text-xs sm:text-base">NEXT</p>
          </div>
          <div className="flex gap-1 items-center">
            <img className="w-4 mx-auto" src={GitHub} alt="HTML icon" />
            <p className="my-4 text-zinc-500 lg:text-xs sm:text-base">GITHUB</p>
          </div>
          <div className="flex gap-1 items-center">
            <img className="w-4 mx-auto" src={FireBase} alt="HTML icon" />
            <p className="my-4 text-zinc-500 lg:text-xs sm:text-base">FIREBASE</p>
          </div>
          <div className="flex gap-1 items-center">
            <img className="w-4 mx-auto" src={Tailwind} alt="HTML icon" />
            <p className="my-4 text-zinc-500 lg:text-xs sm:text-base">TAILWIND</p>
          </div>

        </div>
        
      </div>
      <div className=" mx-auto flex flex-col w-full h-full ">
        <div>
          <p className=" font-bold inline  text-xl">
            Tools
          </p>
        </div>

        <div className="flex gap-4 flex-wrap text-center">
          <div className=" flex gap-1 items-center">
            <img className="w-4 " src={HTML} alt="HTML icon" />
            <p className="text-zinc-500 lg:text-xs sm:text-base">HTML</p>
          </div>
          <div className="flex gap-1 items-center">
            <img className="w-4 mx-auto" src={CSS} alt="HTML icon" />
            <p className="my-4 text-zinc-500 lg:text-xs sm:text-base">CSS</p>
          </div>
          <div className="flex gap-1 items-center">
            <img className="w-4 mx-auto" src={JavaScript} alt="HTML icon" />
            <p className="my-4 text-zinc-500 lg:text-xs sm:text-base">JAVASCRIPT</p>
          </div>
          <div className="flex gap-1 items-center">
            <img className="w-4 mx-auto" src={ReactImg} alt="HTML icon" />
            <p className="my-4 text-zinc-500 lg:text-xs sm:text-base">REACT</p>
          </div>
          <div className="flex gap-1 items-center">
            <img className="w-4 mx-auto" src={Nextjs} alt="HTML icon" />
            <p className="my-4 text-zinc-500 lg:text-xs sm:text-base">NEXT</p>
          </div>
          <div className="flex gap-1 items-center">
            <img className="w-4 mx-auto" src={GitHub} alt="HTML icon" />
            <p className="my-4 text-zinc-500 lg:text-xs sm:text-base">GITHUB</p>
          </div>
          <div className="flex gap-1 items-center">
            <img className="w-4 mx-auto" src={FireBase} alt="HTML icon" />
            <p className="my-4 text-zinc-500 lg:text-xs sm:text-base">FIREBASE</p>
          </div>
          <div className="flex gap-1 items-center">
            <img className="w-4 mx-auto" src={Tailwind} alt="HTML icon" />
            <p className="my-4 text-zinc-500 lg:text-xs sm:text-base">TAILWIND</p>
          </div>

        </div>
        
      </div>
    </div>
  );
};

export default Skills;
