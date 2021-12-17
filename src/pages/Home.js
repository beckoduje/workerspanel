import React, { useContext } from "react";
import { ApplicationContext } from "../context/application-context";
import ChartPieLogo from "../components/home/ChartPieLogo";
import WPLogo from "../components/home/WPLogo";
import { Fragment } from "react/cjs/react.production.min";
import SidePanel from "../components/shared/SidePanel";

export default function Home() {
  const { isLogged } = useContext(ApplicationContext);
  const headerClass = !isLogged ? "main-header" : "main-header inactive";
  return (
    <Fragment>
      <header className={headerClass}>
        <WPLogo />
        <ChartPieLogo />
        <h2 className="main-header__hero-msg">
          THE ONLY WORKERS PANEL YOU'LL EVER NEED
        </h2>
      </header>
      <SidePanel />
    </Fragment>
  );
}
