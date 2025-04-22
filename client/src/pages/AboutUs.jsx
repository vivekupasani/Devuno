import React from "react";
import Nav from "../components/Nav";
import Bottom from "../components/Bottom";

const AboutUs = () => {
  return (
    <div className="h-screen w-full bg-[#edecec] flex flex-col">
      {/* Navigation bar */}
      <div className="flex justify-center items-center py-4">
        <Nav />
      </div>

      {/* About Us Section */}
      <main className="flex flex-col items-center px-4 flex-grow w-full lg:w-full lg:mt-20">
        <h1 className="text-3xl font-bold text-[#1e222c] mb-4 md:text-3xl lg:text-4xl">
          About Us
        </h1>
        <p className="text-lg text-[#6b6b6b] max-w-2xl md:text-xl lg:text-xl">
          Welcome to DevunoAI — where innovation meets intelligence. We are a
          passionate team of developers and AI enthusiasts dedicated to creating
          smart, efficient, and powerful tools that elevate the coding
          experience. Our mission is to empower developers by simplifying
          complex tasks, enhancing productivity, and sparking creativity through
          the power of artificial intelligence. At DevunoAI, we believe the
          future of software development lies in seamless collaboration between
          humans and machines. Our goal is to bridge this gap by designing
          intuitive solutions that naturally integrate into the daily workflows
          of developers.
        </p>
      </main>

      {/* Footer Section */}
      <Bottom />
    </div>
  );
};

export default AboutUs;
