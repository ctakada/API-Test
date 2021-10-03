/*
    Rutas de especialidades
    host + /api/especialidades
*/

const { Router } = require("express");
const { check } = require("express-validator");
const { validarJWT } = require("../middlewares/validar-jwt");
const { GetPersonas } = require("../controllers/personas");

const router = Router();
//router.use(validarJWT);

router.get("/", GetPersonas);

module.exports = router;
