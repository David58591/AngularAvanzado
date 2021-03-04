const Usuario = require("../models/usuario");
const response = require("express");
const bcrypt = require('bcryptjs');

const getUsuarios = async (req, res) => {
  const desde  = Number(req.query.desde) || 0;
  const [usuarios, total] = await Promise.all(
    Usuario.find({}, "nombre email role google")
    .skip(desde)
    .limit(5),
    Usuario.count()
  );
  return res.status(400).json({
    ok: true,
    usuarios,
    total
  });
};
const createUsuarios = async (req, res = response) => {
  console.log(req.body)

  try {
    const { email, password } = req.body;

    const existeEmail = await Usuario.findOne({ email })
    if( existeEmail ) {
      return res.status(400).json({
        ok:false,
        msg: 'El correo ya está registrado'
      })
    }
    const usuario = new Usuario(req.body);

    // Encriptar contraseña 
    const salt = bcrypt.genSaltSync();
    usuario.password = bcrypt.hashSync(password,salt)

   await usuario.save();
    return res.json({
      ok: true,
      usuario
    })
    
       
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      ok: false,
      msg: `Error inesperado por la parte del servidor`
    });
  }
 
};

const actualizarUsuario = async (req, res = response) => {
 try {
const id = req.params.id;
const { } = req.body;
  const usuarioDB = await Usuario.findById(id);
  if(!usuarioDB){
    res.status(400).json({
      ok: false,
      msg: 'No existe un usuario en la BBDD'
    })
  }

  
  // TODO : validar token y comprobar si es un usuario correcto
    //Actualizar
    const {password,google, email,...campos} = req.body;

    if(usuarioDB.email !==email){
      existeEmail = await Usuario.findOne({email})
      if(existeEmail){
        res.status(400).json({
          ok: false,
          msg: 'Ya existe un usuario con ese email'
        })
      }
    }
  campos.email = email

    const usuarioActualizado = await Usuario.findByIdAndUpdate(id,campos , {new : true});

  res.json({
     ok:true,
     usuario: usuarioActualizado
   })
 } catch (error) {
   console.log(error);
   res.status(500).json({
     ok:false,
     msg: 'Error inesperado'
   })
 }   
}

const borrarUsuario = async (req, res = response) => {
 try {
const id = req.params.id;
const { } = req.body;
  const usuarioDB = await Usuario.findById(id);
  if(!usuarioDB){
    res.status(400).json({
      ok: false,
      msg: 'No existe un usuario en la BBDD así que no se puede borrar'
    })
  }

  
  // TODO : validar token y comprobar si es un usuario correcto
    //Borrar
    const {password,google,...campos} = req.body;

    if(usuarioDB.id !==id){
      existeUsuario = await Usuario.findOne({id})
      if(existeUsuario){
        res.status(404).json({
          ok: false,
          msg: 'No se ha borrado el usuario'
        })
      }
    }

    const usuarioBorrado = await Usuario.findByIdAndDelete(id);

  res.json({
     ok:true,
     usuario: usuarioBorrado
   })
 } catch (error) {
   console.log(error);
   res.status(500).json({
     ok:false,
     msg: 'Error inesperado'
   })
 }   
}
module.exports = {
  getUsuarios,
  createUsuarios,
  actualizarUsuario,
  borrarUsuario
};
