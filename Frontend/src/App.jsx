import React, { useEffect } from "react";
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

//phonepe routes
import Phonepe from "./Pages/Phonepe";
import Success from "./components/Success";
import Failure from "./components/Failure";

//admin routes
import Admin from "./Pages/Admin";
import ViewMenu from "./Pages/AdminPages/ViewMenu";
import PreviousOrders from "./Pages/AdminPages/PreviousOrders";
import UpdateMenu from "./Pages/AdminPages/UpdateMenu";
import GenerateQR from "./Pages/AdminPages/GenerateQR";
import Tables from "./Pages/AdminPages/Tables";
import Feedbacks from "./Pages/AdminPages/Feedbacks";

const App = () => {
  const { authUser } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (authUser) {
      navigate("/");
    }
  }, [authUser]);
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/features" element={<Features />} />
        <Route path="/info" element={<HowItWorks />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />

        <Route path="/admin" element={authUser && <Admin />} />
        <Route path="/admin/viewmenu" element={authUser && <ViewMenu />} />
        <Route
          path="/admin/previousorders"
          element={authUser && <PreviousOrders />}
        />
        <Route path="/admin/updatemenu" element={authUser && <UpdateMenu />} />
        <Route path="/admin/qr" element={authUser && <GenerateQR />} />
        <Route path="/admin/tables" element={authUser && <Tables />} />
        <Route path="/admin/feedbacks" element={authUser && <Feedbacks />} />

        {/* phonepe */}
        {/* <Route exact path="/payment" element={<Phonepe />} />
        <Route exact path="/success" element={<Success />} />
        <Route exact path="/failure" element={<Failure />} />
        <Route path="*" element={<Error />} /> */}
      </Routes>
      <Footer />
    </>
  );
};

export default App;
