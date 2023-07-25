import React from "react";
import Typewriter from "typewriter-effect/dist/core";
import TypeAnimate from "./TypeAnimate";

const Main = () => {
  return (
    <div className="text-white ">
      <div className="maz-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center sm:flex">
        <p className="text-[#00df9a] font-bold p-2 sm:flex justify-center">
          Grow By Learning & Implementing
        </p>
        <h2 className="md:text-7xl sm:text-6xl text-5px font-bold md:py-6">
          Grow with Positive Attitude.
        </h2>
        <div>
          <p className="md:text-3xl sm:text-2xl text-5px font-bold">
            Live,Learn,Laugh for LIFE,{" "}
          </p>
          <div className="text-[#00df9a] font-bold mx-auto mt-6 flex justify-center p-2">
            <TypeAnimate text="Smile You Look Better🙂" delay={100} infinite />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
