import React from "react";
import { Link, withRouter } from "react-router-dom";
import { FaGithub } from "react-icons/fa";


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
              <li className="nav-item">
                <a className="nav-link" href="https://github.com/mhmdmydn/ghotube" rel="noreferrer" target="_blank">
                  Source <FaGithub className="fs-3"/>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default withRouter(Navbar);