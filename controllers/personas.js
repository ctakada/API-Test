const { response } = require('express')
const bcrypt = require('bcryptjs')
const { generarJWT, destruirJWT} = require('../helpers/jwt')
const {
  listaPersonas
} = require('../models/Personas')

const { restart } = require('nodemon')

const GetPersonas = async (req, res = response) => {
  try {
    const resul = listaPersonas()
    if (resul == 0) { //si el usuario no existe
      return res.status(400).json({
        ok: false,
        msg: 'No hay especialidades para listar',
  
      })
    }
    
    
    return res.status(200).json({
      ok: true,
      payload: resul,
      token :res.token
    })
    
  } catch (err) {
    console.log(err)

    return res.status(500).json({
      ok: false,
      msg: 'Por favor hable con el administrador',

    })
  }
}

module.exports = { GetPersonas }
