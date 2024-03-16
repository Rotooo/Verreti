import mongoose,{ Schema }  from 'mongoose';

const instrumentSchema = new Schema({
    codigo: String,
    marca: String,
    modelo: String,
    tipo: String,
    alcance_max: String,
    division_min: String,
    clase: String,
    tipo_inspeccion: String,
    numero: Number,
})

const instrument = mongoose.model('instrumentos', instrumentSchema);

export default instrument