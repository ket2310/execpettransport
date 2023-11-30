import React, { useState } from "react";

import findDateOfLesson from "../utils/findDateOfLesson";
import { useMutation } from "@apollo/client";
import { useQuery } from "@apollo/client";
import {
  QUERY_HORSES,
  QUERY_RIDERS,
  QUERY_INSTRUCTORS,
  QUERY_LESSONS,
} from "../utils/queries";

function freeQuoteForm() {
  return (
    <div className="popup">
      <div className="popup-content">
        <h3>{props.riderLesson.rider.firstName}</h3>
        <span className="close-btn" onClick={() => props.setTrigger(false)}>
          Close
        </span>
        {props.children}
        <div>
          <div>
            <h1>
              <center>
                <strong>Request a FREE QUOTE - FILL OUT FORM BELOW</strong>
              </center>
            </h1>
            <table style="width: 100%; padding: 15,15,15,15;">
              <tr>
                <td style="width: 50%;">
                  <p>
                    EXEC PET TRANSPORTATION is a nonstop private luxury
                    transport service dedicated to providing the best pet travel
                    experience for your beloved pet and peace of mind for you
                  </p>
                  <p>
                    <strong>Fastest option. NONSTOP PRIVATE :</strong> It means
                    no other animals are in our cars while we move your pet
                    family nonstop across the United States. This express
                    service means we will reach our destination within hours,
                    not days. Your pet will ride in our climate controlled
                    luxury SUV or minivan with two skilled drivers that will
                    never leave their side. Each transport is equipped with cell
                    phones . Open air crates are provided (unless otherwise
                    specified) for your pets safety during travel. This is a
                    straight drive through service with no stops except for
                    convenience/fuel breaks every four hours for your pet.
                    Bottled water, approved treats, and clean bedding is
                    provided to ensure your pet's comfort and well-being. It is
                    our goal to provide the best possible care, comfort and as
                    little stress as possible for your pet until you are both
                    reunited. The driving team will send you updates via text
                    messaging and pictures as they travel to keep you updated as
                    to the progress of the trip so you can plan your day.
                    Private pet travel also ensures that your pet is at no risk
                    of contracting transmittable illnesses, kennel cough, H3N8,
                    etc.
                  </p>

                  <p>
                    <strong>ONE-STOP Option SELECT SEMI-PRIVATE:</strong> Direct
                    drive through, 2-man driving team, sharing with one other
                    clients’ pet. This option could add some time to the trip
                    however we keep it streamlined. Pictures and updates at
                    every fuel stop.
                  </p>
                  <p>
                    <strong>ECONOMY- Transport:</strong> 1 man team, will stop
                    daily, could take a few days to reach the destination. Vet
                    certificates will be required within 10 days of pickup.
                    Complete flexible pick up and drop off dates and times will
                    be required by clients. These trips are discounted for this
                    reason.
                  </p>
                  <p>
                    <strong>FREE TRIP COORDINATOR:</strong> 13 years experience
                    in the pet travel business and 40 years experience with
                    animals, Sunny will help coordinate your pet move, make
                    suggestions regarding booking flights, mover, kennels etc.
                    We all work together for the comfort and success of your
                    pets trip.
                  </p>
                  <p>
                    For a <strong>FREE QUOTE</strong> fill out and submit the
                    form below to describe your project or specific needs. You
                    will receive a confirmation after submitting the form. Feel
                    Free to call our office direct to speak with a pet
                    transportation specialists. 678-975-2518 or e-mail us direct
                    at info@execpettransportation.com.
                  </p>
                </td>
                <p>
                  <strong>
                    Please fill out all fields in order to provide an accurate
                    quote
                  </strong>
                </p>
                <br></br>
                <p>
                  <strong>Request A Quote</strong>
                </p>
                <hr />
                <h3>Your Contact Information</h3>
                <form className="lessonForm" onSubmit={handleFormSubmit}>
                  <div>
                    <label> Your Name:</label>&nbsp;
                    <input type="text" placeholder="Your Name" />
                    <br />
                    <label>E-mail:</label>&nbsp;
                    <input type="text" placeholder="E-mail" />
                    <br />
                    <label> Phone Number:</label>&nbsp;
                    <input type="text" placeholder="Phone Number" />
                    <br />
                    <label>Cell Phone:</label>&nbsp;
                    <input type="text" placeholder="Cell Phone" />
                    <br />
                    <h3>
                      <strong>Pet Information</strong>
                    </h3>
                    <p>Please fill out all applicable fields</p>
                    <label> Number of Cats:</label>&nbsp;
                    <input type="text" placeholder="Number of Cats" />
                    <br />
                    <label> Breed:</label>&nbsp;
                    <input type="text" placeholder="Breed" />
                    <br />
                    <label> Age:</label>&nbsp;
                    <input type="text" placeholder="Age" />
                    <br />
                    <label> Weight:</label>&nbsp;
                    <input type="text" placeholder="Weight" />
                    <br />
                    <br />
                    <label> Number of Dogs:</label>&nbsp;
                    <input type="text" placeholder="Number of Dogs" />
                    <br />
                    <label> Breed:</label>&nbsp;
                    <input type="text" placeholder="Breed" />
                    <br />
                    <label> Age:</label>&nbsp;
                    <input type="text" placeholder="Age" />
                    <br />
                    <label> Weight:</label>&nbsp;
                    <input type="text" placeholder="Weight" />
                    <br />
                    <label>
                      Any special instructions/medical information we need to
                      know about your pet(s)?
                    </label>
                    <br />
                    <textarea
                      rows="4"
                      cols="50"
                      placeholder="Instructions"
                    ></textarea>
                    <b />
                  </div>
                </form>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default freeQuoteForm;
