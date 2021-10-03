const { json } = require("body-parser");
const personas = require("../data/personas");

const listaPersonas = () => {
  return personas;
};

module.exports = { listaPersonas };
