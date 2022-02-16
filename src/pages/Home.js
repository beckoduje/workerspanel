import React from "react";
import { useSelector } from "react-redux";
import ChartPieLogo from "../components/home/ChartPieLogo";
import WPLogo from "../components/home/WPLogo";
import { Fragment } from "react/cjs/react.production.min";
import SidePanel from "../components/shared/SidePanel";

export default function Home() {
  const isLoggedIn = useSelector((state) => state.isLoggedIn.isLoggedIn);
  const headerClass = !isLoggedIn ? "main-header" : "main-header inactive";
  const sidePanelActivatorClass = isLoggedIn
    ? "side-panel-activator"
    : "side-panel-activator inactive";

  return (
    <Fragment>
      <header className={headerClass}>
        <WPLogo />
        <ChartPieLogo />
        <h2 className="main-header__hero-msg">
          THE ONLY WORKERS PANEL YOU'LL EVER NEED
        </h2>
      </header>
      <div className={sidePanelActivatorClass}>
        <SidePanel />
      </div>
    </Fragment>
  );
}
