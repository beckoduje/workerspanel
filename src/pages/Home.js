import React from "react";
import ChartPieLogo from "../components/home/ChartPieLogo";
import WPLogo from "../components/home/WPLogo";

export default function Home() {
  return (
    <header className="main-header">
      <WPLogo />
      <ChartPieLogo />
      <h2 className="main-header__hero-msg">
        THE ONLY WORKERS PANEL YOU'LL EVER NEED
      </h2>
    </header>
  );
}
