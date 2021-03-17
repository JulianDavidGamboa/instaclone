const resolvers = {
  Query: {
    // User
    getUser: () => {
      console.log("Obteniendo usuarios");
      return null;
    },
  },
};

module.exports = resolvers;
