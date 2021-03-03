const response = require('express');

const getMedicos  = (req,res = response)  => {
    res.json({
        ok:true,
        msn: 'getMedicos'
    })
}
const crearMedico = (req, res = response) => {
    res.json({
        ok: true,
        msg: 'Crear Medicos'
    })
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