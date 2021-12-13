import React from "react";
import { NavLink } from "react-router-dom";

export default function Navigation() {
  return (
    <nav className="main-navigation">
      <div className="main-navigation__logo">
        <NavLink to="/home">WORKERS PANEL</NavLink>
      </div>
      <ul className="main-navigation__links">
        <li className="main-navigation__link-item">
          <NavLink
            className={(navData) => (navData.isActive ? "active" : "")}
            to="/about"
          >
            About
          </NavLink>
        </li>
        <li className="main-navigation__link-item">
          <NavLink
            className={(navData) => (navData.isActive ? "active" : "")}
            to="/sign-up"
          >
            Sign up
          </NavLink>
        </li>
        <li className="main-navigation__link-item">
          <NavLink
            className={(navData) => (navData.isActive ? "active" : "")}
            to="/log-in"
          >
            Log in
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
