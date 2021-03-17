const User = require("../models/User");

const resolvers = {
  Query: {
    // User
    getUser: () => {
      console.log("Obteniendo usuarios");
      return null;
    },
  },
  Mutation: {
    // User
    register: async (_, { input }) => {
      const newUser = input;
      newUser.email = newUser.email.toLowerCase();
      newUser.username = newUser.username.toLowerCase();

      const { email, username, password } = newUser;

      const foundEmail = await User.findOne({ email });
      if (foundEmail) throw new Error("El email ya esta en uso");

      const foundUsername = await User.findOne({ username });
      if (foundUsername) throw new Error("El username ya esta en uso");

      try {
        const user = new User(newUser);
        user.save();
        return user;
      } catch (error) {
        throw new Error(error);
      }

      return null;
    },
  },
};

module.exports = resolvers;
