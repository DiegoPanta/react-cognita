import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  const activeStyle = { color: "orange" };
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <NavLink className="navbar-brand" to="#">
        React
      </NavLink>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <NavLink className="nav-link" activeStyle={activeStyle} exact to="/">
              Home <span className="sr-only"></span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" activeStyle={activeStyle} to="/courses">
              Courses
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" activeStyle={activeStyle} to="/about">
              About
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
