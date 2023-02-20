import { Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";

const Endpoints = () => {
  return (
    <Routes>
      <Route path="/:user" element={<Home />} />
      <Route path="/" element={<Home />} />
    </Routes>
  );
};

export { Endpoints as Routes };
