import React from "react";
import Person from "./Person";

const Persons = ({ persons, deletePerson }) => {
  const personsList = persons.map((person) => (
    <Person {...person} key={person.name} deletePerson={deletePerson(person)} />
  ));
  return (
    <div>
      <h2>Numbers</h2>
      <ul>{personsList}</ul>
    </div>
  );
};

export default Persons;
