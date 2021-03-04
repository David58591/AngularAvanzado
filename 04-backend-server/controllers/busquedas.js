//busquedas totales

const { response } = require("express");
const Usuario = require('../models/usuario');
const Hospital = require('../models/hospital');
const Medico = require('../models/medico');

const busquedasTotales = async(req,res = response) => {
    const busqueda = req.params.busqueda;

    const regext = new RegExp(busqueda, 'i');
    const usuario = await Usuario.find({nombre: regext})
    const hospital = await Hospital.find({nombre: regext})
    const medico = await Medico.find({nombre: regext})

    res.json({
        ok:true,
        usuario,
        hospital,
        medico
    })
}
const documentosColeccion = async(req,res = response) => {
    const busqueda = req.params.busqueda;
    const tabla = req.params.tabla;

    const regext = new RegExp(busqueda, 'i');
   
    switch (tabla) {
        case 'medicos':
            const medico = await Medico.find({nombre: regext}).populate('hospital','nombre')
            res.json({
                ok: true,
                medico
            })
            break;
        case 'hospitales':
            const hospital = await Hospital.find({nombre: regext}).populate('usuario','nombre,img')
            res.json({
                ok: true,
                hospital
            })
            break;
        case 'usuarios':
            const usuario = await Usuario.find({nombre: regext })
            res.json({
                ok: true,
                usuario
            })
            break;
    
    
        default:
       return res.status(404).json({
            ok:false,
            msg: 'la tabla tiene que ser medicos, hospitales o usuarios'
        })
    }
   

    res.json({
        ok:true,
        usuario,
        hospital,
        medico
    })
}

module.exports = {
    busquedasTotales,
    documentosColeccion
}