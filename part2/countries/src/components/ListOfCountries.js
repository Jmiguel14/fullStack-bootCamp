import React from "react";

export const ListOfCountries = ({ filteredCountries, onSetKeyword }) => {
  const handleClick = (el) => {
    onSetKeyword(el.name.common);
  };

  return filteredCountries.map((el) => {
    return (
      <p key={el.area}>
        {el.name.common}
        <button key={el.area} onClick={() => handleClick(el)}>
          show
        </button>
      </p>
    );
  });
};
