const { response } = require('express');
const jwt = require('jsonwebtoken');

const validarAdmin = ( req, res, next ) => {

    // x-token headers
    
    try {

        const { admin } = req;
        console.log(req)
        if( !admin ){
            return res.status( 401 ).json ({
                ok: false,
                msg: 'Usuario no autorizado'
            });
        }

    } catch( err ) {

        console.log( err );
        return res.status( 401 ).json ({
            ok: false,
            msg: 'Error de validacion de usuario'
        });

    }

    next();

}

module.exports = {
    validarAdmin
}