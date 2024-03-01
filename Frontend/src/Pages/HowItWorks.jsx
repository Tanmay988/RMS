import React from "react";
import { Link } from "react-router-dom";

const HowItWorks = () => {
  return (
    <>
      <div className="container-fluid wrapper">
        <div className="row">
          <div className="col-md-10 col-12 mx-auto">
            <div className="container wrapper media">
              <div className="right-box">
                <img
                  src="./Images/howItsWork.svg"
                  alt="hero img"
                  style={{ width: "35rem", height: "40rem" }}
                />
              </div>

              <div className="left-box how-it-works">
                <h1>How QR ordering work's ?</h1>
                <ul>
                  <li>
                    <h3>
                      <span className="number">01</span> create menu in few
                      minutes!
                    </h3>
                    <p>
                      Upload The Menu And Add Photos Of The Dishes That
                      Customers Can Order. Edit/Modify The Menu Anytime To Suit
                      Your Changing Requirement.
                    </p>
                  </li>
                  <li>
                    <h3>
                      <span className="number">02</span> generate your
                      restraurant QR code
                    </h3>
                    <p>
                      Generate One QR Code For All Locations, Tables As Well As
                      Languages That Your Customers Can Use To Scan And Place
                      Orders.
                    </p>
                  </li>
                  <li>
                    <h3>
                      <span className="number">03</span> Dinners scan the QR
                      code
                    </h3>
                    <p>
                      The Diner Can Scan The QR Code And Start Placing Orders As
                      Soon As They Are Seated On The Table. The System Will
                      Automatically Detect The Table Number And Process The
                      Order According To The Customer's Requirements.
                    </p>
                  </li>
                  <li>
                    <h3>
                      <span className="number">04</span> order is sent to the
                      kitchen
                    </h3>
                    <p>
                      The Diner Can Scan The QR Code And Start Placing Orders As
                      Soon As They Are Seated On The Table. The System Will
                      Automatically Detect The Table Number And Process The
                      Order According To The Customer's Requirements.
                    </p>
                  </li>
                  <li>
                    <h3>
                      <span className="number">05</span> deliver deliciousness
                    </h3>
                    <p>
                      Diners Can Track The Status Of The Order From Their Phone.
                      The Waiter Brings The Food To The Table As Soon As The
                      Order Is Ready.
                    </p>
                  </li>
                </ul>
                <div className="button">
                  <Link to={"/login"} className=" Btn">
                    Try for free
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HowItWorks;
