import React from "react";

export const Statistics = ({ good, bad, neutral }) => {
    
  const getTotalFeedBack = () => {
    return good + bad + neutral;
  };

  const getAverage = () => {
    return (good - bad) / (good + bad + neutral);
  };

  const getPositive = () => {
    return (good * 100) / (good + bad + neutral);
  };

  return (
    <div>
      {good || bad || neutral ? (
        <>
          <p>all: {getTotalFeedBack()}</p>
          <p>average: {getAverage()}</p>
          <p>positive: {getPositive()}</p>
        </>
      ) : (
        ""
      )}
    </div>
  );
};
