const graphql = require('graphql');
const CompanyQuery = require('./CompanyQuery');
const UserQuery = require('./UserQuery');

const {
 GraphQLObjectType,
} = graphql;

const queryFields = Object.assign(CompanyQuery, UserQuery);

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: queryFields
});

module.exports = RootQuery;