import React from "react";

const Slider = ({ min, max, value, label, onChange }) => {
  return (
    <div>
      <p style={{ display: "inline" }}>{label}</p>
      <input
        type="range"
        min={min}
        max={max}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default Slider;
