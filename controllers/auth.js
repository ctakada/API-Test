const { response } = require("express");
const bcrypt = require("bcryptjs");
const { generarJWT, destruirJWT } = require("../helpers/jwt");
const { buscarUsuarios, actualizaToken } = require("../models/Usuario");

const loginUsuario = async (req, res = response) => {
  try {
    const { usuario, password: passUser } = req.body;

    //comprobar si el usuario existe
    let resul = buscarUsuarios(usuario);

    if (resul == 0) {
      return res.status(400).json({
        ok: false,
        msg: "El usuario o contraseña no son correctos",
      });
    }

    console.log(resul);
    const { usuario: bName, pass: bPassword } = resul;
    //confirmar la contraseña
    const validPassword = bcrypt.compareSync(passUser, bPassword);

    if (!validPassword) {
      const salt = bcrypt.genSaltSync()

      return res.status(400).json({
        ok: false,
        msg: "El usuario o contraseña no son correctos",
        pass_usuario: bcrypt.hashSync(passUser, salt)
      });
    }

    //generar JWT
    const token = await generarJWT(bName);

    resul = actualizaToken(bName, token);

    if (resul == 0) {
      return res.status(400).json({
        ok: false,
        msg: "Error al actualizar token",
      });
    }

    return res.json({
      ok: true,
      nombre_usuario: bName,
      token,
    });
  } catch (err) {
    console.log(err);

    return res.status(500).json({
      ok: false,
      msg: "Por favor hable con el administrador",
    });
  }
};

const revalidarToken = async (req, res = response) => {
  const { nombre_usuario: bName } = req;

  const token = await generarJWT(bName);

  return res.json({
    ok: true,
    token,
  });
};


module.exports = {
  loginUsuario,
  revalidarToken,
};
