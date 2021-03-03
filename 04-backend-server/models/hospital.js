const { model, Schema} = require('mongoose');


const hospitalSchema = Schema({
    nombre: {
        type: String,
        required:true
    },
    img: {
        type: String
    },
    usuario : {
        type: Schema.Types.ObjectId,
        ref: 'Usuario'
    }
}, {Collections : 'Hospitales'});

usuarioSchema.method('toJSON' ,function () {
    const {__v,  ...object} = this.toObject();
    return object;
})
module.exports = model('Hospital', hospitalSchema)
