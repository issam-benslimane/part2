import React from "react";

const sumExercises = (sum, { exercises }) => sum + exercises;

const Total = ({ parts }) => (
  <p>
    Total of
    <strong> {parts.reduce(sumExercises, 0)} </strong>
    exercises
  </p>
);

export default Total;
