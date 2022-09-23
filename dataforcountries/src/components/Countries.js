import React from "react";

const Countries = ({ countries, showDetails }) => {
  const handleClick = (country) => (ev) => showDetails(country);

  const countriesList = countries.map((obj) => (
    <li key={obj.name.common}>
      {obj.name.common}
      <button onClick={handleClick(obj)}>show</button>
    </li>
  ));
  return <ul>{countriesList}</ul>;
};

export default Countries;
