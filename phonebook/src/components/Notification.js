import React from "react";

const Notification = ({ message }) => {
  if (!message) return null;
  const { content, type } = message;
  return <div className={`notification notification--${type}`}>{content}</div>;
};

export default Notification;
