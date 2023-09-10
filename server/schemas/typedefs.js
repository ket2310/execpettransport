const { gql } = require("apollo-server-express");

const typeDefs = gql`
  scalar date

  type cat {
    _id: ID!
    breed: String
    quantity: Number
    age: Number
    weight: Number
  }

  type dog {
    _id: ID!
    breed: String
    quantity: Number
    age: Number
    weight: Numberm
  }
`;
