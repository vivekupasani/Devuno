import React, { useState } from "react";
import {
  ArrowRight,
  Code,
  FileCheck,
  Github,
  HomeIcon,
  Linkedin,
  ListIcon,
  PersonStandingIcon,
  Play,
  Twitter,
  Upload,
} from "lucide-react";
import { Link } from "react-router-dom";

const Home = ({ name }) => {
  const [isVisible, setisVisible] = useState(true);
  const steps = [
    {
      id: 1,
      icon: <Code size={24} />,
      title: "Choose Language",
      description:
        "Select your programming language from our extensive library covering all major languages and frameworks.",
    },
    {
      id: 2,
      icon: <Upload size={24} />,
      title: "Submit Your Code",
      description:
        "Paste your code into our interactive editor with real-time syntax highlighting and error checking.",
    },
    {
      id: 3,
      icon: <FileCheck size={24} />,
      title: "Review Insights",
      description:
        "Get detailed analysis with performance tips, security checks, and best practices recommendations tailored to your code.",
    },
  ];

  return (
    <div className="h-full w-full lg:w-full bg-[#edecec]">
      <div className="flex flex-col bg-[url('/bg.jpg')] bg-blend-soft-light bg-center justify-center items-center bg-[#f7f7f7]">
        {/* Navigation bar */}
        <nav className="flex justify-between items-center gap-16 px-10 py-4 mt-6 md:gap-32 lg:m-5 lg:px-20 rounded-xl w-fit h-fit bg-[#1e222c]">
          <div className="p1">
            <h1 className="text-2xl font-bold text-white font-serif">
              DevunoAI
            </h1>
          </div>

          <div className="hidden sm:hidden lg:flex lg:flex-row lg:ml-20 lg:gap-28 lg:items-center">
            <div className="flex gap-4 text-[#97999e] cursor-pointer">
              <Link to="/">Home</Link>
              <Link to="/playground">Playground</Link>
              <Link to="/about-us">About Us</Link>
            </div>

            <div className="flex gap-1 px-6 py-2 border-2 border-[#97999e] bg-[#101929] text-[#97999e] rounded-lg">
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

        <main className="flex flex-col justify-center items-center w-full mt-5 lg:w-full lg:mt-30">
          {/* Hero section */}
          <div
            id="home"
            className="flex flex-col justify-center px-2 items-center text-center h-96 w-fit font-serif"
          >
            <h1 className="text-3xl font-bold mt-1 md:text-5xl lg:text-5xl">
              Elevate code quality
            </h1>
            <h1 className="text-4xl font-bold mt-1 md:text-6xl lg:text-6xl">
              in seconds, not hours.
            </h1>
            <h1 className="w-full mt-1 px-2  text-center lg:mt-2 lg:text-sm">
              DevunoAI detects issues, suggests improvements, and helps you
              write better code in seconds.{" "}
            </h1>
            <Link className="decoration-none" to="/playground">
              {" "}
              <span className="flex items-center justify-center cursor-pointer gap-1 px-6 py-3 mt-4 text-sm font-bold text-white bg-[#1e222c] rounded-xl md:px-8 md:py-3 md:gap-2 lg:text-xl lg:px-8 lg:py-3 lg:gap-3 lg:mt-3">
                Get Started <ArrowRight className="" />
              </span>
            </Link>
          </div>

          {/* Image section*/}
          <div className="bg-[#e8e8e8] m-5 flex items-center justify-center p-2 rounded-2xl lg:p-5 lg:rounded-4xl lg:mt-15">
            <img
              src="/playground.png"
              alt="hero"
              className=" w-100 h-60 md:h-100 md:w-170 lg:h-180 rounded-xl lg:w-300 lg:rounded-2xl "
            />
          </div>

          {/* Feature section */}
          <div
            id="features"
            className="flex flex-col items-center justify-center mt-10 font-serif md:mt-40 lg:mt-40"
          >
            <h1 className="text-xl px-3 text-center font-bold md:text-3xl lg:text-4xl text-[#1e222c]">
              Code Analysis Made Simple
            </h1>
            <h1 className="mt-1 px-3  text-sm text-center text-[#6b6b6b] w-80 md:mt-5 lg:mt-5 lg:w-110 lg:text-xl">
              Debug and optimize your code with our powerful documentation tool
              in just three steps
            </h1>

            <div className="flex flex-col items-center justify-center w-full gap-8 mt-10 md:flex-col lg:flex-row lg:gap-12 lg:mt-10">
              {steps.map((step) => (
                <div
                  key={step.id}
                  className="flex flex-col items-center p-6 border rounded-2xl shadow-lg bg-white border-gray-300 w-full max-w-xs "
                >
                  <div className="flex items-center justify-center w-16 h-16 text-center text-white bg-gray-900 rounded-full text-xl font-bold mb-4">
                    {step.icon}
                  </div>

                  <h3 className="text-xl font-semibold text-gray-900 text-center mb-3">
                    {step.title}
                  </h3>

                  <p className="text-sm text-gray-600 text-center leading-relaxed">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </main>

        {/* Footer section */}
        <footer className="flex flex-col items-center justify-around w-full gap-5 p-4 mt-20 bg-[#1e222c] md:flex-row lg:flex-row lg:mt-40 lg:w-full lg:gap-10">
          <h1 className="text-[#97999e]">
            Made with ❤️ by{" "}
            <span className="text-white">
              <a href="https://vivekupasani.onrender.com">Vivek Upasani</a>
            </span>
          </h1>
          <h1 className="text-[#97999e]">© 2025 DevunoAI</h1>
          <span className="flex flex-row gap-4 text-[#97999e]">
            <a href="https://github.com/vivekupasani">
              <Github />
            </a>
            <a href="https://linkedin.com/in/vivekupasani">
              <Linkedin />
            </a>
            <a href="">
              <Twitter />
            </a>
          </span>
        </footer>
      </div>
    </div>
  );
};

export default Home;
