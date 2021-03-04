const { response } = require("express");


const fileUpload = (req, res = response) => {

const tipo = req.params.tipo;
const id = req.params.id;
const tiposPermitidos = ['hospitales', 'medicos', 'usuarios'];

//Validar tipo
if(tiposPermitidos.includes(tipo)){
    res.status(400).json({
        ok: false,
        msg: 'No es un tipo recogido como válido'
    })
}
    res.json({
        ok: true,
        msg: 'msg Uploaded'
    })
}

module.exports = {
    fileUpload
}