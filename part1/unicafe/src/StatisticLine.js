import React from "react";

export const StatisticLine = (props) => (
  <>
    <td>{props.text}</td>
    <td> {typeof props.value === "function" ? props.value() : props.value}</td>
  </>
);
