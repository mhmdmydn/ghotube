import React from "react";
import { Link, withRouter } from "react-router-dom";

function Navbar(props) {
  return (
    <div className="navigation">
      <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm fixed-top">
        <div className="container">
          <Link className="navbar-brand fw-bolder text-uppercase fs-4" to="/ghotube">
            gho<span className="text-danger">tube.</span>
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className={`nav-item  ${props.location.pathname === "/about" ? "active" : "" }`}>
                <Link className="nav-link" to="/ghotube/about">
                  About
                </Link>
              </li>
              <li className={`nav-item  ${ props.location.pathname === "/contact" ? "active" : "" }`}>
                <Link className="nav-link" to="/ghotube/contact">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default withRouter(Navbar);