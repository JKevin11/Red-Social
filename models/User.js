const { Schema, model } = require('mongoose')
const moment = require('moment')

const UserSchema = Schema({
    username: { type: String, required: [true, 'El nombre de usuario es obligatorio'], unique: [true, 'Ya existe alguien con ese nombre de usuario'] },
    email: { type: String, required: [true, 'El email es obligatorio'], unique: [true, 'Ya existe un usuario con ese email'] },
    password: { type: String, required: [true, 'La contraseña es obligatoria'] },
    delete: { type: Boolean, default: false }
}, { timestamps: { createdAt: 'created', updateAt: 'updated' } })


// UserSchema.set('toJSON',{
//     transform: (document, retunedObject) => {

//     }
// })


module.exports = model('User', UserSchema)

