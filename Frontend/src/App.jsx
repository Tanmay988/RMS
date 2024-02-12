import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Features from "./Pages/Features";
import HowItWorks from "./Pages/HowItWorks";
import Error from "./Pages/Error";
import "./App.css";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/features" element={<Features />} />
        <Route path="/info" element={<HowItWorks />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
};

export default App;
