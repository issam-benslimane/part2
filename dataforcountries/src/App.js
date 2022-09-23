import axios from "axios";
import React, { useEffect, useState } from "react";
import Countries from "./components/Countries";
import Country from "./components/country";
import Search from "./components/Search";
import { deepClownArray } from "./helpers";

const App = () => {
  const [countries, setCountries] = useState([]);
  const [filterCountries, setFilterCountries] = useState([]);

  useEffect(() => {
    const response = axios.get("https://restcountries.com/v3.1/all");
    response.then(({ data }) => setCountries(data));
  }, []);

  const findMathingData = (pattern) =>
    pattern
      ? setFilterCountries(
          countries.filter((e) => e.name.common.match(new RegExp(pattern, "i")))
        )
      : setFilterCountries([]);

  const showDetails = (country) => {
    setFilterCountries([country]);
    return country;
  };

  const displayCountryDetails = (country) => <Country country={country} />;

  const displayCountries = (countries) => (
    <Countries countries={countries} showDetails={showDetails} />
  );

  const errorText = <p>Too many matches, specify another filter.</p>;

  const renderCountries = (countries) => {
    const length = countries.length;
    if (length < 1) return null;
    if (length === 1) return displayCountryDetails(countries[0]);
    if (length <= 10) return displayCountries(countries);
    return errorText;
  };

  return (
    <div>
      <Search findMathingData={findMathingData} />
      {renderCountries(filterCountries)}
    </div>
  );
};

export default App;
