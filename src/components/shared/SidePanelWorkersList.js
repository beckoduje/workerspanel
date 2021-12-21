import React, { useContext } from "react";
import { Link } from "react-router-dom";

import Paginations from "./Paginations";

import { ApplicationContext } from "../../context/application-context";

export default function SidePanelWorkersList({ searchedWorker }) {
  const { workers } = useContext(ApplicationContext);
  return (
    <div className="side-panel__workers">
      <ul className="side-panel__workers-list">
        {workers
          ? workers
              .filter((wrk) => {
                if (searchedWorker === "") {
                  return wrk;
                } else if (wrk.name.includes(searchedWorker.toLowerCase())) {
                  return wrk;
                }
              })
              .map((worker) => {
                return (
                  <li
                    className="side-panel__workers-worker"
                    key={worker.id}
                    data-worker-id={worker.id}
                  >
                    <Link to="#" className="side-panel__workers-worker-link">
                      {`${worker.name} ${worker.lastName}`}
                    </Link>
                  </li>
                );
              })
          : ""}
      </ul>
      <div className="side-panel__workers-pagination">
        <Paginations />
      </div>
    </div>
  );
}