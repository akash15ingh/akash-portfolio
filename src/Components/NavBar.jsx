import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
//import { Link } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";

const NavBar = () => {
  const [nav, setNav] = useState(false);

  const NavHandler = () => {
    setNav(!nav);
  };
  return (
    <div className="flex justify-between items-center h24 max-w-[1240px] mx-auto px-4 text-white">
      <h1 className="w-full text-3xl font-bold text-[#00df9a]">REACT.</h1>
      <ul className="hidden md:flex">
        <li className="p-4">
          <Link smooth to="#">
            Home
          </Link>
        </li>
        <li className="p-4">
          <Link smooth to="#projects">
            Projects
          </Link>
        </li>
        <li className="p-4">
          <Link smooth to="#contact">
            Contact
          </Link>
        </li>
      </ul>
      <div onClick={NavHandler} className="block md:hidden">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <div
        className={
          nav
            ? "fixed left-0 top-0 w-[60%] border-r-green-750 h-full bg-[#000300] ease-in-out duration-500"
            : "fixed left-[-100%]"
        }
      >
        <h1 className="w-full text-3xl font-bold text-[#00df9a] m-4">REACT.</h1>
        <ul className=" uppercase p-4">
          <li className="p-4 border-b border-green-600">
            <Link to="/" spy="true" smooth={true} offset={50} duration={500}>
              Home
            </Link>
          </li>
          <li className="p-4 border-b border-green-600">
            <Link
              to="projects"
              spy="true"
              smooth="true"
              offset={50}
              duration={500}
            >
              Projects
            </Link>
          </li>
          <li className="p-4 border-b border-green-600">
            <Link
              to="contact"
              spy="true"
              smooth={true}
              offset={50}
              duration={500}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default NavBar;
