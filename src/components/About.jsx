import React from "react";

const About = () => {
  return (
    <section
      name="about"
      className="w-full h-screen bg-[#000000] text-gray-300 container animate-fade-in px-5"
    >
      <div className="px-5 py-5 md:p-16 border border-[#1a1a1a] p-5">
        <div className=" flex flex-col md:flex-row justify-between gap-5 md:gap-4 pb-8 mb-8 border-b border-[#1a1a1a] w-full  ">
          <p className="text-3xl font-bold inline text-zinc-90 relative sm:text-4xl mt-3 whitespace-nowrap">
            About Me
            <span className="absolute text-4xl sm:text-5xl font-bold left-0 -top-4 sm:-top-6 bg-clip-text text-transparent bg-gradient-to-b from-zinc-800 -z-10 md:left-1/2 md:-translate-x-1/2">
              {" "}
              about me
            </span>
          </p>

          <div className="flex flex-col gap-4 text-zinc-400 md:w-9/12 md:text-base">
            <div>
              I am passionate about building excellent software that improves
              the lives of those around me. I specialize in creating software
              for clients ranging from individuals and small-businesses all the
              way to large enterprise corporations. What would you do if you had
              a software expert available at your fingertips?
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </section>
  );
};

export default About;
