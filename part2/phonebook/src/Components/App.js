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
  console.log(persons, filteredPersons)
  console.log('render')
  useEffect(() => {
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        setPersons(response.data)
      })
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
      axios
        .post('http://localhost:3001/persons', data)
        .then(response => {
          setPersons(persons.concat(response.data))
        })
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
