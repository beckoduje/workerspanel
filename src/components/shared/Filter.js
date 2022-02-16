import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { workersActions } from "../../store/workers-slice";

export default function Filter({ sortValue, setSortValue }) {
  const dispatch = useDispatch();
  const workers = useSelector((state) => state.workers.workers);

  const [sortOrder, setSortOrder] = useState("up");
  const [showFilters, setShowFilters] = useState(false);

  function handleValueChange(event) {
    setSortValue(event.target.value);
  }

  // function that sorts by sort value
  function sortByValue(val, sortOrder) {
    if (val === "last-name" && sortOrder === "up") {
      dispatch(workersActions.sortWorkersByLastNameASC());
    } else if (val === "last-name" && sortOrder === "down") {
      dispatch(workersActions.sortWorkersByLastNameDSC());
    } else if (val === "name" && sortOrder === "up") {
      dispatch(workersActions.sortWorkersByNameASC());
    } else if (val === "name" && sortOrder === "down") {
      dispatch(workersActions.sortWorkersByNameDSC());
    }
  }

  function handleSortOrder() {
    sortOrder === "up" ? setSortOrder("down") : setSortOrder("up");
  }

  useEffect(() => {
    sortByValue(sortValue, sortOrder);
  }, [sortValue, sortOrder, workers]);
  return (
    <div className="filter">
      <div className="filter__options-container">
        <i
          className="fas fa-filter"
          onClick={() => setShowFilters(!showFilters)}
        />
        {showFilters && (
          <select
            className="filter__options"
            value={sortValue}
            onChange={handleValueChange}
          >
            <option value="name">name</option>
            <option value="last-name">last name</option>
          </select>
        )}
      </div>
      <div className="filter__order" onClick={() => handleSortOrder()}>
        <i className={`fas fa-sort-amount-${sortOrder}`} />
      </div>
    </div>
  );
}
