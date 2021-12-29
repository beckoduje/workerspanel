import React, { useContext, useEffect } from "react";
import { ApplicationContext } from "../context/application-context";
import ChartPieLogo from "../components/home/ChartPieLogo";
import WPLogo from "../components/home/WPLogo";
import { Fragment } from "react/cjs/react.production.min";
import SidePanel from "../components/shared/SidePanel";

export default function Home() {
  const { isLogged, registeredUsers } = useContext(ApplicationContext);
  const headerClass = !isLogged ? "main-header" : "main-header inactive";
  const sidePanelActivatorClass = isLogged
    ? "side-panel-activator"
    : "side-panel-activator inactive";

  useEffect(() => {
    console.log(isLogged);
    console.log(registeredUsers);
  }, []);
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
