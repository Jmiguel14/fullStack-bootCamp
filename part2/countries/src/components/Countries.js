import React from "react";
import { ListOfCountries } from "./ListOfCountries";
import { SingleCountry } from "./SingleCountry";

export const Countries = ({ filteredCountries }) => {
  return (
    <div>
      {filteredCountries.length === 1
        ? <SingleCountry filteredCountries={filteredCountries}/>
        : filteredCountries.length < 10
        ? <ListOfCountries filteredCountries={filteredCountries}/>
        : "Too many matches to show, specify another filter"}
    </div>
  );
};
