import React, { useEffect, useState } from "react";
import { Filter } from "./Filter";
import { PersonForm } from "./PersonForm";
import { Persons } from "./Persons";
import personService from "../services/person"

const App = () => {
  
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filteredPersons, setFilteredPersons] = useState(persons);
  const [wordToFilter, setWordToFilter] = useState("");

  useEffect(() => {
    personService
      .getAll()
      .then(initialPersons => setPersons(initialPersons))
  }, [])

  useEffect(() => {
    const newFilteredPersons = persons.filter((person) => {
      return person.name.toLowerCase().includes(wordToFilter.toLowerCase());
    });
    setFilteredPersons(newFilteredPersons);
  }, [persons, wordToFilter])

  const handleSubmit = (e) => {
    e.preventDefault();
    const existsName = persons.some((el) => el.name === newName);
    if (existsName) {
      alert(`${newName} already exists in the phonebook`);
    } else {
      const data = { name: newName, number: newNumber }
      personService
        .create(data)
        .then(returnedPerson => setPersons(persons.concat(returnedPerson)))
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
