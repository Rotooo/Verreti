import mongoose,{ Schema }  from 'mongoose';

const empresaSchema = new Schema({
    nombre: String,
    calle: String,
    colonia: String,
    municipio: String,
    rfc: String,
    correo: String,
    cp: Number,
    telefono: String,
    estado: String,
})

const empresa = mongoose.model('empresas', empresaSchema);

export default empresa;