const response = require('express');
const Hospital = require('../models/hospital');
const usuario = require('../models/usuario');

const getHospitales  = async(req,res = response)  => {
    const hospitales = await Hospital.find().populate('usuario','nombre img');
    res.json({
        ok:true,
        hospitales : hospitales
    })
}
const crearHospital = async (req, res = response) => {

    const hospital = new Hospital({
        uid: usuario.id,
        ...req.body});

    try {
      const hospitalDB =  await hospital.save();
        res.json({
            ok: true,
           hospital : hospitalDB
        })
    } catch (error) {
        res.status(500).json({
            ok: false,
            msg: 'Hable con el administrador'
        })
    }
   
}
const actualizarHospital = async (req, res = response) => {
    try {
        const id = req.params.id;
        const { } = req.body;
          const hospitalDB = await Hospital.findById(id);
          if(!hospitalDB){
            res.status(400).json({
              ok: false,
              msg: 'No existe un hospital en la BBDD'
            })
          }
        
          
          // TODO : validar token y comprobar si es un usuario correcto
            //Actualizar
            const {...campos} = req.body;
        
            if(hospitalDB.id !==id){
              existeHospital = await Hospital.findOne({id})
              if(existeEmail){
                res.status(400).json({
                  ok: false,
                  msg: 'Ya existe un hospital con ese id'
                })
              }
            }
          campos.id = id
        
            const hospitalActualizado = await Hospital.findByIdAndUpdate(id,campos , {new : true});
        
          res.json({
             ok:true,
             hospital: hospitalActualizado
           })
         } catch (error) {
           console.log(error);
           res.status(500).json({
             ok:false,
             msg: 'Error inesperado'
           })
         }   
}
const borrarHospital = async (req, res = response) => {
    try {
        const id = req.params.id;
        const { } = req.body;
          const hostpitalDB = await Hospital.findById(id);
          if(!hostpitalDB){
            res.status(400).json({
              ok: false,
              msg: 'No existe un hospital en la BBDD así que no se puede borrar'
            })
          }
        
          
          // TODO : validar token y comprobar si es un usuario correcto
            //Borrar
            const {password,google,...campos} = req.body;
        
            if(hostpitalDB.id !==id){
              existeHospital = await Hospital.findOne({id})
              if(existeHospital){
                res.status(404).json({
                  ok: false,
                  msg: 'No se ha borrado el hospital'
                })
              }
            }
        
            const hospitalBorrado = await Hospital.findByIdAndDelete(id);
        
          res.json({
             ok:true,
             hospital: hospitalBorrado
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
    getHospitales,
    crearHospital,
    actualizarHospital,
    borrarHospital
}