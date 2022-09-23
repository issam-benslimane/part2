import React, { useState } from "react";

const PersonForm = ({ addPerson }) => {
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");

  const handleSubmit = (ev) => {
    ev.preventDefault();
    addPerson({ name: newName, number: newNumber });
    setNewName("");
    setNewNumber("");
  };

  const handleInputChange = (setter) => (ev) => setter(ev.target.value);
  return (
    <form onSubmit={handleSubmit}>
      <h2>Add a new</h2>
      <div>
        name: <input value={newName} onChange={handleInputChange(setNewName)} />
      </div>
      <div>
        number:{" "}
        <input value={newNumber} onChange={handleInputChange(setNewNumber)} />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
};

export default PersonForm;
