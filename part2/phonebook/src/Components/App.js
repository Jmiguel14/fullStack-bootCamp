import React, { useState } from "react";
import { Filter } from "./Filter";
import { PersonForm } from "./PersonForm";
import { Persons } from "./Persons";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filteredPersons, setFilteredPersons] = useState(persons);
  const [wordToFilter, setWordToFilter] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const existsName = persons.find((el) => el.name === newName);
    if (typeof existsName !== "undefined") {
      alert(`${newName} already exists in the phonebook`);
    } else {
      setFilteredPersons((prevState) => [
        ...prevState,
        { name: newName, number: newNumber },
      ]);
      setPersons((prevState) => [
        ...prevState,
        { name: newName, number: newNumber },
      ]);
    }
    setNewName("");
    setNewNumber("");
  };

  const handleNameChange = (e) => {
    setNewName(e.target.value);
  };

  const handleNumberChange = (e) => {
    setNewNumber(e.target.value);
  };

  const handleFilterChange = (e) => {
    const newWordToFilter = e.target.value;
    setWordToFilter(newWordToFilter);
    const newFilteredPersons = persons.filter((person) => {
      const nameToLowerCase = person.name.toLowerCase();
      const valueToLowerCase = newWordToFilter.toLowerCase();
      return nameToLowerCase.includes(valueToLowerCase);
    });
    setFilteredPersons(newFilteredPersons);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter onHandleFilterChange={handleFilterChange} word={wordToFilter} />
      <PersonForm
        onHandleSubmit={handleSubmit}
        onHandleNameChange={handleNameChange}
        onHandleNumberChange={handleNumberChange}
        newName={newName}
        newNumber={newNumber}
      />
      <h2>Numbers</h2>
      <Persons filteredPersons={filteredPersons}/>
    </div>
  );
};

export default App;
