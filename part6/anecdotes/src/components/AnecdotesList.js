import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerVote } from "../reducers/anecdoteReducer";
import { createNotification } from "../reducers/notificationReducer";

export const AnecdotesList = () => {
  console.log('render anecdoteList')
  const anecdotes = useSelector((state) => state.anecdotes);
  const dispatch = useDispatch();

  const filter = useSelector(state => state.filter)

  const vote = (id) => {
    dispatch(registerVote(id));
    const anecdote = anecdotes.filter((el) => el.id === id)
    const message =  `You voted '${anecdote[0].content}'`
    dispatch(createNotification(message))
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
