const { gql } = require('apollo-server');

const typeDefs = gql`
  enum TipoUsuario {
    ADMIN
    CLIENTE
  }

  type Usuario {
    _id: ID!
    nombreCompleto: String!
    email: String!
    password: String!
    direccion: Direccion
    telefono: String
    fechaRegistro: String
    tipoUsuario: TipoUsuario!
    metodopagoPreferido: String
    facturapiid: String
    RFC: String
  }

  type Direccion {
    calle: String
    numero: String
    interior: String
    colonia: String
    municipio: String
    codigoPostal: String
    estado: String
    pais: String
  }

  type Query {
    usuarios: [Usuario]
    usuario(_id: ID!): Usuario
  }

  type Mutation {
    createUsuario(
      nombreCompleto: String!,
      email: String!,
      password: String!,
      direccion: DireccionInput,
      telefono: String!,
      tipoUsuario: TipoUsuario!,
      metodopagoPreferido: String,
      RFC: String
    ): Usuario

    updateUsuario(
      _id: ID!,
      nombreCompleto: String,
      email: String,
      password: String,
      direccion: DireccionInput,
      telefono: String,
      tipoUsuario: TipoUsuario,
      metodopagoPreferido: String,
      facturapiid: String,
      RFC: String
    ): Usuario

    deleteUsuario(_id: ID!): Usuario
  }

  input DireccionInput {
    calle: String
    numero: String
    interior: String
    colonia: String
    municipio: String
    codigoPostal: String
    estado: String
    pais: String
  }
`;

module.exports = typeDefs;
