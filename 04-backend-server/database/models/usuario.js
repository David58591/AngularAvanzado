const { model, Schema} = require('mongoose');


const usuarioSchema = Schema({
    nombre: {
        type: String,
        required:true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }, 
    img: {
        type: String
    },
    rol: {
        type:String,
        required: true,
        default: 'USER_ROLE'
    },
    google: {
        type: Boolean,
        default: false
    },
});

usuarioSchema.method('toJSON' ,function () {
    const {__v, _id, password , ...object} = this.toObject();
    object.id = _id;
    return object;
})
module.exports = model('Usuario', usuarioSchema)
