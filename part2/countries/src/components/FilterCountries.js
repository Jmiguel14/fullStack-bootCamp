import React from "react";

export const FilterCountries = ({keyword, onHandleKeywordChange}) => {
  return (
    <p>
      find countries <input value={keyword} onChange={onHandleKeywordChange} />
    </p>
  );
};
