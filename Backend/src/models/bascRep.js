import mongoose,{ Schema }  from 'mongoose';

const instrumentBascRepSchema = new Schema({
    equipo: Number,
    marca: String,
    modelo: String,
    noSerie: String,
    aproModProt: String,
    inspTipo: String,
    instrTipo: String,
    alcance_max: String,
    division_min: String,
    clase: String,
    visualinsp: String,
    precarga: String,
    exactitud: String,
    excentricidad: String,
    repetitibilidad: String,
    holoProfeco: String,
    uiaLabel: String,
})

const bascReportSchema = new Schema({
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
    instrumentos: [instrumentBascRepSchema],
    inspector: String,
    auxiliar: String,
})

const bascReport = mongoose.model('bascreportes', bascReportSchema);

export default bascReport;