const { ApolloServer } = require("apollo-server-express");
const { typeDefs } = require("./Schema/TypeDefs");
const { resolvers } = require("./Schema/Resolvers");
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
app.use(cors());
mongoose
  .connect("mongodb://localhost:27017/test")
  .then(() => {
    console.log("connected");
  })
  .catch((e) => {
    console.log("Something went wrong", e);
  });
const server = new ApolloServer({ typeDefs, resolvers });

const startServer = async () => {
  await server.start();
  server.applyMiddleware({ app });
};
startServer();

app.listen({ port: 3001 }, () => {
  console.log("server running on port 3001");
});
