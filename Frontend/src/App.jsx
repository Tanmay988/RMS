import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Features from "./Pages/Features";
import HowItWorks from "./Pages/HowItWorks";
import Error from "./Pages/Error";
import "./App.css";
import Signup from "./Pages/Signup";
import Login from "./Pages/Login";
import Footer from "./components/Footer";
import Logout from "./Pages/Logout";
import { useAuth } from "./Context/authContext";
import { useNavigate } from "react-router-dom";
const App = () => {
  const { authUser } = useAuth();
  const navigate = useNavigate();
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/features" element={<Features />} />
        <Route path="/info" element={<HowItWorks />} />
        <Route path="/signup" element={authUser ? navigate("/") : <Signup />} />
        <Route path="/login" element={authUser ? navigate("/") : <Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
