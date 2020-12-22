import React from "react";
import Country from "./country";

const CountryList = ({ countries = [] }) => {
  return (
    <main className="countries">
      <h3>Country/ population</h3>
      {countries.map(({ id, name, population }) => (
        <Country key={id} name={name} population={population} />
      ))}
    </main>
  );
};

export default CountryList;
