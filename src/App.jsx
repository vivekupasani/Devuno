import React from "react";
import { Route, Routes } from "react-router-dom";
import Room from "./pages/Room";
import JoinRoom from "./pages/JoinRoom";
import Home from "./pages/Home";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home name="vivek" />}></Route>
        <Route path="/room/:id" element={<Room />}></Route>
        <Route path="/join-room" element={<JoinRoom />}></Route>
        <Route path="*" element={<>404</>}></Route>
      </Routes>
    </>
  );
};

export default App;
