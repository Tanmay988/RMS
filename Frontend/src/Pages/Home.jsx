import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="container-fluid wrapper">
        <div className="row">
          <div className="col-md-10 col-12 mx-auto">
            <div className="container">
              <div className="left-box">
                <h1>
                  Now take food orders with interactive
                  <span style={{ color: "#ff7549" }}> QR codes</span>
                </h1>
                <p>
                  No more reprinting menus, order errors, and delayed responses
                  from the kitchen simply integrate RMS’ QR menu with your
                  restaurant and start delivering a seamless customer
                  experience.
                </p>
                <div className="button">
                  <Link to={"/login"} className=" Btn">
                    Try for free
                  </Link>
                </div>
              </div>
              <div className="right-box">
                <img src="./Images/hero1.avif" alt="hero img" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
