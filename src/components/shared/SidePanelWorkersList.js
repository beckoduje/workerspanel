import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import Paginations from "./Paginations";

export default function SidePanelWorkersList({ sortValue }) {
  const searchedSideWorker = useSelector(
    (state) => state.workers.searchedSideWorker
  );
  const workers = useSelector((state) => state.workers.workers);
  const [sliceIndex, setSliceIndex] = useState(0);
  console.log(searchedSideWorker);
  return (
    <div className="side-panel__workers">
      <ul className="side-panel__workers-list">
        {workers &&
          workers
            .filter((wrk) => {
              if (searchedSideWorker === "") {
                return wrk;
              } else if (
                wrk.name.includes(searchedSideWorker.toLowerCase()) ||
                wrk.lastName.includes(searchedSideWorker.toLowerCase())
              ) {
                return wrk;
              }
            })
            .slice(sliceIndex * 10, sliceIndex * 10 + 10)
            .map((worker) => {
              return (
                <li
                  className="side-panel__workers-worker"
                  key={worker.id}
                  data-worker-id={worker.id}
                >
                  <Link to="#" className="side-panel__workers-worker-link">
                    <span className="side-panel__workers-worker-name">
                      {sortValue === "name"
                        ? `${worker.name} ${worker.lastName}`
                        : `${worker.lastName} ${worker.name}`}
                    </span>
                  </Link>
                </li>
              );
            })}
      </ul>
      <div className="side-panel__workers-pagination">
        <Paginations setSliceIndex={setSliceIndex} />
      </div>
    </div>
  );
}
