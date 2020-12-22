import React from "react";

const Country = ({ name, population, flag }) => (
  <article className="card">
    <div className="details">
      <span>
        <strong>Name:</strong>
        {name}
      </span>
      <span>
        <strong>population:</strong>
        {population}
      </span>
    </div>
    <img src={flag} alt={name} />
  </article>
);

export default Country;
