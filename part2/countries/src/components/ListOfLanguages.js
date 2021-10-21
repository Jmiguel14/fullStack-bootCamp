import React from "react";

export const ListOfLanguages = ({ filteredCountries }) => {
  const languages = Object.values(filteredCountries[0].languages);
  return (
    <>
      <p>languages</p>
      <ul>
        {languages.map((el) => (
          <li key={el}>{el}</li>
        ))}
      </ul>
    </>
  );
};
