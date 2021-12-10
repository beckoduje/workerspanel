import React from "react";

export default function Navigation() {
  return (
    <nav className="main-navigation">
      <div className="main-navigation__logo">WORKERS PANEL</div>
      <ul className="main-navigation__links">
        <li className="main-navigation__link-item">About</li>
        <li className="main-navigation__link-item">Sign up</li>
        <li className="main-navigation__link-item">Log in</li>
      </ul>
    </nav>
  );
}
