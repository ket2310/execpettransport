const { gql } = require("apollo-server-express");

const typeDefs = gql`
  scalar date

  type Cat {
    _id: ID!
    breed: String
    quantity: Number
    age: Number
    weight: Number
  }

  type Dog {
    _id: ID!
    breed: String
    quantity: Number
    age: Number
    weight: Number
  }
  type Petowner {
    _id: ID!
    firstname: String
    lastname: String
    email: String
    phonenumber: String
    cellnumber: String
    instructions: String
  }

  type Travel{
    _id: ID!
    traveltype: String
    traveldate: datq
    returndate: Date
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
    petowners: [petowner]
    petowner(petownerId: ID!): Petowner

    cats: [cat]
    cat: (catId: ID): cat
    
    dogs: [dog]
    dog: (dogId: ID!): dog

    travels: [travel]
    travel: (travelId: ID!): travel
  }

  type Mutation {
    createQuote(                   
        firstname: String!
        lastname: String!
        email: String!
        phonenumber: String!
        cellnumber: String!
        instructions: String
    ):petowner

    createCat(
        breed: String!
        quantity: Number!
        age: Number!
        weight: Number            
    ):cat

    createDog(
        breed: String!
        quantity: Number!
        age: Number!
        weight: Number            
    ):dog

    createTrip(
        traveltype: String
        traveldate: datq
        returndate: Date
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
    ):travel
  }
`;

module.exports = typeDefs;
