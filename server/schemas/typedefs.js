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
    cats: Cat
    dogs: Dog
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

  input petownerdata {
    _id: ID
    firstname: String
    lastname: String
    email: String
    phonenumber: String
    cellnumber: String
    instructions: String
    cat: catData
    dog: dogData
  }

  input catData {
    _id: ID
    catbreed: String
    catquantity: Int
    catage: Int
    catweight: Int
  }

  input dogData {
    _id: ID
    dogbreed: String
    dogquantity: Int
    dogage: Int
    dogweight: Int
  }

  input travelData {
    _id: ID
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
  type Quote {
    _id: ID!
    petowner: PetOwner!
    travel: Travel!
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

    quotes: [Quote]
    quote(quoteId: ID!): Quote
  }

  type Mutation {
    createQuote(petowner: petownerdata, travel: travelData): Quote

    createPetowner(owner: petownerdata): PetOwner

    createCat(cat: catData): Cat

    createDog(dog: dogData): Dog

    createTrip(trip: travelData): Travel
  }
`;

module.exports = typeDefs;
