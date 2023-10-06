import React, { useState } from "react";
import "./Filter.css";

const Filter = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleCheckboxClick = (event) => {
    event.stopPropagation(); // Prevent checkbox clicks from closing the dropdown
  };

  const closeDropdown = () => {
    setIsOpen(false); // Close the dropdown when clicking outside of it
  };

  return (
    <div
      className={`dropdown ${isOpen ? "active" : ""}`}
      onClick={toggleDropdown}
    >
      <button>Filters</button>
      {isOpen && (
        <div
          className="dropdown-content"
          id="filterDropdown"
          onClick={handleCheckboxClick}
        >
          <label className="labelF">
            <input type="checkbox" name="filter1" /> Filter 1
          </label>
          <label className="labelF">
            <input type="checkbox" name="filter2" /> Filter 2
          </label>
          <label className="labelF">
            <input type="checkbox" name="filter3" /> Filter 3
          </label>
          <label> className="labelF"
            <input type="checkbox" name="filter6" /> Filter 6
          </label>
          <label className="labelF">
            <input type="checkbox" name="filter4" /> Filter 4
          </label>
        </div>
      )}
      {isOpen && <div className="overlay" onClick={closeDropdown}></div>}
    </div>
  );
};

export default Filter;
