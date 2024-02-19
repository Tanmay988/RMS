import React from "react";

const Footer = () => {
  const date = new Date().getFullYear();
  const URL = "https://www.linkedin.com/in/tanmay-pampatwar-274588229";
  return (
    <>
      <div className="footer">
        <p>RMS © copyright {date}</p>
        <p>
          Developed By -
          <a href={URL} target="_blank">
            Tanmay Pampatwar 
          </a>
          |<a href="#"> Ruturaj Jadhav</a>
        </p>
      </div>
    </>
  );
};

export default Footer;
