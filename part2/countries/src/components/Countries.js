import React from "react";
import { ListOfCountries } from "./ListOfCountries";
import { SingleCountry } from "./SingleCountry";

export const Countries = ({ filteredCountries, onSetKeyword }) => {
  return (
    <div>
      {filteredCountries.length === 1
        ? <SingleCountry filteredCountries={filteredCountries}/>
        : filteredCountries.length < 10
        ? <ListOfCountries filteredCountries={filteredCountries} onSetKeyword={onSetKeyword}/>
        : "Too many matches to show, specify another filter"}
    </div>
  );
};
