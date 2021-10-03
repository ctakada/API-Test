!function(e){var o={};function r(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=e,r.c=o,r.d=function(e,o,t){r.o(e,o)||Object.defineProperty(e,o,{enumerable:!0,get:t})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,o){if(1&o&&(e=r(e)),8&o)return e;if(4&o&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(r.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&o&&"string"!=typeof e)for(var n in e)r.d(t,n,function(o){return e[o]}.bind(null,n));return t},r.n=function(e){var o=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(o,"a",o),o},r.o=function(e,o){return Object.prototype.hasOwnProperty.call(e,o)},r.p="",r(r.s=9)}([function(e,o){e.exports=require("express")},function(e,o,r){function t(e,o,r,t,n,s,a){try{var i=e[s](a),u=i.value}catch(e){return void r(e)}i.done?o(u):Promise.resolve(u).then(t,n)}var n=r(12),s=(r(13),r(14),function(){var e,o=(e=function*(e){return yield n.connect(process.env.DB).catch(e=>{throw console.log(e),new Error("Error al inicializar base de datos")}),yield n.query(e).catch(e=>{throw console.log(e),new Error("Error al inicializar base de datos")})},function(){var o=this,r=arguments;return new Promise((function(n,s){var a=e.apply(o,r);function i(e){t(a,n,s,i,u,"next",e)}function u(e){t(a,n,s,i,u,"throw",e)}i(void 0)}))});return function(e){return o.apply(this,arguments)}}());e.exports={dbConnection:s}},function(e,o){e.exports=require("express-validator")},function(e,o,r){function t(e,o,r,t,n,s,a){try{var i=e[s](a),u=i.value}catch(e){return void r(e)}i.done?o(u):Promise.resolve(u).then(t,n)}var{response:n}=r(0),s=r(5),{generarJWT:a,destruirJWT:i}=r(4),{validaToken:u}=r(8),{dbConnection:c}=r(1),l=function(){var e,o=(e=function*(e,o,r){try{var t=e.headers.authorization.split(" ")[1];if(!t)return o.status(401).json({ok:!1,msg:"Debe enviar un token"});var{nombre_usuario:n}=s.verify(t,process.env.SECRET_JWT_SEED),i=u(n,t);if((yield c(i)).rowsAffected[0]<1)return o.status(401).json({ok:!1,msg:"Token no valido"});e.nombre_usuario=n,o.token=yield a(n)}catch(e){return console.log(e),o.status(401).json({ok:!1,msg:"Token no valido"})}r()},function(){var o=this,r=arguments;return new Promise((function(n,s){var a=e.apply(o,r);function i(e){t(a,n,s,i,u,"next",e)}function u(e){t(a,n,s,i,u,"throw",e)}i(void 0)}))});return function(e,r,t){return o.apply(this,arguments)}}();e.exports={validarJWT:l}},function(e,o,r){var t=r(5);e.exports={generarJWT:e=>new Promise((o,r)=>{var n={nombre_usuario:e};t.sign(n,process.env.SECRET_JWT_SEED,{expiresIn:"2h"},(e,t)=>{e&&(console.log(e),r("No se puedo generar el token")),o(t)})}),destruirJWT:e=>{t.destroy(e)}}},function(e,o){e.exports=require("jsonwebtoken")},function(e,o){e.exports=require("bcryptjs")},function(e,o){e.exports=require("nodemon")},function(e,o){e.exports={nuevoUsuario:e=>{var{nombre_usuario:o,pass_usuario:r}=e;return"insert into MI_USUARIOS_API (\n        usuario,\n        password\n        ) values(\n        '".concat(o,"',\n        '").concat(r,"'\n        );\n            select * from MI_USUARIOS_API where usuario = '").concat(o,"'")},listaUsuarios:()=>"select * from MI_USUARIOS_API",buscarUsuarios:e=>" select * from MI_USUARIOS_API where usuario = '".concat(e,"'"),actualizaToken:(e,o)=>"update MI_USUARIOS_API set token = '".concat(o,"' where usuario = '").concat(e,"'"),validaToken:(e,o)=>"select case \n        when token = '".concat(o,"' then 1\n        else 0 end token \n        from MI_USUARIOS_API where usuario = '").concat(e,"'")}},function(e,o,r){var t;var n=r(0),s=r(10),a=r(11),{camptureSession:i}=r(1);r(15).config();var u,c,l=n();l.use(s()),l.use(a.json({limit:"50mb"})),l.use(a.urlencoded({limit:"50mb",extended:!0,parameterLimit:5e4})),l.use(n.static("public")),l.use(n.static(String.raw(t||(u=["",""],c||(c=u.slice(0)),t=Object.freeze(Object.defineProperties(u,{raw:{value:Object.freeze(c)}}))),process.env.IMGFOLDER))),l.use(n.json()),l.use("/api/auth",r(16)),l.use("/api/especialidades",r(20)),l.use("/api/medicos",r(23)),l.use("/img/Medicos",r(26)),l.listen(process.env.PORT,()=>{console.log("Servidor corriendo en puerto ".concat(process.env.PORT))})},function(e,o){e.exports=require("cors")},function(e,o){e.exports=require("body-parser")},function(e,o){e.exports=require("mssql")},function(e,o){e.exports=require("axios")},function(e,o){e.exports=require("form-data")},function(e,o){e.exports=require("dotenv")},function(e,o,r){var{Router:t}=r(0),{check:n}=r(2),{validarCampos:s}=r(17),{validarJWT:a}=r(3),{validarAdmin:i}=r(18),{crearUsuario:u,loginUsuario:c,logoutUsuario:l,revalidarToken:d,authGetUser:f}=r(19),v=t();v.post("/login",[n("nombre_usuario","El nombre es obligatorio").not().isEmpty(),n("pass_usuario","El password debe de ser de 6 caracteres").isLength({min:6}),s],c),v.post("/logout",l),v.get("/renew",d),e.exports=v},function(e,o,r){var{response:t}=r(0),{validationResult:n}=r(2);e.exports={validarCampos:function(e){var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:t,r=arguments.length>2?arguments[2]:void 0,s=n(e);if(!s.isEmpty())return o.status(400).json({ok:!1,errors:s.mapped()});r()}}},function(e,o,r){var{response:t}=r(0);r(5);e.exports={validarAdmin:(e,o,r)=>{try{var{admin:t}=e;if(console.log(e),!t)return o.status(401).json({ok:!1,msg:"Usuario no autorizado"})}catch(e){return console.log(e),o.status(401).json({ok:!1,msg:"Error de validacion de usuario"})}r()}}},function(e,o,r){function t(e,o,r,t,n,s,a){try{var i=e[s](a),u=i.value}catch(e){return void r(e)}i.done?o(u):Promise.resolve(u).then(t,n)}function n(e){return function(){var o=this,r=arguments;return new Promise((function(n,s){var a=e.apply(o,r);function i(e){t(a,n,s,i,u,"next",e)}function u(e){t(a,n,s,i,u,"throw",e)}i(void 0)}))}}var{response:s}=r(0),a=r(6),{generarJWT:i,destruirJWT:u}=r(4),{dbConnection:c}=r(1),{nuevoUsuario:l,listaUsuarios:d,buscarUsuarios:f,actualizaToken:v,validaToken:p}=r(8),{restart:m}=r(7),h=function(){var e=n((function*(e){var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:s;try{var{nombre_usuario:r,pass_usuario:t}=e.body,n=f(r),u=yield c(n);if(u.rowsAffected[0]<1){var d=a.genSaltSync();e.body.pass_usuario=a.hashSync(t,d);var v=l(e.body);console.log(v);var p=yield c(v);console.log(p);var{usuario:m}=p.recordset[0],h=yield i(m);return o.status(201).json({ok:!0,name:m,token:h})}return o.status(400).json({ok:!1,msg:"El usuario ya existe"})}catch(e){return console.log(e),o.status(500).json({ok:!1,msg:"Por favor hable con el administrador"})}}));return function(o){return e.apply(this,arguments)}}(),y=function(){var e=n((function*(e){var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:s;try{var{nombre_usuario:r,pass_usuario:t}=e.body,n=f(r),u=yield c(n);if(u.rowsAffected[0]<1)return o.status(400).json({ok:!1,msg:"El usuario o contraseña no son correctos"});var{usuario:l,password:d}=u.recordset[0],p=a.compareSync(t,d);if(!p&&(n=loginFallido(r),(u=yield c(n)).rowsAffected[0]>0))return o.status(400).json({ok:!1,msg:"El usuario o contraseña no son correctos"});var m=yield i(l);return n=v(l,m),(u=yield c(n)).rowsAffected[0]<1?o.status(400).json({ok:!1,msg:"Error al actualizar token"}):o.json({ok:!0,nombre_usuario:l,token:m})}catch(e){return console.log(e),o.status(500).json({ok:!1,msg:"Por favor hable con el administrador"})}}));return function(o){return e.apply(this,arguments)}}(),g=function(){var e=n((function*(e){var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:s,{nombre_usuario:r}=e,t=yield i(r);return o.json({ok:!0,token:t})}));return function(o){return e.apply(this,arguments)}}(),k=function(){var e=n((function*(e){var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:s,{nombre_usuario:r,token:t}=e;yield u(t);var n=v(r,""),a=yield c(n);return a.rowsAffected[0]<1?o.status(400).json({ok:!1,msg:"Error al actualizar token"}):o.status(200).json({ok:!0,msg:"Secion finalizada",token:null})}));return function(o){return e.apply(this,arguments)}}();e.exports={crearUsuario:h,loginUsuario:y,revalidarToken:g,logoutUsuario:k}},function(e,o,r){var{Router:t}=r(0),{check:n}=r(2),{validarJWT:s}=r(3),{GetEspecialidades:a}=r(21),i=t();i.use(s),i.get("/",a),e.exports=i},function(e,o,r){function t(e,o,r,t,n,s,a){try{var i=e[s](a),u=i.value}catch(e){return void r(e)}i.done?o(u):Promise.resolve(u).then(t,n)}var{response:n}=r(0),{generarJWT:s,destruirJWT:a}=(r(6),r(4)),{dbConnection:i}=r(1),{listaEspecialidades:u}=r(22),{restart:c}=r(7),l=function(){var e,o=(e=function*(e){var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:n;try{var r=u(),t=yield i(r);return t.rowsAffected[0]>0?o.status(200).json({ok:!0,result:t.recordset,token:o.token}):o.status(500).json({ok:!1,msg:"Por favor hable con el administrador"})}catch(e){return console.log(e),o.status(400).json({ok:!1,msg:"No hay especialidades para listar"})}},function(){var o=this,r=arguments;return new Promise((function(n,s){var a=e.apply(o,r);function i(e){t(a,n,s,i,u,"next",e)}function u(e){t(a,n,s,i,u,"throw",e)}i(void 0)}))});return function(e){return o.apply(this,arguments)}}();e.exports={GetEspecialidades:l}},function(e,o){e.exports={listaEspecialidades:e=>"select distinct COD_ESPECIALIDAD, ESPECIALIDAD from  MI_PROFESIONALES order by 1"}},function(e,o,r){var{Router:t}=r(0),{check:n}=r(2),{validarJWT:s}=r(3),{GetMedicos:a,GetMedicosEspecialidad:i,GetMedico:u}=r(24),c=t();c.use(s),c.get("/",a),c.get("/especialidad/:id",i),c.get("/:id",u),e.exports=c},function(e,o,r){function t(e,o,r,t,n,s,a){try{var i=e[s](a),u=i.value}catch(e){return void r(e)}i.done?o(u):Promise.resolve(u).then(t,n)}function n(e){return function(){var o=this,r=arguments;return new Promise((function(n,s){var a=e.apply(o,r);function i(e){t(a,n,s,i,u,"next",e)}function u(e){t(a,n,s,i,u,"throw",e)}i(void 0)}))}}var{response:s}=r(0),{generarJWT:a,destruirJWT:i}=(r(6),r(4)),{dbConnection:u}=r(1),{listaMedicos:c,listaMedicosIdEspecialidad:l,GetMedicoId:d}=r(25),{restart:f}=r(7),v=function(){var e=n((function*(e){var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:s;try{var r=c(),t=yield u(r);return t.rowsAffected[0]>0?o.status(200).json({ok:!0,result:t.recordset,token:o.token}):o.status(400).json({ok:!1,msg:"No encontrado"})}catch(e){return console.log(e),o.status(400).json({ok:!1,msg:"No hay medicos para listar"})}}));return function(o){return e.apply(this,arguments)}}(),p=function(){var e=n((function*(e){var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:s;try{var{id:r}=e.params,t=l(r),n=yield u(t);return n.rowsAffected[0]>0?o.status(200).json({ok:!0,result:n.recordset,token:o.token}):o.status(400).json({ok:!1,msg:"No encontrado"})}catch(e){return console.log(e),o.status(400).json({ok:!1,msg:"No hay medicos para listar"})}}));return function(o){return e.apply(this,arguments)}}(),m=function(){var e=n((function*(e){var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:s;try{var{id:r}=e.params,t=d(r),n=yield u(t);return n.rowsAffected[0]>0?o.status(200).json({ok:!0,result:n.recordset,token:o.token}):o.status(400).json({ok:!1,msg:"No encontrado"})}catch(e){return console.log(e),o.status(400).json({ok:!1,msg:"No hay medicos para listar"})}}));return function(o){return e.apply(this,arguments)}}();e.exports={GetMedicos:v,GetMedicosEspecialidad:p,GetMedico:m}},function(e,o){e.exports={listaMedicos:e=>"select * from V_MI_PROFESIONALES",listaMedicosIdEspecialidad:e=>"select * from V_MI_PROFESIONALES where COD_ESPECIALIDAD = ".concat(e),GetMedicoId:e=>"select * from V_MI_PROFESIONALES where cast(COD_MEDICO as int) = cast(".concat(e," as int)")}},function(e,o,r){var t=r(0),{Router:n}=r(0),{check:s}=r(2),{validarJWT:a}=r(3),i=n();i.use(t.static(process.env.IMGFOLDER)),e.exports=i}]);