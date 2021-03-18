const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const schema = require("./schema/schema");
const PORT = process.env.PORT || 5000;

const app = express();

// This route will be used as an endpoint to interact with Graphql.
// All queries will go through this route.
app.use("/graphql", graphqlHTTP({
  // Directing express-graphql to use this schema to map out the graph 
  schema,
  // Directing express-graphql to use graphiql when goto "/graphql" address in
  // the browser, which provides an interface to make GraphQl queries.
  graphiql: true
}));

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
