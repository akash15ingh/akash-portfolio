import React from "react";
import mine from "../assets/mine.png";

const Explore = () => {
  return (
    <div className=" w-full bg-white py-16 px-4">
      <div className="max-w-{1240px} mx-auto grid md:grid-cols-2">
        <img className="w-[300px] m-auto my-4" src={mine} alt="myPic" />
        <div className="flex flex-col justify-center">
          <h1 className="font-bold md:text-4xl sm:text-3xl py-2 text-[#00df9a]">
            Explore More about me.
          </h1>
          <p className="text-black">
            Hello,I am Akash Singh, a dedicated professional with 36 months of
            experience, eagerly seeking a front-end developer position to
            accelerate career growth and pursue my passion for creating
            exceptional user experiences. Committed to continuous learning and
            professional development, I am driven to excel in the field of
            front-end development.Below are my some few projects i have done,
            with Git-repo.
          </p>
          <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3 text-black">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Explore;
