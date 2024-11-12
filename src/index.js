const { ApolloServer } = require('apollo-server');
const mongoose = require('mongoose');
const productTypeDefs = require('./schemas/productSchema');
const usuarioTypeDefs = require('./schemas/usuarioSchema');
const productResolvers = require('./resolvers/productResolver');
const usuarioResolvers = require('./resolvers/usuarioResolver');

const startServer = async () => {
  // Conectar a MongoDB
  await mongoose.connect('mongodb+srv://andreagdlm:Progratec3007@productsu2.vgvfu.mongodb.net/');
  
  const server = new ApolloServer({
    typeDefs: [productTypeDefs, usuarioTypeDefs],
    resolvers: [productResolvers, usuarioResolvers],
  });
  
  server.listen().then(({ url }) => {
    console.log(`Servidor corriendo en ${url}`);
  });
};

startServer();
