import { useState, useEffect } from "react";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";
import services from "./services/persons";
import "./index.css";
import Notification from "./components/Notification";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [currentFilter, setCurrentFilter] = useState("");
  const [notificationMsg, setNotificationMsg] = useState(null);

  useEffect(() => {
    services.getAll().then(setPersons);
  }, []);

  const sameName = (name) => (person) =>
    person.name.toLowerCase() === name.toLowerCase();

  const getExistedPerson = ({ name }) => persons.find(sameName(name));

  const addPerson = (person) => {
    const personIfExist = getExistedPerson(person);
    if (personIfExist) updatePersonNumber({ ...person, id: personIfExist.id });
    else
      services
        .create(person)
        .then((person) => (setPersons(persons.concat(person)), person))
        .then(({ name }) =>
          handleNotification({ type: "success", content: `Added ${name}` })
        );
  };

  const deletePerson =
    ({ id, name }) =>
    () => {
      alertMsg(`Delete ${name}?`);
      services.remove(id).then(setPersons);
      return persons;
    };

  const updatePersonNumber = (person) => {
    const response = alertMsg(
      `${person.name} is already added to phonebook,replace the old number with new one?`,
      false
    );
    if (!response) return;
    services
      .update(person.id, person)
      .then((p) => (setPersons(persons.map((e) => (e.id === p.id ? p : e))), p))
      .then((person) =>
        handleNotification({
          type: "success",
          content: `${person.name}'s number changed successfully`,
        })
      );
    return person;
  };

  const handleNotification = ({ type, content }) => {
    setNotificationMsg({ type, content });
    setTimeout(() => setNotificationMsg(null), 5000);
  };

  const alertMsg = (msg, isAlert = true) =>
    isAlert ? alert(msg) : window.confirm(msg);

  const updateFilter = (value) => {
    setCurrentFilter(value);
    return value;
  };

  const list = persons.filter((e) =>
    e.name.match(new RegExp(currentFilter, "i"))
  );

  return (
    <div>
      <h1>Phonebook</h1>
      <Notification message={notificationMsg} />
      <Filter updateFilter={updateFilter} />
      <PersonForm addPerson={addPerson} />
      <Persons persons={list} deletePerson={deletePerson} />
    </div>
  );
};

export default App;
