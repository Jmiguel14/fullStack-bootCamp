import React from "react";
import { StatisticLine } from "./StatisticLine";

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
    <>
      <table>
        <tbody>
          <tr>
            <StatisticLine text="good" value={good} />
          </tr>
          <tr>
            <StatisticLine text="neutral" value={neutral} />
          </tr>
          <tr>
            <StatisticLine text="bad" value={bad} />
          </tr>
          <tr>
            <StatisticLine text="all" value={getTotalFeedBack} />
          </tr>
          <tr>
            <StatisticLine text="average" value={getAverage} />
          </tr>
          <tr>
            <StatisticLine text="positive" value={getPositive} />
          </tr>
        </tbody>
      </table>
    </>
  );
};
