import React, { useState } from 'react'
import { AnecdotesList } from './components/AnecdotesList'
import Filter from './components/Filter'
import {NewAnecdote} from './components/NewAnecdote'
import Notification from './components/Notification'

const App = () => {
  console.log('render app')
  return (
    <div>
      <h2>Anecdotes</h2>
      <Notification/> 
      <Filter />
      <AnecdotesList />
      <NewAnecdote />
    </div>
  )
}

export default App