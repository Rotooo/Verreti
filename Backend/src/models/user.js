import mongoose,{ Schema}  from 'mongoose';

const userSchema = new Schema({
    nombre: String,
    app: String,
    apm: String,
    correo: String,
    contraseña: String,
    puesto: String,
    permisos: Number
})

const user = mongoose.model('users', userSchema);

export default user;