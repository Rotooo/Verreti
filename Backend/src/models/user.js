import mongoose,{ Schema }  from 'mongoose';

const userSchema = new Schema({
    nombre: String,
    app: String,
    apm: String,
    correo: String,
    password: String,
    puesto: String,
    permisos: Number
})

const user = mongoose.model('usuarios', userSchema);

export default user;