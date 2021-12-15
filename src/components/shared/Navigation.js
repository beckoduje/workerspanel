import React, { useContext } from "react";
import { NavLink } from "react-router-dom";

import { ApplicationContext } from "../../context/application-context";

export default function Navigation() {
  const { isLogged, setIsLogged } = useContext(ApplicationContext);

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
        <li
          className="main-navigation__link-item"
          onClick={() => {
            if (!isLogged) return;
            setIsLogged(false);
          }}
        >
          <NavLink
            className={(navData) => (navData.isActive ? "active" : "")}
            to="/log-in"
          >
            {!isLogged ? "Log in" : "Log out"}
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
