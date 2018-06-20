const graphql = require('graphql');
const axios = require('axios');
const UserType = require('../type/UserType');
const DeleteType = require('../type/DeleteType');

const {
 GraphQLObjectType,
 GraphQLString,
 GraphQLInt,
 GraphQLNonNull
} = graphql;

const RootMutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: () => ({
    addUser: {
      type: UserType,
      args: {
        firstName: {
          type: new GraphQLNonNull(GraphQLString)
        },
        age: {
          type: new GraphQLNonNull(GraphQLInt)
        },
        companyId: {
          type: GraphQLString
        }
      },
      resolve: (parentValue, { firstName, age }) => {
        const data = {
          firstName,
          age
        };
        return axios.post('http://localhost:3004/users', data)
          .then(res => res.data);
      }
    },
    deleteUser: {
      type: DeleteType,
      args: {
        id: {
          type: new GraphQLNonNull(GraphQLString)
        }
      },
      resolve: (parentValue, { id }) => {
        return axios.get(`http://localhost:3004/users/${id}`)
          .then(res => {
            return res.data
          });
      }
    }
  })
});

module.exports = RootMutation;