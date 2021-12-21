import React, { useContext } from "react";

import { Link } from "react-router-dom";

import { ApplicationContext } from "../../context/application-context";

export default function SidePanelWorkersList() {
  const { workers } = useContext(ApplicationContext);
  return (
    <div className="side-panel__workers">
      <ul className="side-panel__workers-list">
        {workers
          ? workers.map((worker) => {
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
      <div className="side-panel__workers-pagination">1 2 3</div>
    </div>
  );
}
