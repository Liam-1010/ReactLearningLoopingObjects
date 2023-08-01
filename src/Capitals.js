import React from "react";

export default function BalticCountries(props) {
  let countries = [
    { Country: "France", Capital: "Paris" },

    { Country: "UK", Capital: "London" }
  ];

  console.log(props.capitals);
  console.log(countries);

  const listItems = props.capitals.map((country, index) => (
    // Only do this if items have no stable IDs
    <li key={index}>
      {" "}
      The capital of {""}
      {country.Country} is {country.Capital}
    </li>
  ));

  return <ul>{listItems}</ul>;
}
