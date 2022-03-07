import React, { useState, useEffect, useMemo } from "react";

import { useParams } from "react-router-dom";

import { useSelector } from "react-redux";

export default function SingleWorker() {
  const workers = useSelector((state) => state.workers.workers);

  let { workerId } = useParams();
  const singleWorker = useMemo(
    () => workers.filter((worker) => worker.id === workerId),
    [workers, workerId]
  );

  const [edit, setEdit] = useState(true);

  const [workerDetails, setWorkerDetails] = useState({});

  useEffect(() => {
    setWorkerDetails({
      name: singleWorker[0]?.name,
      lastName: singleWorker[0]?.lastName,
      cnp: singleWorker[0]?.cnp,
      phoneNumber: singleWorker[0]?.phoneNumber,
      position: singleWorker[0]?.position,
      grossSalary: singleWorker[0]?.grossSalary,
      worksFrom: singleWorker[0]?.worksFrom,
    });
  }, [singleWorker]);

  const handleChangeWorkerDetails = (e, workerData) => {
    setWorkerDetails({ ...workerDetails, [workerData]: e.target.value });
    console.log(e.target.value);
  };

  console.log(workerId);
  console.log(singleWorker);

  useEffect(() => {
    console.log(workerDetails.worksFrom);
  }, [workerDetails]);

  return (
    <section className="single-worker-section">
      <div className="single-worker-section__wrapper">
        <h2 className="single-worker-section__name">
          {workerDetails.name?.toUpperCase()}&nbsp;
          {workerDetails.lastName?.toUpperCase()}
        </h2>
        <form className="single-worker-form">
          <div className="single-worker-form__details-container">
            <label htmlFor="name">Name:</label>
            <input
              id="name"
              type="text"
              value={workerDetails.name ? workerDetails.name : ""}
              onChange={(e) => handleChangeWorkerDetails(e, "name")}
              className="single-worker-form__input"
              disabled={edit}
            />
          </div>
          <div className="single-worker-form__details-container">
            <label htmlFor="name">Surname:</label>
            <input
              id="surname"
              type="text"
              value={workerDetails.lastName ? workerDetails.lastName : ""}
              onChange={(e) => handleChangeWorkerDetails(e, "lastName")}
              className="single-worker-form__input"
              disabled={edit}
            />
          </div>
          <div className="single-worker-form__details-container">
            <label htmlFor="name">CNP:</label>
            <input
              id="cnp"
              type="number"
              value={workerDetails.cnp ? workerDetails.cnp : ""}
              onChange={(e) => handleChangeWorkerDetails(e, "cnp")}
              className="single-worker-form__input"
              disabled={edit}
            />
          </div>
          <div className="single-worker-form__details-container">
            <label htmlFor="name">Phone:</label>
            <input
              id="phone"
              type="text"
              value={workerDetails.phoneNumber ? workerDetails.phoneNumber : ""}
              onChange={(e) => handleChangeWorkerDetails(e, "phoneNumber")}
              className="single-worker-form__input"
              disabled={edit}
            />
          </div>
          <div className="single-worker-form__details-container">
            <label htmlFor="name">Position:</label>
            <input
              id="position"
              type="text"
              value={workerDetails.position ? workerDetails.position : ""}
              onChange={(e) => handleChangeWorkerDetails(e, "position")}
              className="single-worker-form__input"
              disabled={edit}
            />
          </div>
          <div className="single-worker-form__details-container">
            <label htmlFor="name">Gross salary:</label>
            <input
              id="salary"
              type="number"
              value={workerDetails.grossSalary ? workerDetails.grossSalary : ""}
              onChange={(e) => handleChangeWorkerDetails(e, "grossSalary")}
              className="single-worker-form__input"
              disabled={edit}
            />
          </div>
          <div className="single-worker-form__details-container">
            <label htmlFor="name">Works from:</label>
            <input
              id="worksFrom"
              type="date"
              value={workerDetails.worksFrom ? workerDetails.worksFrom : ""}
              onChange={(e) => handleChangeWorkerDetails(e, "worksFrom")}
              className="single-worker-form__input"
              disabled={edit}
            />
          </div>
          <div className="single-worker-form__action-container">
            <button
              type="button"
              className="single-worker-form__button edit"
              onClick={() => {
                setEdit(false);
              }}
            >
              Edit
            </button>
            <div className="single-worker-form__save-or-cancel-cont">
              <button className="single-worker-form__button save">
                <i className="fas fa-save" />
              </button>
              <button className="single-worker-form__button cancel">
                <i className="fas fa-window-close" />
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
