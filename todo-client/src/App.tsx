import "./App.css";
import "./index.css";
import React from "react";
import { Routes } from "./routes";
import { Footer, Nav } from "./components";

const App = () => {
  return (
    <div className="flex-none flex flex-col mx-auto min-h-screen p-3 bg-main text-white">
      <Nav />
      <Routes />
      <Footer />
    </div>
  );
};

export default App;
