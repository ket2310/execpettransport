import { gql } from "@apollo/client";

export const QUERY_CATS = gql`
  query getCats {
    cats {
      _id
      breed
      quantity
      age
      weight
    }
  }
`;

export const QUERY_DOGS = gql`
  query getDogs {
    dogs {
      _id
      breed
      quantity
      age
      weight
    }
  }
`;

export const QUERY_TRIPS = gql`
  query getClients {
    _id
    firstname
    lastname
    email
    phonenumber
    cellnumber
    instructions
  }
`;

export const QUERY_CLIENTS = gql`
  query getTrips {
    _id
    traveltype
    traveldate
    returndate
    pickupaddress
    pickupaddress2
    pickupcity
    pickupstate
    pickupzip
    destinationaddress
    destinationaddress2
    destinationcity
    destinationstate
    destinationzip
    otherinfo
  }
`;
