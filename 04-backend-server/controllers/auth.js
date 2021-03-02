const response = require("express");
const Usuario = require("../models/usuario");
const bcrypt = require('bcryptjs');

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

module.exports = {
    login
}