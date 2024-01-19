import mongoose,{ Schema }  from 'mongoose';

const instrumentRepSchema = new Schema({
    codigo: String,
    marca: String,
    modelo: String,
    tipo: String,
    alcance_max: Number,
    division_min: Number,
    clase: String,
    tipo_inspeccion: String,
    numero: Number,
})

const reportSchema = new Schema({
    reporteid: String,
    folio: String,
    fecha: String,
    utm: String,
    giro: String,
    nombre_empresa: String,
    calle: String,
    colonia: String,
    municipio: String,
    rfc: String,
    correo: String,
    cp: String,
    telefono: String,
    estado: String,
    instrumentos: [instrumentRepSchema],
    inspector: String,
    auxiliar: String,
})

const report = mongoose.model('reportes', reportSchema);

export default report;