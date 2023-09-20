const { PetOwner, Cat, Dog, Travel } = require("../models");

const { AuthenticationError } = require("apollo-server-express");
//const { signToken } = require("../utils/auth");
const { ObjectId } = require("mongodb");

const resolvers = {
  Query: {
    users: async () => {
      return User.find({});
    },

    user: async (parent, { userId }) => {
      return User.findOne({ _id: userId });
    },

    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id });
      }
      throw new AuthenticationError("You need to be logged in!");
    },
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
      return PetOwner.findOne(ObjectId(petownerId));
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
  },

  Mutation: {
    createUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);

      return { token, user };
    },

    createCat: async (parent, { breed, quantity, age, weight }) => {
      const cat = await Cat.create({ breed, quantity, age, weight });
      return { cat };
    },

    createDog: async (parent, { breed, quantity, age, weight }) => {
      const dog = await Dog.create({ breed, quantity, age, weight });
      return { dog };
    },
  },
};
