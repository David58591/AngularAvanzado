const response = require('express');
const Medico = require('../models/medico');

const getMedicos  = async(req,res = response)  => {
    const medicos = await Medico.find().populate('hospital','nombre');
    try {
        res.json({
            ok:true,
            medicos: medicos
        })
    } catch (error) {
        res.status(500).json({
            ok: false,
            msg: 'Hable con el administrador'
        })
    }
   
}
const crearMedico = async(req, res = response) => {
    const medico = new Medico({
        ...req.body});
    try {
     const medicoDB =  await medico.save();
        res.json({
            ok: true,
           medico : req.body
        })
    } catch (error) {
        res.status(500).json({
            ok: false,
            msg: 'Hable con el adminstrador'
        })
    }


   
}
const actualizarMedico = (req, res = response) => {
    res.json({
        ok: true,
        msg: 'Actualizar  Medico'
    })
}
const borrarMedico = (req, res = response) => {
    res.json({
        ok: true,
        msg: 'Borrar Medico'
    })
}

module.exports = {
    getMedicos,
    crearMedico,
    actualizarMedico,
    borrarMedico
}