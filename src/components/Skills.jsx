import React from "react";

import Flutter from "../assets/images/Flutter.svg";
import Dart from "../assets/images/Dart.svg";
import Swift from "../assets/images/Swift.svg";
import ReactImg from "../assets/images/react.png";
// import Node from "../assets/images/node.png";
import FireBase from "../assets/images/firebase.png";
import GitHub from "../assets/images/github.png";
import Tailwind from "../assets/images/tailwind.png";
import Nextjs from "../assets/images/nextjs.png";
import ANDRIODSTUDIO from "../assets/images/android-studio.svg";
import XCODE from "../assets/images/Xcode.svg";
import VISUALSTUDIO from "../assets/images/visual-studio-code-2019.svg"


const Skills = () => {
  return (
    <div name="skills" className="bg-[#000000] text-gray-300 w-full  ">
      {/* Container*/}
      <div className=" mx-auto flex flex-col w-full h-full mb-4">
        <div>
          <p className=" font-bold inline  text-xl">
            Technologies
          </p>
        </div>

        <div className="flex gap-4 flex-wrap text-center">
          <div className=" flex gap-1 items-center">
            <img className="w-4 " src={Flutter} alt="HTML icon" />
            <p className="text-zinc-500 lg:text-sm sm:text-base">Flutter</p>
          </div>
          <div className="flex gap-1 items-center">
            <img className="w-4 mx-auto" src={Dart} alt="HTML icon" />
            <p className="my-4 text-zinc-500 lg:text-sm sm:text-base">Dart</p>
          </div>
          <div className="flex gap-1 items-center">
            <img className="w-4 mx-auto" src={Swift} alt="HTML icon" />
            <p className="my-4 text-zinc-500 lg:text-sm sm:text-base">JAVASCRIPT</p>
          </div>
          <div className="flex gap-1 items-center">
            <img className="w-4 mx-auto" src={ReactImg} alt="HTML icon" />
            <p className="my-4 text-zinc-500 lg:text-sm sm:text-base">REACT</p>
          </div>
          <div className="flex gap-1 items-center">
            <img className="w-4 mx-auto" src={Nextjs} alt="HTML icon" />
            <p className="my-4 text-zinc-500 lg:text-sm sm:text-base">NEXT</p>
          </div>
          <div className="flex gap-1 items-center">
            <img className="w-4 mx-auto" src={GitHub} alt="HTML icon" />
            <p className="my-4 text-zinc-500 lg:text-sm sm:text-base">GITHUB</p>
          </div>
          <div className="flex gap-1 items-center">
            <img className="w-4 mx-auto" src={FireBase} alt="HTML icon" />
            <p className="my-4 text-zinc-500 lg:text-sm sm:text-base">Firebase</p>
          </div>
          <div className="flex gap-1 items-center">
            <img className="w-4 mx-auto" src={Tailwind} alt="HTML icon" />
            <p className="my-4 text-zinc-500 lg:text-sm sm:text-base">TAILWIND</p>
          </div>

        </div>
        
      </div>
      <div className=" mx-auto flex flex-col w-full ">
        <div>
          <p className=" font-bold inline  text-xl">
            Tools
          </p>
        </div>

        <div className="flex gap-4 flex-wrap text-center">
          <div className=" flex gap-1 items-center">
            <img className="w-4 " src={ANDRIODSTUDIO} alt="HTML icon" />
            <p className="text-zinc-500 lg:text-sm sm:text-base">Android Studio </p>
          </div>
          <div className="flex gap-1 items-center">
            <img className="w-4 mx-auto" src={XCODE} alt="HTML icon" />
            <p className="my-4 text-zinc-500 lg:text-sm sm:text-base">Xcode</p>
          </div>
          <div className="flex gap-1 items-center">
            <img className="w-4 mx-auto" src={VISUALSTUDIO} alt="HTML icon" />
            <p className="my-4 text-zinc-500 lg:text-sm sm:text-base">VSCode</p>
          </div>
          <div className="flex gap-1 items-center">
            <img className="w-4 mx-auto" src={ReactImg} alt="HTML icon" />
            <p className="my-4 text-zinc-500 lg:text-sm sm:text-base">REACT</p>
          </div>
          <div className="flex gap-1 items-center">
            <img className="w-4 mx-auto" src={Nextjs} alt="HTML icon" />
            <p className="my-4 text-zinc-500 lg:text-sm sm:text-base">NEXT</p>
          </div>
          <div className="flex gap-1 items-center">
            <img className="w-4 mx-auto" src={GitHub} alt="HTML icon" />
            <p className="my-4 text-zinc-500 lg:text-sm sm:text-base">GITHUB</p>
          </div>
          <div className="flex gap-1 items-center">
            <img className="w-4 mx-auto" src={FireBase} alt="HTML icon" />
            <p className="my-4 text-zinc-500 lg:text-sm sm:text-base">FIREBASE</p>
          </div>
          <div className="flex gap-1 items-center">
            <img className="w-4 mx-auto" src={Tailwind} alt="HTML icon" />
            <p className="my-4 text-zinc-500 lg:text-sm sm:text-base">TAILWIND</p>
          </div>

        </div>
        
      </div>
    </div>
  );
};

export default Skills;
