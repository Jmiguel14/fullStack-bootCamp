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
        <StatisticLine text='good' value={good}/>
        <StatisticLine text='neutral' value={neutral}/>
        <StatisticLine text='bad' value={bad}/>
        <StatisticLine text='all' value={getTotalFeedBack}/>
        <StatisticLine text='average' value={getAverage}/>
        <StatisticLine text='positive' value={getPositive}/>
    </>
  );
};
