import React, { useEffect, useState } from "react";
import { Filter } from "./Filter";
import { PersonForm } from "./PersonForm";
import { Persons } from "./Persons";
import personService from "../services/person";
import { Notification } from "./Notification";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filteredPersons, setFilteredPersons] = useState(persons);
  const [wordToFilter, setWordToFilter] = useState("");
  const [messageNotification, setMessageNotification] = useState(null)
  const [colorNotification, setColorNotification] = useState('green')

  useEffect(() => {
    personService.getAll().then((initialPersons) => setPersons(initialPersons));
  }, []);

  useEffect(() => {
    const newFilteredPersons = persons.filter((person) => {
      return person.name.toLowerCase().includes(wordToFilter.toLowerCase());
    });
    setFilteredPersons(newFilteredPersons);
  }, [persons, wordToFilter]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const existsName = persons.some((el) => el.name === newName);
    if (existsName) {
      const message = `${newName} is already addeed to the phonebook, replace the old number with a new one?`;
      const replace = window.confirm(message);
      const person = persons.find(el=>el.name === newName) 
      const changedPerson = {...person, number: newNumber}
      if (replace) {
        personService
          .update(person.id, changedPerson)
          .then(returnedPerson => {
            const newPersons = persons.map(p=>p.id !== person.id ? p : returnedPerson)
            setPersons(newPersons)
            setMessageNotification(`${person.name} was added to the phonebook`)
            setColorNotification('green')
            setTimeout(() => setMessageNotification(null), 5000)
          })
          .catch(error => {
            setColorNotification('red')
            setMessageNotification(
              `Person ${person.name} was already deleted from server`
            )
            setTimeout(() => setMessageNotification(null), 5000)
          })
      }
    } else {
      const data = { name: newName, number: newNumber };
      personService
        .create(data)
        .then((returnedPerson) => {
          setPersons(persons.concat(returnedPerson));
          setMessageNotification(`${newName} was added to the phonebook`)
          setTimeout(() => setMessageNotification(null), 5000)
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

  const handleDelete = (id) => {
    const person = persons.find((el) => el.id === id);
    const message = `Delete ${person.name}`;
    const remove = window.confirm(message);
    if (remove) {
      personService.remove(id).then((response) => {
        if (response.status === 200) {
          const newPersons = persons.filter((el) => el.id !== id);
          setPersons(newPersons);
          setColorNotification('#a7a407dc')
          setMessageNotification(
            `Person ${person.name} was removed`
          )
          setTimeout(() => setMessageNotification(null), 5000)
        }
      }).catch(error => {
        setColorNotification('red')
        setMessageNotification(
          `Person ${person.name} was already deleted from server`
        )
        setTimeout(() => setMessageNotification(null), 5000)
      })
    }
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={messageNotification} color={colorNotification}/>
      <Filter onHandleFilterChange={handleFilterChange} word={wordToFilter} />
      <PersonForm
        onHandleSubmit={handleSubmit}
        onHandleNameChange={handleNameChange}
        onHandleNumberChange={handleNumberChange}
        newName={newName}
        newNumber={newNumber}
      />
      <h2>Numbers</h2>
      <Persons
        filteredPersons={filteredPersons}
        onHandleDelete={handleDelete}
      />
    </div>
  );
};

export default App;
