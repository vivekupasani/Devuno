import React from "react";
import {
  ArrowRight,
  ArrowUpNarrowWide,
  Github,
  Linkedin,
  Twitter,
} from "lucide-react";
const Home = ({ name }) => {
  return (
    <div className="h-full w-full bg-[#edecec] ">
      <div className="flex flex-col bg-[url('/bg.jpg')] bg-blend-soft-light bg-center justify-center items-center  bg-[#f7f7f7]">
        {/*Navigation bar */}
        <nav className="flex justify-between items-center rounded-xl w-250 h-fit m-5 px-20 py-2 bg-[#1e222c]">
          <div className="p1">
            <h1 className="text-2xl font-bold text-white">DevunoAI</h1>
          </div>
          <div className="p2 flex gap-4 text-[#97999e]">
            <h1>Home</h1>
            <h1>Features</h1>
            <h1>Documentation</h1>
            <h1>About Us</h1>
          </div>

          <div className="p3 bg-[#101929] text-[#97999e] px-6 py-2 border-2 border-[#97999e] flex gap-1 rounded-lg">
            <span>
              <Github />
            </span>
            <span>Contribute</span>
          </div>
        </nav>

        <main className="flex flex-col justify-center items-center text-center w-full mt-40">
          {/* Hero section */}
          <div
            id="home"
            className="flex flex-col justify-center items-center text-center h-96 w-full font-serif"
          >
            <h1 className="text-lg lg:text-4xl font-bold">
              Paste your code. Gain insights.
            </h1>
            <h1 className="text-5xl lg:text-8xl">Fix it instantly.</h1>
            <h1 className="mt-4">
              Use DevunoAI to analyze your code and receive instant feedback.
            </h1>
            <span className="text-sm lg:text-xl font-bold flex gap-1 text-white bg-[#1e222c] mt-4 px-4 py-2 rounded-xl">
              Get Started <ArrowRight className="mt-0.5" />
            </span>
          </div>

          {/* Feature section */}
          <div
            id="features"
            className="font-serif flex flex-col justify-center items-center mt-50"
          >
            <h1 className="text-4xl font-bold">How it works</h1>
            <h1 className="text-xl text-[#6b6b6b] mt-2">
              Get answers from multiple documentation sources in three simple
              steps
            </h1>
            <div className="flex flex-row justify-center items-center mt-5 gap-10">
              <div
                id="1"
                className="flex flex-col items-center p-10 border border-[#cfcfcf] rounded-lg mt-10 w-64 h-75"
              >
                <span className="flex items-center justify-center text-center bg-black p-4 rounded-full w-16 h-16 text-white">
                  1
                </span>
                <h1 className="text-2xl mt-4 text-[#1e222c]">
                  Select Language
                </h1>
                <h1 className="mt-4 text-[#6b6b6b]">
                  Select the programming language you want to analyze
                </h1>
              </div>
              <div
                id="2"
                className="flex flex-col items-center p-10 border border-[#cfcfcf] rounded-lg mt-10 w-64 h-75"
              >
                <span className="flex items-center justify-center text-center bg-black p-4 rounded-full w-16 h-16 text-white">
                  2
                </span>
                <h1 className="text-2xl mt-4 text-[#1e222c]">Enter code</h1>
                <h1 className="mt-4 text-[#6b6b6b]">
                  Paste your code in the text area and hit enter
                </h1>
              </div>
              <div
                id="3"
                className="flex flex-col items-center p-10 border border-[#cfcfcf] rounded-lg mt-10 w-64 h-75"
              >
                <span className="flex items-center justify-center text-center bg-black p-4 rounded-full w-16 h-16 text-white">
                  3
                </span>
                <h1 className="text-2xl mt-4 text-[#1e222c]">Get results</h1>
                <h1 className="mt-4 text-[#6b6b6b]">
                  Get instant feedback on your code and fix it instantly
                </h1>
              </div>
            </div>
          </div>
        </main>

        {/* Footer section */}
        <footer className="flex flex-row bg-[#1e222c] justify-around mt-40 w-full h-fit p-4 items-center gap-10">
          <h1 className="text-[#97999e]">
            Made with ❤️ by <span className="text-white"> Vivek Upasani</span>
          </h1>
          <h1 className="text-[#97999e]">© 2025 DevunoAI</h1>
          <span className="flex flex-row gap-4 text-[#97999e]">
            <Github />
            <Linkedin />
            <Twitter />
          </span>
        </footer>
      </div>
    </div>
  );
};

export default Home;
