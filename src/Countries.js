import React from "react";

export default function Countries() {
  let countries = ["France", "USA", "Australia", "Japan"];

  //Here we are creating a new aray, and filling it with the results of doing a .MAP function on the prevous array. .MAP loops through each item
  const countriesList = countries.map((country, index) => (
    // Only do this if items have no stable IDs
    <li key={index}>{country}</li>
  ));

  return <h2>{countriesList}</h2>;
}

/*
  function ListWrapper(input)
  //Function takes in input and adds LI open and closing tags
  {
    return <li>{input}</li>
  }*/
