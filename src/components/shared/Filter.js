import React, { useState } from "react";

export default function Filter() {
  const [value, setValue] = useState("name");
  const [sortOrder, setSortOrder] = useState("up");
  const [showFilters, setShowFilters] = useState(false);

  function handleValueChange(event) {
    setValue(event.target.value);
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
            value={value}
            onChange={handleValueChange}
          >
            <option value="read">name</option>
            <option value="reading">last name</option>
            <option value="want">salary</option>
            <option value="want">work time</option>
          </select>
        )}
      </div>
      <div className="filter__order" onClick={() => handleSortOrder()}>
        <i className={`fas fa-sort-amount-${sortOrder}`} />
      </div>
    </div>
  );
}
