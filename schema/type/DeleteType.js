const graphql = require('graphql');
const {
 GraphQLObjectType,
 GraphQLString,
} = graphql;

const DeleteType = new GraphQLObjectType({
  name: 'Delete',
  fields: () => ({
    message: {
      type: GraphQLString
    },
  })
});

module.exports = DeleteType;