import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Paginations from "../components/shared/Paginations";

export default function SearchedWorkers() {
  const [sliceIndex, setSliceIndex] = useState(0);
  const workers = useSelector((state) => state.workers.workers);
  let { worker } = useParams();

  const filteredSearchedWorkers = workers.filter((wrk) => {
    if (
      wrk.name.includes(worker.toLowerCase()) ||
      wrk.lastName.includes(worker.toLowerCase())
    ) {
      return wrk;
    }
  });

  return (
    <section className="searched-workers-section">
      <ul className="searched-workers-section__list">
        {filteredSearchedWorkers
          .slice(sliceIndex * 10, sliceIndex * 10 + 10)
          .map((worker) => {
            return (
              <li
                className="searched-workers-section__worker"
                key={worker.id}
                data-worker-id={worker.id}
              >
                <Link
                  to={"/single-worker/" + worker.id}
                  className="searched-workers-section__worker-link"
                >
                  <span className="searched-workers-section__worker-name">
                    {worker.lastName}&nbsp;{worker.name}
                  </span>
                </Link>
              </li>
            );
          })}
      </ul>
      {filteredSearchedWorkers.length > 10 && (
        <div className="side-panel__workers-pagination">
          <Paginations setSliceIndex={setSliceIndex} />
        </div>
      )}
    </section>
  );
}
