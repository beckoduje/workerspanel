import React, { useState } from "react";

export default function Filter({ sortValue, setSortValue }) {
  const [sortOrder, setSortOrder] = useState("up");
  const [showFilters, setShowFilters] = useState(false);

  function handleValueChange(event) {
    setSortValue(event.target.value);
  }

  function handleSortOrder() {
    sortOrder === "up" ? setSortOrder("down") : setSortOrder("up");
  }
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
            <option value="salary">salary</option>
            <option value="work-time">work time</option>
          </select>
        )}
      </div>
      <div className="filter__order" onClick={() => handleSortOrder()}>
        <i className={`fas fa-sort-amount-${sortOrder}`} />
      </div>
    </div>
  );
}
