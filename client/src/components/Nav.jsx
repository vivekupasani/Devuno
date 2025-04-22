import React, { useState } from "react";
import {
  Github,
  HomeIcon,
  ListIcon,
  PersonStandingIcon,
  Play,
} from "lucide-react";
import { Link } from "react-router-dom";

const Nav = () => {
  const [isVisible, setisVisible] = useState(true);
  return (
    <div>
      {" "}
      {/* Navigation bar */}
      <nav className="flex justify-between items-center gap-16 px-10 py-4 mt-6 md:gap-32 lg:m-5 lg:px-20 rounded-xl w-fit h-fit bg-[#1e222c]">
        <div className="p1">
          <h1 className="text-2xl font-bold text-white font-serif">DevunoAI</h1>
        </div>

        <div className="hidden sm:hidden lg:flex lg:flex-row lg:ml-20 lg:gap-28 lg:items-center">
          <div className="flex gap-4 text-[#97999e] cursor-pointer">
            <Link to="/">Home</Link>
            <Link to="/playground">Playground</Link>
            <Link to="/about-us">About Us</Link>
          </div>

          <div className="flex gap-1 px-6 py-2 border-2 border-[#97999e] bg-[#101929] text-[#97999e] rounded-lg hover:text-white hover:border-white transition-colors duration-75">
            <a
              className="flex flex-row cursor-pointer gap-1 "
              href="https://github.com/vivekupasani/Devuno"
            >
              {" "}
              <span>
                <Github />
              </span>
              <span>Contribute</span>
            </a>
          </div>
        </div>
        <ListIcon
          onClick={() => {
            setisVisible(!isVisible);
          }}
          className="text-white ml-15 lg:hidden cursor-pointer"
        />
      </nav>
      {/* mobile nav options*/}
      <div
        className={`${
          isVisible ? "hidden" : "flex"
        } lg:hidden cursor-pointer flex-col  gap-5  bg-blend-color-dodge bg-[#1e222cf3] border-1 border-white  rounded-lg w-85 md:w-103 h-fit text-white p-4 absolute top-22`}
      >
        <span className="flex flex-row gap-2 cursor-pointer">
          <Link
            className="flex flex-row gap-2 text-xl justify-center items-center"
            to="/"
          >
            {" "}
            <HomeIcon /> Home
          </Link>
        </span>
        <span className="bg-[#3b3b3b] h-0.5 w-full" />
        <span className="flex flex-row gap-2">
          {" "}
          <Link
            className="flex flex-row gap-2 text-xl justify-center items-center"
            to="/playground"
          >
            {" "}
            <Play /> Playground
          </Link>
        </span>
        <span className="bg-[#3b3b3b] h-0.5 w-full" />
        <span className="flex flex-row gap-2">
          <Link
            className="flex flex-row gap-2 text-xl justify-center items-center"
            to="/about-us"
          >
            {" "}
            <PersonStandingIcon /> About Us
          </Link>
        </span>
        <div className="flex gap-1 px-6 justify-center py-2 border-2 border-[#97999e] bg-[#101929] text-[#97999e] rounded-lg">
          <a
            className="flex flex-row cursor-pointer gap-1"
            href="https://github.com/vivekupasani/Devuno"
          >
            {" "}
            <span>
              <Github />
            </span>
            <span>Contribute</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Nav;
