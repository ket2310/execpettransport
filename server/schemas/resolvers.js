const { PetOwner, Cat, Dog, Travel, Quote } = require("../models");

const { AuthenticationError } = require("apollo-server-express");
//const { signToken } = require("../utils/auth");
const { ObjectId } = require("mongodb");
const { emit } = require("../models/Cat");

const resolvers = {
  Query: {
    // users: async () => {
    //   return User.find({});
    // },

    // user: async (parent, { userId }) => {
    //   return User.findOne({ _id: userId });
    // },

    // me: async (parent, args, context) => {
    //   if (context.user) {
    //     return User.findOne({ _id: context.user._id });
    //   }
    //   throw new AuthenticationError("You need to be logged in!");
    // },
    ///////////////////////////////////////////////////////////////

    cat: async (parent, { catId }) => {
      return Cat.findOne(ObjectId(catId));
    },

    cats: async () => {
      return Cat.find({});
    },

    dog: async (parent, { dogId }) => {
      return Dog.findOne(ObjectId(dogId));
    },

    dogs: async () => {
      return Dog.find({});
    },

    petowner: async (parent, { petownerId }) => {
      return PetOwner.findOne(ObjectId(petownerId))
        .populate("Cat")
        .populate("Dog");
    },

    petowners: async () => {
      return PetOwner.find({});
    },

    travel: async (parent, { travelId }) => {
      return Travel.findOne(ObjectId(travelId));
    },

    travels: async () => {
      return Travel.find({});
    },

    quote: async (parent, { quoteId }) => {
      return Quote.findOne(ObjectId(quoteId));
    },

    quotes: async () => {
      console.log("HELP MEEEEEEEEEEEEEEEEEEEEEEEEEEE");
      //  console.log(Quote);
      // const q = Quote.find({}).populate("petowner");

      // //console.log(q);
      // return Quote.find({}).populate("petowner");
    },
  },

  Mutation: {
    // createUser: async (parent, { username, email, password }) => {
    //   const user = await User.create({ username, email, password });
    //   const token = signToken(user);

    //   return { token, user };
    // },

    createCat: async (parent, { breed, quantity, age, weight }) => {
      const cat = await Cat.create({ breed, quantity, age, weight });
      return { cat };
    },

    createDog: async (parent, { breed, quantity, age, weight }) => {
      const dog = await Dog.create({ breed, quantity, age, weight });
      return { dog };
    },

    createQuote: async (parent, { petowner, travel }) => {
      console.log("sanity check");

      /////////////////////////////////////////////////////////////////
      // Create a new quote
      const quote = new Quote();

      const cat = new Cat({
        catbreed: petowner.cat.catbreed,
        catquantity: petowner.cat.catquantity,
        catage: petowner.cat.catage,
        catweight: petowner.cat.catweight,
      });

      const dog = new Dog({
        dogbreed: petowner.dog.dogbreed,
        dogquantity: petowner.dog.dogquantity,
        dogage: petowner.dog.dogage,
        dogweight: petowner.dog.dogweight,
      });

      // Create a new petowner for the quote
      const owner = new PetOwner({
        firstname: petowner.firstname,
        lastname: petowner.lastname,
        email: petowner.email,
        phonenumber: petowner.phonenumber,
        cellnumber: petowner.cellnumber,
        instructions: petowner.instructions,
      });

      const trip = new Travel({
        traveltype: travel.traveltype,
        traveldate: travel.traveldate,
        returndate: travel.returndate,
        pickupaddress: travel.pickupaddress,
        pickupaddress2: travel.pickupaddress2,
        pickupcity: travel.pickupcity,
        pickupstate: travel.pickupstate,
        pickupzip: travel.pickupzip,
        destinationaddress2: travel.destinationaddress,
        destinationaddress: travel.destinationaddress2,
        destinationcity: travel.destinationcity,
        destinationstate: travel.destinationstate,
        destinationzip: travel.destinationzip,
        otherinfo: travel.otherinfo,
      });

      // Set the petowner's cat and dog
      owner.cat = cat;
      owner.dog = dog;

      // Set the quote's petowner
      quote.petowner = owner;

      // Set the quote's trip
      quote.travel = trip;

      // save everything
      await trip.save();
      await dog.save();
      await cat.save();
      await owner.save();
      await quote.save();

      console.log(quote);
    },
  },
};
module.exports = resolvers;
