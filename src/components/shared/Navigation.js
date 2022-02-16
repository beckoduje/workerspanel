import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";

import { isLoggedInActions } from "../../store/isLoggedIn-slice";

import Search from "./Search";

export default function Navigation() {
  const dispatch = useDispatch();

  const isLoggedIn = useSelector((state) => state.isLoggedIn.isLoggedIn);

  const loggedOutClass = !isLoggedIn
    ? "main-navigation__link-item"
    : "main-navigation__link-item inactive";
  const loggedInClass = isLoggedIn
    ? "main-navigation__link-item"
    : "main-navigation__link-item inactive";

  return (
    <nav className="main-navigation">
      <div className="main-navigation__logo">
        <NavLink to="/home">WORKERS PANEL</NavLink>
      </div>
      <ul className="main-navigation__links">
        <li className={loggedOutClass}>
          <NavLink
            className={(navData) => (navData.isActive ? "active" : "")}
            to="/about"
          >
            About
          </NavLink>
        </li>
        <li className={loggedOutClass}>
          <NavLink
            className={(navData) => (navData.isActive ? "active" : "")}
            to="/sign-up"
          >
            Sign up
          </NavLink>
        </li>

        {/* linkovi LOGGED IN */}

        <li className={loggedInClass}>
          <Search />
        </li>

        <li className={loggedInClass}>
          <i className="fas fa-eye" />
        </li>

        <li className={loggedInClass}>
          <i className="fas fa-cog" />
        </li>

        <li className={loggedInClass}>
          <button className="main-navigation__profile-icon-button">
            <figure className="main-navigation__profile-icon-figure">
              <img
                alt="profile"
                className="main-navigation__profile-icon-image"
              />
            </figure>
          </button>
        </li>

        {/* linkovi LOGGED IN */}

        <li
          className="main-navigation__link-item"
          onClick={() => {
            if (!isLoggedIn) return;
            dispatch(isLoggedInActions.logUserOut());
          }}
        >
          <NavLink
            className={(navData) => (navData.isActive ? "active" : "")}
            to="/log-in"
          >
            {!isLoggedIn ? "Log in" : "Log out"}
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
