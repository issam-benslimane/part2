import React from "react";

const Search = ({ findMathingData }) => {
  const displayData = (ev) => {
    const value = ev.target.value;
    findMathingData(value);
    return value;
  };
  return (
    <div>
      <label htmlFor="searchInput">find countries</label>
      <input type="text" id="searchInput" onChange={displayData} />
    </div>
  );
};

export default Search;
