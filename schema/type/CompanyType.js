const graphql = require('graphql');
const axios = require('axios');
const {
 GraphQLObjectType,
 GraphQLNonNull,
 GraphQLID,
 GraphQLString,
 GraphQLList,
} = graphql;

const CompanyType = new GraphQLObjectType({
  name: 'Company',
  fields: () => ({
    id: {
      type: new GraphQLNonNull(GraphQLID)
    },
    name: {
      type: GraphQLString
    },
    description: {
      type: GraphQLString
    },
    users: {
      type: new GraphQLList(require('./UserType')),
      resolve: (parentValue, args) => {
        return axios.get(`http://localhost:3004/companies/${parentValue.id}/users`)
          .then(res => res.data);
      }
    }
  })
});

module.exports = CompanyType;