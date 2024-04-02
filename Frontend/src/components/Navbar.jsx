import React from "react";
import { NavLink, Link } from "react-router-dom";
import Logout from "../Pages/Logout";
import { useAuth } from "../Context/authContext";
const Navbar = () => {
  const { authUser } = useAuth();
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12 col-12 mx-auto">
            <nav className="navbar navbar-expand-lg  border-3 border-bottom rounded-3">
              <div className="container-fluid">
                <Link className="navbar-brand" to={"/"}>
                  <img src="./Images/logo2.png" alt="logo" width={"70px"} />
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
                    {authUser ? (
                      <>
                        <li className="nav-item mx-2">
                          <NavLink className="nav-link" to={"/admin"}>
                            {authUser.restaurantName}
                          </NavLink>
                        </li>
                        <li className="nav-item mx-2">
                          <Logout />
                        </li>
                      </>
                    ) : (
                      <>
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
                          <NavLink className="nav-link" to={"/signup"}>
                            Signup
                          </NavLink>
                        </li>
                        <li className="nav-item mx-2">
                          <Link className="nav-link Btn" to={"/login"}>
                            Login
                          </Link>
                        </li>
                      </>
                    )}
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
