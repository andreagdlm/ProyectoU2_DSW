const usuarioService = require('../services/usuarioService');

const resolvers = {
  Query: {
    usuarios: async () => await usuarioService.getUsuarios(),
    usuario: async (_, { _id }) => await usuarioService.getUsuarioById(_id),
  },
  Mutation: {
    createUsuario: async (_, args) => await usuarioService.createUsuario(args),
    updateUsuario: async (_, args) => await usuarioService.updateUsuario(args),
    deleteUsuario: async (_, { _id }) => await usuarioService.deleteUsuario(_id),
  },
};

module.exports = resolvers;
