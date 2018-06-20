const graphql = require('graphql');
const CompanyType = require('./CompanyType');
const axios = require('axios');
const {
 GraphQLObjectType,
 GraphQLNonNull,
 GraphQLID,
 GraphQLString,
 GraphQLInt,
} = graphql;

const UserType = new GraphQLObjectType({
  name: 'User',
  fields: () => ({
    id: {
      type: new GraphQLNonNull(GraphQLID),
    },
    firstName: {
      type: GraphQLString,
    },
    age: {
      type: GraphQLInt,
    },
    company: {
      type: CompanyType,
      resolve: (parentValue, args) => {
        return axios.get(`http://localhost:3004/companies/${parentValue.companyId}`)
          .then(res => res.data);
      }
    }
  })
});

module.exports = UserType;