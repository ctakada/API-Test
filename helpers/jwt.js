const jwt = require("jsonwebtoken");

const generarJWT = (nombre_usuario) => {
  return new Promise((resolve, reject) => {
    const payload = { nombre_usuario };

    jwt.sign(
      payload,
      process.env.SECRET_JWT_SEED,
      {
        expiresIn: "5m",
      },
      (err, token) => {
        if (err) {
          console.log(err);
          reject("No se puedo generar el token");
        }

        resolve(token);
      }
    );
  });
};

module.exports = {
  generarJWT,
};
