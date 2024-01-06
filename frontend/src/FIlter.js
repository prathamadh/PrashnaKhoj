import React, { useState } from "react";
import "./Filter.css";

const Filter = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [checkboxValues, setCheckboxValues] = useState({
    filter1: false,
    filter2: false,
    filter3: false,
    filter4: false,
    filter6: false,
  });

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleCheckboxClick = (event) => {
    event.stopPropagation(); // Prevent checkbox clicks from closing the dropdown
  };

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setCheckboxValues((prevValues) => ({
      ...prevValues,
      [name]: checked,
    }));
    event.stopPropagation();
    console.log(name + checked);
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
          onClick={handleCheckboxChange}
        >
          <label className="labelF">
            <input
              type="checkbox"
              name="filter1"
              checked={checkboxValues.filter1}
              onChange={handleCheckboxChange}
            />{" "}
            Filter 1
          </label>
          <label className="labelF">
            <input
              type="checkbox"
              name="filter2"
              checked={checkboxValues.filter2}
              onChange={handleCheckboxChange}
            />{" "}
            Filter 2
          </label>
          <label className="labelF">
            <input
              type="checkbox"
              name="filter3"
              checked={checkboxValues.filter3}
              onChange={handleCheckboxChange}
            />{" "}
            Filter 3
          </label>
          <label className="labelF">
            <input
              type="checkbox"
              name="filter6"
              checked={checkboxValues.filter6}
              onChange={handleCheckboxChange}
            />{" "}
            Filter 6
          </label>
          <label className="labelF">
            <input
              type="checkbox"
              name="filter4"
              checked={checkboxValues.filter4}
              onChange={handleCheckboxChange}
            />{" "}
            Filter 4
          </label>
        </div>
      )}
      {isOpen && <div className="overlay" onClick={closeDropdown}></div>}
    </div>
  );
};

export default Filter;
