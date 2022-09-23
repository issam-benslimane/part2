import React from "react";
import Part from "./Part";

const Content = ({ parts }) => (
  <div>
    {parts.map((part) => (
      <Part {...part} key={part.id} />
    ))}
  </div>
);

export default Content;
