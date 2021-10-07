import React, { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filteredPersons, setFilteredPersons] = useState(persons)
  const [wordToFilter, setWordToFilter] = useState('')

  console.log(persons)
  const handleSubmit = (e) => {
    e.preventDefault();
    const existsName = persons.find((el) => el.name === newName);
    if (typeof existsName !== "undefined"){
      alert(`${newName} already exists in the phonebook`)
    } else {
      setFilteredPersons((prevState) => [
        ...prevState,
        { name: newName, number: newNumber },
      ])
      setPersons((prevState) => [
        ...prevState,
        { name: newName, number: newNumber },
      ])
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
    const newWordToFilter = e.target.value
    setWordToFilter(newWordToFilter)
    const newFilteredPersons = persons.filter((person) => {
      const nameToLowerCase = person.name.toLowerCase()
      const valueToLowerCase = newWordToFilter.toLowerCase()
      return nameToLowerCase.includes(valueToLowerCase)
    }
    );
    setFilteredPersons(newFilteredPersons)
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <p>
        filter shown with <input onChange={handleFilterChange} value={wordToFilter}/>
      </p>
      <form onSubmit={handleSubmit}>
        <div>
          name: <input onChange={handleNameChange} value={newName} />
          <br />
          number: <input onChange={handleNumberChange} value={newNumber} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {filteredPersons.map((person) => (
        <p key={person.name}>
          {person.name} {person.number}
        </p>
      ))}
    </div>
  );
};

export default App;
