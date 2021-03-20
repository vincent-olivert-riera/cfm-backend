const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const schema = require("./schema/schema");
const PORT = process.env.PORT || 5000;
const mongoose = require("mongoose");
const uri = process.env.MONGODB_URI;
const cors = require("cors");

mongoose.connect(uri);
mongoose.connection.once("open", () => {
  console.log("Conneted to database");
});

const app = express();

// Origin config object
origin_conf = {
  // Origin undefined handler
  originUndefined: function (req, res, next) {
    if (!req.headers.origin) {
      res.status(403).render();
    } else {
      next();
    }
  },
  // Cross Origin Resource Sharing Options
  cors: {
    // Origin handler
    origin: function (origin, cb) {
      // setup a white list
      const wl = (process.env.ALLOWED_ORIGINS || "").split(",");

      if (wl.includes(origin)) {
        cb(null, true);
      } else {
        cb(new Error(`Invalid origin: ${origin}`), false);
      }
    },
    optionsSuccessStatus: 200,
  },
};

app.use(origin_conf.originUndefined, cors(origin_conf.cors));

// This route will be used as an endpoint to interact with Graphql.
// All queries will go through this route.
app.use("/graphql", graphqlHTTP({
  // Directing express-graphql to use this schema to map out the graph 
  schema,
  graphiql: false,
}));

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
