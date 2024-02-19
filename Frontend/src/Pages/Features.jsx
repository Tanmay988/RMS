import React from "react";

const Features = () => {
  return (
    <>
      <div className="wrapper ">
        <div className="heading">
          <h1>Offerings and Services</h1>
        </div>
        <div className="box">
          <div className="card-container">
            <div className="card-img">
              <img src="https://picsum.photos/300/300" alt="img" />
            </div>
            <div className="card-content">
              <h3>QR code ordering</h3>
              <p>
                We allow the restaurant to collect feedback from their guests
                before they leave the restaurant increasing guest satisfaction!
              </p>
            </div>
          </div>
          <div className="card-container">
            <div className="card-img">
              <img src="https://picsum.photos/300/300" alt="img" />
            </div>
            <div className="card-content">
              <h3>Guest Feedback</h3>
              <p>
                Make ordering quick and safe QR Scan Ordering that allows your
                customers to browse the menu and place orders from their mobile
                phones.
              </p>
            </div>
          </div>
          <div className="card-container">
            <div className="card-img">
              <img src="https://picsum.photos/300/300" alt="img" />
            </div>
            <div className="card-content">
              <h3>Order History</h3>
              <p>
                Make ordering quick and safe QR Scan Ordering that allows your
                customers to browse the menu and place orders from their mobile
                phones.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Features;
