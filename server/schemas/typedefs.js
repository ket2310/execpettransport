const { gql } = require("apollo-server-express");

const typeDefs = gql`
  scalar date

  type Cat {
    _id: ID!
    breed: String
    quantity: Int
    age: Int
    weight: Int
  }
  type Dog {
    _id: ID!
    breed: String
    quantity: Int
    age: Int
    weight: Int
  }

  type PetOwner {
    _id: ID!
    firstname: String
    lastname: String
    email: String
    phonenumber: String
    cellnumber: String
    instructions: String
  }

  type Travel {
    _id: ID!
    traveltype: String
    traveldate: date
    returndate: date
    pickupaddress: String
    pickupaddress2: String
    pickupcity: String
    pickupstate: String
    pickupzip: String
    destinationaddress: String
    destinationaddress2: String
    destinationcity: String
    destinationstate: String
    destinationzip: String
    otherinfo: String
  }
  type Query {
    petowners: [PetOwner]
    petowner(petownerId: ID!): PetOwner

    cats: [Cat]
    cat(catId: ID): Cat

    dogs: [Dog]
    dog(dogId: ID!): date

    travels: [Travel]
    travel(travelId: ID!): Travel
  }

  type Mutation {
    createQuote(
      firstname: String!
      lastname: String!
      email: String!
      phonenumber: String!
      cellnumber: String!
      instructions: String
    ): PetOwner

    createCat(breed: String!, quantity: Int!, age: Int!, weight: Int): Cat

    createDog(breed: String!, quantity: Int!, age: Int!, weight: Int): Dog

    createTrip(
      traveltype: String
      traveldate: date
      returndate: date
      pickupaddress: String
      pickupaddress2: String
      pickupcity: String
      pickupstate: String
      pickupzip: String
      destinationaddress: String
      destinationaddress2: String
      destinationcity: String
      destinationstate: String
      destinationzip: String
      otherinfo: String
    ): Travel
  }
`;

module.exports = typeDefs;
