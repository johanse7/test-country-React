import React from "react";
import Country from "./country";

const CountryList = ({ countries = [] }) => {
  return (
    <main className="countries">
      <h3>Country/ population</h3>
      <div className="item">
        {countries.map(({ id, name, population, flag }) => (
          <Country key={id} name={name} population={population} flag={flag} />
        ))}
      </div>
    </main>
  );
};

export default CountryList;
