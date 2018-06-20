const graphql = require('graphql');
const axios = require('axios');
const {
  GraphQLString
} = graphql;
const UserType = require('../type/UserType');

module.exports = {
  user: {
    type: UserType,
    args: {
      id: {
        type: GraphQLString,
      }
    },
    resolve(parentValue, args) {
      return axios.get(`http://localhost:3004/users/${args.id}`)
        .then(res => res.data);
    }
  },
}
