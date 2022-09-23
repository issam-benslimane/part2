import React, { useState } from "react";

const Filter = ({ updateFilter }) => {
  const handleInputChange = (ev) => {
    const value = ev.target.value;
    updateFilter(value);
  };
  return (
    <div>
      filter shown with
      <input onChange={handleInputChange} />
    </div>
  );
};

export default Filter;
