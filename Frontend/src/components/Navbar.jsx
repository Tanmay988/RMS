import React from "react";
import { NavLink, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-10 col-12 mx-auto">
            <nav className="navbar navbar-expand-lg shadow-sm ">
              <div className="container-fluid">
                <Link className="navbar-brand" to={"/"}>
                  <img src="./Images/Logo.svg" alt="logo" width={"70px"} />
                </Link>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav ms-md-auto mb-2 mb-lg-0">
                    <li className="nav-item mx-4">
                      <NavLink
                        className="nav-link "
                        aria-current="page"
                        to={"/"}
                      >
                        Home
                      </NavLink>
                    </li>
                    <li className="nav-item mx-4">
                      <NavLink className="nav-link " to={"/features"}>
                        Features
                      </NavLink>
                    </li>
                    <li className="nav-item mx-4">
                      <NavLink className="nav-link " to={"/info"}>
                        How it work's
                      </NavLink>
                    </li>
                    <li className="nav-item mx-2">
                      <NavLink className="nav-link " to={"/signup"}>
                        Signup
                      </NavLink>
                    </li>
                    <li className="nav-item mx-2 btnLogin">
                      <NavLink className="nav-link" to={"/login"}>
                        Login
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
