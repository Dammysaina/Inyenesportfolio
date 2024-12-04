import React from "react";


const Home = () => {
  return (
    <div name="home" className=" w-full  bg-[#000000] md:min-h-[60vh] pt-40" >
      {/*Container*/}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col items-center ">
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ffffff]">
          Inyene Etoedia
        </h1>
        <h2 className="text-xl sm:text-l font-bold text-[#ffffff]">
          Mobile Engineer
        </h2>
        <p className="text-[#8892b0] py-4 max-w-[700px]">
          Hi, I’m a skilled Frontend Developer with a passion for developing
          great user experiences through innovative designs and code. Proficient
          in HTML, CSS, Javascript, and Reactjs, with a proven record of
          delivering world-class projects for a maximum and optimised online
          presence high-quality projects.
        </p>
      </div>
      <div className="flex gap-4 mt-5 md:mt-8">
        <a></a>
        <a></a>
        <a></a>
      </div>
    </div>
  );
};

export default Home;
