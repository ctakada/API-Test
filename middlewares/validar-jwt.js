const { response } = require("express");
const jwt = require("jsonwebtoken");
const { generarJWT } = require("../helpers/jwt");
const { validaToken , actualizaToken} = require("../models/Usuario");

const validarJWT = async (req, res, next) => {
  try {
    // x-token headers
    const token = req.headers.authorization.split(" ")[1];

    if (!token) {
      return res.status(401).json({
        ok: false,
        msg: "Debe enviar un token",
      });
    }
    const { nombre_usuario: usuarioTK } = jwt.verify(
      token,
      process.env.SECRET_JWT_SEED
    );

    const resul = validaToken(usuarioTK, token);

    if (resul == 0) {
      return res.status(401).json({
        ok: false,
        msg: "Token no valido",
      });
    }

    const newToken = await generarJWT(usuarioTK);
    actualizaToken(usuarioTK,newToken);
    
    req.usuario = usuarioTK;
    res.token = newToken;


  } catch (err) {
    console.log(err);

    return res.status(401).json({
      ok: false,
      msg: "Token no valido",
    });
  }

  next();
};

module.exports = {
  validarJWT,
};
