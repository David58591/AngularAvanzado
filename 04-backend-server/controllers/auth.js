const response = require("express");
const Usuario = require("../models/usuario");
const bcrypt = require('bcryptjs');
const {verify} = require('../helpers/google-verify');

const login = async (req, res = response) => {

    const {email,password} = req.body;
    try {
        //Verificar email
        const usuarioDB = await Usuario.findOne({email});
        if(!usuarioDB){
           return res.status(404).json({
                ok: false,
                msg: 'Email no válido'
            });
        }

        //Verificar contraseña 

        const validPassword = bcrypt.compareSync(password,usuarioDB.password);
        if(!validPassword){
            return res.status(404).json({
                ok: false,
                msg: 'Contraseña no válida'
            });
        }

      res.json({
            ok: true,
            msg: 'Hola'
        })

    } catch  {
       // console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Hable con el administrador'
        })
    }
}

const googleSignIn = async(req, res= response) => {
    const googleToken = req.body.token; 

    try {
   const {name, email, picture} = await verify(googleToken);
       
   const usuarioDB = await Usuario.findOne({email: email});
   let usuario;

   if(!usuarioDB){
       usuario = new Usuario({
           nombre: name,
           email,
           password: '@@@',
           img: picture,
           google:true
       });
   }else {
       usuario = usuarioDB;
       usuario.google = true;
       usuario.password = '@@@'
   }
   //Guardar en base de datos
   await usuario.save();
   
   res.json({
            ok: true,
            msg: 'Google Sign in',
            name,email,picture

        })
    } catch (error) {
        res.status(401).json({
            ok: false,
            msg: 'Algo salió mal, token no correcto'
        })
    }
   
}
module.exports = {
    login,
    googleSignIn
}