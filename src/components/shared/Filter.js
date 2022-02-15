import React, { useState, useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { ApplicationContext } from "../../context/application-context";

export default function Filter({ sortValue, setSortValue }) {
  const dispatch = useDispatch();
  const workers = useSelector((state) => state.workers.workers);
  const { setWorkers } = useContext(ApplicationContext);
  const [sortOrder, setSortOrder] = useState("up");
  const [showFilters, setShowFilters] = useState(false);

  function handleValueChange(event) {
    setSortValue(event.target.value);
  }

  // function that sorts by sort value
  function sortByValue(val, sortOrder) {
    if (val === "last-name" && sortOrder === "up") {
      setWorkers(workers.sort((a, b) => (a.lastName > b.lastName ? 1 : -1)));
    } else if (val === "last-name" && sortOrder === "down") {
      setWorkers(workers.sort((a, b) => (a.lastName < b.lastName ? 1 : -1)));
    } else if (val === "name" && sortOrder === "up") {
      setWorkers(workers.sort((a, b) => (a.name > b.name ? 1 : -1)));
    } else if (val === "name" && sortOrder === "down") {
      setWorkers(workers.sort((a, b) => (a.name < b.name ? 1 : -1)));
    }
  }

  function handleSortOrder() {
    sortOrder === "up" ? setSortOrder("down") : setSortOrder("up");
  }

  useEffect(() => {
    sortByValue(sortValue, sortOrder);
  }, [sortValue, sortOrder]);
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
