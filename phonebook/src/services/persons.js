const { default: axios } = require("axios");

const baseUrl = "http://localhost:3001/persons";

const getAll = () => axios.get(baseUrl).then(({ data }) => data);

const create = (newPerson) =>
  axios.post(baseUrl, newPerson).then(({ data }) => data);

const update = (id, newPerson) =>
  axios.put(`${baseUrl}/${id}`, newPerson).then(({ data }) => data);

const remove = (id) => axios.delete(`${baseUrl}/${id}`).then(() => getAll());

export default { getAll, create, update, remove };
