const graphql = require('graphql');
const axios = require('axios');
const {
  GraphQLString,
  GraphQLList
} = graphql;
const CompanyType = require('../type/CompanyType');

module.exports = {
  company: {
    type: CompanyType,
    args: {
      id: {
        type: GraphQLString,
      }
    },
    resolve(parentValue, args) {
      return axios.get(`http://localhost:3004/companies/${args.id}`)
        .then(res => res.data);
    }
  },
  companyList: {
    type: new GraphQLList(CompanyType),
    resolve(parentValue, args) {
      return axios.get(`http://localhost:3004/companies`)
        .then(res => res.data);
    }
  }
}
