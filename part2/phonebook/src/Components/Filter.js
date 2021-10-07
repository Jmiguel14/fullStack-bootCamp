import React from "react";

export const Filter = ({onHandleFilterChange, word}) => {
  return (
    <p>
      filter shown with{" "}
      <input onChange={onHandleFilterChange} value={word} />
    </p>
  );
};
