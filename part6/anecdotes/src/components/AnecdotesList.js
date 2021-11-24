import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerVote } from "../reducers/anecdoteReducer";
import { createNotification, removeNotification } from "../reducers/notificationReducer";

export const AnecdotesList = () => {
  console.log('render anecdoteList')
  const anecdotes = useSelector((state) => state.anecdotes);
  const dispatch = useDispatch();
    console.log(anecdotes)
  const filter = useSelector(state => state.filter)

  const vote = (id) => {
    const anecdote = anecdotes.find((el) => el.id === id)
    dispatch(registerVote(anecdote));
    const message =  `You voted '${anecdote.content}'`
    dispatch(createNotification(message, 5))
  };

  return (
    <div>
      {anecdotes
        .sort((a, b) => b.votes - a.votes)
        .filter(el => el.content.toLowerCase().includes(filter.toLowerCase()))
        .map((anecdote) => (
          <div key={anecdote.id}>
            <div>{anecdote.content}</div>
            <div>
              has {anecdote.votes}
              <button onClick={() => vote(anecdote.id)}>vote</button>
            </div>
          </div>
        ))}
    </div>
  );
};
