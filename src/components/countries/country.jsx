import React from "react";

const Country = ({ name, population }) => (
  <div className="item">
    <span>{name}</span>
    <span>{population}</span>
  </div>
);

export default Country;
