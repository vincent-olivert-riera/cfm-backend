const graphql = require("graphql");

const {
  GraphQLObjectType, GraphQLString, GraphQLID, GraphQLInt, GraphQLSchema
} = graphql;

// Schema defines data on the Graph like object types (player type), relation
// between these object types and describes how it can reach into the graph to
// interact with the data to retrieve or mutate the data.

var fakePlayersDatabase = [
  { name: "Alex", level: 5, id: 1 },
  { name: "Guisado", level: 4, id: 2 },
  { name: "Ferran", level: 3, id: 3 },
  { name: "Carles", level: 4, id: 4 },
  { name: "Sala", level: 3, id: 5 },
  { name: "Vicent", level: 2, id: 6 },
];

const PlayerType = new GraphQLObjectType({
  name: "Player",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    level: { type: GraphQLInt },
  })
});

// RootQuery describes how users can use the graph and grab data.
// E.g Root query to get all players, get a particular player, etc.
const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    player: {
      type: PlayerType,
      // Arguments passed by the user while making the query
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        // Here we define how to get data from database source.
        // This will return the player with id passed in argument by the user.
        return fakePlayersDatabase.find(item => item.id === Number(args.id));
      },
    },
  },
});
 
// Creating a new GraphQL Schema, with options query which defines query we will
// allow users to use when they are making request.
module.exports = new GraphQLSchema({
  query: RootQuery,
});
