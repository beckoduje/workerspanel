import React from "react";
import ChartPieLogo from "./ChartPieLogo";
import WPLogo from "./WPLogo";

export default function Header() {
  return (
    <header className="main-header">
      <WPLogo />
      <ChartPieLogo />
      <h2 className="main-header__hero-msg">
        THE ONLY WORKER PANEL YOU'LL EVER NEED
      </h2>
    </header>
  );
}
