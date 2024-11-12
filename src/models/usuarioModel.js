const mongoose = require('mongoose');

const usuarioSchema = new mongoose.Schema({
  nombreCompleto: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  direccion: {
    calle: { type: String },
    numero: { type: String },
    interior: { type: String },
    colonia: { type: String },
    municipio: { type: String },
    estado: { type: String },
    codigoPostal: { type: String },
  },
  telefono: { type: String },
  fechaRegistro: { type: Date, default: Date.now },
  tipoUsuario: { type: String, enum: ['ADMIN', 'CLIENTE'], required: true },
  metodopagoPreferido: { type: String },
  facturapiid: { type: String },
  rfc: { type: String },
});

module.exports = mongoose.model('Usuario', usuarioSchema);
