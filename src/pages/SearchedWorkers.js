import React, { useContext, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ApplicationContext } from "../context/application-context";

export default function SearchedWorkers() {
  const [sliceIndex, setSliceIndex] = useState(0);
  const { workers } = useContext(ApplicationContext);
  let { worker } = useParams();
  console.log(worker);
  console.log("kita");
  return (
    <section className="searched-workers-section">
      <ul className="searched-workers-section__list">
        ahoj
        {/* {workers &&
          workers
            .filter((wrk) => {
              if (
                wrk.name.includes(worker.toLowerCase()) ||
                wrk.lastName.includes(worker.toLowerCase())
              ) {
                return wrk;
              }
            })
            .slice(sliceIndex * 10, sliceIndex * 10 + 10)
            .map((worker) => {
              return (
                <li
                  className="searched-workers-section__worker"
                  key={worker.id}
                  data-worker-id={worker.id}
                >
                  <Link
                    to="#"
                    className="searched-workers-section__worker-link"
                  >
                    <span className="searched-workers-section__worker-name"></span>
                  </Link>
                </li>
              );
            })} */}
      </ul>
    </section>
  );
}
