import React from "react";

export const Persons = ({filteredPersons}) => {
  return (
    <>
      {filteredPersons.map((person) => (
        <p key={person.name}>
          {person.name} {person.number}
        </p>
      ))}
    </>
  );
};
