import React from "react";

export const Persons = ({ filteredPersons, onHandleDelete }) => {
  return (
    <>
      {filteredPersons.map((person) => {
        return (
          <div key={person.id}>
            <p>
              {person.name} {person.number}
              <button onClick={() => onHandleDelete(person.id)}>delete</button>
            </p>
          </div>
        );
      })}
    </>
  );
};
