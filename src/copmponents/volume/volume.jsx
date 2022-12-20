import React from "react";
import "./volume.scss";

export default function Volume(props) {
  function handleChange(e) {
    const value = e.target.value.replace(/[\D]/, "");
    if (isNaN(parseFloat(value))) return;
    props.onChange(value);
  }

  return (
    <div className="volume__wrapper">
      <label className="volume__label">
        Volume
        <input value={props.value} onChange={handleChange} />
      </label>
    </div>
  );
}
