import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Playground from "./pages/playground";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home name="vivek" />}></Route>
        <Route path="/playground" element={<Playground />}></Route>
        <Route path="/about-us" element={<AboutUs />}></Route>
        <Route path="*" element={<>404</>}></Route>
      </Routes>
    </>
  );
};

export default App;
