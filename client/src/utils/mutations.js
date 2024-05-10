import { gql } from "@apollo/client";

export const CREATE_CAT = gql`
  mutation createCat($cat: catData!) {
    travelingCat(catInfo: $cat) {
      quantity
      breed
    }
  }
`;

export const CREATE_DOG = gql`
  mutation createDog($dog: dogData!) {
    travelingDog(dogInfo: $dog) {
      quantity
      breed
    }
  }
`;

export const CREATE_QUOTE = gql`
  mutation createQuote($petowner: petownerdata, $travel: travelData) {
    createQuote(petowner: $petowner, travel: $travel) {
      petowner {
        firstname
        lastname
        email
        phonenumber
        cellnumber
      }
      travel {
        traveltype
      }
    }
  }
`;

export const CREATE_OWNER = gql`
  mutation createOwner($petowner: petownerdata) {
    createOwner(petowner: $petowner) {
      firstname
      lastname
      email
      phonenumber
    }
  }
`;
export const CREATE_TRIP = gql`
  mutation createTrip(
    $traveltype: String
    $traveldate: date
    $returndate: date
    $pickupaddress: String
    $pickupaddress2: String
    $pickupcity: String
    $pickupstate: String
    $pickupzip: String
    $destinationaddress: String
    $destinationaddress2: String
    $destinationcity: String
    $destinationstate: String
    $destinationzip: String
    $otherinfo: String
  ) {
    createTrip(
      traveltype: $traveltype
      traveldate: $traveldate
      returndate: $returndate
      pickupaddress: $pickupaddress
      pickupaddress2: $pickupaddress2
      pickupcity: $pickupcity
      pickupstate: $pickupstate
      pickupzip: $pickupzip
      destinationaddress: $destinationaddress
      destinationaddress2: $destinationaddress2
      destinationcity: $destinationcity
      destinationstate: $destinationstate
      destinationzip: $destinationzip
      otherinfo: $otherinfo
    ) {
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
  }
`;
