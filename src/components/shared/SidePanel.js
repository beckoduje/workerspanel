import React, { useState, useContext } from "react";
import Search from "./Search";
import SidePanelWorkersList from "./SidePanelWorkersList";
import Filter from "./Filter";

import { ApplicationContext } from "../../context/application-context";

export default function SidePanel() {
  const { workers } = useContext(ApplicationContext);

  const [isSidePanelOpen, setIsSidePanelOpen] = useState(true);
  // const [searchedWorker, setSearchedWorker] = useState("");
  const [sortValue, setSortValue] = useState("last-name");
  // const [sortedWorkers, setSortedWorkers] = useState();

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
        {isSidePanelOpen && (
          <Search /*setSearchedWorker={setSearchedWorker} */ />
        )}
        <button
          className="side-panel__toggle-button"
          onClick={() => setIsSidePanelOpen(!isSidePanelOpen)}
        >
          <i className={toggleIconClass} />
        </button>
      </div>
      {isSidePanelOpen && (
        <SidePanelWorkersList
          // searchedWorker={searchedWorker}
          sortValue={sortValue}
        />
      )}
    </aside>
  );
}
