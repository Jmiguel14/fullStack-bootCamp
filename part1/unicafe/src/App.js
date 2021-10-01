import React, { useState } from "react";
import { Button } from "./Button";
import { Statistics } from "./Statistics";

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const HANDLE_CLICKS = {
    good: () => setGood(good + 1),
    neutral: () => setNeutral(neutral + 1),
    bad: () => setBad(bad + 1),
  };

  const handleClick = (e) => {
    const id = e.target.id;
    HANDLE_CLICKS[id]();
  };

  return (
    <div>
      <h1>Give feeback</h1>
      <Button id="good" onHandleClick={handleClick}>
        Good
      </Button>
      <Button id="neutral" onHandleClick={handleClick}>
        Neutral
      </Button>
      <Button id="bad" onHandleClick={handleClick}>
        Bad
      </Button>
      <h2>Statistics</h2>
      {good || neutral || bad ? (
        <>
          <Statistics good={good} bad={bad} neutral={neutral} />
        </>
      ) : (
        <p>No feedback given</p>
      )}
    </div>
  );
};

export default App;
