const { gql } = require("apollo-server-express");
const typeDefs = gql`
  enum Colors {
    red
    white
    blue
  }

  type Duck {
    name: String
    color: Colors
  }

  # Queries
  type Query {
    getAllDucks: [Duck!]!
  }

  # Mutations
  type Mutation {
    addDuck(name: String!, color: Colors!): Duck!
    removeDuck(name: String!): [Duck!]!
    updateDuck(name: String!, newColor: Colors!): Duck!
  }
`;

module.exports = { typeDefs };
