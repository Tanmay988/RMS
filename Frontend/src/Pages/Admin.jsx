import React from "react";
import "./Admin.css";
import { VscFeedback } from "react-icons/vsc";
import { BiFoodMenu } from "react-icons/bi";
import { MdOutlineQrCodeScanner } from "react-icons/md";
import { LuCalendarCheck } from "react-icons/lu";
import { GiSofa } from "react-icons/gi";
import { MdOutlineAutorenew } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const Admin = () => {
  const Navigate = useNavigate();

  return (
    <>
      <div className="container-admin">
        <div className="card" onClick={() => Navigate("/admin/viewmenu")}>
          <h1 className="logo">
            <BiFoodMenu />
          </h1>
          <h2 className="description">View Menu</h2>
        </div>
        <div className="card" onClick={() => Navigate("/admin/qr")}>
          <h1 className="logo">
            <MdOutlineQrCodeScanner />
          </h1>
          <h2 className="description">Generate QR</h2>
        </div>
        <div className="card" onClick={() => Navigate("/admin/previousorders")}>
          <h1 className="logo">
            <LuCalendarCheck />
          </h1>
          <h2 className="description">Previous Orders</h2>
        </div>
        <div className="card" onClick={() => Navigate("/admin/tables")}>
          <h1 className="logo">
            <GiSofa />
          </h1>
          <h2 className="description">Tables</h2>
        </div>
        <div className="card" onClick={() => Navigate("/admin/updatemenu")}>
          <h1 className="logo">
            <MdOutlineAutorenew />
          </h1>
          <h2 className="description">Update Menu</h2>
        </div>
        <div className="card" onClick={() => Navigate("/admin/feedbacks")}>
          <h1 className="logo">
            <VscFeedback />
          </h1>
          <h2 className="description">Feedback</h2>
        </div>
      </div>
    </>
  );
};

export default Admin;
