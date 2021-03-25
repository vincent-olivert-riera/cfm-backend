const graphql = require("graphql");
const graphqlIsoDate = require("graphql-iso-date");
const Player = require("../models/player");
const TrainingWeek = require("../models/training-week");

const {
  GraphQLObjectType, GraphQLString, GraphQLID, GraphQLInt, GraphQLSchema,
  GraphQLList, GraphQLNonNull, GraphQLInputObjectType, GraphQLEnumType
} = graphql;

const { GraphQLDate } = graphqlIsoDate;

// Schemas for players

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

// Schemas for training weeks

const TrainingWeekPlayersType = new GraphQLObjectType({
  name: "TrainingWeekPlayers",
  fields: () => ({
    defender_1: {
      type: PlayerType,
      resolve(parent, args) {
        return Player.findById(parent.defender_1);
      },
    },
    defender_2: {
      type: PlayerType,
      resolve(parent, args) {
        return Player.findById(parent.defender_2);
      },
    },
    attacker_1: {
      type: PlayerType,
      resolve(parent, args) {
        return Player.findById(parent.attacker_1);
      },
    },
    attacker_2: {
      type: PlayerType,
      resolve(parent, args) {
        return Player.findById(parent.attacker_2);
      },
    },
  }),
});

const TrainingWeekPlayersInputType = new GraphQLInputObjectType({
  name: "TrainingWeekPlayersInput",
  fields: () => ({
    defender_1: { type: GraphQLID },
    defender_2: { type: GraphQLID },
    attacker_1: { type: GraphQLID },
    attacker_2: { type: GraphQLID },
  }),
});

const TrainingWeekHoursType = new GraphQLObjectType({
  name: "TrainingWeekHours",
  fields: () => ({
    _1800: { type: TrainingWeekPlayersType },
    _1830: { type: TrainingWeekPlayersType },
    _1900: { type: TrainingWeekPlayersType },
    _1930: { type: TrainingWeekPlayersType },
    _2000: { type: TrainingWeekPlayersType },
    _2030: { type: TrainingWeekPlayersType },
    _2100: { type: TrainingWeekPlayersType },
  }),
});

const TrainingWeekHoursInputType = new GraphQLInputObjectType({
  name: "TrainingWeekHoursInput",
  fields: () => ({
    _1800: { type: TrainingWeekPlayersInputType },
    _1830: { type: TrainingWeekPlayersInputType },
    _1900: { type: TrainingWeekPlayersInputType },
    _1930: { type: TrainingWeekPlayersInputType },
    _2000: { type: TrainingWeekPlayersInputType },
    _2030: { type: TrainingWeekPlayersInputType },
    _2100: { type: TrainingWeekPlayersInputType },
  }),
});

const TrainingWeekType = new GraphQLObjectType({
  name: "TrainingWeek",
  fields: () => ({
    id: { type: GraphQLID },
    date: { type: GraphQLDate },
    monday: { type: TrainingWeekHoursType },
    tuesday: { type: TrainingWeekHoursType },
    wednesday: { type: TrainingWeekHoursType },
    thursday: { type: TrainingWeekHoursType },
    friday: { type: TrainingWeekHoursType },
    saturday: { type: TrainingWeekHoursType },
    sunday: { type: TrainingWeekHoursType },
  }),
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
    trainingWeek: {
      type: TrainingWeekType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return TrainingWeek.findById(args.id);
      },
    },
    trainingWeeks:{
      type: new GraphQLList(TrainingWeekType),
      resolve(parent, args) {
        return TrainingWeek.find({});
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
    addTrainingWeek: {
      type: TrainingWeekType,
      args: {
        date: { type: new GraphQLNonNull(GraphQLDate) },
        monday: { type: TrainingWeekHoursInputType },
        tuesday: { type: TrainingWeekHoursInputType },
        wednesday: { type: TrainingWeekHoursInputType },
        thursday: { type: TrainingWeekHoursInputType },
        friday: { type: TrainingWeekHoursInputType },
        saturday: { type: TrainingWeekHoursInputType },
        sunday: { type: TrainingWeekHoursInputType },
      },
      resolve(parent, args) {
        const trainingWeek = new TrainingWeek(args);
        return trainingWeek.save();
      },
    },
    updateTrainingWeek: {
      type: TrainingWeekType,
      args: {
        id: { type: new GraphQLNonNull(GraphQLID) },
        monday: { type: TrainingWeekHoursInputType },
        tuesday: { type: TrainingWeekHoursInputType },
        wednesday: { type: TrainingWeekHoursInputType },
        thursday: { type: TrainingWeekHoursInputType },
        friday: { type: TrainingWeekHoursInputType },
        saturday: { type: TrainingWeekHoursInputType },
        sunday: { type: TrainingWeekHoursInputType },
      },
      resolve(parent, args) {
        const fieldsToUpdate = {};
        if (args.monday) {
          fieldsToUpdate.monday = args.monday;
        }
        if (args.tuesday) {
          fieldsToUpdate.tuesday = args.tuesday;
        }
        if (args.wednesday) {
          fieldsToUpdate.wednesday = args.wednesday;
        }
        if (args.thursday) {
          fieldsToUpdate.thursday = args.thursday;
        }
        if (args.friday) {
          fieldsToUpdate.friday = args.friday;
        }
        if (args.saturday) {
          fieldsToUpdate.saturday = args.saturday;
        }
        if (args.sunday) {
          fieldsToUpdate.sunday = args.sunday;
        }
        const updatedTrainingWeek = TrainingWeek.findByIdAndUpdate(
          args.id,
          fieldsToUpdate,
          { new: true }
        );
        if (!updatedTrainingWeek) {
          throw new Error("Error");
        }
        return updatedTrainingWeek;
      },
    },
    deleteTrainingWeek: {
      type: TrainingWeekType,
      args: {
        id: { type: new GraphQLNonNull(GraphQLID) },
      },
      resolve(parent, args) {
        const deletedTrainingWeek = TrainingWeek.findByIdAndRemove(args.id);
        if (!deletedTrainingWeek) {
          throw new Error("Error");
        }
        return deletedTrainingWeek;
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
