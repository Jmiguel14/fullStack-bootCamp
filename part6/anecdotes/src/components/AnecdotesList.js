import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerVote } from "../reducers/anecdoteReducer";

export const AnecdotesList = () => {
    console.log('render anecdoteList')
  const anecdotes = useSelector((state) => state);
  const dispatch = useDispatch();

  const vote = (id) => {
    dispatch(registerVote(id));
  };
  return (
    <div>
      {anecdotes
        .sort((a, b) => b.votes - a.votes)
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
