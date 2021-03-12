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
    try {
        const id = req.params.id;
        const { } = req.body;
          const medicoDB = await Medico.findById(id);
          if(!medicoDB){
            res.status(400).json({
              ok: false,
              msg: 'No existe un usuario en la BBDD'
            })
          }
        
          
          // TODO : validar token y comprobar si es un usuario correcto
            //Actualizar
            const {...campos} = req.body;
        
            if(medicoDB.id !==id){
              existeMedico = await Medico.findOne({id})
              if(existeMedico){
                res.status(400).json({
                  ok: false,
                  msg: 'Ya existe un usuario con ese email'
                })
              }
            }
          campos.id = id
        
            const medicoActualizado = await Medico.findByIdAndUpdate(id,campos , {new : true});
        
          res.json({
             ok:true,
             medico: medicoActualizado
           })
         } catch (error) {
           console.log(error);
           res.status(500).json({
             ok:false,
             msg: 'Error inesperado'
           })
         }   
}
const borrarMedico = (req, res = response) => {
     try {
const id = req.params.id;
const { } = req.body;
  const medicoDB = await Medico.findById(id);
  if(!medicoDB){
    res.status(400).json({
      ok: false,
      msg: 'No existe un usuario en la BBDD así que no se puede borrar'
    })
  }

  
  // TODO : validar token y comprobar si es un usuario correcto
    //Borrar
    const {...campos} = req.body;

    if(medicoDB.id !==id){
    const  existeMedico = await Medico.findOne({id})
      if(existeMedico){
        res.status(404).json({
          ok: false,
          msg: 'No se ha borrado el usuario'
        })
      }
    }
    campos.id = id;
    const medicoBorrado = await Medico.findByIdAndDelete(id);

  res.json({
     ok:true,
     usuario: medicoBorrado
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
    getMedicos,
    crearMedico,
    actualizarMedico,
    borrarMedico
}