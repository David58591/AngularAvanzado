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
        ref: 'Hospital',
        required: true
    }
});

medicoSchema.method('toJSON' ,function () {
    const {_id, __v , ...object} = this.toObject();
    object.id = _id;
    return object;
})
module.exports = model('Medico', medicoSchema)
