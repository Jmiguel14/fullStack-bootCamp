import anecdoteService from "../services/anecdoteService"

const reducer = (state = [], action) => {
  switch(action.type){
    case 'VOTE':
      const id = action.payload.id
      const anecdoteToChange = state.find(anecdote => anecdote.id===id)
      const changeAnecdote = {
        ...anecdoteToChange,
        votes: anecdoteToChange.votes + 1
      }
      return state.map(anecdote => anecdote.id === id ? changeAnecdote : anecdote)
    case 'NEW_ANECDOTE':
      const newAnecdote = action.payload
      return [
        ...state,
        newAnecdote
      ]
    case 'INIT_ANECDOTES':
      return action.data
    default:
      return state
  }
}

export const registerVote = (id) => {
  return {type: 'VOTE', payload: { id }}
}

export const createAnecdote = (content) => {
  return async dispatch => {
    const newAnecdote = await anecdoteService.createNewAnecdote(content)
    dispatch({type: 'NEW_ANECDOTE', payload: newAnecdote})
  }
}

export const initializeAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll()
    dispatch({type: 'INIT_ANECDOTES', data: anecdotes})
  }
}

export default reducer