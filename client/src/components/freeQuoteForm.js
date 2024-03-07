import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import "../styles/colleft.css";
import { QUERY_QUOTES } from "../utils/queries";
import { CREATE_QUOTE } from "../utils/mutations";

function FreeQuoteForm() {
  const [formData, setFormData] = useState({
    petowner: {},
    travel: {},
  });

  const [createQuote] = useMutation(CREATE_QUOTE, {
    update(cache, { data: { createQuote } }) {
      try {
        const { quotes } = cache.readQuery({ query: QUERY_QUOTES });

        cache.writeQuery({
          query: QUERY_QUOTES,
          data: { quotes: [createQuote, ...quotes] },
        });
      } catch (e) {
        console.error(e);
      }
    },
  });

  const handleFormSubmit = async () => {
    //try to book a lesson with formdata state and other variables
    try {
      const { loading } = await createQuote({
        variables: {
          ...formData,
          firstName: formData.firstName,
        },
      });
      // If it's not loading close modal and then set formData back to empty
      if (!loading) {
        setFormData({
          petowner: {},
          travel: {},
        });
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleInputChange = (e) => {
    //grab the name and value from item changed
    const { name, value } = e.target;
    console.log(name + " " + value);
    setFormData({ ...formData, [name]: value });
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
                <form onSubmit={handleFormSubmit}>
                  <label> First Name:</label>&nbsp;
                  <input
                    name="firstName"
                    onChange={handleInputChange}
                    type="text"
                    placeholder="First Name"
                  />
                  <br />
                  <label> Last Name:</label>&nbsp;
                  <input
                    name="lastName"
                    onChange={handleInputChange}
                    type="text"
                    placeholder="Last Name"
                  />
                  <br />
                  <label>E-mail:</label>&nbsp;
                  <input
                    name="emaiol"
                    onChange={handleInputChange}
                    type="text"
                    placeholder="E-mail"
                  />
                  <br />
                  <label> Phone Number:</label>&nbsp;
                  <input
                    name="phoneNumber"
                    onChange={handleInputChange}
                    type="text"
                    placeholder="Phone Number"
                  />
                  <br />
                  <label>Cell Phone:</label>&nbsp;
                  <input
                    name="cellNumber"
                    onChange={handleInputChange}
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
                    name="numberOfCats"
                    onChange={handleInputChange}
                    type="text"
                    placeholder="Number of Cats"
                  />
                  <br />
                  <label> Breed:</label>&nbsp;
                  <input
                    name="catbreed"
                    onChange={handleInputChange}
                    type="text"
                    placeholder="Breed"
                  />
                  <br />
                  <label> Age:</label>&nbsp;
                  <input
                    name="catage"
                    onChange={handleInputChange}
                    type="text"
                    placeholder="Age"
                  />
                  <br />
                  <label> Weight:</label>&nbsp;
                  <input
                    name="catweight"
                    onChange={handleInputChange}
                    type="text"
                    placeholder="Weight"
                  />
                  <br />
                  <br />
                  <label> Number of Dogs:</label>&nbsp;
                  <input
                    name="numberOfdogs"
                    onChange={handleInputChange}
                    type="text"
                    placeholder="Number of dogs"
                  />
                  <br />
                  <label> Breed:</label>&nbsp;
                  <input
                    name="dogbreed"
                    onChange={handleInputChange}
                    type="text"
                    placeholder="Breed"
                  />
                  <br />
                  <label> Age:</label>&nbsp;
                  <input
                    name="dogage"
                    onChange={handleInputChange}
                    type="text"
                    placeholder="Age"
                  />
                  <br />
                  <label> Weight:</label>&nbsp;
                  <input
                    name="dogweight"
                    onChange={handleInputChange}
                    type="text"
                    placeholder="Weight"
                  />
                  <br />
                  <label>
                    Any special instructions/medical information we need to know
                    about your pet(s)?{" "}
                  </label>
                  <br />
                  <textarea
                    onChange={handleInputChange}
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
                  <select name="traveltype">
                    <option defaultValue></option>
                    <option value="1" key="1">
                      One Way Trip
                    </option>
                    <option value="2" key="2">
                      Two Way Trip
                    </option>
                  </select>
                  <br />
                  <label>Date of Travel</label>
                  <br />
                  <input
                    name="departDate"
                    onChange={handleInputChange}
                    type="text"
                    placeholder="Departure Date"
                  />
                  <br />
                  <label>Date of Return</label>
                  <br />
                  <input
                    name="returnDate"
                    onChange={handleInputChange}
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
                    name="pickupAddress1"
                    onChange={handleInputChange}
                    type="text"
                    placeholder="Address 1"
                  />
                  <br />
                  <label>Address Line 2</label>
                  <br />
                  <input
                    name="pickupAddress2"
                    onChange={handleInputChange}
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
                            name="pickupCity"
                            onChange={handleInputChange}
                            type="text"
                            placeholder="City"
                          />
                        </td>
                        <td>
                          <input
                            name="pickupState"
                            onChange={handleInputChange}
                            type="text"
                            placeholder="State"
                          />
                        </td>
                        <td>
                          <input
                            name="pickupZip"
                            onChange={handleInputChange}
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
                    name="destAddress1"
                    onChange={handleInputChange}
                    type="text"
                    placeholder="Address 1"
                  />
                  <br />
                  <label>Address Line 2</label>
                  <br />
                  <input
                    name="destAddress2"
                    onChange={handleInputChange}
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
                            name="destCity"
                            onChange={handleInputChange}
                            type="text"
                            placeholder="City"
                          />
                        </td>
                        <td>
                          <input
                            name="destState"
                            onChange={handleInputChange}
                            type="text"
                            placeholder="State"
                          />
                        </td>
                        <td>
                          <input
                            name="destZip"
                            onChange={handleInputChange}
                            type="text"
                            placeholder="Zip"
                          />
                        </td>
                        <td>
                          <input
                            name="otherInfo"
                            onChange={handleInputChange}
                            type="text"
                            placeholder="Zip"
                          />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <br />
                  <button
                    type="button"
                    id="createQuote"
                    onClick={(e) => handleFormSubmit(e)}
                  >
                    Submit
                  </button>
                </form>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default FreeQuoteForm;
