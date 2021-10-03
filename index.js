const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();


//crear servidor express
const app = express();

//cors
var whitelist = [`${process.env.ORIGIN_WEB}`]
const corsOptionsDelegate = function (req, callback) {
  let corsOptions;
  if (whitelist.indexOf(req.header('Origin')) !== -1) {
    corsOptions = { origin: true } 
  }else{
    corsOptions = { origin: false } 
  }
  callback(null, corsOptions) 
}

app.use( cors(corsOptionsDelegate) );


//limit size
app.use(bodyParser.json({limit: "50mb"}));
app.use(bodyParser.urlencoded({limit: "50mb", extended: true, parameterLimit:50000}));

//Direcorio publico
app.use(express.static('public'));

//Lectura y parseo del body
app.use(express.json());

//preuba identifier
//camptureSession();

//Rutas
app.use( '/api/auth', require( './routes/auth' ) );
app.use( '/api/personas', require( './routes/personas' ) );

//escychar peticiones de
app.listen(process.env.PORT, () => {
    console.log(`Servidor corriendo en puerto ${process.env.PORT}`);
})