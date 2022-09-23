import React from "react";
import General from "./General";
import Weather from "./Weather";

const Country = ({ country }) => {
  return (
    <section>
      <General country={country} />
      <Weather city={country.capital[0]} />
    </section>
  );
};

export default Country;
