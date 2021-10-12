import React from "react";

function CustomCheckBox({ name, handleChange }) {
  return (
    <div>
      <>
        Excellent
        <input
          type="radio"
          onChange={handleChange}
          name={name}
          defaultChecked
          value="Excellent"
        />
      </>
      <>
        Good
        <input type="radio" onChange={handleChange} name={name} value="Good" />
      </>
      <>
        Fair
        <input type="radio" onChange={handleChange} name={name} value="Fair" />
      </>
      <>
        Bad
        <input type="radio" onChange={handleChange} name={name} value="Bad" />
      </>
    </div>
  );
}

export default CustomCheckBox;
