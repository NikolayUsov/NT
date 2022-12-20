import React from "react";
import "./select.scss";

export default function Select({ options, activeOption, setActiveOption }) {
  function handleOnChange(e) {
    setActiveOption(e.target.value);
  }

  return (
    <select onChange={handleOnChange} value={activeOption}>
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
}
