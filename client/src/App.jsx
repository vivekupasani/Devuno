import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Ground from "./pages/Ground";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/playground" element={<Ground />}></Route>
        <Route path="/about-us" element={<AboutUs />}></Route>
        <Route path="*" element={<>404</>}></Route>
      </Routes>
    </>
  );
};

export default App;
