import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ApplicationContext } from "../context/application-context";

export default function SearchedWorkers() {
  const { navSearchedWorkers } = useContext(ApplicationContext);
  return (
    <section className="searched-workers-section">
      <ul className="searched-workers-section__list">
        {navSearchedWorkers.map((worker) => {
          return (
            <li
              className="searched-workers-section__worker"
              key={worker.id}
              data-worker-id={worker.id}
            >
              <Link to="#" className="searched-workers-section__worker-link">
                <span className="searched-workers-section__worker-name"></span>
              </Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
