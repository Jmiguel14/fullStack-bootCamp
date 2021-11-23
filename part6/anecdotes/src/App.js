import { getAllByAltText } from '@testing-library/dom'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { AnecdotesList } from './components/AnecdotesList'
import Filter from './components/Filter'
import {NewAnecdote} from './components/NewAnecdote'
import Notification from './components/Notification'
import { initializeAnecdotes } from './reducers/anecdoteReducer'
import anecdoteService from './services/anecdoteService'

const App = () => {
  console.log('render app')
  const dispatch = useDispatch()

  useEffect(() => {
    anecdoteService
      .getAll().then(data => dispatch(initializeAnecdotes(data)))
  }, [dispatch])
  
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