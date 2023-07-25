import React from "react";
import { FaLinkedin, FaGitSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="mx-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-1 gap-8 text-gray-300">
      <div>
        <h1 className="w-full text-3xl font-bold text-[#00df9a] m-4">REACT.</h1>
        <p className="py-4">
          This impressive webpage is entirely crafted using the powerful
          React.js framework, the webpage incorporates the "react-typeWriter"
          package,for engaging and animated text effects.the webpage benefits
          from the iconic and visually appealing Material UI Icons package.To
          achieve a sleek and responsive layout, the popular "TailWind CSS"
          styling library has been skillfully employed.Additionally, external
          CSS has been selectively utilized for specific components, showcasing
          a thoughtful combination of styles tailored to the unique requirements
          of the webpage.Additionally, external CSS has been selectively
          utilized for specific components, showcasing a thoughtful combination
          of styles tailored to the unique requirements of the webpage,setting a
          high standard for modern web development.
        </p>
        <div className="flex md:w-[50%] my-6 justify-stretch">
          <a target="blank" href="https://www.linkedin.com/feed/">
            {<FaLinkedin size={50} />}
          </a>

          <a href="https://github.com/dashboard" target="blank">
            <FaGitSquare size={50} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
