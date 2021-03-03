const { model, Schema} = require('mongoose');


const medicoSchema = Schema({
    nombre: {
        type: String,
        required:true
    },
    img: {
        type: String
    },
    rol: {
        type:String,
        required: true,
        default: 'USER_ROLE'
    },
    usuario : {
        type: Schema.Types.ObjectId,
        ref: 'Usuario'
    },
    hospital: {
        type:Schema.Types.ObjectId,
        ref: 'Hospital'
    }
});

medicoSchema.method('toJSON' ,function () {
    const {__v , ...object} = this.toObject();
    
    return object;
})
module.exports = model('Medico', medicoSchema)
