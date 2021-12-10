import React from "react";
import pieChart from "../../images/pieChart.png";

export default function ChartPieLogo() {
  return (
    <div className="main-header__chart-logo-container">
      <img src={pieChart} className="main-header__chart-pie-logo-small" />
      <img src={pieChart} className="main-header__chart-pie-logo-big" />
    </div>
  );
}
