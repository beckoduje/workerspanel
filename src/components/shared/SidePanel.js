import React, { useState } from "react";
import Search from "./Search";
import SidePanelWorkersList from "./SidePanelWorkersList";
import Filter from "./Filter";

export default function SidePanel() {
  const [isSidePanelOpen, setIsSidePanelOpen] = useState(true);
  const [sortValue, setSortValue] = useState("last-name");

  const sidePanelClass = isSidePanelOpen ? "side-panel" : "side-panel closed";
  const toggleIconClass = isSidePanelOpen
    ? "fas fa-arrow-circle-left"
    : "fas fa-arrow-circle-left closed";
  return (
    <aside className={sidePanelClass}>
      <div className="side-panel__actions">
        {isSidePanelOpen && (
          <Filter sortValue={sortValue} setSortValue={setSortValue} />
        )}
        {isSidePanelOpen && <Search searchBarType={"sideNav"} />}
        <button
          className="side-panel__toggle-button"
          onClick={() => setIsSidePanelOpen(!isSidePanelOpen)}
        >
          <i className={toggleIconClass} />
        </button>
      </div>
      {isSidePanelOpen && <SidePanelWorkersList sortValue={sortValue} />}
    </aside>
  );
}
