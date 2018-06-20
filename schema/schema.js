const graphql = require('graphql');
const RootQuery = require('./query/rootQuery');
const RootMutation = require('./mutation/rootMutation');

const {
 GraphQLSchema,
} = graphql;

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: RootMutation
});