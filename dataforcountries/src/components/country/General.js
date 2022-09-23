import React from "react";

const General = ({ country }) => {
  const {
    name: { common },
    capital: [capital],
    languages,
    flags,
    area,
  } = country;
  return (
    <div>
      <h2>{common}</h2>
      <p>capital: {capital}</p>
      <p>{area}</p>
      <h3>languages:</h3>
      <ul>
        {Object.values(languages).map((l) => (
          <li key={l}>{l}</li>
        ))}
      </ul>
      <img src={flags.png} alt="" />
    </div>
  );
};

export default General;
