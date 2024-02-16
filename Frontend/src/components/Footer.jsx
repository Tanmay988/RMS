import React from "react";

const Footer = () => {
  const date = new Date().getFullYear();
  return (
    <>
      <div className="footer">
        <p>RMS © copyright {date}</p>
        <p>
          Developed By -  <a href="#">Ruturaj Jadhav</a> | 
          <a href="#"> Tanmay Pampatwar</a>
        </p>
      </div>
    </>
  );
};

export default Footer;
