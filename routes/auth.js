/*
    Rutas de Auth
    host + /api/auth
*/

const { Router } = require('express');
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos');
const {  
    
    loginUsuario,
    logoutUsuario,
    
} = require('../controllers/auth');

const router = Router();

router.post(
    '/login', 
   [// middlewares
        check('usuario', 'El nombre es obligatorio').not().isEmpty(),
        check('password', 'El password debe de ser de 6 caracteres').isLength({ min:6 }),
        validarCampos
    ], 
    loginUsuario
);

module.exports = router;