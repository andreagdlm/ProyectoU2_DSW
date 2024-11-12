const Usuario = require('../models/usuarioModel');
const facturapi = require('../apis/facturapi');

const usuarioService = {
  getUsuarios: async () => await Usuario.find(),
  getUsuarioById: async (_id) => await Usuario.findById(_id),
  createUsuario: async (args) => {
    // Crear el usuario en MongoDB
    const usuario = new Usuario(args);

    // Crear el usuario en Facturapi
    const facturapiUsuario = await facturapi.createUsuario(usuario);

    // Guardamos el facturapiid en el campo correspondiente
    usuario.facturapiid = facturapiUsuario.id;

    return await usuario.save();
  },
  updateUsuario: async ({ _id, ...rest }) => {
    return await Usuario.findByIdAndUpdate(_id, rest, { new: true });
  },
  deleteUsuario: async (_id) => {
    return await Usuario.findByIdAndDelete(_id);
  }
};

module.exports = usuarioService;
