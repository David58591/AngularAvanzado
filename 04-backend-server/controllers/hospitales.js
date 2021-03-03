const response = require('express');

const getHospitales  = (req,res = response)  => {
    res.json({
        ok:true,
        msn: 'getHospitales'
    })
}
const crearHospital = (req, res = response) => {
    res.json({
        ok: true,
        msg: 'Crear Hospital'
    })
}
const actualizarHospital = (req, res = response) => {
    res.json({
        ok: true,
        msg: 'Actualizar  Hospital'
    })
}
const borrarHospital = (req, res = response) => {
    res.json({
        ok: true,
        msg: 'Borrar Hospital'
    })
}

module.exports = {
    getHospitales,
    crearHospital,
    actualizarHospital,
    borrarHospital
}