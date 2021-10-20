import React, { useEffect, useState } from "react";
import axios from "axios";
import { Filter } from "./Filter";
import { PersonForm } from "./PersonForm";
import { Persons } from "./Persons";

const App = () => {
  
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filteredPersons, setFilteredPersons] = useState(persons);
  const [wordToFilter, setWordToFilter] = useState("");
  console.log('render')
  console.log(persons, filteredPersons)
  useEffect(() => {
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        console.log(response.data)
        setPersons(response.data)
        setFilteredPersons(response.data)
      })
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault();
    const existsName = persons.some((el) => el.name === newName);
    if (existsName) {
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
