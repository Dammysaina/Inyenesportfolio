import React from "react";

const Contact = () => {
  return (
    <section
      name="contact"
      className="w-full  bg-[#000000] text-gray-300 flex justify-center items-center "
    >
      <div className="pb-[8rem] pt-[4rem] text-center flex flex-col items-center">
        <p className="text-4xl font-bold inline text-zinc-90 relative sm:text-4xl mt-3 whitespace-nowrap z-10">
          Let's Talk
          <span className="absolute text-4xl sm:text-5xl font-bold left-0 -top-4 sm:-top-6 bg-clip-text text-transparent bg-gradient-to-b from-zinc-800 -z-10 md:left-1/2 md:-translate-x-1/2">
              
              let's talk
            </span>
        </p>
        
        <p className="text-gray-500 pt-4 flex items-center" >
          Shoot me an email - <a href="mailto:etoedia@gmail.com" className="text-" >etoedia@gmail.com</a>
          
        </p>
      </div>
    </section>
  );
};

export default Contact;
