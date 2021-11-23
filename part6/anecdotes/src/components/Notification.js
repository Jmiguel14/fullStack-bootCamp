import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeNotification } from "../reducers/notificationReducer";

const Notification = () => {
  console.log('render notification')
  const style = {
    border: "solid",
    padding: 10,
    borderWidth: 1,
  };

  const dispatch = useDispatch()
  setTimeout(() => dispatch(removeNotification()), 5000)
  const notification = useSelector((state) => state.notifications);

  return <>{notification ? <div style={style}>{notification}</div> : ""}</>;
};

export default Notification;
