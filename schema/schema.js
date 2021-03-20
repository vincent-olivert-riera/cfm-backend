const graphql = require("graphql");
const Player = require("../models/player");

const {
  GraphQLObjectType, GraphQLString, GraphQLID, GraphQLInt, GraphQLSchema,
  GraphQLList, GraphQLNonNull, GraphQLInputObjectType, GraphQLEnumType
} = graphql;

// Schema defines data on the Graph like object types (player type), relation
// between these object types and describes how it can reach into the graph to
// interact with the data to retrieve or mutate the data.

const PositionEnumType = new GraphQLEnumType({
  name: "PositionEnum",
  values: {
    DEFENDER: {
      value: "defender",
    },
    ATTACKER: {
      value: "attacker",
    },
    VERSATILE: {
      value: "versatile",
    },
  },
});

const AvailabilityType = new GraphQLObjectType({
  name: "Availability",
  fields: () => ({
    monday: { type: new GraphQLList(GraphQLString) },
    tuesday: { type: new GraphQLList(GraphQLString) },
    wednesday: { type: new GraphQLList(GraphQLString) },
    thursday: { type: new GraphQLList(GraphQLString) },
    friday: { type: new GraphQLList(GraphQLString) },
    saturday: { type: new GraphQLList(GraphQLString) },
    sunday: { type: new GraphQLList(GraphQLString) },
  })
});

const AvailabilityInputType = new GraphQLInputObjectType({
  name: "AvailabilityInput",
  fields: () => ({
    monday: { type: new GraphQLList(GraphQLString) },
    tuesday: { type: new GraphQLList(GraphQLString) },
    wednesday: { type: new GraphQLList(GraphQLString) },
    thursday: { type: new GraphQLList(GraphQLString) },
    friday: { type: new GraphQLList(GraphQLString) },
    saturday: { type: new GraphQLList(GraphQLString) },
    sunday: { type: new GraphQLList(GraphQLString) },
  })
});

const PlayerType = new GraphQLObjectType({
  name: "Player",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    position: { type: PositionEnumType },
    level: { type: GraphQLInt },
    availability: { type: AvailabilityType },
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
        return Player.findById(args.id);
      },
    },
    players:{
      type: new GraphQLList(PlayerType),
      resolve(parent, args) {
        return Player.find({});
      },
    },
  },
});
 
//Very similar to RootQuery helps user to add/update to the database.
const Mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    addPlayer: {
      type: PlayerType,
      args: {
        //GraphQLNonNull make these field required
        name: { type: new GraphQLNonNull(GraphQLString) },
        position: { type: new GraphQLNonNull(PositionEnumType) },
        level: { type: new GraphQLNonNull(GraphQLInt) },
        availability: { type: AvailabilityInputType },
      },
      resolve(parent, args) {
        const fieldsToAdd = {
          name: args.name,
          position: args.position,
          level: args.level,
        };
        if (args.availability) {
          fieldsToAdd.availability = args.availability;
        }
        const player = new Player(fieldsToAdd);
        return player.save();
      },
    },
    updatePlayer: {
      type: PlayerType,
      args: {
        //GraphQLNonNull make these field required
        id: { type: new GraphQLNonNull(GraphQLID) },
        name: { type: GraphQLString },
        position: { type: PositionEnumType },
        level: { type: GraphQLInt },
        availability: { type: AvailabilityInputType },
      },
      resolve(parent, args) {
        const fieldsToUpdate = {};
        if (args.name) {
          fieldsToUpdate.name = args.name;
        }
        if (args.position) {
          fieldsToUpdate.position = args.position;
        }
        if (args.level) {
          fieldsToUpdate.level = args.level;
        }
        if (args.availability) {
          fieldsToUpdate.availability = args.availability;
        }
        const updatedPlayer = Player.findByIdAndUpdate(
          args.id,
          fieldsToUpdate,
          { new: true }
        );
        if (!updatedPlayer) {
          throw new Error("Error");
        }
        return updatedPlayer;
      },
    },
    deletePlayer: {
      type: PlayerType,
      args: {
        //GraphQLNonNull make these field required
        id: { type: new GraphQLNonNull(GraphQLID) },
      },
      resolve(parent, args) {
        const deletedPlayer = Player.findByIdAndRemove(args.id);
        if (!deletedPlayer) {
          throw new Error("Error");
        }
        return deletedPlayer;
      },
    },
  },
});

// Creating a new GraphQL Schema, with options query which defines query we will
// allow users to use when they are making request.
module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation,
});
