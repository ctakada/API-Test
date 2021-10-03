const users = require("../data/usuarios");
const fs = require("fs");

//const misUsuarios = JSON.parse(users);

const buscarUsuarios = (nombre_usuario) => {
  let result = 0;
  users.forEach((item) => {
    if (item["usuario"] == nombre_usuario) {
      console.log(item);
      result = item;
    }
  });
  return result;
};

const actualizaToken = (nombre_usuario, token) => {
  let result = 0;
  users.forEach((item) => {
    if (item["usuario"] == nombre_usuario) {
      item.token = token;
    }
  });

  const dictstring = JSON.stringify(users);
  fs.writeFile("./data/usuarios.json", dictstring, function (err, result) {
    if (err) console.log("error", err);
  });

  return `update MI_USUARIOS_API set token = '${token}' where usuario = '${nombre_usuario}'`;
};

const validaToken = (nombre_usuario, token) => {
  let result = 0;
  users.forEach((item) => {
    if (item["usuario"] == nombre_usuario && item["token"] == token) {
      console.log(item);
      result = item;
    }
  });
  return result;
};

module.exports = {
  buscarUsuarios,
  actualizaToken,
  validaToken,
};
