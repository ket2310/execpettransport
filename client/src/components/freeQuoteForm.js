import React, { useState } from "react";
import { useMutation, useQuery } from "@apollo/client";
import "../styles/colleft.css";
import { QUERY_QUOTES } from "../utils/queries";
import { CREATE_QUOTE } from "../utils/mutations";
import { useForm } from "react-hook-form";

function FreeQuoteForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onErrors = (errors) => console.error(errors);

  const { loading, data } = useQuery(QUERY_QUOTES);
  if (!loading) {
    // console.log("Loading.....");
    // console.log(data);
  }
  const [formData, setFormData] = useState({
    petowner: {
      firstname: "",
      lastname: "",
      email: "",
      phonenumber: "",
      cellnumber: "",
      instructions: "",
      cat: {
        catquantity: 0,
        catbreed: "",
        catage: 0,
        catweight: 0,
      },
      dog: {
        dogquantity: 0,
        dogbreed: "",
        dogage: 0,
        dogweight: 0,
      },
    },
    travel: {
      traveltype: "1",
      traveldate: "",
      pickupzip: "",
      returndate: "",
      pickupstate: "",
      pickupcity: "",
      otherinfo: "",
      pickupaddress: "",
      pickupaddress2: "",
      destinationzip: "",
      destinationstate: "",
      destinationcity: "",
      destinationaddress2: "",
      destinationaddress: "",
    },
  });

  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [phonenumber, setPhonenumnber] = useState("");
  const [cellnumber, setCellNumber] = useState("");
  const [instructions, setInstructions] = useState("");
  const [catquantity, setCatQuantity] = useState(0);
  const [catbreed, setCatBreed] = useState("");
  const [catage, setCatAge] = useState(0);
  const [catweight, setCatWeight] = useState(0);
  const [dogquantity, setDogQuantity] = useState(0);
  const [dogbreed, setDogBreed] = useState("");
  const [dogage, setDogAge] = useState(0);
  const [dogweight, setDogWeight] = useState(0);
  const [traveltype, setTravelType] = useState("");
  const [traveldate, setTravelDate] = useState("");
  const [returndate, setReturnDate] = useState("");
  const [pickupaddress, setPickupAddress] = useState("");
  const [pickupaddress2, setPickupAddress2] = useState("");
  const [pickupcity, setPickupCity] = useState("");
  const [pickupstate, setPickupState] = useState("");
  const [pickupzip, setPickupZip] = useState("");

  const [destinationaddress, setDestinationAddress] = useState("");
  const [destinationaddress2, setDestinationAddress2] = useState("");
  const [destinationcity, setDestinationCity] = useState("");
  const [destinationstate, setDestinationState] = useState("");
  const [destinationzip, setDestinationZip] = useState("");
  const [otherinfo, setOtherInfo] = useState("");

  const [createQuote] = useMutation(CREATE_QUOTE, {
    update(cache, { data: { createQuote } }) {
      try {
        const { quotes } = cache.readQuery({ query: QUERY_QUOTES });
        //   console.log(quotes);

        if (quotes != null) {
          cache.writeQuery({
            query: QUERY_QUOTES,
            data: { quotes: [createQuote, ...quotes] },
          });
        }
      } catch (e) {
        console.log(e);
      }
    },
  });

  //const handleFormSubmit = async (event) => {

  const onFormSubmit = async (event) => {
    //console.log(data);
    event.preventDefault();

    try {
      const { loading } = await createQuote({
        variables: {
          ...formData,
          petowner: {
            firstname: fname,
            lastname: lname,
            email: email,
            phonenumber: phonenumber,
            cellnumber: cellnumber,
            instructions: instructions,
            cat: {
              catquantity: catquantity,
              catbreed: catbreed,
              catage: catage,
              catweight: catweight,
            },
            dog: {
              dogquantity: dogquantity,
              dogbreed: dogbreed,
              dogage: dogage,
              dogweight: dogweight,
            },
          },
          travel: {
            traveltype: traveltype,
            traveldate: traveldate,
            returndate: returndate,
            pickupaddress: pickupaddress,
            pickupaddress2: pickupaddress2,
            pickupcity: pickupcity,
            pickupstate: pickupstate,
            pickupzip: pickupzip,
            destinationaddress2: destinationaddress,
            destinationaddress: destinationaddress2,
            destinationcity: destinationcity,
            destinationstate: destinationstate,
            destinationzip: destinationzip,
            otherinfo: otherinfo,
          },
        },
      });

      // If it's not loading close modal and then set formData back to empty
      if (!loading) {
        console.log("not loading");
        setFormData({
          petowner: {
            firstname: "",
            lastname: "",
            email: "",
            phonenumber: "",
            cellnumber: "",
            instructions: "",
            cat: {
              catquantity: 0,
              catbreed: "",
              catage: 0,
              catweight: 0,
            },
            dog: {
              dogquantity: 0,
              dogbreed: "",
              dogage: 0,
              dogweight: 0,
            },
          },
          travel: {
            traveltype: "1",
            traveldate: "",
            pickupzip: "",
            returndate: "",
            pickupstate: "",
            pickupcity: "",
            otherinfo: "",
            pickupaddress: "",
            pickupaddress2: "",
            destinationzip: "",
            destinationstate: "",
            destinationcity: "",
            destinationaddress2: "",
            destinationaddress: "",
          },
        });
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <h1>
        <center>
          <strong>Request a FREE QUOTE - FILL OUT FORM BELOW</strong>
        </center>
        <br />
      </h1>
      <table>
        <tbody>
          <tr>
            <td className="intro">
              <p>
                <strong> EXEC PET TRANSPORTATION</strong> is a nonstop private
                luxury transport service dedicated to providing the best pet
                travel experience for your beloved pet and peace of mind for you
              </p>
              <p>
                <strong>Fastest option. NONSTOP PRIVATE :</strong> It means no
                other animals are in our cars while we move your pet family
                nonstop across the United States. This express service means we
                will reach our destination within hours, not days. Your pet will
                ride in our climate controlled luxury SUV or minivan with two
                skilled drivers that will never leave their side. Each transport
                is equipped with cell phones . Open air crates are provided
                (unless otherwise specified) for your pets safety during travel.
                This is a straight drive through service with no stops except
                for convenience/fuel breaks every four hours for your pet.
                Bottled water, approved treats, and clean bedding is provided to
                ensure your pet's comfort and well-being. It is our goal to
                provide the best possible care, comfort and as little stress as
                possible for your pet until you are both reunited. The driving
                team will send you updates via text messaging and pictures as
                they travel to keep you updated as to the progress of the trip
                so you can plan your day. Private pet travel also ensures that
                your pet is at no risk of contracting transmittable illnesses,
                kennel cough, H3N8, etc.
              </p>

              <p>
                <strong>ONE-STOP Option SELECT SEMI-PRIVATE:</strong> Direct
                drive through, 2-man driving team, sharing with one other
                clients’ pet. This option could add some time to the trip
                however we keep it streamlined. Pictures and updates at every
                fuel stop.
              </p>
              <p>
                <strong>ECONOMY- Transport:</strong> 1 man team, will stop
                daily, could take a few days to reach the destination. Vet
                certificates will be required within 10 days of pickup. Complete
                flexible pick up and drop off dates and times will be required
                by clients. These trips are discounted for this reason.
              </p>
              <p>
                <strong>FREE TRIP COORDINATOR:</strong> 13 years experience in
                the pet travel business and 40 years experience with animals,
                Sunny will help coordinate your pet move, make suggestions
                regarding booking flights, mover, kennels etc. We all work
                together for the comfort and success of your pets trip.
              </p>
              <p>
                For a <strong>FREE QUOTE</strong> fill out and submit the form
                below to describe your project or specific needs. You will
                receive a confirmation after submitting the form. Feel Free to
                call our office direct to speak with a pet transportation
                specialists. 678-975-2518 or e-mail us direct at
                info@execpettransportation.com.
              </p>
            </td>

            <td>
              <p>
                <strong>
                  Please fill out all fields in order to provide an accurate
                  quote
                </strong>
              </p>
              <br />
              <p>
                <strong>Request A Quote</strong>
              </p>
              <hr />
              <h3>Your Contact Information</h3>
              <div>
                {loading ? (
                  <div>Loading...</div>
                ) : (
                  <form>
                    <button
                      type="button"
                      id="createQuote2"
                      onClick={handleSubmit((e) => onFormSubmit(e), onErrors)}
                    >
                      Submit
                    </button>
                    <br />
                    <label> First Name:</label>&nbsp;
                    <input
                      name="petowner.firstname"
                      onChange={(event) => {
                        setFname(event.target.value);
                      }}
                      type="text"
                      placeholder="First Name"
                      {...register("petowner", {
                        required: "First Name is required.",
                      })}
                    />
                    <label style={{ color: "red" }}>
                      {errors?.petowner && errors.petowner.message}
                    </label>
                    <br />
                    <label> Last Name:</label>&nbsp;
                    <input
                      name="petowner.lastname"
                      onChange={(event) => {
                        setLname(event.target.value);
                      }}
                      type="text"
                      placeholder="Last Name"
                    />
                    <br />
                    <label>E-mail:</label>&nbsp;
                    <input
                      name="petowner.email"
                      onChange={(event) => {
                        setEmail(event.target.value);
                      }}
                      type="text"
                      placeholder="E-mail"
                    />
                    <br />
                    <label> Phone Number:</label>&nbsp;
                    <input
                      name="petowner.phonenumber"
                      onChange={(event) => {
                        setPhonenumnber(event.target.value);
                      }}
                      type="text"
                      placeholder="Phone Number"
                    />
                    <br />
                    <label>Cell Phone:</label>&nbsp;
                    <input
                      name="petowner.cellnumber"
                      onChange={(event) => {
                        setCellNumber(event.target.value);
                      }}
                      type="text"
                      placeholder="Cell Number"
                    />
                    <br />
                    <h3>
                      <strong>Pet Information</strong>
                    </h3>
                    <p>Please fill out all applicable fields</p>
                    <label> Number of Cats:</label>&nbsp;
                    <input
                      name="petowner.cat.catquantity"
                      onChange={(event) => {
                        setCatQuantity(Number(event.target.value));
                      }}
                      type="number"
                      placeholder="Number of Cats"
                    />
                    <br />
                    <label> Breed:</label>&nbsp;
                    <input
                      name="petowner.cat.catbreed"
                      onChange={(event) => {
                        setCatBreed(event.target.value);
                      }}
                      type="text"
                      placeholder="Breed"
                    />
                    <br />
                    <label> Age:</label>&nbsp;
                    <input
                      name="petowner.cat.catage"
                      onChange={(event) =>
                        setCatAge(Number(event.target.value))
                      }
                      type="number"
                      placeholder="Age"
                    />
                    <br />
                    <label> Weight:</label>&nbsp;
                    <input
                      name="petowner.cat.catweight"
                      onChange={(event) =>
                        setCatWeight(Number(event.target.value))
                      }
                      type="number"
                      placeholder="Weight"
                    />
                    <br />
                    <br />
                    <label> Number of Dogs:</label>&nbsp;
                    <input
                      name="petowner.dog.dogquantity"
                      onChange={(event) => {
                        setDogQuantity(Number(event.target.value));
                      }}
                      type="number"
                      placeholder="Number of dogs"
                    />
                    <br />
                    <label> Breed:</label>&nbsp;
                    <input
                      name="petowner.dog.dogbreed"
                      onChange={(event) => {
                        setDogBreed(event.target.value);
                      }}
                      type="text"
                      placeholder="Breed"
                    />
                    <br />
                    <label> Age:</label>&nbsp;
                    <input
                      name="petowner.dog.dogage"
                      onChange={(event) => {
                        setDogAge(Number(event.target.value));
                      }}
                      type="number"
                      placeholder="Age"
                    />
                    <br />
                    <label> Weight:</label>&nbsp;
                    <input
                      name="petowner.dog.dogweight"
                      onChange={(event) => {
                        setDogWeight(Number(event.target.value));
                      }}
                      type="number"
                      placeholder="Weight"
                    />
                    <br />
                    <label>
                      Any special instructions/medical information we need to
                      know about your pet(s)?{" "}
                    </label>
                    <br />
                    <textarea
                      name="petowner.instructions"
                      onChange={(event) => {
                        setInstructions(event.target.value);
                      }}
                      rows="4"
                      cols="50"
                      placeholder="Instructions"
                    ></textarea>
                    <br />
                    <br />
                    <h3>
                      <strong>Travel Information</strong>
                    </h3>
                    <label>Type of Travel</label>
                    <br />
                    <select
                      name="travel.traveltype"
                      onChange={(event) => {
                        setTravelType(event.target.value);
                      }}
                    >
                      <option defaultValue>-- SELECT -- </option>
                      <option value="OneWay" key="1">
                        One Way Trip
                      </option>
                      <option value="TwoWa" key="2">
                        Two Way Trip
                      </option>
                    </select>
                    <br />
                    <label>Date of Travel</label>
                    <br />
                    <input
                      name="travel.traveldate"
                      onChange={(event) => {
                        setTravelDate(event.target.value);
                      }}
                      type="text"
                      placeholder="Departure Date"
                    />
                    <br />
                    <label>Date of Return</label>
                    <br />
                    <input
                      name="travel.returndate"
                      onChange={(event) => {
                        setReturnDate(event.target.value);
                      }}
                      type="text"
                      placeholder="Return Date"
                    />
                    <br />
                    <br />
                    <br />
                    <h3>
                      <strong>Pickup Address</strong>
                    </h3>
                    <label>Address Line 1</label>
                    <br />
                    <input
                      name="travel.pickupAaddress"
                      onChange={(event) => {
                        setPickupAddress(event.target.value);
                      }}
                      type="text"
                      placeholder="Address 1"
                    />
                    <br />
                    <label>Address Line 2</label>
                    <br />
                    <input
                      name="travel.pickupaddress2"
                      onChange={(event) => {
                        setPickupAddress2(event.target.value);
                      }}
                      type="text"
                      placeholder="Address 2"
                    />
                    <br />
                    <table>
                      <tbody>
                        <tr>
                          <td>
                            <label>City</label>
                          </td>
                          <td>
                            <label>State</label>
                          </td>
                          <td>
                            <label>Zip</label>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <input
                              name="travel.pickupcity"
                              onChange={(event) => {
                                setPickupCity(event.target.value);
                              }}
                              type="text"
                              placeholder="City"
                            />
                          </td>
                          <td>
                            <input
                              name="travel.pickupstate"
                              onChange={(event) => {
                                setPickupState(event.target.value);
                              }}
                              type="text"
                              placeholder="State"
                            />
                          </td>
                          <td>
                            <input
                              name="travel.pickupzip"
                              onChange={(event) => {
                                setPickupZip(event.target.value);
                              }}
                              type="text"
                              placeholder="Zip"
                            />
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <br />
                    <br />
                    <h3>
                      <strong>Destination Address</strong>
                    </h3>
                    <label>Address Line 1</label>
                    <br />
                    <input
                      name="travel.destinationaddress"
                      onChange={(event) => {
                        setDestinationAddress(event.target.value);
                      }}
                      type="text"
                      placeholder="Address 1"
                    />
                    <br />
                    <label>Address Line 2</label>
                    <br />
                    <input
                      name="travel.destinationaddress2"
                      onChange={(event) => {
                        setDestinationAddress2(event.target.value);
                      }}
                      type="text"
                      placeholder="Address 2"
                    />
                    <br />
                    <table>
                      <tbody>
                        <tr>
                          <td>
                            <label>City</label>
                          </td>
                          <td>
                            <label>State</label>
                          </td>
                          <td>
                            <label>Zip</label>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <input
                              name="travel.destinationcity"
                              onChange={(event) => {
                                setDestinationCity(event.target.value);
                              }}
                              type="text"
                              placeholder="City"
                            />
                          </td>
                          <td>
                            <input
                              name="travel.destinationstate"
                              onChange={(event) => {
                                setDestinationState(event.target.value);
                              }}
                              type="text"
                              placeholder="State"
                            />
                          </td>
                          <td>
                            <input
                              name="travel.destinationzip"
                              onChange={(event) => {
                                setDestinationZip(event.target.value);
                              }}
                              type="text"
                              placeholder="Zip"
                            />
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <input
                              name="travel.otherinfo"
                              onChange={(event) => {
                                setOtherInfo(event.target.value);
                              }}
                              type="text"
                              placeholder="Other Information"
                            />
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <br />
                    <button
                      type="button"
                      id="createQuote"
                      //onClick={(e) => handleFormSubmit(e)}
                    >
                      Submit
                    </button>
                  </form>
                )}
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default FreeQuoteForm;
