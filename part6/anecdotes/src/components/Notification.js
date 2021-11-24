import React from "react";
import { useSelector } from "react-redux";

const Notification = () => {
  console.log('render notification')
  const style = {
    border: "solid",
    padding: 10,
    borderWidth: 1,
  };

  const notification = useSelector((state) => state.notifications);

  return <>{notification ? <div style={style}>{notification}</div> : ""}</>;
};

export default Notification;
