import anecdoteService from "../services/anecdoteService"

const reducer = (state = [], action) => {
  console.log('ssh working!!')
  switch(action.type){
    case 'VOTE':
      const changeAnecdote = action.payload
      return state.map(anecdote => anecdote.id === changeAnecdote.id ? changeAnecdote : anecdote)
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

export const registerVote = (anecdote) => {
  return async dispatch => {
    const changeAnecdote = {
      ...anecdote,
      votes: anecdote.votes + 1
    }
    const newAnecdote = await anecdoteService.updateAnecdote(changeAnecdote.id, changeAnecdote)
    dispatch({ type: 'VOTE', payload: newAnecdote })
  }
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