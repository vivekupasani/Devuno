import React from "react";
import {
    ArrowRight,
    Code,
    FileCheck,
    Github,
    Linkedin,
    Twitter,
    Upload,
  } from "lucide-react";
const Bottom = () => {
  return (
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
          <Github className="hover:text-white transition-colors " />
        </a>
        <a href="https://linkedin.com/in/vivekupasani">
          <Linkedin className="hover:text-white transition-colors " />
        </a>
        <a href="">
          <Twitter className="hover:text-white transition-colors " />
        </a>
      </span>
    </footer>
  );
};

export default Bottom;
