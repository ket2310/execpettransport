import { gql } from "@apollo/client";

export const CREATE_CAT = gql`
  mutation createCat($breed: String, $quantity: Int, $age: Int, $weight: Int) {
    createCat(breed: $breed, quantity: $quantity, age: $age, weight: $weight) {
      breed
      quantity
      age
      weight
    }
  }
`;

export const CREATE_DOG = gql`
mutation createDog ( $breed: String,
                      $quantity: Int,
                      $age: Int.
                      $weight: Int      
                    ) 
                    {
                      createDog (breed: $breed,
                                     quantity: $quantity, 
                                     age: $age,
                                     weight: $weight
                                    ) 
                                    {
                                        breed
                                        quantity
                                        age
                                        weight
                                    }
                    }`;

export const CREATE_QUOTE = gql`
  mutation createQuote(
    $firstname: String
    $lastname: String
    $email: String
    $honenumber: String
    $cellnumber: String
    $instructions: String
  ) {
    createQuote(
      firstname: $firstname
      lastname: $lastname
      email: $email
      phonenumber: $phonenumber
      cellnumber: $cellnumber
      instructions: $instructions
    ) {
      firstname
      lastname
      email
      phonenumber
      cellnumber
    }
  }
`;

export const CREATE_TRIP = gql`
mutation createTrip (
        $traveltype: String,
        $traveldate: date,
        $returndate: date,
        $pickupaddress: String,
        $pickupaddress2: String,
        $pickupcity: String,
        $pickupstate: String,
        $pickupzip: String,
        $destinationaddress: String,
        $destinationaddress2: String,
        $destinationcity: String,
        $destinationstate: String,
        $destinationzip: String,
        $otherinfo: String,
      )
      {
        createTrip(
        traveltype: $$traveltype,
        traveldate: $traveldate,
        returndate: $returndate,
        pickupaddress: $pickupaddress,
        pickupaddress2: $pickupaddress2,
        pickupcity: $pickupcity,
        pickupstate: $pickupstate,
        pickupzip: $pickupzip,
        destinationaddress: $$destinationaddress,
        destinationaddress2: $destinationaddress2,
        destinationcity: $destinationcity,
        destinationstate: $destinationstate,
        destinationzip: $$destinationzip,
        otherinfo: $otherinfo
        )
        {
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
      }`;
