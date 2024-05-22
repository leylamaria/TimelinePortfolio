import React from "react";
import { ReactTyped } from "react-typed";
import Avatar from "../assets/myavatar.png";

const Hero = () => {
  return (
    <div className="Hero max-w-[1200px] mt-12 w-full h-screen mx-auto text-center flex flex-col justify-center ">
      <h1 className="md:text-10xl sm:text-8xl text-6xl font-bold">
        Hi 🙋🏽‍♀️, I'm Leyla{" "}
      </h1>
      <img
        className="w-60 rounded-full mx-auto my-16 "
        src={Avatar}
        alt="Avatar"
      />
      <ReactTyped
        className="md:text-6xl sm:text-6xl text-4xl font-bold"
        strings={[
          "watersports fanatic",
          "multilingual multitasker",
          "ocean lover",
          "team player",
        ]}
        typeSpeed={120}
        backSpeed={90}
        loop
      />
    </div>
  );
};

export default Hero;
